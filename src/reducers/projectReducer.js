import Immutable from 'immutable';

export const defaultConfig = {
  peppita: {
    editProject: {
      name: 'editProject',
    },
    creatProject: {
      name: 'createProject',
    },
  },
};

let mainConfig;

function setMainConfig(config) {
  mainConfig = Object.assign({}, defaultConfig, config);
}

function getMainConfig() {
  return Immutable.fromJS(mainConfig || defaultConfig);
}

function mainReducer(state = getMainConfig(), action) {
  if (action.type === 'editProject') {
    return state.set('projectBeingEdited', Immutable.fromJS({
      name: undefined,
      type: undefined,
    }));
  }
  return state;
}

export default (config = {}) => {
  setMainConfig(config);
  return mainReducer;
};
