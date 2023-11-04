import { useEffect, useState } from "react";
import getFetchCollection from "../../services/getApi";
import CarItem from "../CarItem/CarItem";
import { CarCollectionWrapper } from "./CarCollection.styled";

const CarCollection = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    getFetchCollection().then((data) => setCars(data));
  }, []);
  // console.log(getFetchCollection());
  // console.log(cars);

  return (
    <CarCollectionWrapper>
      {cars.map((car) => (
        <CarItem key={car.id + car.mileage} car={car} />
      ))}
    </CarCollectionWrapper>
  );
};

export default CarCollection;
