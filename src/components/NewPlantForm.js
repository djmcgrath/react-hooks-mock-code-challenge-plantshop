import React, {useState} from "react";

function NewPlantForm({handleNewPlant}) {
  const [plantForm, setPlantForm] = useState({
    name: "",
    image: "",
    price: 0
  })

  function handleChange (e) {
    setPlantForm({
      ...plantForm,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit (e) {
    e.preventDefault()
    const plantData = {
      name: plantForm.name,
      image: plantForm.image,
      price: plantForm.price
    }
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(plantData)
    })
    .then((res) => res.json())
    .then((newPlant) => handleNewPlant(newPlant))
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name" 
          placeholder="Plant name"
          onChange={handleChange}
        />
        <input 
          type="text" 
          name="image" 
          placeholder="Image URL" 
          onChange={handleChange}
        />
        <input 
          type="number" 
          name="price" 
          step="0.01" 
          placeholder="Price" 
          onChange={handleChange}
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
