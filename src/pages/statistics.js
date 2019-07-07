import React, {useEffect} from 'react';
import Wrapper from '../layouts/Wrapper';
import Typography from '../assets/ui/Typography';
import PaymentMethodStatistics from '../containers/PaymentMethodStatistics';

export default () => {

  useEffect(() => {
    document.title = 'Transactions | Statistics'
  }, []);

  return (
    <Wrapper>
      <Typography element={'h1'}>Statistics</Typography>
      <PaymentMethodStatistics/>
    </Wrapper>
  )
}