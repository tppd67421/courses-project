import { EndService } from './../services/endService';
import axios from 'axios';
import getResponse from '../helpers/getResponse';
import { SessionModel } from '../models/Auth/SessionModel';

export class AuthApi {
    public static async checkSession(model: SessionModel): Promise<SessionModel> {
        return getResponse(axios.post<any>(EndService.login(), model));
    }

    constructor() {}
}
