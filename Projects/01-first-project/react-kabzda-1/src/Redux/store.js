import profileReducer from './profile-reduser';
import dialogsReducer from './dialogs-reduser';


let store = {
  _state: {
    profilePage: {
      post: [
        { message: "Hello, i am Maxim.Why are you?", like_counts: "110" },
        { message: "Hi, i am Alex", like_counts: "12" }
      ],
      newPostText: "Hello"
    },
    messagePage: {
      messages: [
        { id: "1", message: "Hi" },
        { id: "2", message: "Hi are you" }
      ],

      dialogs: [
        { id: "1", name: "Yanettka" },
        { id: "2", name: "Zaur" }
      ],
      newMessage:''
    }
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer; //observer - наблюдатель pattern
  },

  _callSubscriber() {
    console.log("Hello");
  },

 

  dispatch(action) {

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messagePage = dialogsReducer(this._state.messagePage, action);

    this._callSubscriber( this._state);
  }
}









export default store;

