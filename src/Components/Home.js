import { useState, useEffect } from "react";
import BackgroundImagePage from "./BackgroungImagePage";


function Home() {
  const [pets, setPets] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const URL = `${process.env.REACT_APP_BACKEND_URI}/pets`
      const response = await fetch(URL)
      const data = await response.json()
      setPets(data)
    }

    fetchData()
  }, [])

  const display = pets.map(pet => {
    return (
        <div>
          {pet.petName}
        </div>
    )
  })

  return (
    <div className="bg">
      {display}
    </div>
  );
}

export default Home;