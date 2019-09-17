import React from 'react';
import { Map } from 'immutable';
import { ModuleEvents } from './Actions';

const InitialState = new Map({
  UserType:null,

});

export const Reducer = (state = InitialState, action) => {
  const { type, payload } = action;

  switch (type) {
    
   

    case ModuleEvents.LOADING:{
      return state.set('loadingScreen',payload)
    } 



    default:
      return state;
  }
};
