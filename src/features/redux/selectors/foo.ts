import { createSelector } from '@reduxjs/toolkit';
import { StoreState } from '../types';

export const getFoo = createSelector<StoreState, string, string>(
  state => state.foo.state,
  v => v // lol but example
)