import { IUserData } from './../../interfaces/Auth/UserDataDTO';
import { PersonName } from './PersonName';

export class UserData {
    public id: number;
    public login: string;
    public name: PersonName;

    constructor(model: IUserData) {
        this.id = model.id;
        this.login = model.login;
        this.name = new PersonName(model.name);
    }

}