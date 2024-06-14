import { useState } from "react";

function Input() {
  const [news, setNews] = useState("");

  const handleNewsChange = (e) => {
    setNews(e.target.value);
    };
      const handleNewsSubmit = () => {
        console.log(news);
      };
  return (
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
  );
}

export default Input;
