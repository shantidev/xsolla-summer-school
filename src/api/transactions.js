import { apiStatic } from './index';

export async function getTransactions() {
  try {
    const response = await apiStatic.get('/transactions.json');
    return response.data;

  } catch (err) {
    console.error(err);
  }
}