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
  // const closeModal = () => {
  //   setIsModalOpen(false);
  // };

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
      <>
        <CarHeadAdditional>
          <li>
            <p>{addressParts[1]}</p>
          </li>
          <li>
            <p>{addressParts[2]}</p>
          </li>
          <li>
            <p>{rentalCompany}</p>
          </li>
        </CarHeadAdditional>
        <CarHeadAdditional>
          <li>
            <p>{type}</p>
          </li>
          <li>
            <p>{model}</p>
          </li>
          <li>
            <p>{mileage}</p>
          </li>
          {/* <li><p>{accessories[0]}</p> </li>*/}
        </CarHeadAdditional>
      </>
      <LearnMoreBtn onClick={toggleModal}>Learn more</LearnMoreBtn>
      {isModalOpen && <CarModal toggleModal={toggleModal} car={car} />}
    </CarItemWrapper>
  );
};

export default CarItem;
