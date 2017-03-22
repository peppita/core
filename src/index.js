import { createStore, combineReducers, applyMiddleware } from 'redux';

import projectReducer from './reducers/projectReducer';

export const projectReducers = {
  peppita: projectReducer,
};

export const projectMiddlewares = [];
