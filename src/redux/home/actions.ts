import homeActionTypes from './types';

export const changeTab = (focusedTab: number) => ({
  type: homeActionTypes.CHANGE_TAB,
  payload: focusedTab,
});

export const setSearchQuery = (searchQuery: string) => ({
  type: homeActionTypes.SET_SEARCH_QUERY,
  payload: searchQuery,
});

export const setIsSearching = (isSearching: boolean) => ({
  type: homeActionTypes.SET_IS_SEARCHING,
  payload: isSearching,
});
