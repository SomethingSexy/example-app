import { createSelector } from '@reduxjs/toolkit';
export const getFoo = createSelector((state)=>state.foo.state
, (v)=>v
);
