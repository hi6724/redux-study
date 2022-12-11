import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeCar } from "../store";

function CarList() {
  const dispatch = useDispatch();
  const cars = useSelector((state) => state.cars.data);
  const handleCarDelete = (car) => {
    console.log(car.id);
    dispatch(removeCar(car.id));
  };

  const renderedCars = cars.map((car) => (
    <div key={car.id} className="panel">
      <p>
        {car.name} - ${car.cost}
      </p>
      <button onClick={() => handleCarDelete(car)} className="button is-danger">
        Delete
      </button>
    </div>
  ));

  return (
    <div className="car-list">
      {renderedCars}
      <hr />
    </div>
  );
}

export default CarList;
