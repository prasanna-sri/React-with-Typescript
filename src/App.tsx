import React from "react";
import "./App.css";
import TourCardList from "./components/tours/TourCardList";
import NavBar from "./layout/NavBar";

const App: React.FC = () => {
  return (
    <>
      <NavBar heading="Bootstrap Styles" />
      <TourCardList/>
    </>
  );
};

export default App;
