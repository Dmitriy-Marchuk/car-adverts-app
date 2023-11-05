export const handleMinMileageChange = (e, setMinPrice) => {
  const input = e.target.value;
  if (/^\d*$/.test(input)) {
    setMinPrice(input);
  }
};
export const handleMaxMileageChange = (e, setMaxPrice) => {
  const input = e.target.value;
  if (/^\d*$/.test(input)) {
    setMaxPrice(input);
  }
};
