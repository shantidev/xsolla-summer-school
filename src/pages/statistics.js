import React, {useEffect} from 'react';
import Layout from '../layouts/Layout';
import Wrapper from '../layouts/Wrapper';
import Typography from '../assets/ui/Typography';
import PaymentMethodStatistics from '../containers/PaymentMethodStatistics';

export default () => {

  useEffect(() => {
    document.title = 'Transactions | Statistics'
  }, []);

  return (
    <Layout>
      <Wrapper>
        <Typography element={'h1'}>Statistics</Typography>
        <PaymentMethodStatistics/>
      </Wrapper>
    </Layout>
  )
}