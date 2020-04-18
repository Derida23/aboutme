import React from "react";
import "./App.css";
import { FiSearch, FiMenu, FiMail } from "react-icons/fi";

function App() {
  let TxtRotate = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = "";
    this.tick();
    this.isDeleting = false;
  };

  TxtRotate.prototype.tick = function () {
    let i = this.loopNum % this.toRotate.length;
    let fullTxt = this.toRotate[i];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

    let that = this;
    let delta = 300 - Math.random() * 100;

    if (this.isDeleting) {
      delta /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }

    setTimeout(function () {
      that.tick();
    }, delta);
  };

  window.onload = function () {
    let elements = document.getElementsByClassName("txt-rotate");
    for (let i = 0; i < elements.length; i++) {
      let toRotate = elements[i].getAttribute("data-rotate");
      let period = elements[i].getAttribute("data-period");
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    let css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML =
      ".txt-rotate > .wrap { border-right: 0.08em solid #E84A2C }";
    document.body.appendChild(css);
  };
  return (
    <>
      <div className="wrapper">
        <header>
          <div className="container">
            <nav>
              <h3>
                <span>
                  <img
                    className="hero-logo"
                    src={require("./components/hero-logo.png")}
                    alt=""
                  />
                </span>
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
                  {/* <h1>Arian Derida</h1> */}
                  <h1 className="typed-text">
                    <span
                      className="txt-rotate"
                      data-period="2000"
                      data-rotate='[ "Arian Derida", "Fullstack Developer", "UI/UX Enthusiast" ]'
                    ></span>
                  </h1>
                  <h3>Hi, I’m Arian Derida. Nice to meet you</h3>
                  <p>
                    Am a have experience in building Website and Mobile
                    Applications using <b className="text-js">Javascript</b>,
                    passionate in Python Data Science and UI/UX
                  </p>
                </div>
              </div>
              <div className="span-6 hero-img">
                <img src={require("./components/hero-user.png")} alt="" />
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
                with design end with code;
              </h2>
              <p>
                Starting to become a designer who likes UI/UX and began
                processing into a Fullstack Developer by learning
                <b className="text-js"> Javascript</b> and Python ​​for Data
                Science
              </p>
              <div className="experience">
                <span>2</span>{" "}
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
              <h2>
                <FiMail className="icon-email" /> arianderida@gmail.com
              </h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
