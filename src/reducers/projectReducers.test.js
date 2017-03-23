import projectReducer from './projectReducer';


describe('main project reducer actions', () => {
  it('returns same state on unkown action', () => {
    const testState = { test: 'testing' };
    expect(projectReducer(testState, { type: 'asdf' })).toBe(testState);
  });
});
