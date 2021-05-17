import React, { useEffect, useState } from 'react';
import { Typography } from '@material-ui/core';
import { FeatureContext } from './context';
import { UseFoo } from './components/UseFoo';

const funcs = {
  getFoo: () => Promise.resolve('retrieve foo from service call')
}

export default () => {
  return (
    <FeatureContext.Provider value={funcs}>
      <Typography>
        This example shows using context as a dependency injection.  Useful for tests or building framework level components.
      </Typography>
      <UseFoo />
    </FeatureContext.Provider>
  );
};
