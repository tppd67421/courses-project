import { ICourseDTO } from './../interfaces/Courses/courses-dto';
import { EndService } from './../services/endService';
import axios from 'axios';
import getResponse from '../helpers/getResponse';

export class AuthApi {
    public static async fetchCourses(start: number, pageNumber: number, textFragment?: string): Promise<ICourseDTO[]> {
        return getResponse(axios.get<ICourseDTO[]>(EndService.getCourses(start, pageNumber, textFragment)));
    }

    constructor() {}
}
