import { useState } from "react";
import Select from "react-select";
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
} from "./SearchForm.styled";

const SearchForm = () => {
  const options = [
    { value: "car1", label: "Автомобиль 1" },
    { value: "car2", label: "Автомобиль 2" },
    { value: "car3", label: "Автомобиль 3" },
  ];
  const priceMonthlyOptions = [
    { value: 10, label: "10" },
    { value: 20, label: "20" },
    { value: 30, label: "30" },
    { value: 40, label: "40" },
    { value: 50, label: "50" },
    { value: 60, label: "60" },
    { value: 70, label: "70" },
    { value: 80, label: "80" },
    { value: 90, label: "90" },
    { value: 100, label: "100 +" },
  ];
  const [selectedCar, setSelectedCar] = useState(null);
  const [selectedMonthlyPrice, setselectedMonthlyPrice] = useState(null);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const handleCarChange = (selectedOption) => {
    setSelectedCar(selectedOption);
  };
  const handleMonthlyPriceChange = (selectedOption) => {
    setselectedMonthlyPrice(selectedOption);
  };

  const handleMinPriceChange = (e) => {
    const input = e.target.value;
    if (/^\d*$/.test(input)) {
      setMinPrice(input);
    }
  };
  const handleMaxPriceChange = (e) => {
    const input = e.target.value;
    if (/^\d*$/.test(input)) {
      setMaxPrice(input);
    }
  };

  return (
    <StyledForm>
      <InputWrapper>
        <StyledLabel htmlFor="car-select">Car brand</StyledLabel>
        <Select
          styles={selectCarStyles}
          id="car-select"
          options={options}
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
          options={priceMonthlyOptions}
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
            onChange={handleMinPriceChange}
          />
          <InputMilageToStyled
            type="text"
            id="max-price"
            placeholder="To"
            value={maxPrice}
            onChange={handleMaxPriceChange}
          />
        </CarMilageWrapper>
      </InputWrapper>
      <StyledSearchBtn>Search</StyledSearchBtn>
    </StyledForm>
  );
};

export default SearchForm;
