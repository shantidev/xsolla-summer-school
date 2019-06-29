import * as api from '../../../api/transactions';

export const REQUEST = 'TRANSACTIONS/REQUEST';
export const RECEIVE = 'TRANSACTIONS/RECEIVE';
export const REJECT = 'TRANSACTIONS/REJECT';
export const SAVE_TRANSACTIONS = 'SAVE_TRANSACTIONS/REJECT';

const initialState = {
  loading: false,
  transactions: [],
};

export const getTransactions = () => async (dispatch, getState) => {
  const { loading } = getState().transactions;
  if (loading) return;

  try {
    dispatch({ type: REQUEST });
    const payload = await api.getTransactions();
    dispatch({ type: SAVE_TRANSACTIONS, payload });
    dispatch({ type: RECEIVE });
  } catch (err) {
    console.error(err);
    dispatch({ type: REJECT });
  }
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST:
      return { ...state, loading: true };
    case RECEIVE:
      return { ...state, loading: false};
    case REJECT:
      return { ...state, loading: false};
    case SAVE_TRANSACTIONS:
      return { ...state, transactions: action.payload };
    default:
      return state;
  }
};

export default reducer;