import React from 'react';
import { render } from 'react-dom';
import css from './styles/style.styl'; 

import App from './components/App';

import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import store, { history} from './store';

window.devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

const router = (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>
);

render(router, document.getElementById('root'));