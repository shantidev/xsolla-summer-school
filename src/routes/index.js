import React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import { history } from '../store/configureStore';

import TransactionsTable from '../pages';
import Projects from '../pages/projects';
import Charts from '../pages/charts';
import Error404 from '../pages/404';

const AppRouter = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route exact path="/" component={TransactionsTable}/>
      <Route exact path="/projects" component={Projects}/>
      <Route exact path="/charts" component={Charts}/>
      <Route exact path="/404" component={Error404}/>
      <Redirect from="*" to="/404"/>
    </Switch>
  </ConnectedRouter>
);

export default AppRouter;