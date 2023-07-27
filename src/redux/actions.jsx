import { SET_SELECTED_REGION, SET_REGION_INFO } from './actionTypes';

export const setSelectedRegion = (region) => ({
  type: SET_SELECTED_REGION,
  payload: region,
});

export const setRegionInfo = (info) => ({
  type: SET_REGION_INFO,
  payload: info,
});
