import React from 'react';
import ReactDOM from 'react-dom';
import createAuthService from './AuthService';

it('initiate without crashing', () => {
  const service = createAuthService(null, null);
});
