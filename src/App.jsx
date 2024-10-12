import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { About, Contact, Home, Services } from "./components/pages";
import Footer from "./components/Footer";
import Privacy from "./components/pages/Privacy";
import Aboutus from "./components/pages/Aboutus";
import Contectus from "./components/pages/Contectus";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<About />} />
        <Route path="/todolist" element={<Services />} />
        <Route path="/timer" element={<Contact />} />
        <Route path="/Privacy-Policy" element={<Privacy />} />
        <Route path="/About-Us" element={<Aboutus/>} />
        <Route path="/Contect-Us" element={<Contectus/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
