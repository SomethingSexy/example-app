import React from 'react';
import { GridList, GridListTile } from '@material-ui/core';
import { FeatureItem } from './Feature';
/**
 * Represent a list of example features.
 * @returns
 */ export const FeatureList = ({ features  })=>{
    return(/*#__PURE__*/ React.createElement(GridList, {
        cols: 4
    }, features.map((f)=>{
        return(/*#__PURE__*/ React.createElement(GridListTile, {
            key: f.path
        }, /*#__PURE__*/ React.createElement(FeatureItem, {
            name: f.name,
            path: f.path
        })));
    })));
};
