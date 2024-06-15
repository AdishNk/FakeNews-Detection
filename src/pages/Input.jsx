import { useState } from "react";
import FreeUserResult from "../components/FreeUserResult";
// import PremiumUserResult from "../components/PremiumUserResult";

function Input() {
  const [news, setNews] = useState("");
  const [result, setresult] = useState(false);

  const handleNewsChange = (e) => {
    setNews(e.target.value);
  };
  const handleNewsSubmit = () => {
    console.log(news);
    setresult(true);
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
