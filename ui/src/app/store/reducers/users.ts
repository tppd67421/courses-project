import { Action } from 'redux';
import { UserConstants } from '../constants/user';

export type IUserState = {
    username: string;
    isAdmin: boolean;
    isLoggedIn: boolean;
};

export interface ActionPayload<T> extends Action {
    payload: T;
}

const initialState: IUserState = {
    username: void 0,
    isAdmin: true,
    isLoggedIn: false,
};

export function userReducer(state = initialState, action: ActionPayload<any>): IUserState {
    switch (action.type) {
        case UserConstants.FETCH_USER: {
            return {
                ...state,
            };
        }
        case UserConstants.FETCH_USER_OK: {
            return {
                ...state,
                username: action.payload.username,
                isLoggedIn: true,
            };
        }
    }
    return state;
}
