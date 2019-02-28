import { appSettings } from './../../appSettings';

const BASE_URL: string = appSettings.apiLink;


export class EndService {

    public static login(): string {
        return `${BASE_URL}/auth/login`;
    }

    constructor() {}
}