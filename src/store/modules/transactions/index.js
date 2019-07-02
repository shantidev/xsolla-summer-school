import * as api from '../../../api/transactions';

export const REQUEST = 'TRANSACTIONS/REQUEST';
export const RECEIVE = 'TRANSACTIONS/RECEIVE';
export const REJECT = 'TRANSACTIONS/REJECT';
export const SAVE_TRANSACTIONS = 'SAVE_TRANSACTIONS/REJECT';
export const SAVE_PROJECTS = 'SAVE_PROJECTS/REJECT';

const initialState = {
  loading: false,
  transactions: [],
  projects: [],
};

/**
 * Получает массив проектов, по которым происходили транзакции
 *
 * @property {Array} transactions
 * @returns {Function}
 */

export const getProjects = () => async (dispatch, getState) => {
  const { loading, transactions } = getState().transactions;
  if (loading) return;

  try {
    dispatch({ type: REQUEST });
    const projects = [];
    const map = new Map();

    for (const transaction of transactions) {
      if (!map.has(transaction.transaction.project.id)) {
        map.set(transaction.transaction.project.id, true);
        projects.push({
          id: transaction.transaction.project.id,
          name: transaction.transaction.project.name,
        })
      }
    }

    dispatch({ type: SAVE_PROJECTS, projects });
    dispatch({ type: RECEIVE });
  } catch (err) {
    console.error(err);
    dispatch({ type: REJECT });
  }
};

/**
 *  Получает транзакции из json
 *
 * @returns {Function}
 */
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
    case SAVE_PROJECTS:
      return { ...state, projects: action.projects };
    default:
      return state;
  }
};

export default reducer;