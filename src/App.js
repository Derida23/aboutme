import React, { useState, useCallback, useEffect } from "react";
import "./App.css";
import {
  FiSearch,
  FiMenu,
  FiMail,
  FiCamera,
  FiSmartphone,
  FiCode,
  FiMessageCircle,
  FiArrowLeftCircle,
  FiArrowLeft,
  FiArrowRightCircle,
  FiArrowRight,
} from "react-icons/fi";
import { TiBrush } from "react-icons/ti";
import { ImagePortfolio, ImageTestimoni, ImageBrand } from "./dataImage";
import Loading from "./components/loading/Loading";

import ImageViewer from "react-simple-image-viewer";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

function App() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

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

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 4000);
  }, []);

  return (
    <div>
      {!loading && <Loading />}
      <div className="wrapper">
        <header>
          <div className="container">
            <nav>
              <h3>
                <span>
                  <img
                    draggable="false"
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
                  {/* <a href="/#">
                    <FiSearch />
                  </a> */}
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
                <img
                  draggable="false"
                  src={require("./components/hero-user.png")}
                  alt=""
                />
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
                with design end with code
              </h2>
              <p>
                Starting to become a designer who likes UI/UX and began
                processing into a Fullstack Developer by learning
                <b className="text-js"> Javascript</b> and Python ​​for Data
                Science
              </p>
              <div className="experience">
                <span>3</span>{" "}
                <span>
                  Years of <br /> Experience
                </span>
              </div>
            </div>
            <div className="span-6 about-right">
              <h1>Interested in working together?</h1>
              <p>
                <span>
                  I am always open to discussing software development work or
                  partnership opportunities. and i will buy coffee for you
                </span>
              </p>
              <h2>
                <FiMail className="icon-email" /> arianderida@gmail.com
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section className="services">
        <div className="container">
          <div className="text-center">
            <h5 className="small-header">Services</h5>
            <h3 className="main-header">What we do</h3>
          </div>

          <div className="services-main">
            <div className="single-services">
              <div className="bg"></div>
              <div className="services-inner">
                <span>
                  <TiBrush />
                </span>
                <h3>UI/UX Design</h3>
                <p>
                  I value simple content structures, clean design patterns, and
                  thoughtful interactions. use adobe products
                </p>
                <a href="/#">More</a>
              </div>
            </div>

            <div className="single-services active">
              <div className="bg"></div>
              <div className="services-inner">
                <span>
                  <FiCode />
                </span>
                <h3>Web Applications</h3>
                <p>
                  I usually use react-hook with apollo graphql, redux, express,
                  mongodb or mysql, github or gitlab
                </p>
                <a href="/#">More</a>
              </div>
            </div>

            <div className="single-services">
              <div className="bg"></div>
              <div className="services-inner">
                <span>
                  <FiSmartphone />
                </span>
                <h3>Mobile Applications</h3>
                <p>
                  I like implementing design in making mobile applications with
                  react native, and now I am learning flutter
                </p>
                <a href="/#">More</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="portfolio">
        <div className="text-center">
          <h5 className="small-header">Portfolio</h5>
          <h3 className="main-header">My Recent Project</h3>
        </div>

        <div className="gallery-box">
          {ImagePortfolio.map((item, index) => (
            <div
              key={index}
              className="gallery-item"
              onClick={() => openImageViewer(index)}
              style={{
                backgroundImage: `url(${item.image})`,
              }}
            >
              <div>
                <label href="/#">
                  <span>
                    <FiCamera size="0.7em" />
                  </span>
                </label>
              </div>
            </div>
          ))}

          {isViewerOpen && (
            <ImageViewer
              className="image-viewer"
              src={ImagePortfolio.map((item, index) => item.image)}
              currentIndex={currentImage}
              onClose={closeImageViewer}
              backgroundStyle={{
                background: "rgb(31,31,31, 0.9)",
                paddingTop: "1rem",
                paddingBottom: "1rem",
              }}
            />
          )}
        </div>
      </section>

      <section className="testimonials">
        <div className="container">
          <div className="text-center">
            <h5 className="small-header">Testimonial</h5>
            <h3 className="main-header">What People Say</h3>
          </div>
          <div style={{ width: "74%", margin: "auto" }}>
            <Carousel
              slidesPerPage={1}
              arrowLeft={
                <FiArrowLeftCircle
                  size="1.5rem"
                  color="#e84a2c"
                  style={{ cursor: "pointer" }}
                />
              }
              arrowLeftDisabled={
                <FiArrowLeft size="1.5rem" style={{ cursor: "pointer" }} />
              }
              arrowRight={
                <FiArrowRightCircle
                  size="1.5rem"
                  color="#e84a2c"
                  style={{ cursor: "pointer" }}
                />
              }
              arrowRightDisabled={
                <FiArrowRight size="1.5rem" style={{ cursor: "pointer" }} />
              }
              addArrowClickHandler
            >
              {ImageTestimoni.map((obj, idx) => (
                <div className="slider-container" key={idx}>
                  <div className="slider">
                    <div className="single-slider">
                      <div className="slider-info">
                        <h2>
                          <span>
                            <FiMessageCircle />
                          </span>
                        </h2>
                        <h3>{obj.comment}</h3>
                        <h4>{obj.name}</h4>
                        <p>
                          <i>{obj.status}</i>
                        </p>
                      </div>
                      <div
                        className="slider-image"
                        style={{ backgroundImage: `url(${obj.image})` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </section>

      <section className="core-code">
        <div className="container">
          <div className="brands">
            <div className="inner-brands">
              {ImageBrand.map((item, index) => (
                <img src={item.image} alt={item.alt} key={index} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="cat-action">
        <div className="container">
          <div className="cat-flex">
            <div className="cat-project">Start a Project</div>
            <div className="cat-title">
              <div className="text-center">Interested in working together?</div>
              <div className="text-center">
                We should queue up a chat. I’ll buy the coffee.
              </div>
            </div>
            <a href="/#">
              <div className="cat-button">
                <div className="cat-button2">Lets do This</div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
