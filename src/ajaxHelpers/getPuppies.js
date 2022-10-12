import React from "react";

const getPuppies = async () => {
  const response = await fetch(
    "https://fsa-puppy-bowl.herokuapp.com/api/2209-FTB-PT-WEB-FT/players"
  );
  const result = await response.json();
  return result;
};

export default getPuppies;
