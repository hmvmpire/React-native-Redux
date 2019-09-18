import React from 'react';
import ModuleSet from './AppModules';
// import dataReducer from "./Reducers";
var _ = require('lodash');
//import _ from 'underscore';

// metro bundler
const reducerModule = {
  common: require(`./../../redux/common/Reducer`)
};

const Reducers = _(ModuleSet)
  .keyBy(module => module)
  .mapValues(module => {
    return reducerModule[module];
  })
  .mapValues(module => module.Reducer)
  .value();

export default Reducers;
