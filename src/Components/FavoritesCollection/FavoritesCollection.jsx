import { useEffect, useState } from "react";
import CarItem from "Components/CarItem/CarItem";
import { CarCollectionWrapper } from "Components/CarCollection/CarCollection.styled";

const FavoritesCollection = () => {
  const [favoriteCars, setFavoriteCars] = useState([]);

  useEffect(() => {
    const savedCars = JSON.parse(localStorage.getItem("updatedCars")) || [];
    setFavoriteCars(savedCars.filter((car) => car.isFavorite));
  }, []);

  const toggleFavoriteCar = (carFav) => {
    const updatedCars = favoriteCars.map((car) =>
      car.id === carFav.id ? { ...car, isFavorite: !car.isFavorite } : car
    );

    const allCars = JSON.parse(localStorage.getItem("updatedCars")) || [];
    const updatedAllCars = allCars.map((car) =>
      car.id === carFav.id ? { ...car, isFavorite: !car.isFavorite } : car
    );

    localStorage.setItem("updatedCars", JSON.stringify(updatedAllCars));

    setFavoriteCars(updatedCars.filter((car) => car.isFavorite));
  };

  return (
    <>
      <CarCollectionWrapper>
        {favoriteCars.length === 0 ? (
          <p>There are no favorites yet, add something</p>
        ) : (
          favoriteCars.map((car) => (
            <CarItem
              car={car}
              key={car.id}
              toggleFavoriteCar={toggleFavoriteCar}
            >
              {car.id}
            </CarItem>
          ))
        )}
      </CarCollectionWrapper>
    </>
  );
};

export default FavoritesCollection;
