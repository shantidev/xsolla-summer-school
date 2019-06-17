import React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import { history } from '../store/configureStore';

import Test from '../components/Test';
import Error404 from '../pages/404';

const AppRouter = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route exact path="/" component={Test}/>
      <Route exact path="/404" component={Error404}/>
      <Redirect from="*" to="/404"/>
    </Switch>
  </ConnectedRouter>
);

export default AppRouter;