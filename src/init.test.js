import {
  combineReducers, createStore, applyMiddleware,
  middelwareReturnMock, storeMock,
} from 'redux';
import init from './init';

import projectReducer from './reducers/projectReducer';

jest.mock('redux', () => {
  const mockedStore = {};
  const middlewareReturn = {};
  return {
    createStore: jest.fn(() => mockedStore),
    combineReducers: jest.fn(state => state),
    applyMiddleware: jest.fn((middlewares) => middlewareReturn), // eslint-disable-line
    storeMock: mockedStore,
    middelwareReturnMock: middlewareReturn,
  };
});

// setup basic project structure
describe('Init project structure', () => {
  beforeEach(() => {
    createStore.mockClear();
    combineReducers.mockClear();
    applyMiddleware.mockClear();
  });

  const middlewares = [
    test1 => test1,
    test2 => test2,
  ];
  const addedReducer = state => state;

  it('Inits with redux store', () => {
    expect(init()).toBe(storeMock);
    expect(createStore).toHaveBeenCalledTimes(1);
    expect(combineReducers).toHaveBeenCalledTimes(0);
    expect(createStore.mock.calls[0][0]).toBe(projectReducer);
  });

  it('Takes reducers as argument and adds them to the store', () => {
    const combineCall = {
      peppita: projectReducer,
      added: addedReducer,
    };
    expect(init({
      reducers: { added: addedReducer },
    })).toBe(storeMock);
    expect(combineReducers).toHaveBeenCalledTimes(1);
    expect(combineReducers.mock.calls[0][0]).toMatchObject(combineCall);
  });

  it('Takes additional middelware and applies it to the store', () => {
    expect(init({
      middlewares,
    })).toBe(storeMock);
    expect(createStore).toHaveBeenCalledTimes(1);
    expect(applyMiddleware).toHaveBeenCalledTimes(1);
    expect(createStore.mock.calls[0][0]).toBe(projectReducer);
    expect(createStore.mock.calls[0][1]).toBe(middelwareReturnMock);
    expect(applyMiddleware.mock.calls[0]).toEqual(expect.arrayContaining(middlewares));
  });

  it('Takes additional middleware and reducers and returns store', () => {
    expect(init({
      reducers: { addedReducer },
      middlewares,
    })).toBe(storeMock);
    expect(createStore).toHaveBeenCalledTimes(1);
    expect(applyMiddleware).toHaveBeenCalledTimes(1);
    expect(createStore.mock.calls[0][0]).toMatchObject({
      addedReducer,
      peppita: projectReducer,
    });
    expect(createStore.mock.calls[0][1]).toBe(middelwareReturnMock);
    expect(applyMiddleware.mock.calls[0]).toEqual(expect.arrayContaining(middlewares));
  });
});
