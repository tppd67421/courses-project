import * as React from 'react';
import createHistory from 'history/createBrowserHistory';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import LayoutGuard from './components/LayoutGuard';
import configureStore from './helpers/congifureStore';

const history = createHistory();
const store = configureStore(history);
const rootEl = document.getElementById('root');


const layoutRender = (Component: React.ComponentType) => {
    render(
        <AppContainer>
            <Provider store={store}>
                <ConnectedRouter store={store} history={history}>
                    <Component />
                </ConnectedRouter>
            </Provider>
        </AppContainer>,
        rootEl as HTMLElement,
    );
};

layoutRender(LayoutGuard);

// Hot Module Replacement API
declare let module: { hot: any };

if (module.hot) {
    module.hot.accept('./components/LayoutGuard', () => {
        const NewApp = require('./components/LayoutGuard').default;
        layoutRender(NewApp);
    });
}
