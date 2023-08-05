import React, { useState } from "react";
import "./styles.css";
import Navbar from "./components/Navbar";
import LoginSection from "./components/LoginSection";

const App = () => {
  const [isLoginActive, setIsLoginActive] = useState(true);

  const handleRegisterClick = () => {
    setIsLoginActive(false);
  };

  const handleLoginClick = () => {
    setIsLoginActive(true);
  };

  return (
    <div className="login-container">
      <Navbar />
      <div className="background"></div>
      <LoginSection
        isLoginActive={isLoginActive}
        handleRegisterClick={handleRegisterClick}
        handleLoginClick={handleLoginClick}
      />
    </div>
  );
};

export default App;
