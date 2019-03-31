import { CourseConstants } from './../constants/courses';
import { ActionPayload } from './users';
import { Course } from './../../models/Courses/Courses';

export type ICoursesState = {
    courses: Course[];
    error: string;
    isLoading: boolean;
};

const initialState: ICoursesState = {
    courses: void 0,
    error: void 0,
    isLoading: false,
};

export function coursesReducer(state = initialState, action: ActionPayload<any>): ICoursesState {
    switch (action.type) {
        case CourseConstants.FETCH_COURSES: {
            return {
                ...state,
                isLoading: true,
            };
        }
        case CourseConstants.FETCH_COURSES_OK: {
            return {
                ...state,
                courses: action.payload,
                isLoading: initialState.isLoading,
            };
        }
        case CourseConstants.FETCH_COURSES_FAIL: {
            return {
                ...state,
                isLoading: initialState.isLoading,
                error: action.payload,
            };
        }
        default:
            return {
                ...state,
            };
    }
}
