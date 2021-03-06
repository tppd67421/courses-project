import { IEntityDTO } from './../Shared/entity-dto';

export interface ICourseDTO {
    id: string;
    name: string;
    date: string;
    length: number;
    description: string;
    authors: IEntityDTO<string>[];
    isTopRated: boolean;
}