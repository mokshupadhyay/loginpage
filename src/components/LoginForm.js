import React from "react";

const LoginForm = ({
  isLoginActive,
  handleRegisterClick,
  handleLoginClick
}) => {
  return (
    <div className={`login-section ${isLoginActive ? "" : "active"}`}>
      <div className={`form-box login ${isLoginActive ? "active" : ""}`}>
        <form action="">
          <h2>Sign In</h2>
          <div className="input-box">
            <span className="icon">
              <i className="bx bxs-envelope"></i>
            </span>
            <input type="email" required />
            <label>Email</label>
          </div>
          <div className="input-box">
            <span className="icon">
              <i className="bx bxs-lock-alt"></i>
            </span>
            <input type="password" required />
            <label>Password</label>
          </div>
          <div className="remember-password">
            <label>
              <input type="checkbox" />
              Remember Me
            </label>
            <a href="#">Forget Password</a>
          </div>
          <button className="btn">Login In</button>
          <div className="create-account">
            <p>
              Create A New Account?{" "}
              <a
                href="#"
                onClick={handleRegisterClick}
                className="register-link"
              >
                Sign Up
              </a>
            </p>
          </div>
        </form>
      </div>
      <div className={`form-box register ${isLoginActive ? "" : "active"}`}>
        <form action="">
          <h2>Sign Up</h2>
          <div className="input-box">
            <span className="icon">
              <i className="bx bxs-user"></i>
            </span>
            <input type="text" required />
            <label>Username</label>
          </div>
          <div className="input-box">
            <span className="icon">
              <i className="bx bxs-envelope"></i>
            </span>
            <input type="email" required />
            <label>Email</label>
          </div>
          <div className="input-box">
            <span className="icon">
              <i className="bx bxs-lock-alt"></i>
            </span>
            <input type="password" required />
            <label>Password</label>
          </div>
          <div className="remember-password">
            <label>
              <input type="checkbox" />I agree with this statement
            </label>
          </div>
          <button className="btn">Sign Up</button>
          <div className="create-account">
            <p>
              Already Have An Account?{" "}
              <a href="#" onClick={handleLoginClick} className="login-link">
                Sign In
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
