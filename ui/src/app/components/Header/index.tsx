import * as React from 'react';
import { IAppState } from '../../store/reducers';
import { SharedService } from '../../services/sharedService';
import { connect } from 'react-redux';
import './index.scss';

interface Props {
    children: React.ReactNode;
    isSideBarOpened: boolean;
    toggleSideBar?: () => void;
}

const mapStateToProps = (state: IAppState, props: Props): Partial<Props> => {
    return {
        ...props,
        isSideBarOpened: state.shared.isSideBarOpened,
    };
};

const mapDispatchToProps = (dispatch: any, props: Props): Partial<Props> => {
    return {
        ...props,
        toggleSideBar: () => {
            dispatch(SharedService.toggleSideBar());
        },
    };
};

const Header = (props: Props): JSX.Element => {
    const toggleSideBar = () => {
        props.toggleSideBar();
    };

    return (
        <div className='cc-header-wrapper'>
            <div className='cc-header'>
                <ul className='cc-header-left'>
                    <li className='cc-header-left__button' onClick={toggleSideBar}></li>
                    <li className='cc-header-left__logo'>TestingCourses</li>
                </ul>
                <ul className="cc-header-right">
                    <li><input type="cc-header-right__input" placeholder='Поиск курсов' /></li>
                    <li><div className="cc-header-right__like">like</div></li>
                    <li><div className="cc-header-right__auth">auth</div></li>
                </ul>
            </div>
        </div>
    );
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Header);