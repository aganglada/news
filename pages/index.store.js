import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import reducer from './index.reducer';

export default () =>
  createStore(
    reducer,
    {
      sources: [],
      posts: []
    },
    applyMiddleware(thunkMiddleware)
  );
