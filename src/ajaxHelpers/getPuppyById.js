const getPuppyById = async (id) => {
  const response = await fetch(
    `https://fsa-puppy-bowl.herokuapp.com/api/2209-FTB-PT-WEB-FT/players/${id}`
  );
  const result = response.json();
  return result.data.players.id;
};

export default getPuppyById;
