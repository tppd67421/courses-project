import { IUserData } from './../../interfaces/Auth/UserDataDTO';
import { PersonName } from './PersonName';
import { Persmission } from '../../enums/persmission-enum';

export class UserData {
    public id: number;
    public login: string;
    public name: PersonName;
    public permission: Persmission;

    constructor(model: IUserData) {
        this.id = model.id;
        this.login = model.login;
        this.name = new PersonName(model.name);
    }

}