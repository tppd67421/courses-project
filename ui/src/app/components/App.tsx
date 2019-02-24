import * as React from 'react';
import '../../assets/styles/main.scss';
import SideBar from './SideBar';

export interface AppProps {
}

export default class App extends React.Component<AppProps> {
    render() {
        return (
            <div className='cc-app'>
               <div className='cc-app__sidebar'>
                    <SideBar />
               </div>
            </div>
        );
    }
}
