import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import reducer from './index.reducer';

export const makeStore = (initialState = {}) =>
  createStore(
    reducer,
    {
      ...initialState,
      sources: [],
      posts: []
    },
    applyMiddleware(thunkMiddleware)
  );
