import * as React from 'react';
import '../../assets/styles/main.scss';
import SideBar from './SideBar';
import { Redirect, Route, Switch } from 'react-router-dom';

const App = (): JSX.Element => {
    return (
        <div className='cc-app'>
            <div className='cc-app__sidebar'>
                <SideBar />
            </div>
            <div className='cc-app__header'>
            </div>
            <div className='cc-app__main'>
                {/* <Switch>
                    <Route exact={true} path='/' render={() => <Redirect to='' />} />
                </Switch> */}
            </div>
        </div>
    );
};

export default App;
