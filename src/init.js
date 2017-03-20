import { createStore, combineReducers, applyMiddleware } from 'redux';

import projectReducer from './reducers/projectReducer';

export const projectReducers = {
  peppita: projectReducer,
};

export const projectMiddlewares = [];

export default function ({
  reducers: reducers = {},
  middlewares: middlewares = [],
} = {}) {
  let reducer = projectReducer;

  if (Object.keys(reducers).length !== 0) {
    reducer = combineReducers(Object.assign(projectReducers, reducers));
  }

  if (middlewares.length) {
    return createStore(
      reducer,
      applyMiddleware(...middlewares),
    );
  }

  return createStore(reducer);
}
