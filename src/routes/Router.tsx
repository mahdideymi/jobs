import React, { FC } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { PrivateRoute, PrivateRoutes, PublicRoutes } from 'routes';
import { EmployerLayout } from 'layouts';
import { useSelector } from 'react-redux';
import { REGISTER_SUCCESS } from 'store/actionTypes';
export const Routes: FC = () => {
  // const result: any = useSelector((state: any) => {
  //   return { auth: state.login.status === REGISTER_SUCCESS ? true : false };
  // });
  return (
    <BrowserRouter>
      <Switch>
        {PublicRoutes.map((route, idx) => {
          return (
            <Route
              key={idx}
              path={route.path}
              component={route.component}
              exact={route.exact}
            />
          );
        })}
        <EmployerLayout>
          {PrivateRoutes.map((route, idx) => {
            return (
              <PrivateRoute
                key={idx}
                path={route.path}
                component={route.component}
                exact={route.exact}
              />
            );
          })}
        </EmployerLayout>
      </Switch>
      {/* <Redirect from="*" to="/login" /> */}
    </BrowserRouter>
  );
};
