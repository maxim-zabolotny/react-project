const FOLLOW= 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
  
  Users: [
    // {id:'1', followed='false', message: "Hello, i am Maxim.Why are you?", status: "I am a boss1", location: {city:'Dnipro', country: 'Ukraine'} },
    
    // {id:'2', followed='false', message: "Hello, i am Maxim.Why are you?", status: "I am a boss2", location: {city:'Home', country: 'Ukraine'} },
    
    // {id:'3',followed='false', message: "Hello, i am Maxim.Why are you?", status: "I am a boss3", location: {city:'Kiev', country: 'Ukraine'} },
    
    // {id:'4',followed='true', message: "Hello, i am Maxim.Why are you?", status: "I am a boss4", location: {city:'Kotovka', country: 'Ukraine'} },
    
  ],
  newPostText: ""
  }


 const usersReducer = (state = initialState, action) => {
   switch (action.type) {
     
    case FOLLOW: 

        return {
          ...state,
           users:[...state.users.map((u) => {
             if(u.id ==action.userId) {
               return {...u, followed:true}
             }
            return u;
           })]}

    case UNFOLLOW: 

    return {
      ...state,
       users:[...state.users.map (u => {
         if(u.id ==action.userId) {
           return {...u, followed:false}
         }
        return u;
       })]}

       case SET_USERS: {
         return{...state, users:[...state.users, action.users]}
       }

     default:
       return state;
   }
 };

  export const followAC = (usersId) => ({type: FOLLOW,userId})
  export const setUsersAC = (users) => ({type: SET_USERS,userId})
  

  export const unfollowAC = (userId) => ({type:UNFOLLOW, userId});
export default usersReducer;
