import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { deletePuppyById, getPuppyById } from "../ajaxHelpers/puppyHelpers";

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
    <div className="single-dog-container">
      <div className="single-dog">
        <div className="single-dog-header">
          <h4>{singleDog.name}</h4>
          <p className="dog-id"> #{singleDog.id}</p>
        </div>
        <h5>Breed: {singleDog.breed} </h5>
        <h6>Status: {singleDog.status}</h6>
        <img className="single-img" src={singleDog.imageUrl} />
        <button onClick={deleteDog}>Delete Puppy</button>
      </div>
    </div>
  );
};

export default SingleDogView;
