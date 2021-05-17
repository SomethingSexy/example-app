import React, { useEffect, useState } from 'react';
import { Typography } from '@material-ui/core';
import { ChildA } from './components/ChildA';
import { FeatureContext } from './context';

export default () => {
  const [contextValue, setContextValue] = useState({ state: 'foo' });

  useEffect(() => {
    const timer = setTimeout(() => {
      setContextValue({ state: 'bar' });
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <FeatureContext.Provider value={contextValue}>
      <Typography>
        This example shows context being pulled in multiple levels deep.
      </Typography>
      <ChildA />
    </FeatureContext.Provider>
  );
};
