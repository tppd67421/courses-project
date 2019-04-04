import * as React from 'react';
import { IAppState } from '../../store/reducers';
import { SharedService } from '../../services/sharedService';
import { connect } from 'react-redux';
import './index.scss';

interface Props {
    children: React.ReactNode;
    test: boolean;
    testFn?: () => void;
}

const mapStateToProps = (state: IAppState, props: Props): Partial<Props> => {
    return {
        ...props,
        test: state.shared.test,
    };
};

const mapDispatchToProps = (dispatch: any, props: Props): Partial<Props> => {
    return {
        ...props,
        testFn: () => {
            dispatch(SharedService.test());
        },
    };
};

const Header = (props: Props): JSX.Element => {
    const toggleSideBar = () => {
        props.testFn();
    };

    return (
        <div className='cc-header-wrapper'>
            <div className='cc-header'>
                <ul className='cc-header-left'>
                    <li className='cc-header-button' onClick={toggleSideBar}></li>
                    <li className='cc-header-navigation__item'>TestingCourses</li>
                </ul>
                <ul className="cc-header-right">
                    <li><input type="text" placeholder='Поиск курсов' /></li>
                    <li><div className="like">like</div></li>
                    <li><div className="auth">auth</div></li>
                </ul>
            </div>
        </div>
    );
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Header);