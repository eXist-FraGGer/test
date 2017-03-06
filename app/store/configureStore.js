import { createStore, applyMiddleware, combineReducers } from 'redux';
import createLogger from 'redux-logger';
import * as reducers from './../reducers';
import { apiMiddlewareCreator } from '@yasaichi/redux-api-middleware';

const logger = createLogger();
const apiMiddleware = apiMiddlewareCreator(fetch);
const createStoreWithMiddleware = applyMiddleware(apiMiddleware, logger)(createStore);
const reducer = combineReducers({...reducers});

export default initialState => createStoreWithMiddleware(reducer, initialState);