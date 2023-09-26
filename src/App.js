import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from './Components/NavBar';
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Pet from "./Components/Pet";
import PetProfile from './Components/PetProfile';
import NewFoster from './Components/newFoster';
import Foster from "./Components/Foster";
import FosterProfile from './Components/FosterProfile';
import About from "./Components/About";
import PetCare from "./Components/PetCare"
import UpdatePet from "./Components/UpdatePet";
import UpdateFoster from "./Components/UpdateFoster";
import New from "./Components/New"


function App() {
  return (
    <div className="App"  >
      <Router>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Pet" element={<Pet />} />
            <Route path="/Pet/PetProfile" element={<PetProfile />} />
            <Route path="/Pet/update/:id" element={<UpdatePet/>}/>
            <Route path="/New" element={<New />} />
            <Route path="/Foster" element={<Foster />} />
            <Route path="/Foster/FosterProfile" element={<FosterProfile />} />
            <Route path="/Foster/update/:id" element={<UpdateFoster/>}/>
            <Route path="/newFoster" element={<NewFoster />} />
            <Route path="/PetCare" element={<PetCare />} />
            <Route path="/About" element={<About />} />
          </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
