import projectReducer, { defaultConfig } from './projectReducer';
import { createProject } from  '../actions/projectActions';


describe('main project reducer actions', () => {
  let reducer;
  let initialState;

  beforeEach(() => {
    reducer = projectReducer();
    initialState = reducer(undefined, { type: '@@INIT' });
  });

  it('returns same state on unkown action', () => {
    expect(reducer(initialState, { type: 'asdf' })).toBe(initialState);
  });

  it('init projectstore with defaultConfig', () => {
    expect(initialState.toJS()).toMatchObject(defaultConfig);
  });

  it('create project inits projectEdited item', () => {
    reducer(initialState, createProject());
  });
});
