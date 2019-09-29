const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
  
  post: [
    { message: "Hello, i am Maxim.Why are you?", like_counts: "110" },
    { message: "Hi, i am Alex", like_counts: "12" }
  ],
  newPostText: "",
  profile:null
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
        case  SET_USER_PROFILE:
                  return {...state, profile:action.profile};    

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
  export const setUserProfile = (profile) => {
    return {
      type: 'SET_USER_PROFILE',
      profile
    }
  };
export default profileReducer;
