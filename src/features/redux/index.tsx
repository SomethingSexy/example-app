import React from 'react';
import { Typography } from '@material-ui/core';
import { Provider } from 'react-redux';
import { store } from './store';
import { ReadStore } from './components/ReadStore';
import { UpdateStore } from './components/UpdateStore';

export default () => {
  return (
    <Provider store={store}>
      <Typography>
        This example shows a simple setup of @reduxjs/toolkit and react-redux
      </Typography>
      <ReadStore />
      <UpdateStore />
    </Provider>
  );
};
