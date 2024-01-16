export const handleMileageChange = (e, setChangePrice) => {
  const input = e.target.value;
  if (/^\d*$/.test(input)) {
    setChangePrice(input);
  }
};
