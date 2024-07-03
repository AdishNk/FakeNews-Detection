import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Input from "./Input";

function Home() {
  const [result, setResult] = useState(null);
  const navigate = useNavigate();

  const checkArticle = async (article) => {
    try {
      const response = await fetch("http://localhost:5000/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ news: article }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setResult(data.prediction);
      navigate("/result", { state: { result: data.prediction } });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <Nav />
      <div className="center_container">
        <Input onCheckArticle={checkArticle} />
      </div>
      <Footer />
    </>
  );
}

export default Home;
