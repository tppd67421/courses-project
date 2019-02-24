import * as React from 'react';
import {render} from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import App from './components/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './store/reducers';

const store = createStore(rootReducer);
const rootEl = document.getElementById('root');

render(
    <Provider store={store}>
        <AppContainer>
            <App/>
        </AppContainer>
    </Provider>,
    rootEl
);

// Hot Module Replacement API
declare let module: { hot: any };

if (module.hot) {
    module.hot.accept('./components/App', () => {
        const NewApp = require('./components/App').default;

        render(
            <Provider store={store}>
                <AppContainer>
                    <NewApp/>
                </AppContainer>
            </Provider>,
            rootEl
        );
    });
}
