import React from 'react';
import ReactDOM from 'react-dom';
import createConnectionService from './ConnectionService';

it('initiate without crashing', () => {
  const service = createConnectionService(null);
});
