import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "../styles/login.css";

function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  function handleGuestLogin() {
    login();
    navigate("/checkout");
  }

  return (
    <section className="login-page">

      <div className="login-card">

        <h1>Welcome Back</h1>

        <p>
          Login to continue to your shopping experience.
        </p>

        <button
          className="login-btn"
          onClick={handleGuestLogin}
        >
          Login as Guest
        </button>

      </div>

    </section>
  );
}

export default Login;