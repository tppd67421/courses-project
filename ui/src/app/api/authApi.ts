import { EndService } from './../services/endService';
import axios from 'axios';
import getResponse from '../helpers/getResponse';

export class AuthApi {
    public static async checkSession(): Promise<any> {
        return getResponse(axios.get<any>(EndService.login()));
    }

    constructor() {}
}
