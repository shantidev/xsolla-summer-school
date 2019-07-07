import moment from 'moment';

export function filterTransactionsByString(transactions, str) {
  /* Search keys */
  const filtered = transactions.filter((obj) => {
    const projectName = obj.transaction.project.name || '';
    const transactionStatus = obj.transaction.status || '';
    const paymentMethod = obj.transaction.payment_method.name || '';
    const userName = obj.user.name || '';
    const userPhone = obj.user.phone || '';
    const userEmail = obj.user.email || '';
    const transferDate = moment(obj.transaction.transfer_date).format('HH:mm DD/MM/YYYY') || '';

    const arrayOfKeys = [
      projectName, transactionStatus, paymentMethod, userName, userPhone, userEmail, transferDate
    ];

    return arrayOfKeys.find((key) => {
      return key.toString().toLowerCase().includes(str.toLowerCase());
    });
  });

  return filtered;
}


