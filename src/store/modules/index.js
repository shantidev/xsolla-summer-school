import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import transactions from './transactions/reducer';

export default (history) => combineReducers({
  router: connectRouter(history),
  transactions,
})
