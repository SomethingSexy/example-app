import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { updateFoo } from './actions/foo';

export const reducers = combineReducers({
  foo: createReducer({ state: 'initial' }, (builder) =>
    builder.addCase(updateFoo, (state, action) => {
      state.state = action.payload.state;
    })
  ),
});
