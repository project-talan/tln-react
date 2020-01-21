import React from 'react';
import ReactDOM from 'react-dom';
import getAuthService from './AuthService';

it('initiate without crashing', () => {
  const service = getAuthService();
});
