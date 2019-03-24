import { appSettings } from './../../appSettings';

const BASE_URL: string = appSettings.apiLink;


export class EndService {

    public static login(): string {
        return `${BASE_URL}/auth/login`;
    }

    public static userData(): string {
        return `${BASE_URL}/auth/userinfo`;
    }

    constructor() {}
}