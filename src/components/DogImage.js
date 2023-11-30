import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDogImage } from '../redux/actions';

const DogImage = () => {
  const dispatch = useDispatch();
  const imageUrl = useSelector((state) => state.dog.imageUrl);

  useEffect(() => {
    dispatch(fetchDogImage());
  }, [dispatch]);

  const handleFetchNextDog = () => {
    dispatch(fetchDogImage());
  };

  return (
    <div className="dog-container">
      {imageUrl && <img src={imageUrl} alt="Dog" className="dog-image" />}
      <button onClick={handleFetchNextDog} className="fetch-button">
        Get Next Doggo
      </button>
    </div>
  );
};

export default DogImage;