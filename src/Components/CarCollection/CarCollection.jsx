import { useEffect, useState } from "react";
import getFetchCollection from "services/getApi";
import CarItem from "Components/CarItem/CarItem";
import {
  CarCollectionWrapper,
  LoadMoreBtn,
} from "Components/CarCollection/CarCollection.styled";
import { useDispatch, useSelector } from "react-redux";
import {
  selectModel,
  selectPricePerHour,
  setMaxMileage,
  setMinMileage,
} from "redux/carFilters/selectors";

import { useQuery } from "@tanstack/react-query";
import {
  removeFavorite,
  setFavorite,
} from "redux/carFavorites/carFavoritesSlice";
import { setCarCollection } from "redux/carCollection/carCollectionSlice";

const CarCollection = () => {
  const [cars, setCars] = useState([]);
  const [page, setPage] = useState(1);
  const [filteredCars, setFilteredCars] = useState([]);

  const pricePerHour = useSelector(selectPricePerHour);
  const model = useSelector(selectModel);
  const minMileage = useSelector(setMinMileage);
  const maxMileage = useSelector(setMaxMileage);
  const perPage = 12;

  const {
    data: carsResponse,
    isLoading: isLoadingCars,
    isError: isErrorCars,
  } = useQuery({
    queryKey: ["cars", page],
    queryFn: () => getFetchCollection({ page, perPage }),

    select: (res) => {
      return res.data.map((car) => {
        return { ...car, isFavorite: false };
      });
    },
  });
  useEffect(() => {
    if (isLoadingCars || isErrorCars || !carsResponse?.length) return;

    setCars((prevCars) => [...prevCars, ...carsResponse]);
  }, [carsResponse, isErrorCars, isLoadingCars]);

  const loadMoreCars = () => {
    const nextPage = page + 1;

    setPage(nextPage);
  };

  useEffect(() => {
    updateFilteredCars();
  }, [cars, pricePerHour, model, minMileage, maxMileage]);

  const dispatch = useDispatch();

  const updateFilteredCars = () => {
    const filtered = cars.filter((car) => {
      const isModelMatch = !model || (model.value && car.make === model.value);
      const isPricePerHourMatch = !pricePerHour
        ? car.rentalPrice
        : Number(car.rentalPrice.substring(1)) <= Number(pricePerHour.value);
      const isFilteredByPrice =
        (!minMileage || car.mileage >= minMileage) &&
        (!maxMileage || car.mileage <= maxMileage);
      return isModelMatch && isPricePerHourMatch && isFilteredByPrice;
    });
    setFilteredCars(filtered);
    dispatch(setCarCollection(filtered));
  };

  const toggleFavoriteCar = (carFav) => {
    const carIndex = cars.findIndex((car) => car.id === carFav.id);
    if (carIndex === -1) return;

    const updatedCars = cars.map((car, index) => {
      if (index === carIndex) {
        return { ...car, isFavorite: !car.isFavorite };
      }
      return car;
    });

    const updatedCarsString = JSON.stringify(updatedCars);
    localStorage.setItem("updatedCars", updatedCarsString);

    setCars(updatedCars);
  };

  return (
    <>
      <CarCollectionWrapper>
        {filteredCars.map((car) => (
          <CarItem
            key={car.id + car.mileage}
            car={car}
            toggleFavoriteCar={toggleFavoriteCar}
          />
        ))}
      </CarCollectionWrapper>
      {filteredCars.length !== null &&
        filteredCars.length > 0 &&
        filteredCars.length % 12 === 0 && (
          <LoadMoreBtn onClick={() => loadMoreCars(page, perPage)}>
            Load More
          </LoadMoreBtn>
        )}
    </>
  );
};

export default CarCollection;
