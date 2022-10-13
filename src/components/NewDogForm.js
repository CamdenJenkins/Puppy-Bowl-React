import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { makePuppy } from "../ajaxHelpers/puppyHelpers";

const NewDogForm = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");

  return (
    <div>
      <form
        className="pure-form pure-form-stacked"
        onSubmit={async (e) => {
          e.preventDefault();
          const result = await makePuppy(name, breed);
          navigate("/");
        }}
      >
        <h3> Create a New Dog </h3>
        <label>Name:</label>
        <input
          value={name}
          type="text"
          placeholder="name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <label>Breed:</label>
        <input
          value={breed}
          onChange={(e) => {
            setBreed(e.target.value);
          }}
          type="text"
          placeholder="breed"
        />
        <button className="pure-button pure-button-primary" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewDogForm;
