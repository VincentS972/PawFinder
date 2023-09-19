import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from './Components/NavBar';
// import Home from "./Components/Home";
// import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
     <Router>
        <Navbar />
    
        <Routes>
          {/* <Route path="/" element={<Home />} />
          <Route path="/Pets" element={<Pets />} />
          <Route path="/Fosters" element={<Fosters />} />
          <Route path="/PetCare" element={<PetCare />} />
          <Route path="/About" element={<About />} /> */}
        </Routes>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
