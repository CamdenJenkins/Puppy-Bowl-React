import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";

import Dogs from "./components/Dogs";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dogs />} />
      </Routes>
    </div>
  );
}

export default App;
