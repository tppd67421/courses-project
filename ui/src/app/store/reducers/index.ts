import { IUserState, userReducer } from './users';
import { combineReducers } from 'redux';
import { RouterState, routerReducer } from 'react-router-redux';
import { Action } from 'redux';

export interface IAppState {
    router: RouterState;
    user: IUserState;
}

export const rootReducer = combineReducers<IAppState, Action<any>>({
    router: routerReducer,
    user: userReducer
});
