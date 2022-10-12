const deletePuppyById = async (id) => {
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

export default deletePuppyById;
