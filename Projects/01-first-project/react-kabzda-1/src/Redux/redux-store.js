import {createStore, combineReducers} from 'redux';
import profileReducer from './profile-reduser';
import dialogsReducer from './dialogs-reduser';
import usersReducer from './users-reduser';

let reducers = combineReducers({
    profileReducer:profileReducer,
    dialogsReducer:dialogsReducer,
    usersPage: usersReducer
});

let store = createStore(reducers);

console.log(store)

export default store;
