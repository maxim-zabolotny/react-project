import React from "react";
import s from "./Dialogs.module.css";
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";

const Dialogs = props => {
  let newPostElement = React.createRef();
let addmessage = () => {
  
  let text = newPostElement.current.value;
  alert(text);


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
     <textarea ref={newPostElement}></textarea>

     </div>
      <div>
      <button onClick={addmessage}>add</button>

      </div>
    </div>
  );
};

export default Dialogs;
