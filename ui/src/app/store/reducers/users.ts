import { Action } from 'redux';
import { UserConstants } from '../constants/user';

export type IUserState = {
    username: string;
    isAdmin: boolean;
    isLoggedIn: boolean;
};

const initialState: IUserState = {
    username: void 0,
    isAdmin: true,
    isLoggedIn: true,
};

export function userReducer(state = initialState, action: Action<any>): IUserState {
    switch (action.type) {
        case UserConstants.FETCH_USER: {
            return {
                ...state,
            };
        }
    }
    return state;
}
