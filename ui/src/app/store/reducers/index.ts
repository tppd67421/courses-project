import { ISharedState, sharedReducer } from './shared';
import { IUserState, userReducer } from './users';
import { combineReducers } from 'redux';
import { RouterState, routerReducer } from 'react-router-redux';
import { Action } from 'redux';
import { ICoursesState, coursesReducer } from './courses';

export interface IAppState {
    router: RouterState;
    user: IUserState;
    courses: ICoursesState;
    shared: ISharedState;
}

export const rootReducer = combineReducers<IAppState, Action<any>>({
    router: routerReducer,
    user: userReducer,
    courses: coursesReducer,
    shared: sharedReducer,
});
