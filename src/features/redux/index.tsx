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
        This example shows using context as a dependency injection. Useful for
        tests or building framework level components.
      </Typography>
      <ReadStore />
      <UpdateStore />
    </Provider>
  );
};
