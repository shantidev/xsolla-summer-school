import React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import { history } from '../store/configureStore';
import ROUTES from '../constants/routes';

import TransactionsTable from '../pages';
import Projects from '../pages/projects';
import Statistics from '../pages/statistics';
import Error404 from '../pages/404';

const AppRouter = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route exact path={ROUTES.index} component={TransactionsTable}/>
      <Route exact path={ROUTES.projects} component={Projects}/>
      {/*<Route exact path={ROUTES.statistics} component={Statistics}/>*/}
      <Route exact path={ROUTES['404']} component={Error404}/>
      <Redirect from="*" to={ROUTES['404']}/>
    </Switch>
  </ConnectedRouter>
);

export default AppRouter;