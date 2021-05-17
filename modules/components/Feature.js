import React from 'react';
import { Card, CardActions, CardContent, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
/**
 * Represents an example feature.
 * @returns
 */ export const FeatureItem = ({ name , path  })=>{
    return(/*#__PURE__*/ React.createElement(Card, {
        variant: "outlined"
    }, /*#__PURE__*/ React.createElement(CardContent, null, /*#__PURE__*/ React.createElement(Typography, null, name)), /*#__PURE__*/ React.createElement(CardActions, null, /*#__PURE__*/ React.createElement(Typography, null, /*#__PURE__*/ React.createElement(Link, {
        to: path
    }, "See Example")))));
};
