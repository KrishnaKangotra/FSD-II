import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { login } from "../utils/auth";

function Login() {
  const navigate = useNavigate();

  const [username, setUsername] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [error, setError] =
    useState("");

  const handleLogin = () => {
    const token = login(
      username,
      password
    );

    if (token) {
      navigate("/dashboard");
    } else {
      setError(
        "Invalid username or password"
      );
    }
  };

  return (
    <div className="login-container">

      <div className="login-card">

        <h1>JWT Authentication</h1>

        <h3>Role Based Access Control</h3>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) =>
            setUsername(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <button onClick={handleLogin}>
          Login
        </button>

        {error && (
          <p className="error">
            {error}
          </p>
        )}

        <div className="credentials">

          <h4>Test Users</h4>

          <p>
            admin / 123
          </p>

          <p>
            editor / 123
          </p>

          <p>
            viewer / 123
          </p>

        </div>

      </div>

    </div>
  );
}

export default Login;