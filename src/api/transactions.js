import { apiStatic } from './index';
import { filterDataByString } from '../helpers/filters';

export async function getTransactions() {
  try {
    const response = await apiStatic.get('/transactions.json');
    return response.data;

  } catch (err) {
    console.error(err);
  }
}

export async function getFilteredTransactions(data, str) {
  try {
    if (str.length === 0) {
      return await getTransactions();
    } else {
      const transactions = await getTransactions();
      const response = await filterDataByString(transactions, str);
      return response;
    }
  } catch (err) {
    console.error(err);
  }
}