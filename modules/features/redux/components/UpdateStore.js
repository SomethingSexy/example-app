import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@material-ui/core';
import { updateFoo } from '../actions/foo';
import { getFoo } from '../selectors/foo';
export const UpdateStore = ()=>{
    const dispatch = useDispatch();
    const value = useSelector(getFoo);
    const isLoadingOrLoaded = useMemo(()=>value === 'loading' || value === 'loaded'
    , [
        value
    ]);
    const handleOnClick = ()=>{
        updateFoo({
            state: 'loading'
        });
        setTimeout(()=>{
            dispatch(updateFoo({
                state: 'loaded'
            }));
        }, 500);
    };
    return(/*#__PURE__*/ React.createElement(Button, {
        disabled: isLoadingOrLoaded,
        onClick: handleOnClick
    }, "Update Store"));
};
