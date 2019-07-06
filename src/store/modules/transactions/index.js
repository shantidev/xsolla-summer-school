import * as api from '../../../api/transactions';

export const REQUEST = 'TRANSACTIONS/REQUEST';
export const RECEIVE = 'TRANSACTIONS/RECEIVE';
export const REJECT = 'TRANSACTIONS/REJECT';
export const SAVE_TRANSACTIONS = 'TRANSACTIONS/SAVE_TRANSACTIONS';
export const SAVE_PROJECTS = 'TRANSACTIONS/SAVE_PROJECTS';
export const SAVE_FILTER = 'TRANSACTIONS/SAVE_FILTER';

const initialState = {
  loading: false,
  transactions: [],
  projects: [],
  filter: {
    search: '',
  }
};

/**
 * Получает транзакции из json
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

/**
 * Получает массив проектов, по которым происходили транзакции
 *
 * @returns {Function}
 */

export const getProjects = () => async (dispatch, getState) => {
  const { loading, transactions, filter } = getState().transactions;
  if (loading) return;

  try {
    dispatch({ type: REQUEST });
    const projects = [];
    const map = new Map();
    let initialTransactions = transactions;

    if (filter.search.length > 0) {
      initialTransactions = await api.getTransactions();
    }

    for (const transaction of initialTransactions) {
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
 * Получает фильтрованные транзакции по @param str
 * Сохраняет значение поля `Search`
 *
 * @param {String} str
 * @returns {Function}
 */
export const getFilteredTransactions = (str) => async (dispatch, getState) => {
  const { loading, transactions } = getState().transactions;
  if (loading) return;

  try {
    dispatch({ type: REQUEST });
    dispatch({ type: SAVE_FILTER, search: str });
    const payload = await api.getFilteredTransactions(transactions, str);
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