import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AnimalSliceState {
  animalName: string;
}

interface IAction {
  animalName: string;
}

const initialState: AnimalSliceState = { animalName: "" };

const animalSlice = createSlice({
  name: "animal",
  initialState: initialState,
  reducers: {
    chooseAnimal(state: AnimalSliceState, action: PayloadAction<IAction>) {
      state.animalName = action.payload.animalName;
    },
  },
});

export const { chooseAnimal } = animalSlice.actions;
export default animalSlice.reducer;
