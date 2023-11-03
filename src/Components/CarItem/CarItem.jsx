import { Cloudinary } from "@cloudinary/url-gen";

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
    functionalities,
  } = car;

  return (
    <>
      <img src={car.img} />
      <p>{make}</p>
      <p>{model}</p>
      <p>{year}</p>
      <p>{rentalPrice}</p>
      <p>{addressParts[1]}</p>
      <p>{addressParts[2]}</p>
      <p>{rentalCompany}</p>
      <p>{type}</p>
      <p>{model}</p>
      <p>{mileage}</p>
      <p>{functionalities[0]}</p>
      <button>Learn more</button>
    </>
  );
};

export default CarItem;
