import React from "react";
import "./Header.css";

const Header = ({ title = "", progress = 0, total = 1 }) => {
  return (
    <div className="header-container">
      <div className="header-text">{title}</div>
      <div className="accuracy-container">
        <i className="fas fa-crosshairs"></i>
        <span className="accuracy-bar">
          {Math.ceil((progress / total) * 100)} %
        </span>
      </div>
    </div>
  );
};

export default Header;
