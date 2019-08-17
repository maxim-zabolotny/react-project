


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
        { id: "1", name: "Maxim" },
        { id: "2", name: "Yanettka" },
        { id: "3", name: "Zaur" }
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

 


  dispatchMessage(action) {
    if(action.type === 'ADD-MESSAGE') {
    let newMessage = {
      id: 109,
      message: this._state.messagePage.newMessage
    }
    this._state.messagePage.messages.push(newMessage);
    this._callSubscriber(this._state);
  } 
  else if(action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
    this._state.messagePage.newMessage = action.newMessage
  }

},


  dispatch(action) {
    if (action.type === "ADD-POST") {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        like_counts: 0
      };
      this._state.profilePage.post.push(newPost);
      this._callSubscriber(this._state); // Перересовываем всё дерево
    } else if (action.type === "UPDATE-NEW-POST-TEXT") {
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

