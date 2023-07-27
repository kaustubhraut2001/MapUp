import { combineReducers } from 'redux';
import { SET_SELECTED_REGION, SET_REGION_INFO } from './actionTypes';

const selectedRegionReducer = (state = null, action) => {
  switch (action.type) {
    case SET_SELECTED_REGION:
      return action.payload;
    default:
      return state;
  }
};

const regionInfoReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_REGION_INFO:
      return action.payload;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  selectedRegion: selectedRegionReducer,
  regionInfo: regionInfoReducer,
});

export default rootReducer;
