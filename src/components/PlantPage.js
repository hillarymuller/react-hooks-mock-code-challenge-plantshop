import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('http://localhost:6001/plants')
    .then(r => r.json())
    .then(data => setPlants(data))
  }, []);

  function handleNewPlant(newPlant) {
    setPlants([...plants, newPlant])
  };

  function handleSearch(e) {
    setSearch(e.target.value);
  }
  const filteredPlants = plants.filter(plant => plant.name.toLowerCase().includes(search.toLowerCase()));
  
  return (
    <main>
      <NewPlantForm onNewPlant={handleNewPlant} />
      <Search search={search} onSearch={handleSearch} />
      <PlantList plants={filteredPlants} />
    </main>
  );
}

export default PlantPage;
