import init from './init';

// setup basic project structure
describe('Init project structure', () => {
  // setup project structure with specific technologies
  it('Inits with redux-observable adapter', () => {
    expect(init()).toBe('hell yeah');
  });
});
