import { createStore, compose} from 'redux';

import rootReducer from './reducers/index';
import { createBrowserHistory } from 'history';

import comments from './data/comments';
import posts from './data/posts';

export const history = createBrowserHistory();

// create a default state
const defaultState = {
    posts,
    comments
};

const enhancer = compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(rootReducer(history), defaultState, enhancer);

if(module.hot){
    module.hot.accept('./reducers', () => {
        const nextReducer = require('./reducers/index').default;
        store.replaceReducer(nextReducer(history));
    })
}

export default store;