import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/signup.css";

function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/users/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: username,
          email: email,
          password: password,
          confPassword: confirmPassword,
          role: "user",
        }),
        credentials: "include",
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Registration successful!");
        setIsSuccess(true);
        setTimeout(() => {
          // Navigate to Sign in 3 seconds delay
          navigate("/signin");
        }, 3000);
      } else {
        setMessage(data.msg || "Registration failed. Please try again.");
        setIsSuccess(false);
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("An error occurred. Please try again.");
      setIsSuccess(false);
    }
  };

  return (
    <div className="Register">
      <div className="card-register">
        <h2 className="register-title">Sign Up</h2>
        <form className="register-form" onSubmit={handleRegister}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              type="password"
              id="confirm-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn-primary">
            Register
          </button>
          {message && (
            <div className={isSuccess ? "message-success" : "message-error"}>
              {message}
            </div>
          )}
          <div className="signup-text">
            <div>Already have account?</div>
            <a href="/signin" className="login-link">
              Sign In
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/signup.css";

function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/users/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: username,
          email: email,
          password: password,
          confPassword: confirmPassword,
          role: "user",
        }),
        credentials: "include",
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Registration successful!");
        setIsSuccess(true);
        setTimeout(() => {
          // Navigate to Sign in 3 seconds delay
          navigate("/signin");
        }, 3000);
      } else {
        setMessage(data.msg || "Registration failed. Please try again.");
        setIsSuccess(false);
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("An error occurred. Please try again.");
      setIsSuccess(false);
    }
  };

  return (
    <div className="Register">
      <div className="card-register">
        <h2 className="register-title">Sign Up</h2>
        <form className="register-form" onSubmit={handleRegister}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              type="password"
              id="confirm-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn-primary">
            Register
          </button>
          {message && (
            <div className={isSuccess ? "message-success" : "message-error"}>
              {message}
            </div>
          )}
          <div className="signup-text">
            <div>Already have account?</div>
            <a href="/signin" className="login-link">
              Sign In
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
