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
        default:
            return {
                ...state,
            };
    }
}
