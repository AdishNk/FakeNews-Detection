import Footer from "../components/Footer";
import Nav from "../components/Nav";
import { useNavigate } from "react-router-dom";

function Price() {
  const navigate = useNavigate();

  return (
    <>
      <Nav />
      <div style={{ backgroundColor: "#F5F7F8" }}>
        <div className="price_head">
          <h1>Upgrade your plan</h1>
        </div>
        <div className="price_container">
          <div>
            <div className="free_price price_selected">
              <div className="">
                <div className="premium_price_head_container">
                  <img src="\src\assets\images\Progress.png" alt="" />
                  <h1>Free</h1>
                </div>
                <p>Eur €0/month</p>
                <h4>For people just getting started with Truth Seeker,</h4>
                <ul>
                  <li>600 Words and history</li>
                  <li>Results with 60% Accuracy</li>
                  <li>Feedback survey</li>
                </ul>
              </div>
              <div className="free_price_button_div">
                <button
                  className="free_price_button"
                  onClick={() => navigate("/")}
                >
                  Current Plan
                </button>
              </div>
            </div>
          </div>

          <hr className="horizontal_line" />

          <div>
            <div className="premium_price">
              <div className="">
                <div className="premium_price_head_container">
                  <img src="\src\assets\images\Progress.png" alt="" />
                  <h1>Premium</h1>
                </div>
                <p>Eur €9.99/month</p>
                <h4>Everything in Free, and:</h4>
                <ul>
                  <li>Early access to new features</li>
                  <li>Unlimited Words and history</li>
                  <li>Results with 95% Accuracy</li>
                  <li>Feedback survey</li>
                </ul>
              </div>
              <div className="premium_price_button_div">
                <button
                  className="premium_price_button"
                  onClick={() => navigate("/login")}
                >
                  Upgrade to Premium
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Price
