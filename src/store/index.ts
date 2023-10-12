//index.ts
import { configureStore } from "@reduxjs/toolkit";
import animalSlice from "./animalSlice";

export const store = configureStore({
  reducer: {
    animal: animalSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
