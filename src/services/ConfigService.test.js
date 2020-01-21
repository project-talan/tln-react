import React from 'react';
import ReactDOM from 'react-dom';
import getConfigService from './ConfigService';

it('initiate without crashing', () => {
  const service = getConfigService();
});
