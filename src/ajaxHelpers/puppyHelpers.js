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
  const result = await response.json();
  return result.data.player;
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
        breed,
      }),
    }
  );
  const result = await response.json();
  return result;
};

export const deletePuppyById = async (playerId) => {
  const response = await fetch(
    `https://fsa-puppy-bowl.herokuapp.com/api/2209-FTB-PT-WEB-FT/players/${playerId}`,
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
