import {createStore, combineReducers} from 'redux';
import profileReducer from './profile-reduser';
import dialogsReducer from './dialogs-reduser';
import usersReducer from './users-reduser';
import authReducer from './auth-reducer';


let reducers = combineReducers({
    profileReducer:profileReducer,
    dialogsReducer:dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer
}); 

let store = createStore(reducers);
''
window.store=store;

export default store;
