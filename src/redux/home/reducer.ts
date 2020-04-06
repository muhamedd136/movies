import homeActionTypes from './types';

const INITIAL_STATE = {
  isSearching: false,
  searchQuery: '',
  focusedTab: 2,
};

const homeReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case homeActionTypes.CHANGE_TAB:
      return {
        ...state,
        focusedTab: action.payload,
      };
    case homeActionTypes.SET_SEARCH_QUERY:
      return {
        ...state,
        searchQuery: action.payload,
      };
    case homeActionTypes.SET_IS_SEARCHING:
      return {
        ...state,
        isSearching: action.payload,
      };
    default:
      return state;
  }
};

export default homeReducer;
