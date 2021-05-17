import React from 'react';
import { Typography } from '@material-ui/core';
import { FeatureContext } from './context';
import { UseFoo } from './components/UseFoo';
const funcs = {
    getFoo: ()=>Promise.resolve('retrieve foo from service call')
};
export default (()=>{
    return(/*#__PURE__*/ React.createElement(FeatureContext.Provider, {
        value: funcs
    }, /*#__PURE__*/ React.createElement(Typography, null, "This example shows using context as a dependency injection. Useful for tests or building framework level components."), /*#__PURE__*/ React.createElement(UseFoo, null)));
});
