import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {
  AppBar,
  Box,
  Container,
  IconButton,
  Typography,
  Toolbar,
} from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';
import { FeatureList } from './FeatureList';
import RootContext from '../features/context/index';

const features = [{ name: 'foo', path: '/context', Component: RootContext }];

export const Application = () => {
  return (
    <BrowserRouter>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="open drawer">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">Examples</Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <Box pt={5}>
          <FeatureList features={features} />
        </Box>
        <Box>
          <Switch>
            {features.map((f) => (
              <Route key={f.path} path={f.path}>
                <f.Component />
              </Route>
            ))}
          </Switch>
        </Box>
      </Container>
    </BrowserRouter>
  );
};
