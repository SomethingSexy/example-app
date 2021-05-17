import { createContext } from 'react';

/**
 * This could represent a series of interfaces, functions, or gateways into different parts
 * of the system.  Or simply a way to better testing without having to do more complex mocking.
 */
export const FeatureContext = createContext({
  getFoo: () => Promise.resolve(null)
});