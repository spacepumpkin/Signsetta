import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root_reducer';
import thunk from 'redux-thunk';

// For ignoring Redux Logger in Production
const middlewares = [thunk];
if (process.env.NODE_ENV !== "production") {
  // must use 'require' (import only allowed at top of file)
  const { logger } = require("redux-logger");
  middlewares.push(logger);
} 


const configureStore = (preloadedState = {}) => (
    createStore(rootReducer, preloadedState, applyMiddleware(...middlewares))
);

export default configureStore;