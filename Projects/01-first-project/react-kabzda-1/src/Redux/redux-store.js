import {createStore, combineReducers,applyMiddleware} from 'redux';
import profileReducer from './profile-reduser';
import dialogsReducer from './dialogs-reduser';
import usersReducer from './users-reduser';
import authReducer from './auth-reducer';
import thunkMiddleware from 'redux-thunk';



let reducers = combineReducers({
    profileReducer:profileReducer,
    dialogsReducer:dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer
}); 

const store = createStore(reducers,  applyMiddleware(thunkMiddleware));
window.store=store;

export default store;
