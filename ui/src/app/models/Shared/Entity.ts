import { IEntityDTO } from './../../interfaces/Shared/entity-dto';

export class Entity<T> {
    id: T;
    name: string;

    public static fromServer<T>(response: IEntityDTO<T>): Entity<T> {
        if (!response) {
            return null;
        }

        return new Entity<T>(response.id, response.name);
    }

    constructor(id?: T, name?: string) {
        this.id = id;
        this.name = name;
    }
}