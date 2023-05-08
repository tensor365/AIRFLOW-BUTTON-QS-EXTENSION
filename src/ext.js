export default function ext(/* galaxy */) {
  return {
    definition: {
      type: 'items',
      component: 'accordion',
      items: {
        general: {
          component: 'items',
          label: 'Général',
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

                messageBoxTitle: {
                  ref: 'props.messageBoxTitle',
                  label: 'Message Box Title',
                  type: 'string',
                  expression: 'optional'
                }, 

                messageBoxDetail: {
                  ref: 'props.messageBoxDetail',
                  label: 'Message Box Detail',
                  type: 'string',
                  expression: 'optional'
                }, 

          }
        },
        settings: {
          uses: "settings"
        }
      }
    },
    support: {
      snapshot: false,
      export: true,
      sharing: false,
      exportData: true,
      viewData: true,
    },
  };
}
