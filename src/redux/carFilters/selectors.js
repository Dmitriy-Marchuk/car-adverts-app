export const selectCarFilters = (state) => state.carFilters.filters;
export const selectSelectedCar = (state) =>
  state.carFilters.filters.selectedCar;
export const selectSelectedPricePerHour = (state) =>
  state.carFilters.filters.selectedPricePerHour;
export const selectMinMileage = (state) => state.carFilters.filters.minMileage;
export const selectMaxMileage = (state) => state.carFilters.filters.maxMileage;
