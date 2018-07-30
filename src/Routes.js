import React from 'react';
import { Router } from 'react-router';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';
import * as ROUTE from './constants/routes';
import { compose } from 'redux';
import { connect } from 'react-redux';

import Login from './views/Login';
import Home from './views/Home';
import Register from './views/Register';

import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory();

const withIsLoggedIn = compose(
  withRouter,
  connect(state => ({
    isLoggedIn: false, //it will be taken from state //state.user.id !== undefined,
  }))
);

const _PrivateRoute = ({ isLoggedIn, component: Component, ...rest }) => (
  <Route {...rest}>
    {props =>
      isLoggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect to={ROUTE.LOGIN} from={props.path} />
      )
    }
  </Route>
);

const _PublicRoute = ({ isLoggedIn, component: Component, ...rest }) => (
  <Route {...rest}>
    {props =>
      isLoggedIn ? (
        <Redirect to={props.history.from || ROUTE.ROOT} />
      ) : (
        <Component {...props} />
      )
    }
  </Route>
);

const PrivateRoute = withIsLoggedIn(_PrivateRoute);
const PublicRoute = withIsLoggedIn(_PublicRoute);

const Routes = () => (
  <Router history={history}>
    <Switch>
      <PublicRoute exact path={ROUTE.LOGIN} component={Login} />
      <PublicRoute exact path={ROUTE.REGISTER} component={Register} />
      <PrivateRoute exact path={ROUTE.ROOT} component={Home} />
    </Switch>
  </Router>
);

export default Routes;
