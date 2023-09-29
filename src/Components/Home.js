import { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import BackgroundImagePage from "./BackgroungImagePage";
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
      </Carousel>
    </div>

  )
};


export default Home;