import React from "react";

const getPuppies = async () => {
  const response = await fetch(
    "https://fsa-puppy-bowl.herokuapp.com/api/2209-FTB-PT-WEB-FT/players"
  );
  const result = await response.json();
  return result.data.players;
};

export const getPuppyById = async (id) => {
  const response = await fetch(
    `https://fsa-puppy-bowl.herokuapp.com/api/2209-FTB-PT-WEB-FT/players/${id}`
  );
  const result = response.json();
  return result.data.players.id;
};

export const makePuppy = async (name, breed) => {
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

export const deletePuppyById = async (id) => {
  const response = await fetch(
    `https://fsa-puppy-bowl.herokuapp.com/api/2209-FTB-PT-WEB-FT/players/${id}`,
    {
      method: "Delete",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const result = await response.json();
  return result;
};

export default getPuppies;
