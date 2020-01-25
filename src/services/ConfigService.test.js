import React from 'react';
import ReactDOM from 'react-dom';
import createConfigService from './ConfigService';

it('initiate without crashing', () => {
  const service = createConfigService();
});
