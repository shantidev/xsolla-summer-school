import {
  REQUEST,
  RECEIVE,
  REJECT,
  SAVE_TRANSACTIONS,
  SAVE_PROJECTS,
  SAVE_FILTER,
  SAVE_STATISTICS_OF_PAYMENT_METHOD,
} from './actionType';

const initialState = {
  loading: false,
  transactions: [],
  projects: [],
  filter: {
    search: '',
  },
  statisticsOfPaymentMethod: []
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST:
      return { ...state, loading: true };
    case RECEIVE:
      return { ...state, loading: false };
    case REJECT:
      return { ...state, loading: false };
    case SAVE_TRANSACTIONS:
      return { ...state, transactions: action.payload };
    case SAVE_PROJECTS:
      return { ...state, projects: action.projects };
    case SAVE_FILTER:
      return {
        ...state,
        filter: {
          search: action.search,
        }
      };
    case SAVE_STATISTICS_OF_PAYMENT_METHOD:
      return {
        ...state,
        statisticsOfPaymentMethod: action.statistics
      };
    default:
      return state;
  }
};

export default reducer;