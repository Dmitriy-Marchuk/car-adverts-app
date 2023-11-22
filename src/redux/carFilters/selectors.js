export const selectPricePerHour = (state) =>
  state.carFilters.filters.pricePerHour;
export const selectModel = (state) => state.carFilters.filters.model;
export const setMinMileage = (state) => state.carFilters.filters.minMileage;
export const setMaxMileage = (state) => state.carFilters.filters.maxMileage;
export const resetFilters = (state) => state.carFilters.filters;
