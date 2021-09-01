import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import {
  ROOT,
  APP_CREATE,
  APP_STATUS,
  APP_GET_STATUS,
  APP_SUCCESS,
  ADMIN,
  ADMIN_APP_LIST,
  ADMIN_APP_STATUS,
} from './CONSTANTS';
import { NotFound } from './NotFound';
import { Link } from 'react-router-dom';
import UserForm from '../pages/ApplicationForm';
import FormSuccess from '../pages/FormSuccess';
import ApplicationCheck from '../pages/ApplicationCheck';
import ApplicationStatus from '../pages/ApplicationStatus';
import Admin from '../pages/Admin';
import AdminAppList from '../pages/AdminAppList';
import AdminStatus from '../pages/AdminStatus';
import PrivateRoute from '../navigation/Admin/PrivateRoute';

export const RouterConfig = () => {
  return (
    <div>
      <Switch>
        {/* List all public routes here */}
        <Route exact path={ROOT}>
          <Redirect exact from="/" to={APP_CREATE} />
        </Route>
        <Route exact path={APP_CREATE}>
          <UserForm />
        </Route>
        <Route exact path={APP_SUCCESS}>
          <FormSuccess />
        </Route>
        <Route exact path={APP_STATUS}>
          <ApplicationCheck />
        </Route>
        <Route exact path={APP_GET_STATUS}>
          <ApplicationStatus />
        </Route>
        <Route exact path={ADMIN}>
          <Admin />
        </Route>
        <PrivateRoute component={AdminAppList} exact path={ADMIN_APP_LIST} />
        <PrivateRoute component={AdminStatus} exact path={ADMIN_APP_STATUS} />

        {/* List all private/auth routes here */}

        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
};
