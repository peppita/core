import { createStore } from 'redux';
import init from './init';

jest.mock('redux', () => ({
  createStore: jest.fn(() => 'pseudo store object'),
}));

// setup basic project structure
describe('Init project structure', () => {
  beforeEach(() => {
    createStore.mockClear();
  });

  it('Inits with redux store', () => {
    expect(init()).toBe('pseudo store object');
    expect(createStore).toHaveBeenCalledTimes(1);
  });
});
