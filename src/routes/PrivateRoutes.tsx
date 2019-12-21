import React, { useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Routes } from 'models';
import {
  LoginPage,
  RegisterPage,
  JobListPage,
  EmployerJobsPage,
  CandidatesPage,
  EmployerStagePage,
  JobDetail,
} from 'pages';
import { EmployeeOverview } from 'pages';

export const PrivateRoute = ({ component: Component, ...rest }: any) => {
  const [auth, setAuth] = useState(
    localStorage.getItem('accessToken') && localStorage.getItem('refreshToken'),
  );
  return (
    <>
      <Route
        {...rest}
        render={props =>
          auth ? <Component {...props} /> : <Redirect to='/' />
        }
      />{' '}
    </>
  );
};

export const PrivateRoutes: Routes[] = [
  { path: '/dashboard', component: EmployerJobsPage, exact: true },
  { path: '/candidates', component: CandidatesPage, exact: false },
  { path: '/stage/:id', component: EmployerStagePage, exact: false },
  { path: '/EmployerOverview', component: EmployeeOverview, exact: false },
];
