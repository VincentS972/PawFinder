import { useState, useEffect } from "react";
import NavBar from "./NavBar"

function Home() {
  const [pets, setPets] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      // const URL = `${process.env.REACT_APP_BACKEND_URI}/pets`                                                          
      const response = await fetch(URL)
      const data = await response.json()
      setPets(data)
    }

    fetchData()
  }, [])
  
  const display = pets.map(pet => {
    return (
      <p>{pet.petName}</p>
    )
  })

  return (
    <div className="home">
      <NavBar />
      <div>
        {display}
      </div>
    </div>
  );
}

export default Home;