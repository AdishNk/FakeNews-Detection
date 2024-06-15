import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  console.warn({ loginData });
  const SignUpOnClick = () => {
    navigate("/");
  };
  return (
    <>
      <div className="navbar_logo_home_page">
        <div className="nav_logo_container">
          <div className="logo_text">
            <img src="/images/logo_text.png" alt="text" />
          </div>
        </div>
      </div>
      '
      <div className="login_container">
        <h2>Login</h2>
        <div className="login_container_inputs">
          <input
            type="Email"
            value={loginData?.email}
            onChange={(e) =>
              setLoginData({ ...loginData, email: e.target.value })
            }
            placeholder="Enter your Email"
          />
          <input
            type="password"
            value={loginData.password}
            onChange={(e) =>
              setLoginData({ ...loginData, password: e.target.value })
            }
            placeholder="Enter your Password"
          />{" "}
          <button onClick={SignUpOnClick}>Login</button>
        </div>
        <p onClick={() => navigate("/signup")}>Don't have Account</p>
      </div>
    </>
  );
}

export default Login;
