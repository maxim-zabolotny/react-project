import React from "react";
import Dialogs from './Dialogs'
import {UpdateNewMessageText,addMessageActionCreator} from '../../Redux/dialogs-reduser'


const DialogsComponent = props => {
 

  let state = props.store.getState();
  console.log(state)
  let addMessage = () => {
  
  props.store.dispatch(addMessageActionCreator());
}

let onMessageChange = (text) => {
  let action = UpdateNewMessageText(text);
  props.store.dispatch(action);
  
}

 

  

  return (
    <Dialogs 
    addMessage={addMessage}
    onMessageChange={onMessageChange}
    dialogs={state.dialogsReducer.dialogs}
    messages={state.dialogsReducer.messages}
    />
  );

}
export default DialogsComponent;
