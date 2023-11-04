import { useState } from "react";
import {
  CarAdditional,
  CarHead,
  CarHeadAdditional,
  CarImage,
  CarItemWrapper,
  CarLocation,
  LearnMoreBtn,
} from "./CarItem.styled";
import CarModal from "../CarModal/CarModal";

const CarItem = ({ car }) => {
  const addressParts = car.address.split(", ");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const {
    make,
    model,
    year,
    rentalPrice,
    rentalCompany,
    type,
    mileage,
    // accessories,
  } = car;

  return (
    <CarItemWrapper>
      {/* <CarImage src={car.img || "/no-image.jpeg"} /> */}
      <CarImage src={"/no-image.jpeg"} />

      <CarHead>
        <h2>
          {make} <span>{model}</span>, {year}
        </h2>
        <p>{rentalPrice}</p>
      </CarHead>
      <div>
        <CarHeadAdditional>
          <p>{addressParts[1]}</p>
          <p>{addressParts[2]}</p>
          <p>{rentalCompany}</p>
        </CarHeadAdditional>
        <CarHeadAdditional>
          <p>{type}</p>
          <p>{model}</p>
          <p>{mileage}</p>
          {/* <p>{accessories[0]}</p> */}
        </CarHeadAdditional>
      </div>
      <LearnMoreBtn onClick={toggleModal}>Learn more</LearnMoreBtn>
      {isModalOpen && <CarModal car={car} />}
    </CarItemWrapper>
  );
};

export default CarItem;
