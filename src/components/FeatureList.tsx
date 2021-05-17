import React from 'react';
import { GridList, GridListTile } from '@material-ui/core';
import { FeatureItem } from './Feature';
import { Feature } from '../types';

/**
 * Represent a list of example features.
 * @returns
 */
export const FeatureList = ({ features }: { features: Array<Feature> }) => {
  return (
    <GridList cols={4}>
      {features.map((f) => {
        return (
          <GridListTile key={f.path}>
            <FeatureItem name={f.name} path={f.path} />
          </GridListTile>
        );
      })}
    </GridList>
  );
};
