import React, { useEffect } from 'react';
import ProjectsList from '../containers/ProjectsList';
import Layout from '../layouts/Layout';
import Wrapper from '../layouts/Wrapper';
import Typography from "../assets/ui/Typography";

export default () => {
  useEffect(() => {
    document.title = 'Transactions | Projects'
  }, []);

  return (
    <Layout>
      <Wrapper>
        <Typography element={'h1'}>Projects</Typography>
        <ProjectsList/>
      </Wrapper>
    </Layout>
  )
}