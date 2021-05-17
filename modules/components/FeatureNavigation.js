import React from "react";
import { Card, CardContent, GridList, GridListTile, Typography } from '@material-ui/core';
export const FeatureNavigation = ({ features  })=>{
    return(/*#__PURE__*/ React.createElement(GridList, {
        cols: 4
    }, features.map((f)=>{
        return(/*#__PURE__*/ React.createElement(GridListTile, null, /*#__PURE__*/ React.createElement(Card, {
            variant: "outlined"
        }, /*#__PURE__*/ React.createElement(CardContent, null, /*#__PURE__*/ React.createElement(Typography, null, f.name)))));
    })));
};
