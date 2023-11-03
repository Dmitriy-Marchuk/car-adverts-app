import { useEffect, useState } from "react";
import getFetchCollection from "../../services/getApi";
import CarItem from "../CarItem/CarItem";

const CarCollection = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    getFetchCollection().then((data) => setCars(data));
  }, []);
  // console.log(getFetchCollection());
  console.log(cars);

  return (
    <>
      <h2>Car Collection</h2>
      <div>
        {cars.map((car) => (
          <CarItem key={car.id + car.mileage} car={car} />
        ))}
      </div>
    </>
  );
};

export default CarCollection;
