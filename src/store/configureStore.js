import { createBrowserHistory } from 'history';
import { createStore, compose, applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import createRootReducer from './modules';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

export const history = createBrowserHistory();

export default function configureStore(initialState) {
  const middleware = [thunk, logger, routerMiddleware(history)];

  const rootReducer = createRootReducer(history);

  return createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...middleware))
  );
}
