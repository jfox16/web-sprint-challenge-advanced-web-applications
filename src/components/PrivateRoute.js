
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = (props) => {
  const { component: Component, children, ...rest } = props;

  const render = (props) => {
    const token = localStorage.getItem('token');
    if (!token) {
      return <Redirect to='/' />;
    }
    if (Component) {
      return <Component {...props} />
    }
    return children;
  }

  return (
    <Route {...rest} render={render} />
  );
}

export default PrivateRoute;
