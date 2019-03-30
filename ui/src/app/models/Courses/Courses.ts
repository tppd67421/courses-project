import { IEntityDTO } from './../../interfaces/Shared/entity-dto';
import { ICourseDTO } from './../../interfaces/Courses/courses-dto';
import { Entity } from '../Shared/Entity';
import * as moment from 'moment';

export class Course {
    public id: number;
    public name: string;
    public date: moment.Moment;
    public length: number;
    public description: string;
    public authors: Entity<number>[];
    public isTopRated: boolean;

    public static fromServer(response: ICourseDTO): Course {
        if (!response) {
            return null;
        }

        const course: Course = new Course();

        course.id = response.id;
        course.name = response.name;
        course.date = moment(response.date);
        course.length = response.length;
        course.description = response.description;
        course.authors = response.authors.map((entity: IEntityDTO<number>) => Entity.fromServer<number>(entity));
        course.isTopRated = response.isTopRated;

        return course;
    }

    constructor() {}
}