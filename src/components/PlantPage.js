import React, {useEffect, useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";


function PlantPage() {
  const [plantInfo, setPlantInfo] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((res) => res.json())
      .then((data) => {
        setPlantInfo(data)
      })
  }, [])

  function handleNewPlant (newPlant) {
    setPlantInfo([...plantInfo], newPlant)
  }

  const filteredPlants = plantInfo.filter((plant) => {
    return plant.name.toLowerCase().includes(search.toLowerCase())
  })

  return (
    <main>
      <NewPlantForm handleNewPlant={handleNewPlant}/>
      <Search search={search} setSearch={setSearch} />
      <PlantList plantInfo={filteredPlants} />
    </main>
  );
}

export default PlantPage;
