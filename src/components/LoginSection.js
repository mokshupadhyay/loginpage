import React from "react";
import LoginForm from "./LoginForm";

const LoginSection = ({
  isLoginActive,
  handleRegisterClick,
  handleLoginClick
}) => {
  return (
    <div className="container">
      <div className={`item ${isLoginActive ? "" : "active"}`}>
        <h2 className="logo">
          <i className="bx bxl-xing"></i>DEMO BOY
        </h2>
        <div className="text-item">
          <h2>
            Welcome! <br />
            <span>To Our Channel</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
            repellendus?
          </p>
          <div className="social-icon">
            <a href="#">
              <i className="bx bxl-facebook"></i>
            </a>
            <a href="#">
              <i className="bx bxl-twitter"></i>
            </a>
            <a href="#">
              <i className="bx bxl-youtube"></i>
            </a>
            <a href="#">
              <i className="bx bxl-instagram"></i>
            </a>
            <a href="#">
              <i className="bx bxl-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
      <LoginForm
        isLoginActive={isLoginActive}
        handleRegisterClick={handleRegisterClick}
        handleLoginClick={handleLoginClick}
      />
    </div>
  );
};

export default LoginSection;
