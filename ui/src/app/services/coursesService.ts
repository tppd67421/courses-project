import { UserConstants } from '../store/constants/user';


export class CoursesService {

    public static clearErrors() {
        return (dispatch: any) => {
            dispatch({
                type: UserConstants.CLEAR,
            });
        };
    }

    public static fetchCourses(start: number, pageNumber: number, textFragment?: string) {
        return async (dispatch: any) => {
            dispatch({
                type: UserConstants.FETCH_USER,
            });
            try {

                dispatch({
                    type: UserConstants.FETCH_USER_OK,
                });
            } catch (err) {
                dispatch({
                    type: UserConstants.FETCH_USER_FAIL,
                    payload: err.response.data,
                });
            }
        };
    }

    // createCourse(course: ICourse) {
    //     this.loader.set(true);
    //     return this.http.post<ICourse[]>(SERVER_URL, course);
    //   }
    
    //   getCourseById(id: string) {
    //     this.loader.set(true);
    //     return this.http.get<ICourse[]>(SERVER_URL, {params: {id}});
    //   }
    
    //   updateCourse(course: ICourse) {
    //     this.loader.set(true);
    //     return this.http.patch<any>(`${SERVER_URL}/${course.id}`, course);
    //   }
    
    //   deleteCourse(id: number) {
    //     this.loader.set(true);
    //     return this.http.delete<any>(`${SERVER_URL}/${id}`)
    //   }
    
    //   getCourses(pageNumber: number, textFragment: string) {
    //     const params = {
    //       start: '0', 
    //       count: `${COUNT_COURSES * pageNumber}`,
    //       sort: 'date',
    //     };
    //     this.loader.set(true);
    //     if(textFragment) return this.http.get<ICourse[]>(SERVER_URL, { params: {...params, textFragment}});
    //     return this.http.get<ICourse[]>(SERVER_URL, {params: params});
    //   }

    constructor() {}
}
