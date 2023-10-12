import React from "react";
import { List, ListItem, ListItemText } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { chooseAnimal } from "../store/animalSlice";
import { animalNames } from "../components/data/animals";

const AnimalComponent: React.FC = () => {
  const dispatch = useAppDispatch();
  const animalName = useAppSelector((state) => state.animal.animalName);

  const handleAnimalSelection = (selectedAnimal: string) => {
    dispatch(chooseAnimal({ animalName: selectedAnimal }));
  };

  return (
    <List>
      {animalNames.map((name) => (
        <ListItem
          sx={animalName === name && { background: "red" }}
          button
          key={name}
          onClick={() => handleAnimalSelection(name)}
        >
          <ListItemText primary={name} />
        </ListItem>
      ))}
    </List>
  );
};

export default AnimalComponent;
