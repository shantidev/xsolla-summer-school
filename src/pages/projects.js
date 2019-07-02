import React, { useEffect } from 'react';
import ProjectsList from '../containers/ProjectsList';
import Layout from '../layouts/Layout';
import Wrapper from '../layouts/Wrapper';

export default () => {
  useEffect(() => {
    document.title = 'Transactions | Projects'
  }, []);

  return (
    <Layout>
      <Wrapper>
        <ProjectsList/>
      </Wrapper>
    </Layout>
  )
}