import { Action } from 'redux';
import { UserConstants } from '../constants/user';

export type UserState = {
    username: string;
    isAdmin: boolean;
    isLoggedIn: boolean;
};

const initialState: UserState = {
    username: void 0,
    isAdmin: false,
    isLoggedIn: false,
};

export function userReducer(state = initialState, action: Action<any>): UserState {
    switch (action.type) {
        case UserConstants.FETCH_USER: {
            return {
                ...state,
            };
        }
    }
    return state;
}
