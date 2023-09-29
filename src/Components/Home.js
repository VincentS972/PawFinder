import { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import Pet from "./Pet"
import Foster from "./Foster"
import PetCare from "./PetCare"
import BackgroundImagePage from "./BackgroungImagePage";
// import Display from "./carousel";





const Home = () => {
  // const [pets, setPets] = useState([])

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const URL = `${process.env.REACT_APP_BACKEND_URI}/pets`
  //     const response = await fetch(URL)
  //     const data = await response.json()
  //     setPets(data)
  //   }

  //   fetchData();
  // }, []);

  // const display = pets.map(pet => {
  //   return (
  //     <Carousel>
  //       <Carousel.Item>
  //         <Pet />
  //       </Carousel.Item>
  //     </Carousel>
  //   );
  // });
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <Pet />
      </Carousel.Item>
      <Carousel.Item>
        <Foster />
      </Carousel.Item>
    </Carousel>
  )
};


export default Home;