export const SEARCH_EXPLORATION_WITH_FILTERS = 'SEARCH_EXPLORATION_WITH_FILTERS';

export const searchExplorationWithFilters = (filters) => ({
  type: SEARCH_EXPLORATION_WITH_FILTERS,
  filters,
});
