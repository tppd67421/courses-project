import { StorageService } from './storageService';

const TOKEN_NAME: string = 'TOKEN_';

export class AuthService {

    public static checkToken(userId: number): boolean {
        return StorageService.get<boolean>(TOKEN_NAME + userId);
    }

    public static setToken(userId: number, token: string): void {
        StorageService.set<string>(TOKEN_NAME + userId, token);
    }

    constructor() {}
}