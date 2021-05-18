import React from 'react';
import { Typography } from '@material-ui/core';
import { Provider } from 'react-redux';
import { store } from './store';
import { ReadStore } from './components/ReadStore';
import { UpdateStore } from './components/UpdateStore';
export default (()=>{
    return(/*#__PURE__*/ React.createElement(Provider, {
        store: store
    }, /*#__PURE__*/ React.createElement(Typography, null, "This example shows using context as a dependency injection. Useful for tests or building framework level components."), /*#__PURE__*/ React.createElement(ReadStore, null), /*#__PURE__*/ React.createElement(UpdateStore, null)));
});
