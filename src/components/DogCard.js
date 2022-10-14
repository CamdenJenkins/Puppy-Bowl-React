import { useNavigate } from "react-router-dom";
import styles from "../styles/dogCards.module.css";

const DogCard = ({ dog }) => {
  const navigate = useNavigate();

  return (
    <div className={styles.Dogs} key={dog.id}>
      <div className={styles.dogHeader}>
        <p className={styles.dogName}>{dog.name}</p>
        <p className={styles.dogId}>#{dog.id}</p>
      </div>

      <img className={styles.dogImg} src={dog.imageUrl} />
      <button
        onClick={() => {
          navigate(`/singleDogView/${dog.id}`);
        }}
      >
        See Details
      </button>
    </div>
  );
};

export default DogCard;
