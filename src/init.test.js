import init from './init.js';

describe('Init project structure', () => {

    it('Inits with redux-observable adapter', () => {
      expect(init()).toBe('hell yeah');
    });
});
