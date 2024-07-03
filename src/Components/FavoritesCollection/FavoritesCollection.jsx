import { useSelector } from "react-redux";

import CarItem from "Components/CarItem/CarItem";

const FavoritesCollection = () => {
  const carCollection = useSelector(
    (store) => store?.carCollection?.carCollection
  );
  console.log("store favorites:", carCollection);

  const favoriteCars = carCollection.filter((car) => car.isFavorite === true);
  console.log("filtered favorite cars", favoriteCars);

  return (
    <>
      {favoriteCars.length === 0 ? (
        <p>There are no favorites yet, add something</p>
      ) : (
        favoriteCars.map((car) => (
          <CarItem car={car} key={car.id}>
            {car.id}
          </CarItem>
        ))
      )}
    </>
  );
};

export default FavoritesCollection;
