import {
  CarAdditional,
  CarHead,
  CarImage,
  CarItemWrapper,
  CarLocation,
  LearnMoreBtn,
} from "./CarItem.styled";

const CarItem = ({ car }) => {
  const addressParts = car.address.split(", ");

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
      <CarImage src={car.img} />
      <CarHead>
        <div>
          <p>
            {make} <span>{model}</span>, {year}
          </p>
          {/* <p>{model}</p> */}
          {/* <p>, {year}</p> */}
        </div>
        <p>{rentalPrice}</p>
      </CarHead>
      <div>
        <CarLocation>
          <p>{addressParts[1]}</p>
          <p>{addressParts[2]}</p>
          <p>{rentalCompany}</p>
        </CarLocation>
        <CarAdditional>
          <p>{type}</p>
          <p>{model}</p>
          <p>{mileage}</p>
          {/* <p>{accessories[0]}</p> */}
        </CarAdditional>
      </div>
      <LearnMoreBtn>Learn more</LearnMoreBtn>
    </CarItemWrapper>
  );
};

export default CarItem;
