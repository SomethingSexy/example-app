import React, { useContext } from 'react';
import { Typography } from '@material-ui/core';
import { FeatureContext } from '../context';

export const ChildB = () => {
  const value = useContext(FeatureContext);
  return <Typography>{value.state}</Typography>;
};
