import React from "react";
import "./App.css";
import { FiSearch, FiMenu } from "react-icons/fi";

function App() {
  return (
    <div className="wrapper">
      <header>
        <div className="container">
          <nav>
            <h3>
              <span>A</span>
            </h3>
            <ul>
              <li>
                <a href="/#"> Home</a>
              </li>
              <li>
                <a href="/#"> About</a>
              </li>
              <li>
                <a href="/#"> Services</a>
              </li>
              <li>
                <a href="/#"> Portfolio</a>
              </li>
              <li>
                <a href="/#"> News</a>
              </li>
            </ul>

            <ul>
              <li>
                <a href="/#">
                  <FiSearch />
                </a>
              </li>
              <li>
                <a href="/#" className="menu">
                  <FiMenu />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <div className="content">
        <div className="flexbox">
          <div className="span-6 hero-desc">
            <div className="inner-desc">
              <h1>Arian Derida</h1>
              <h3>Am a Fulstack Developer and UI/UX Enthusiast </h3>
              <p>
                Hi I'm Fullstack Developer, love Design and passionate in data
                science, Experience in developing Websites and Mobile
                applications
              </p>
            </div>
          </div>
          <div className="span-6 hero-img">
            <img src={require("./components/PNG.png")} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
