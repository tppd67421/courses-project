import { IAppState } from '../../store/reducers/index';
import * as React from 'react';
import { connect } from 'react-redux';
import Modal from '../Modal';
import './index.scss';
import { AuthService } from '../../services/authService';
import { SessionModel } from '../../models/Auth/SessionModel';
import { SortTypes } from '../../enums/sort-types';
import { CoursesService } from '../../services/coursesService';
import { Course } from '../../models/Courses/Courses';
import Card from '../Card';
import Loader from '../Loader';

interface Props {
    children: React.ReactNode;
    courses: Course[];
    isLoading?: boolean;
    error: string;
    fetchCourses?: (start: number, pageNumber: number, sort?: SortTypes, textFragment?: string) => void;
    clear?: () => void;
}

interface State {
    login: string;
    password: string;
    isDisabled: boolean;
}

const mapStateToProps = (state: IAppState, props: Props): Partial<Props> => {
    return {
        ...props,
        courses: state.courses.courses,
        isLoading: state.courses.isLoading,
        error: state.user.error,
    };
};

const mapDispatchToProps = (dispatch: any, props: Props): Partial<Props> => {
    return {
        ...props,
        fetchCourses: (start: number, pageNumber: number, sort?: SortTypes, textFragment?: string) => {
            dispatch(CoursesService.fetchCourses(start, pageNumber, sort, textFragment));
        },
        clear: () => {
            dispatch(CoursesService.clearErrors());
        }
    };
};

class CoursesFlow extends React.PureComponent<Props, any> {

    constructor(props: Props) {
        super(props);
    }

    public componentDidMount(): void {
        this.props.fetchCourses(0, 20);
    }

    public render(): React.ReactElement {
        if (this.props.isLoading) {
            <Loader />;
        }
        return (
            <div>
            {this.props.isLoading &&
            <Loader />}
            {/* {this.props.courses &&
                this.props.courses.map((item: Course) => <Card course={item} key={item.id}></Card>)} */}
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(CoursesFlow);
