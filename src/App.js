import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";

import Dogs from "./components/Dogs";
import NavBar from "./components/NavBar";
import NewDogForm from "./components/NewDogForm";
import SingleDogView from "./components/SingleDogView";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Dogs />} />
        <Route path="/newDogForm" element={<NewDogForm />} />
        <Route path="/singleDogView/:dogId" element={<SingleDogView />} />
      </Routes>
    </div>
  );
}

export default App;
