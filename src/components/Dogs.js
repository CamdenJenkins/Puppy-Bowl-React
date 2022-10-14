import { useEffect, useState } from "react";

import getPuppies from "../ajaxHelpers/puppyHelpers";
import DogCard from "./DogCard";
import styles from "../styles/dogCards.module.css";

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
    <div className={styles.dogContainer}>
      {dogs.map((dog) => {
        return <DogCard dog={dog} key={dog.id} />;
      })}
    </div>
  );
};

export default Dogs;
