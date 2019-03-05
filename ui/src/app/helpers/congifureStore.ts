import { History } from 'history';
import { routerMiddleware as createRouterMiddleware } from 'react-router-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from '../store/reducers';

declare let module: { hot: any };

const configureStore = (history: History) => {
    const routerMiddleware = createRouterMiddleware(history);

    const store = createStore(rootReducer, applyMiddleware(thunk, routerMiddleware));

    if (module.hot) {
        module.hot.accept('../store/reducers', () => {
            const nextRootReducer = require('../store/reducers/index').default;
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
};

export default configureStore;
