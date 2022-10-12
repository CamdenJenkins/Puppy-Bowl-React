import { useState } from "react";
import { useNavigate } from "react-router-dom";
import makePuppy from "../ajaxHelpers/makePuppy";

const NewDogForm = () => {
  const navigate = useNavigate;

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
      ></form>
    </div>
  );
};
