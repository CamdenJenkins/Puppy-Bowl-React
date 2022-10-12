import React from "react";

const makePuppy = async (name, breed) => {
  const response = await fetch(
    "https://fsa-puppy-bowl.herokuapp.com/api/2209-FTB-PT-WEB-FT/players",
    {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
      }),
    }
  );
  const result = await response.json();
  return result;
};

export default makePuppy;
