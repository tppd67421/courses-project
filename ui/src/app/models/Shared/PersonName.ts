import { IUserName } from './../../interfaces/Auth/UserName';
export class PersonName {
    public firstName: string;
    public lastName: string;

    constructor(model: IUserName) {
        this.firstName = model.firstName;
        this.lastName = model.lastName;
    }

    public getFullName(): string {
        return this.firstName + ' ' + this.lastName;
    }
}