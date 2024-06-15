import { useNavigate } from "react-router-dom";

function Nav() {
  const navigate = useNavigate();
  return (
    <>
      <div className="nav_container">
        <div className="nav_logo_container">
          <div className="logo_icon">
            <img src="/images/logo_icon.png" alt="icon" />
          </div>
          <div className="logo_text">
            <img src="/images/logo_text.png" alt="text" />
          </div>
        </div>
        <div className="nav_items">
          <ul className="nav_items_ul">
            <li className="nav_items_links">Home</li>
            <li className="nav_items_links">About</li>
            <li className="nav_items_links">Premium</li>
          </ul>
        </div>
        <div className="nav_buttons">
          <button onClick={() => navigate("/login")} className="login_btn">
            Login
          </button>
          <button onClick={() => navigate("/signup")} className="signup_btn">
            Signup
          </button>
        </div>
      </div>
    </>
  );
}

export default Nav
