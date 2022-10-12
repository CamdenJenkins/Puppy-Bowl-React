import { useEffect, useState } from "react";
import getPuppies from "../ajaxHelpers/getPuppies";

const Dogs = () => {
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
          </div>
        );
      })}
    </div>
  );
};

export default Dogs;
