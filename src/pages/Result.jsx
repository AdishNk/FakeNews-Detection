import { useLocation, Link } from "react-router-dom";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import "./Result.css"; // Import the CSS file for styling

function Result() {
  const location = useLocation();
  const { result } = location.state;

  return (
    <>
      <Nav />
      <div className="center_container result_container">
        <h2>Result</h2>
        <p className="result_text">{result}</p>
        <Link to="/">
          <button className="news_submit_button">Check Another</button>
        </Link>
      </div>
      <Footer />
    </>
  );
}

export default Result;
