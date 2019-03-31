import * as React from 'react';
import './index.scss';
import { Course } from '../../models/Courses/Courses';

interface Props {
    course: Course;
    order?: () => void;
}

const Card = (props: Props): JSX.Element => {
    return (
        <div className='cc-card'>
            {props.course.id}
        </div>
    );
};

export default Card;