import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AppBar, Box, Container, IconButton, Typography, Toolbar } from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';
import { FeatureList } from './FeatureList';
import RootContext from '../features/context/index';
import RootContextDI from '../features/context-as-di/index';
const features = [
    {
        name: 'Context',
        path: '/context',
        Component: RootContext
    },
    {
        name: 'Context as DI',
        path: '/contextdi',
        Component: RootContextDI
    }
];
export const Application = ()=>{
    return(/*#__PURE__*/ React.createElement(BrowserRouter, null, /*#__PURE__*/ React.createElement(AppBar, {
        position: "static"
    }, /*#__PURE__*/ React.createElement(Toolbar, null, /*#__PURE__*/ React.createElement(IconButton, {
        edge: "start",
        color: "inherit",
        "aria-label": "open drawer"
    }, /*#__PURE__*/ React.createElement(MenuIcon, null)), /*#__PURE__*/ React.createElement(Typography, {
        variant: "h6"
    }, "Examples"))), /*#__PURE__*/ React.createElement(Container, null, /*#__PURE__*/ React.createElement(Box, {
        pt: 5
    }, /*#__PURE__*/ React.createElement(FeatureList, {
        features: features
    })), /*#__PURE__*/ React.createElement(Box, null, /*#__PURE__*/ React.createElement(Switch, null, features.map((f)=>/*#__PURE__*/ React.createElement(Route, {
            key: f.path,
            path: f.path
        }, /*#__PURE__*/ React.createElement(f.Component, null))
    ))))));
};
