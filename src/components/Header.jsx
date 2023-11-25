import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Editor from "./Editor";
import "../styles/Header.css";

const Header = () => {
    return (
        <Router>
          <header className="header">
            <div className="left-section">
              <Link to="/" className="logo">
                Your Logo
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
            <Routes>
              <Route exact path="/write" element={<Editor />} />
            </Routes>
          </header>
        </Router>
      );
};

export default Header;
