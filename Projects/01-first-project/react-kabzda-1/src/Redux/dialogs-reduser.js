const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';

 const dialogsReducer = (state, action) => {
    
    switch (action.type) {
        case ADD_MESSAGE:
                let dialogs = {
                    id: 6,
                    name: 'Dimon'
                  }
              
                  let newMessage = {
                    id: 109,
                    message: state.newMessage
                  }
                  state.dialogs.push(dialogs);
                  state.messages.push(newMessage);
                  state.newMessage = '';
                  return state;
        case UPDATE_NEW_MESSAGE_TEXT:
                state.newMessage = action.newMessage
                return state;
         
        default:
                 return state;

           }
        }

        export const addMessageActionCreator = () => {
            return {
              type: 'ADD-MESSAGE',
            
          }
          };
          
          export const UpdateNewMessageText = (text) => {
            return {
              type: 'UPDATE-NEW-MESSAGE-TEXT',
              newMessage:text
            }
          };

export default dialogsReducer
