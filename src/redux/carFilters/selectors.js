export const selectPricePerHour = (state) => state.carFilters.pricePerHour;
export const selectModel = (state) => state.carFilters.model;
export const setMinMileage = (state) => state.carFilters.minMileage;
export const setMaxMileage = (state) => state.carFilters.maxMileage;
export const resetFilters = (state) => state.carFilters.filters;
