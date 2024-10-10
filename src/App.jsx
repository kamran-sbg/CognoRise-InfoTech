import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { About, Contact, Home, Services } from "./components/pages";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<About />} />
        <Route path="/todolist" element={<Services />} />
        <Route path="/timer" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
