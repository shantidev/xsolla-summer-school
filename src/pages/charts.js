import React, { useEffect } from 'react';
import Layout from '../layouts/Layout';

export default () => {

  useEffect(() => {
    document.title = 'Transactions | Statistics'
  }, []);

  return (
    <Layout>
      <div>charts</div>
    </Layout>
  )
}