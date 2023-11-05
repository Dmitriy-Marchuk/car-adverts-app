import { useEffect, useState } from "react";

import getFetchCollection from "services/getApi";

import CarItem from "Components/CarItem/CarItem";
import { CarCollectionWrapper } from "Components/CarCollection/CarCollection.styled";

const CarCollection = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    getFetchCollection().then((data) => setCars(data));
  }, []);

  return (
    <CarCollectionWrapper>
      {cars.map((car) => (
        <CarItem key={car.id + car.mileage} car={car} />
      ))}
    </CarCollectionWrapper>
  );
};

export default CarCollection;
