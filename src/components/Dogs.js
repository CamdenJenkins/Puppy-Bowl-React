import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import getPuppies from "../ajaxHelpers/puppyHelpers";

const Dogs = () => {
  const navigate = useNavigate();

  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    const recievePuppies = async () => {
      const puppies = await getPuppies();
      setDogs(puppies);
    };

    recievePuppies();
  }, []);

  return (
    <div className="dog-container">
      {dogs.map((dog) => {
        return (
          <div className="Dogs" key={dog.id}>
            <div className="dog-header">
              <p className="dog-name">{dog.name}</p>
              <p className="dog-id">#{dog.id}</p>
            </div>

            <img src={dog.imageUrl} />
            <button
              onClick={() => {
                navigate(`/singleDogView/${dog.id}`);
              }}
            >
              See Details
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Dogs;
