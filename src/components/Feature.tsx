import React from 'react';
import { Card, CardActions, CardContent, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import type { Feature } from '../types';

/**
 * Represents an example feature.
 * @returns
 */
export const FeatureItem = ({ name, path }: Feature) => {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography>{name}</Typography>
      </CardContent>
      <CardActions>
        <Typography>
          <Link to={path}>See Example</Link>
        </Typography>
      </CardActions>
    </Card>
  );
};
