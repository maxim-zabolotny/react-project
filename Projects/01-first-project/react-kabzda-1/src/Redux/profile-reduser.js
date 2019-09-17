const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT =  'UPDATE-NEW-POST-TEXT';

let initialState = {
  
  post: [
    { message: "Hello, i am Maxim.Why are you?", like_counts: "110" },
    { message: "Hi, i am Alex", like_counts: "12" }
  ],
  newPostText: ""
  }


 const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
                let newPost = {
                    id: 5,
                    message: state.newPostText,
                    like_counts: 0
                  };
                  let stateCopy = {...state};
                  stateCopy.post = [...state.post];
                  stateCopy.post.push(newPost);
                  stateCopy.newPostText = '';

                  return stateCopy; 
                }   

        case  UPDATE_NEW_POST_TEXT:
          let stateCopy = {...state};
          stateCopy.newPostText = action.newPost; // Обновляем значение В стэйте
                  return stateCopy;    

        default:
                  return state;    


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
export default profileReducer;
