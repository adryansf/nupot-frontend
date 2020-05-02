import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

// Layouts
import DefaultLayout from '~/styles/layouts/Default';
import AuthLayout from '~/styles/layouts/Auth';

// Auth state
import { useAuth } from '~/contexts/AuthContext';

export default function RouteWrapper({
  component: Component,
  isPrivate,
  notAuthOnly,
  ...rest
}) {
  const [signed] = useAuth();

  if (!signed && isPrivate) {
    return <Redirect to="/login" />;
  }

  if (signed && notAuthOnly) {
    return <Redirect to="/" />;
  }

  const Layout = signed ? DefaultLayout : AuthLayout;

  return (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  notAuthOnly: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
  notAuthOnly: false,
};
