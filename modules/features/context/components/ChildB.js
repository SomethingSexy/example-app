import React, { useContext } from 'react';
import { Typography } from '@material-ui/core';
import { FeatureContext } from '../context';
export const ChildB = ()=>{
    const value = useContext(FeatureContext);
    return(/*#__PURE__*/ React.createElement(Typography, null, value.state));
};
