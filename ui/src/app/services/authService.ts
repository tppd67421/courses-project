import { AuthApi } from './../api/authApi';
import { StorageService } from './storageService';
import { UserConstants } from '../store/constants/user';

const TOKEN_NAME: string = 'TOKEN_';

export class AuthService {

    public static checkToken(userId: number): boolean {
        return StorageService.get<boolean>(TOKEN_NAME + userId);
    }

    public static setToken(userId: number, token: string): void {
        StorageService.set<string>(TOKEN_NAME + userId, token);
    }

    public static fakeSession() {
        return async (dispatch: any) => {
            dispatch({
                type: UserConstants.FETCH_USER,
            });
            try {
                await setTimeout(() => {}, 500);
                const result = {username: 'test'};
                dispatch({
                    type: UserConstants.FETCH_USER_OK,
                    payload: result,
                });
            } catch (err) {
                dispatch({
                    type: UserConstants.FETCH_USER_FAIL,
                });
            }
        };
    }

    public static fetchSession() {
        return async (dispatch: any) => {
            dispatch({
                type: UserConstants.FETCH_USER,
            });
            try {
                const result = await AuthApi.checkSession();
                dispatch({
                    type: UserConstants.FETCH_USER_OK,
                    payload: result,
                });
            } catch (err) {
                dispatch({
                    type: UserConstants.FETCH_USER_FAIL,
                });
            }
        };
    }

    constructor() {}
}
