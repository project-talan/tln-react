import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from "react-router-dom";
import Logout from './Logout';

class AuthService {
  logout() {
  }
}

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MemoryRouter><Logout authService={new AuthService()}/></MemoryRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
