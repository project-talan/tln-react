import React  from 'react';
import { withRouter } from 'react-router';
import * as Cookie from "js-cookie";

export default function requireAuth(Component, authService) {
  class AuthenticatedComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        auth: Cookie.get('auth')
      }
    }

    componentDidMount() {
      this.checkAuth();
    }

    checkAuth() {
      const location = this.props.location;
      const redirect = location.pathname + location.search;
      if (!authService.isAuthenticated()) {
        this.props.history.push(`/login?redirect=${redirect}`);
      }
    }

    render() {
      return authService.isAuthenticated() ? <Component { ...this.props } /> : null;
    }
  }

  return  withRouter(AuthenticatedComponent)
}