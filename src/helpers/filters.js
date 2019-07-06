export function filterDataByString(transactions, str) {
  const filtered = transactions.filter((obj) => {
    // TODO save in array (>> create param {Array} keys) and search in loop for universality
    const projectName = obj.transaction.project.name || '';
    const transactionStatus = obj.transaction.status || '';
    const paymentMethod = obj.transaction.payment_method.name || '';
    const userName = obj.user.name || '';
    const userPhone = obj.user.phone || '';
    const userEmail = obj.user.email || '';

    return projectName.toString().toLowerCase().includes(str.toLowerCase())
    || transactionStatus.toString().toLowerCase().includes(str.toLowerCase())
    || paymentMethod.toString().toLowerCase().includes(str.toLowerCase())
    || userName.toString().toLowerCase().includes(str.toLowerCase())
    || userPhone.toString().toLowerCase().includes(str.toLowerCase())
    || userEmail.toString().toLowerCase().includes(str.toLowerCase());
  });

  return filtered;
}




