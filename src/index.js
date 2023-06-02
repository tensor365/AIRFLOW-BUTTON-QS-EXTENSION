import { useElement, useLayout, useEffect } from '@nebula.js/stardust';
import properties from './object-properties';
import data from './data';
import ext from './ext';
import './style.css';

/**
 * Entrypoint for your sense visualization
 * @param {object} galaxy Contains global settings from the environment.
 * Useful for cases when stardust hooks are unavailable (ie: outside the component function)
 * @param {object} galaxy.anything Extra environment dependent options
 * @param {object=} galaxy.anything.sense Optional object only present within Sense,
 * see: https://qlik.dev/libraries-and-tools/nebulajs/in-qlik-sense
 */

export default function supernova(galaxy) {
  return {
    qae: {
      properties,
      data,
    },
    ext: ext(galaxy),
    component() {

      const element = useElement();
      const layout = useLayout();

      //URL to the Dags
      const URI =  `${layout.props.URI.replace(/^\/|\/$/gm,'')}/api/v1/dags/${layout.props.dagName}/dagRuns`
      
      useEffect(() => {

          //Function to display message box
          const displayMessageBox =  (windowId,title,detail,ok,cancel,inverse=false) => {

            var node = document.createElement("div");
            node.id = "msgparent_" + windowId;
            var html =
            '  <div class="lui-modal-background"></div>' +
            '  <div class="lui-center-dialog lui-dialog' + (inverse ? '  lui-dialog--inverse' : '') + '" style="position: absolute; width: 30%;top:50%; left:20%;">' +
            '    <div class="lui-dialog__header">' +
            '      <div class="lui-dialog__title">' + title + '</div>' +
            '    </div>' +
            '    <div class="lui-dialog__body">' +
            detail +
            '    </div>' +
            '    <div class="lui-dialog__footer">';
  
            if (cancel) {
                html +=
                    '  <button class="lui-button  lui-dialog__button' + (inverse ? '  lui-button--inverse' : '') + '" ' +
                    '   onclick="var elem=document.getElementById(\'msgparent_' + windowId + '\');elem.parentNode.removeChild(elem);">' +
                    cancel +
                    ' </button>'
            }
            if (ok) {
                html +=
                    '  <button class="lui-button  lui-dialog__button  ' + (inverse ? '  lui-button--inverse' : '') + '" id="msgok_' + windowId + '">' +
                    ok +
                    ' </button>'
            };
            html +=
                '     </div>' +
                '  </div>';
            
            node.innerHTML = html;
            document.getElementById("qs-page-container").append(node);

          }
        
          //Function that will trigger airflow run
          const triggerRun = async () => {
            const response = await fetch(URI, {
              method: 'POST',
              body: layout.props.body, // string or object
              headers: {
                'Content-Type': 'application/json',
                'Authorization':`Basic ${layout.props.token}`,
              }
            });
            const jsonAnswer = await response.json(); 
            return jsonAnswer;
          }
          
          //Function that will check airflow run status
          const checkRun = async () => {
            const response = await fetch(URI, {
              method: 'GET',
              headers: {
                'Authorization':`Basic ${layout.props.token}`,
              }
            });
            const jsonAnswer = await response.json();
            return jsonAnswer
          }

          const triggerButton =  () => {
            
            try
            {
              displayMessageBox('loadingTab',`${layout.props.messageBoxTitleLoading}`,`${layout.props.messageBoxDetailLoading}`,null,null,false)
              
              var stat = triggerRun();
              stat.then(res => {
                console.log(res);
                  }).catch(error => {
                    document.getElementById('msgparent_loadingTab').remove();
                    displayMessageBox('errorTab',`Airflow Server cannot be reach.`,`Airflow Server cannot be reach. Please check Airflow Configuration Settings.`,null,'Ok',false);
                })
              
                function getLastStatus()  {
    
                    var retour = checkRun();

                    retour.then(resStatus => {
                      lastStatus = resStatus['dag_runs'].slice(-1)[0]['state']; 
                      console.log(lastStatus);
                    
                      if( lastStatus == 'success')
                      {
                        document.getElementById('msgparent_loadingTab').remove()
                        displayMessageBox('successTab',`${layout.props.messageBoxTitleSuccess}`,`${layout.props.messageBoxDetailSuccess}`,null,'Ok',false);
                      }
                      if( lastStatus == 'failed')
                      {
                        throw new Error('Airflow Job has been failed');
                      }
                      setTimeout (getLastStatus , 15000);
                    }
                    );
                  };

              var lastStatus='';
              setTimeout (getLastStatus , 15000);
            }
            catch
            {
              document.getElementById('msgparent_loadingTab').remove();
              displayMessageBox('errorTab',`${layout.props.messageBoxTitleError}`,`${layout.props.messageBoxDetailError}`,null,'Ok',false);
            }

          }

          element.addEventListener("click",triggerButton);
          element.style.borderColor = layout.props.borderColor.color;
          element.style.backgroundColor = layout.props.backgroundColor.color;
          
          return () => {
            element.removeEventListener("click", triggerButton);
          };

      }, [element, layout]);

      element.innerHTML = `<button class="lui-button lui-button-airflow ${layout.props.buttonStyle}"> <span class="${layout.props.iconStyle}"></span> ${layout.props.buttonLabel}</button>`;

    },
  };
}
