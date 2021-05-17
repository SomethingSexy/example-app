import React, { useEffect, useState } from "react";
import { ChildA } from "./components/ChildA";
import { FeatureContext } from "./context";
export default (()=>{
    const [contextValue, setContextValue] = useState({
        state: 'foo'
    });
    useEffect(()=>{
        const timer = setTimeout(()=>{
            setContextValue({
                state: 'bar'
            });
        }, 1000);
        return ()=>clearTimeout(timer)
        ;
    }, []);
    return(/*#__PURE__*/ React.createElement(FeatureContext.Provider, {
        value: contextValue
    }, /*#__PURE__*/ React.createElement("div", null, "This example shows context being pulled in multiple levels deep."), /*#__PURE__*/ React.createElement(ChildA, null)));
});
