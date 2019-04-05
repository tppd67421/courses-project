import * as React from 'react';
import '../../assets/styles/main.scss';
import SideBar from './SideBar';
import Header from './Header';
import { Redirect, Route, Switch } from 'react-router-dom';
import CoursesFlow from './CoursesFlow';
import { IAppState } from '../store/reducers';
import { connect } from 'react-redux';
import { SharedService } from '../services/sharedService';

interface Props {
    isSideBarOpened: boolean;
}

const mapStateToProps = (state: IAppState, props: Props): Partial<Props> => {
    return {
        ...props,
        isSideBarOpened: state.shared.isSideBarOpened,
    };
};

const App = (props: Props): JSX.Element => {

    return (
        <div className='cc-app'>
            {props.isSideBarOpened &&
                <div className='cc-app__sidebar'>
                      <SideBar />
                </div>}
            <div className='cc-app__header'>
            <Header />
            </div>
            <div className='cc-app__main'>
                <Switch>
                    <Route exact={true} path='/' component={CoursesFlow} />} />
                </Switch>
            </div>
        </div>
    );
};

export default connect(
    mapStateToProps,
)(App);
