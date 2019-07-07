import React, { useEffect } from 'react';
import ProjectsList from '../containers/ProjectsList';
import Wrapper from '../layouts/Wrapper';
import Typography from '../assets/ui/Typography';

export default () => {
  useEffect(() => {
    document.title = 'Transactions | Projects'
  }, []);

  return (
    <Wrapper>
      <Typography element={'h1'}>Projects</Typography>
      <ProjectsList/>
    </Wrapper>
  )
}