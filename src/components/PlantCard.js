import React, {useState} from "react";

function PlantCard({plant}) {
  const [isClicked, setIsClicked] = useState(true)

  function clicked() {
    setIsClicked(!isClicked)
  }

  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {isClicked ? (
        <button className="primary" onClick = {clicked}>In Stock</button>
      ) : (
        <button onClick={clicked}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
