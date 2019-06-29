import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import transactions from './transactions';

export default (history) => combineReducers({
  router: connectRouter(history),
  transactions,
})
