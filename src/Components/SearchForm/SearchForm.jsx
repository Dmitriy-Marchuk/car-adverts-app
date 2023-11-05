import { useState } from "react";
import Select from "react-select";

import carNames from "services/makes.json";
import monthlyOptions from "services/monthlyOptions";
import {
  handleMaxMileageChange,
  handleMinMileageChange,
} from "Utils/minMaxMileage";

import {
  CarMilageWrapper,
  InputMilageFromStyled,
  InputMilageToStyled,
  InputWrapper,
  StyledForm,
  StyledLabel,
  StyledSearchBtn,
  selectCarStyles,
  selectMonthlyPriceStyles,
} from "Components/SearchForm/SearchForm.styled";

const SearchForm = () => {
  const [selectedCar, setSelectedCar] = useState(null);
  const [selectedMonthlyPrice, setselectedMonthlyPrice] = useState(null);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const carOptions = carNames.map((make) => ({
    value: make,
    label: make,
  }));

  const handleCarChange = (selectedOption) => {
    setSelectedCar(selectedOption);
  };
  const handleMonthlyPriceChange = (selectedOption) => {
    setselectedMonthlyPrice(selectedOption);
  };

  // const handleMinPriceChange = (e) => {
  //   const input = e.target.value;
  //   if (/^\d*$/.test(input)) {
  //     setMinPrice(input);
  //   }
  // };
  // const handleMaxPriceChange = (e) => {
  //   const input = e.target.value;
  //   if (/^\d*$/.test(input)) {
  //     setMaxPrice(input);
  //   }
  // };

  return (
    <StyledForm>
      <InputWrapper>
        <StyledLabel htmlFor="car-select">Car brand</StyledLabel>
        <Select
          styles={selectCarStyles}
          id="car-select"
          options={carOptions}
          value={selectedCar}
          onChange={handleCarChange}
          isSearchable={true}
          placeholder="Enter the text"
          noOptionsMessage={() => "Car brand not found"}
        />
      </InputWrapper>
      <InputWrapper>
        <StyledLabel htmlFor="price-monthly">Price/ 1 hour</StyledLabel>
        <Select
          styles={selectMonthlyPriceStyles}
          id="price-monthly"
          options={monthlyOptions}
          value={selectedMonthlyPrice}
          onChange={handleMonthlyPriceChange}
          isSearchable={false}
          placeholder="To $"
        />
      </InputWrapper>
      <InputWrapper>
        <StyledLabel htmlFor="min-price">Car Mileage / km:</StyledLabel>
        <CarMilageWrapper>
          <InputMilageFromStyled
            type="text"
            id="min-price"
            placeholder="From"
            value={minPrice}
            onChange={(e) => handleMinMileageChange(e, setMinPrice)}
          />
          <InputMilageToStyled
            type="text"
            id="max-price"
            placeholder="To"
            value={maxPrice}
            onChange={(e) => handleMaxMileageChange(e, setMaxPrice)}
          />
        </CarMilageWrapper>
      </InputWrapper>
      <StyledSearchBtn>Search</StyledSearchBtn>
    </StyledForm>
  );
};

export default SearchForm;
