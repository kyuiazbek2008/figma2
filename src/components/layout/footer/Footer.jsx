import React from "react";
import scss from "./Footer.module.scss";
import img from "../../../assets/img.svg";
const Footer = () => {
  return (
    <footer className={scss.footer}>
      <div className="container">
        <div className={scss.main}>
          <div className={scss.content}>
            <h1>Popular Today</h1>
          </div>
          <div className={scss.parent}>
            <div className={scss.name}>
              <img src={img} alt="" />
              <div className={scss.text}>
                <p>Velit nisl sodales eget </p>
                <span>donec quis. volutpat orci.</span>
              </div>
            </div>
            <div className={scss.name}>
              <img src={img} alt="" />
              <div className={scss.text}>
                <p>Velit nisl sodales eget </p>
                <span>donec quis. volutpat orci.</span>
              </div>
            </div>
            <div className={scss.name}>
              <img src={img} alt="" />
              <div className={scss.text}>
                <p>Velit nisl sodales eget </p>
                <span>donec quis. volutpat orci.</span>
              </div>
            </div>
            <div className={scss.name}>
              <img src={img} alt="" />
              <div className={scss.text}>
                <p>Velit nisl sodales eget </p>
                <span>donec quis. volutpat orci.</span>
              </div>
            </div>
          </div>
        </div>
        <div className={scss.texts}>
          <div className={scss.par}>
            <div className={scss.text3big}>
              <div className={scss.h1text}>
                <h1>About Us</h1>
                <div className={scss.textp}>
                  <p>Organisation</p>
                  <p>Partners</p>
                  <p>Clients</p>
                </div>
              </div>
              <div className={scss.h1text}>
                <h1>Interesting Links</h1>
                <div className={scss.textp}>
                  <p>Photo Gallery</p>
                  <p>Our Team</p>
                  <p>Socials</p>
                </div>
              </div>
              <div className={scss.h1text}>
                <h1>Achievements</h1>
                <div className={scss.textp}>
                  <p>Winning Awards</p>
                  <p>Press</p>
                  <p>Our Amazing Clients</p>
                </div>
              </div>
            </div>
            <h2>Shipping Information</h2>
            <p>
              Nulla eleifend pulvinar purus, molestie euismod odio imperdiet ac.
              Ut sit amet erat nec nibh rhoncus varius in non lorem. Donec
              interdum, lectus in convallis pulvinar, enim elit porta sapien,
              vel finibus erat felis sed neque. Etiam aliquet neque sagittis
              erat tincidunt aliquam.
            </p>
          </div>
          <div></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
