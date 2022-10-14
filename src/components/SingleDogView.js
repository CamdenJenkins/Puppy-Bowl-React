import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { deletePuppyById, getPuppyById } from "../ajaxHelpers/puppyHelpers";
import styles from "../styles/singleCard.module.css";
const SingleDogView = () => {
  const navigate = useNavigate();

  const { dogId } = useParams();

  const [singleDog, setSingleDog] = useState({});

  useEffect(() => {
    const findPuppyById = async () => {
      const puppy = await getPuppyById(dogId);
      setSingleDog(puppy);
    };
    findPuppyById();
  }, []);

  const deleteDog = async () => {
    const result = await deletePuppyById(singleDog.id);

    navigate("/");
  };

  return (
    <div className={styles.singleDogContainer}>
      <div className={styles.singleDog}>
        <div className={styles.singleDogHeader}>
          <h4>{singleDog.name}</h4>
          <p className={styles.dogId}> #{singleDog.id}</p>
        </div>
        <h5>Breed: {singleDog.breed} </h5>
        <h6>Status: {singleDog.status}</h6>
        <img className={styles.singleImg} src={singleDog.imageUrl} />
        <button className={styles.deleteButton} onClick={deleteDog}>
          Delete Puppy
        </button>
      </div>
    </div>
  );
};

export default SingleDogView;
