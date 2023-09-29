import { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import About from "./About"
import PetCare from "./PetCare"
import Foster from "./Foster"
import Pet from "./Pet"





const Home = () => {
  
  const [index, setIndex] = useState(0);
  
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="bg">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <Pet />
        </Carousel.Item>
        <Carousel.Item>
          <Foster />
        </Carousel.Item>
        <Carousel.Item>
          <PetCare />
        </Carousel.Item>
        <Carousel.Item>
          <About />
        </Carousel.Item>
      </Carousel>
    </div>

  )
};


export default Home;