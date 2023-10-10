import React from "react";
import PlantCard from "./PlantCard";


function PlantList({plantInfo}) {
 
  
  return (
    <ul className="cards">{plantInfo.map((plant) =>
      <PlantCard key={plant.id} plant={plant}/>)}
    </ul>
  );
}

export default PlantList;
