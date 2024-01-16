import { useState } from "react";
import Select from "react-select";
import { useDispatch } from "react-redux";

import {
  setModel as setCarModel,
  setPricePerHour as setCarPricePerHour,
  setMinMileage as setCarMinMileage,
  setMaxMileage as setCarMaxMileage,
} from "redux/carFilters/carFiltersSlice";

import carNames from "services/makes.json";
import pricePerHourOptions from "services/pricePerHourOptions";
import { handleMileageChange } from "Utils/minMaxMileage";

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
  const [selectedModel, setSelectedModel] = useState(null);
  const [selectedPricePerHour, setSelectedPricePerHour] = useState(null);
  const [selectedMinMileage, setSelectedMinMileage] = useState("");
  const [selectedMaxMileage, setSelectedMaxMileage] = useState("");

  const dispatch = useDispatch();

  const carOptions = carNames.map((make) => ({
    value: make,
    label: make,
  }));

  const handleCarChange = (selectedOption) => {
    setSelectedModel(selectedOption);
  };
  const handlePriceChange = (selectedOption) => {
    setSelectedPricePerHour(selectedOption);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (
      selectedModel !== null ||
      selectedPricePerHour !== null ||
      selectedMinMileage !== "" ||
      selectedMaxMileage !== ""
    ) {
      dispatch(setCarModel(selectedModel));
      dispatch(setCarPricePerHour(selectedPricePerHour));
      dispatch(setCarMinMileage(selectedMinMileage));
      dispatch(setCarMaxMileage(selectedMaxMileage));
    } else return console.log("Please select at least one parameter");
  };

  return (
    <StyledForm onSubmit={handleSearch}>
      <InputWrapper>
        <StyledLabel htmlFor="car-select">Car brand</StyledLabel>
        <Select
          styles={selectCarStyles}
          id="car-select"
          options={carOptions}
          value={selectedModel}
          onChange={handleCarChange}
          isSearchable={true}
          placeholder="Enter the text"
          noOptionsMessage={() => "Car brand not found"}
        />
      </InputWrapper>
      <InputWrapper>
        <StyledLabel htmlFor="price-monthly">Price / 1 hour</StyledLabel>
        <Select
          styles={selectMonthlyPriceStyles}
          id="price-monthly"
          options={pricePerHourOptions}
          value={selectedPricePerHour}
          onChange={handlePriceChange}
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
            value={selectedMinMileage}
            onChange={(e) => handleMileageChange(e, setSelectedMinMileage)}
          />
          <InputMilageToStyled
            type="text"
            id="max-price"
            placeholder="To"
            value={selectedMaxMileage}
            onChange={(e) => handleMileageChange(e, setSelectedMaxMileage)}
          />
        </CarMilageWrapper>
      </InputWrapper>
      <StyledSearchBtn>Search</StyledSearchBtn>
    </StyledForm>
  );
};

export default SearchForm;
