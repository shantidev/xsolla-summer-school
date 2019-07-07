import * as api from '../../../api/transactions';
import {
  REQUEST,
  RECEIVE,
  REJECT,
  SAVE_TRANSACTIONS,
  SAVE_PROJECTS,
  SAVE_FILTER,
  SAVE_STATISTICS_OF_PAYMENT_METHOD,
} from './actionType';

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

    // TODO отрефакторить без map
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

/**
 * Находит количество вхождений в массив транзакций для каждого уникального свойства payment_method (по `name`)
 *
 * @returns {Function}
 */
export const getStatisticsOfPaymentMethod = () => async (dispatch, getState) => {
  const { loading, transactions, filter } = getState().transactions;
  if (loading) return;

  try {
    dispatch({ type: REQUEST });
    let initialTransactions = transactions;
    let statistics;

    if (filter.search.length > 0 || !transactions || transactions.length === 0) {
      initialTransactions = await api.getTransactions();
    }

    statistics = initialTransactions.reduce((result, current) => {
      let position = 0;
      if (result.find((el, pos) => {position = pos; return el.name === current.transaction.payment_method.name})) {
        result[position].value++
      } else {
        result.push({name: current.transaction.payment_method.name, value: 1})
      }
      return result;
    }, []).sort((a, b) => a.value - b.value);

    dispatch({ type: SAVE_STATISTICS_OF_PAYMENT_METHOD, statistics });
    dispatch({ type: RECEIVE });
  } catch (err) {
    console.error(err);
    dispatch({ type: REJECT });
  }
};