import { useState } from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import { Rating } from "react-simple-star-rating";

function Feedback() {
  const [rating, setRating] = useState(0);
const [feedback, setFeedback] = useState("");
  

   const handleRating = (rate) => {
     setRating(rate);
    };
    const handleFeedbackSubmit = () => {
      console.log({rating});
      console.log({feedback});
  }
  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value)
  }
  return (

    <>
      <Nav />
      <div className="center_container">
        <div className="feedback_head_container">
          <h1>FEEDBACK</h1>
        </div>
        <div className="input_container">
          <textarea
            value={feedback}
            onChange={handleFeedbackChange}
            type="text"
            name=""
            id=""
            className="feedback_input"
            placeholder="Enter you valuable feedback"
          />
        </div>
        <div className="star_container">
          <Rating
            onClick={handleRating}
          />
        </div>
        <button className="news_submit_button" onClick={handleFeedbackSubmit}>Submit</button>
      </div>
      <Footer />
    </>
  );
}

export default Feedback;
