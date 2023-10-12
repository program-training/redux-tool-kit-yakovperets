// App.tsx
import React from "react";
import { Provider } from "react-redux";
import { store } from "./store/index";
import AnimalComponent from "./components/AnimalComponent";
import TheChosenAnimal from "./components/TheChosenAnimal";
import OtherAnimal from "./components/OtherAnimal";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Animal App</h1>
        <TheChosenAnimal />
        <AnimalComponent />
        <OtherAnimal />
      </div>
    </Provider>
  );
};

export default App;
