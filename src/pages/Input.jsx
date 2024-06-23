import { useState } from "react";
import FreeUserResult from "../components/FreeUserResult";
// import PremiumUserResult from "../components/PremiumUserResult";
import axios from "axios"

function Input() {
  const [news, setNews] = useState("");
  const [result, setresult] = useState(false);

  const handleNewsChange = (e) => {
    setNews(e.target.value);
  };
  const handleNewsSubmit = () => {
    console.log(news);
    const wordCount = news.split(" ").length;
    console.log(wordCount);
    if (wordCount>= 600) {
      alert("exceeding 600 words, Please take premium for unlimited word search");
    }
    setresult(true);
    axios
      .post("http://127.0.0.1:5000/predict", news)
      .then((response) => {
        console.log("Data sent successfully:", response.prediction);
      })
      .catch((error) => {
        console.error("There was an error sending the data!", error);
      });
  };
  return (
    <>
      {result ? (
        <div>
          <div className="news_container">
            <div className="news_div">
              <p> {news}</p>
            </div>
          </div>
          <FreeUserResult/>
          {/* <PremiumUserResult/> */}
        </div>
      ) : (
        <>
          <div className="input_container">
            <textarea
              value={news}
              onChange={handleNewsChange}
              type="text"
              name=""
              id=""
              className="news_input"
              placeholder="PASTE YOUR TEXT HERE.."
            />
          </div>
          <button className="news_submit_button" onClick={handleNewsSubmit}>
            Submit
          </button>
        </>
      )}
    </>
  );
}

export default Input;
