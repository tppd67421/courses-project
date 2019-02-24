import { combineReducers } from 'redux-immutable';
import { RouterState, routerReducer } from 'react-router-redux';

export interface IAppState {
    router: RouterState;
}

export const rootReducer = combineReducers<IAppState>({
    router: routerReducer,
});