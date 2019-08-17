const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';




let store = {
  _state: {
    profilePage: {
      post: [
        { message: "Hello, i am Maxim.Why are you?", like_counts: "110" },
        { message: "Hi, i am Alex", like_counts: "12" }
      ],
      newPostText: ""
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
    if(action.type === ADD_MESSAGE) {

      let dialogs = {
        id: 6,
        name: 'Dimon'
      }
  
      let newMessage = {
        id: 109,
        message: this._state.messagePage.newMessage
      }
      this._state.messagePage.dialogs.push(dialogs);
      this._state.messagePage.messages.push(newMessage);
      this._callSubscriber(this._state);
    } 
    else if(action.type === UPDATE_NEW_MESSAGE_TEXT) {
      this._state.messagePage.newMessage = action.newMessage
    }

   else if (action.type === ADD_POST) {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        like_counts: 0
      };
      this._state.profilePage.post.push(newPost);
      this._callSubscriber(this._state); // Перересовываем всё дерево
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newPost; // Обновляем значение В стэйте
      this._callSubscriber(this._state);
    }
  }
}


export const UpdateNewPostText = (text) => {
  return {
    type:'UPDATE-NEW-POST-TEXT',
    newPost: text
  }
}


export const addPostActionCreator = () => {
  return {
    type: 'ADD-POST',
  }
};




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
window.store = store;

export default store;

