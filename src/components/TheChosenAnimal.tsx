import React from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { chooseAnimal } from "../store/animalSlice";
const TheChosenAnimal = () => {
  const animalName = useAppSelector((state) => state.animal.animalName);

  return (
    <>
      <div>
        <h1>Selected Animal: {animalName}</h1>
      </div>
    </>
  );
};

export default TheChosenAnimal;
