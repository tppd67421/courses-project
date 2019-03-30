import * as React from 'react';
import '../../assets/styles/main.scss';
import SideBar from './SideBar';
import { Redirect, Route, Switch } from 'react-router-dom';
import CoursesFlow from './CoursesFlow';

const App = (): JSX.Element => {
    return (
        <div className='cc-app'>
            <div className='cc-app__sidebar'>
                <SideBar />
            </div>
            <div className='cc-app__header'>
            </div>
            <div className='cc-app__main'>
                <Switch>
                    <Route exact={true} path='/' component={CoursesFlow} />} />
                </Switch>
            </div>
        </div>
    );
};

export default App;
