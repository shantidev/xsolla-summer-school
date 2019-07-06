import {
  REQUEST,
  RECEIVE,
  REJECT,
  SAVE_TRANSACTIONS,
  SAVE_PROJECTS,
  SAVE_FILTER,
} from './actionType';

const initialState = {
  loading: false,
  transactions: [],
  projects: [],
  filter: {
    search: '',
  }
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
    default:
      return state;
  }
};

export default reducer;