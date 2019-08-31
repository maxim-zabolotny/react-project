import React from "react";
import s from "./Dialogs.module.css";
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";


const Dialogs = props => {
  let newPostElement = React.createRef();

  


  let addMessage = () => {
  
    props.addMessage();
}

let onMessageChange = () => {
  let text = newPostElement.current.value;
  props.onMessageChange(text);
  
}

  let dialogsData = props.dialogs.map(dialog => (
    <DialogsItem name={dialog.name} id={dialog.id} />
  ));

  let messageElement = props.messages.map(message => (
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
}
export default Dialogs;
