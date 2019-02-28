import { UserState, userReducer } from './users';
import { combineReducers } from 'redux-immutable';
import { RouterState, routerReducer } from 'react-router-redux';
import { Action } from 'redux';

export interface IAppState {
    router: RouterState;
    user: UserState;
}

export const rootReducer = combineReducers<IAppState, Action<any>>({
    router: routerReducer,
    user: userReducer,
});