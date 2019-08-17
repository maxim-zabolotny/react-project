import React from "react";
import s from "./Dialogs.module.css";
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import {UpdateNewMessageText,addMessageActionCreator} from '../../Redux/dialogs-reduser'


const Dialogs = props => {
  let newPostElement = React.createRef();

  


  let addMessage = () => {
  
  props.dispatch(addMessageActionCreator())
}

let onMessageChange = () => {
  let text = newPostElement.current.value;
  let action = UpdateNewMessageText(text);
  props.dispatch(action);
  
}

  let dialogsData = props.state.dialogs.map(dialog => (
    <DialogsItem name={dialog.name} id={dialog.id} />
  ));

  let messageElement = props.state.messages.map(message => (
    <Message message={message.message} />
  ));

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>
        <DialogsItem />
        {dialogsData}
      </div>
      <div className={s.messages}>
        <Message />
        {messageElement}
      </div>
     <div>
     <textarea ref={newPostElement} onChange = {onMessageChange}></textarea>

     </div>
      <div>
      <button onClick={addMessage}>add</button>

      </div>
    </div>
  );
};
debugger;
export default Dialogs;
