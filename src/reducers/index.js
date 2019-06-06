import { combineReducers } from 'redux';

import application from './application';
import chat from './chat';

const reducers = combineReducers({
    application,
    chat
});

export default reducers;
