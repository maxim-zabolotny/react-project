import Dialogs from './Dialogs'
import {UpdateNewMessageText,addMessageActionCreator} from '../../Redux/dialogs-reduser'
import {connect} from 'react-redux'







let mapStateToProps = state => {
  return {
    dialogsPage: state.dialogsPage,
    dialogs: state.dialogsReducer.dialogs,
    messages: state.dialogsReducer.messages
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    addMessage: () => {
      dispatch(addMessageActionCreator());
    },
    onMessageChange: text => {
      let action = UpdateNewMessageText(text);
      dispatch(action);
    },
   
  };
};
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer;
