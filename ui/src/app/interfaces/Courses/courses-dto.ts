import { IEntityDTO } from './../Shared/entity-dto';

export interface ICourseDTO {
    id: number;
    name: string;
    date: string;
    length: number;
    description: string;
    authors: IEntityDTO<number>[];
    isTopRated: boolean;
}