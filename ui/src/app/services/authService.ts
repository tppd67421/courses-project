import { UserData } from './../models/Shared/UserData';
import { IUserData } from './../interfaces/Auth/UserDataDTO';
import { ICheckSessionDTO } from '../interfaces/Auth/checkSessionDTO';
import { AuthApi } from './../api/authApi';
import { StorageService } from './storageService';
import { UserConstants } from '../store/constants/user';
import { SessionModel } from '../models/Auth/SessionModel';
import { TokenModel } from '../models/Auth/TokenModel';

const TOKEN_NAME: string = 'TOKEN_';

export class AuthService {

    public static checkToken(userId: number): boolean {
        return StorageService.get<boolean>(TOKEN_NAME + userId);
    }

    public static setToken(userId: number, token: string): void {
        StorageService.set<string>(TOKEN_NAME + userId, token);
    }

    public static fetchSession(model: SessionModel) {
        return async (dispatch: any) => {
            dispatch({
                type: UserConstants.FETCH_USER,
            });
            try {
                const checkSession: ICheckSessionDTO = await AuthApi.checkSession(model);

                const tokenModel: TokenModel = new TokenModel(checkSession.token);
                const result: IUserData = await AuthApi.fetchUserData(tokenModel);

                const payload: UserData = new UserData(result);

                dispatch({
                    type: UserConstants.FETCH_USER_OK,
                    payload,
                });
            } catch (err) {
                dispatch({
                    type: UserConstants.FETCH_USER_FAIL,
                    payload: err.response.data,
                });
            }
        };
    }

    public static clearErrors() {
        return (dispatch: any) => {
            dispatch({
                type: UserConstants.FETCH_USER,
            });
        }
    }

    constructor() {}
}
