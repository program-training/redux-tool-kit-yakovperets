import React, { useState } from "react";
import { List, ListItem, ListItemText, TextField, Button } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { chooseAnimal } from "../store/animalSlice";
import { animalNames } from "../components/data/animals";

const OtherAnimal: React.FC = () => {
  const dispatch = useAppDispatch();
  const animalName = useAppSelector((state) => state.animal.animalName);
  const [newAnimal, setNewAnimal] = useState<string>("");

  const handleAnimalSelection = (selectedAnimal: string) => {
    dispatch(chooseAnimal({ animalName: selectedAnimal }));
  };

  const handleAddAnimal = () => {
    if (newAnimal.trim() !== "") {
      handleAnimalSelection(newAnimal);
      setNewAnimal("");
    }
  };

  return (
    <div>
      <TextField
        label="Add Animal"
        variant="outlined"
        value={newAnimal}
        onChange={(e) => setNewAnimal(e.target.value)}
      />
      <Button
        variant="contained"
        onClick={() => {
          handleAnimalSelection(newAnimal);
          handleAddAnimal();
        }}
      >
        Add
      </Button>
    </div>
  );
};

export default OtherAnimal;
