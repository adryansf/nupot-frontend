import React from 'react';
import PropTypes from 'prop-types';
import {
  Route,
  // Redirect
} from 'react-router-dom';

// Layouts
import Default from '~/styles/layouts/Default';

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  // const signed;

  // if (!signed && isPrivate) {
  //   return <Redirect to="/" />;
  // }

  // if (signed && !isPrivate) {
  //   return <Redirect to="/dashboard" />;
  // }

  // const Layout = signed ? DefaultLayout : AuthLayout;

  return (
    <Route
      {...rest}
      render={props => (
        <Default>
          <Component {...props} />
        </Default>
      )}
    />
  );
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};
