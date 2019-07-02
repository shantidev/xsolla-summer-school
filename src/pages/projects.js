import React from 'react';
import ProjectsList from '../containers/ProjectsList';
import Layout from '../layouts/Layout';
import Wrapper from '../layouts/Wrapper';

export default () => (
  <Layout>
    <Wrapper>
      <ProjectsList/>
    </Wrapper>
  </Layout>
);