import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Feedback from "./pages/Feedback"
import Price from "./pages/Price"
import About from "./pages/About";

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/price" element={<Price />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/feedback" element={<Feedback/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
