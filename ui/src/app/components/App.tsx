import * as React from 'react';
import '../../assets/styles/main.scss';

export interface AppProps {
}

export default class App extends React.Component<AppProps> {
    render() {
        return (
            <div className='cc-app'>
                <h1>Hello World!</h1>
                <p>Foo to the barz</p>
            </div>
        );
    }
}
