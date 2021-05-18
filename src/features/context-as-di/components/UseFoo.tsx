import React, { useContext, useEffect, useState } from 'react';
import { Typography } from '@material-ui/core';
import { FeatureContext } from '../context';

export const UseFoo = () => {
  const context = useContext(FeatureContext);
  const [value, setValue] = useState(null);

  useEffect(() => {
    context.getFoo().then(setValue);
  }, []);

  return <Typography>{value ?? 'Not loaded yet'}</Typography>;
};
