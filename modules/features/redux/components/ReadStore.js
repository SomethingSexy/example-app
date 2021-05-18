import React from 'react';
import { useSelector } from 'react-redux';
import { Typography } from '@material-ui/core';
import { getFoo } from '../selectors/foo';
export const ReadStore = ()=>{
    const value = useSelector(getFoo);
    return(/*#__PURE__*/ React.createElement(Typography, null, value));
};
