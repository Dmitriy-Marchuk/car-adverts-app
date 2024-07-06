import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";

import getFetchCollection from "services/getApi";
import CarItem from "Components/CarItem/CarItem";
import {
  CarCollectionWrapper,
  LoadMoreBtn,
} from "Components/CarCollection/CarCollection.styled";
import {
  selectModel,
  selectPricePerHour,
  setMaxMileage,
  setMinMileage,
} from "redux/carFilters/selectors";
import { setCarCollection } from "redux/carCollection/carCollectionSlice";

const CarCollection = () => {
  const [cars, setCars] = useState([]);
  const [page, setPage] = useState(1);
  const [filteredCars, setFilteredCars] = useState([]);
  const [hasMoreCars, setHasMoreCars] = useState(true);

  const pricePerHour = useSelector(selectPricePerHour);
  const model = useSelector(selectModel);
  const minMileage = useSelector(setMinMileage);
  const maxMileage = useSelector(setMaxMileage);
  const perPage = 12;

  const dispatch = useDispatch();

  const {
    data: carsResponse,
    isLoading: isLoadingCars,
    isError: isErrorCars,
  } = useQuery({
    queryKey: ["cars", page],
    queryFn: () => getFetchCollection({ page, perPage }),

    select: (res) => {
      const storedCars = JSON.parse(localStorage.getItem("updatedCars")) || [];
      return res.data.map((car) => {
        const storedCar = storedCars.find(
          (storedCar) => storedCar.id === car.id
        );
        return { ...car, isFavorite: storedCar ? storedCar.isFavorite : false };
      });
    },
  });

  useEffect(() => {
    setCars([]);
  }, []);

  useEffect(() => {
    if (isLoadingCars || isErrorCars || !carsResponse?.length) return;

    const newCars = carsResponse.filter(
      (newCar) => !cars.some((car) => car.id === newCar.id)
    );

    setCars((prevCars) => [...prevCars, ...newCars]);

    if (carsResponse.length < perPage) {
      setHasMoreCars(false);
    } else {
      setHasMoreCars(true);
    }
  }, [carsResponse, isErrorCars, isLoadingCars]);

  const loadMoreCars = () => {
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    updateFilteredCars();
  }, [cars, pricePerHour, model, minMileage, maxMileage]);

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
    updateFilteredCars();
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
      {hasMoreCars && filteredCars.length >= perPage && (
        <LoadMoreBtn onClick={loadMoreCars}>Load More</LoadMoreBtn>
      )}
    </>
  );
};

export default CarCollection;
