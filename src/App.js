import React from "react";
import "./App.css";
import { FiSearch, FiMenu } from "react-icons/fi";

function App() {
  return (
    <>
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
          <div className="container">
            <div className="flexbox">
              <div className="span-6 hero-desc">
                <div className="inner-desc">
                  <h1>Arian Derida</h1>
                  <h3>Am a Fulstack Developer and UI/UX Enthusiast </h3>
                  <p>
                    I have experience in building Website and Mobile
                    Applications using <b className="text-js">Javascript</b>,
                    passionate in Python Data Science and UI/UX
                  </p>
                </div>
              </div>
              <div className="span-6 hero-img">
                <img src={require("./components/PNG.png")} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="about">
        <div className="container">
          <h5>About me</h5>
          <div className="flex">
            <div className="span-6 about-left">
              <h2>
                I love javascript, happy to explore programming languages, Start
                with design and end with code
              </h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
              <div className="experience">
                <span>7</span>{" "}
                <span>
                  Years of <br /> Experience
                </span>
              </div>
            </div>
            <div className="span-6 about-right">
              <h1>Interested in working together?</h1>
              <p>
                <span>We should queue up a chat. I’ll buy the coffee</span>
              </p>
              <h2>arianderida@gmail.com</h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
