import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Editor from "./Editor";
import "../styles/Header.css";

const Header = () => {
    return (
          <header className="header">
            <div className="left-section">
              <Link to="/" className="logo">
                DailyWrite
              </Link>
            </div>
            <div className="right-section">
              <Link to="/write" className="button">
                Write
              </Link>
              <Link to="/read" className="button">
                Read
              </Link>
              <Link to="/profile" className="button">
                Profile
              </Link>
            </div>
          </header>
      );
};

export default Header;
