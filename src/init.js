import { createStore, combineReducers, applyMiddleware } from 'redux';

import projectReducer from './reducers/projectReducer';

export default function ({
  reducers: reducers = {},
  middlewares: middlewares = [],
} = {}) {
  let reducer = projectReducer;

  if (Object.keys(reducers).length !== 0) {
    reducer = combineReducers(Object.assign({
      peppita: projectReducer,
    }, reducers));
  }

  if (middlewares.length) {
    return createStore(
      reducer,
      applyMiddleware(...middlewares),
    );
  }

  return createStore(reducer);
}
