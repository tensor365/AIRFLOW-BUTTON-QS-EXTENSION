export default function ext(/* galaxy */) {
  return {
    definition: {
      type: 'items',
      component: 'accordion',
      items: {
        extension_section:{
          label: 'Airflow Settings',
          type: 'items',
          component: 'expandable-items',
          items: [
            {
              component: 'items',
              label: 'Airflow Configuration',
              items: {
    
                    buttonLabel: {
                      ref: 'props.buttonLabel',
                      label: 'Label',
                      type: 'string',
                      expression: 'optional'
                    }, 
    
                    URI: {
                      ref: 'props.URI',
                      label: 'URI',
                      type: 'string',
                      expression: 'optional'
                    }, 
    
                    dag: {
                      ref: 'props.dagName',
                      label: 'Dag Name',
                      type: 'string',
                      expression: 'optional'
                    }, 
    
                    token: {
                      ref: 'props.token',
                      label: 'Token',
                      type: 'string',
                      expression: 'optional'
                    }, 
    
                    body: {
                      ref: 'props.body',
                      label: 'Body',
                      type: 'string',
                      expression: 'optional'
                    }, 
              }
            },
            {
              component: 'items',
              label: 'Airflow Prompts Options',
              items:{
                
              messageBoxTitleLoading: {
                ref: 'props.messageBoxTitleLoading',
                label: 'Loading Message Box Title',
                type: 'string',
                expression: 'optional'
              }, 
    
              messageBoxDetailLoading: {
                ref: 'props.messageBoxDetailLoading',
                label: 'LoadingMessage Box Detail',
                type: 'string',
                expression: 'optional'
              }, 
    
              messageBoxTitleSuccess: {
                ref: 'props.messageBoxTitleSuccess',
                label: 'On Success Message Box Title',
                type: 'string',
                expression: 'optional'
              }, 
    
              messageBoxDetailSuccess: {
                ref: 'props.messageBoxDetailSucess',
                label: 'On Success Message Box Detail',
                type: 'string',
                expression: 'optional'
              }, 
    
              messageBoxTitleError: {
                ref: 'props.messageBoxTitleError',
                label: 'On Error Message Box Title',
                type: 'string',
                expression: 'optional'
              }, 
    
              messageBoxDetailError: {
                ref: 'props.messageBoxDetailError',
                label: 'On Error Message Box Detail',
                type: 'string',
                expression: 'optional'
              }, 
              }
            },
          ]
        },
        settings: {
          uses: "settings",
          items: {
            AirflowAppearance: {
              component: 'items',
              label: 'Appearance',
              items:{ 
                
              buttonStyle: {
                type: "string",
                component: "dropdown",
                label: "Button Style",
                ref: "props.buttonStyle",
                options: [{
                  value: "",
                  label: "Default"
                }, {
                  value: "lui-button--gradient",
                  label: "Toolbar"
                }, {
                  value: "lui-button--info",
                  label: "Info"
                }, 
                {
                  value: "lui-button--danger",
                  label: "Danger"
                },
                {
                  value: "lui-button--warning",
                  label: "Warning"
                },
                {
                  value: "lui-button--success",
                  label: "Success"
                },
              ],
                defaultValue: "Default"
              },
    
              iconStyle: {
                type: "string",
                component: "dropdown",
                label: "Icon",
                ref: "props.iconStyle",
                options: [{
                  value: "",
                  label: "None"
                }, {
                  value: "lui-icon lui-icon--info",
                  label: "Info"
                }, 
                {
                  value: "lui-icon lui-icon--menu",
                  label: "Menu"
                }, 
                {
                  value: "lui-icon lui-icon--list",
                  label: "List"
                },
                {
                  value: "lui-icon lui-icon--cogwheel",
                  label: "Cogwheel"
                },
                {
                  value: "lui-icon lui-icon--shapes",
                  label: "Shapes"
                },
                {
                  value: "lui-icon lui-icon--grid",
                  label: "Grid"
                },
                {
                  value: "lui-icon lui-icon--warning",
                  label: "Warning"
                },
                {
                  value: "lui-icon lui-icon--sync",
                  label: "Sync"
                },
                {
                  value: "lui-icon lui-icon--bell",
                  label: "Bell"
                },
                {
                  value: "lui-icon lui-icon--draggable",
                  label: "Draggable"
                },
              ],
                defaultValue: "Default"
              },

              colorButton: {
                label:"Background color",
                component: "color-picker",
                ref: "props.backgroundColor",
                type: "object",
                defaultValue: {
                  color: "ff5866",
                  index: "-1"
                }
              },

              borderWidthSlider: {
                type: "number",
                component: "slider",
                label: "Border Width (in %)",
                ref: "props.borderWidth",
                min: 0,
                max: 100,
                step: 1,
                defaultValue: 1
              },

              colorBorderButton: {
                label:"Border color",
                component: "color-picker",
                ref: "props.borderColor",
                type: "object",
                defaultValue: {
                  color: "ff5866",
                  index: "-1"
                }
              },

            },
            },
          }
        },
          },
        }
  };
}
