import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import comments from './comments';
import posts from './posts';

const rootReducer = (history) => combineReducers({
    posts,
    comments,
    router: connectRouter(history)
});

export default rootReducer;