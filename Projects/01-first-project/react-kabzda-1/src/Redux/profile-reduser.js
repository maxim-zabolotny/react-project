const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT =  'UPDATE-NEW-POST-TEXT';

 const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
                let newPost = {
                    id: 5,
                    message: state.newPostText,
                    like_counts: 0
                  };
                  state.post.push(newPost);
                  state.newPostText = '';
                  return state;    

        case  UPDATE_NEW_POST_TEXT:
                  state.newPostText = action.newPost; // Обновляем значение В стэйте
                  return state;    

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
