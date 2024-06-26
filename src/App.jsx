import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Feedback from "./pages/Feedback"
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/feedback" element={<Feedback/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
