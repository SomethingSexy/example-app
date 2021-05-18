import { createAction } from '@reduxjs/toolkit';

export const updateFoo = createAction<{ state: string }>(
  '@example-app/foo/update'
);
