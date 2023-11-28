import React from 'react';
import { useParams } from 'react-router-dom';
import DogInfo from './DogInfo';

function FilterDogInfo({dogs}) {
  const {name} = useParams();

  if (name) {
    const currentDog = dogs.find(
      dog => dog.name.toLowerCase() === name.toLowerCase()
    );
    return <DogInfo dog={currentDog} />;
  }
  
  return null;
}

export default FilterDogInfo;