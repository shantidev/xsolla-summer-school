import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Chart from 'chart.js';

const PaymentMethodStatistics = props => {
  const { statistics } = props;
  const chartRef = useRef(null);

  useEffect(() => {
    const labels = [];
    const values = [];

    if (statistics.length > 0) {
      statistics.forEach((el) => {
        labels.push(el.name);
        values.push(el.value);
      });
    }

    new Chart(chartRef.current, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'usage of payment method',
          data: values,
        }]
      }
    });
  }, [statistics.length]);

  return (
    <canvas ref={chartRef}/>
  )
};

PaymentMethodStatistics.propTypes = {
  statistics: PropTypes.array,
};

export default PaymentMethodStatistics;