import React from "react";
import { Slide } from "react-slideshow-image";
import wallpaper1 from "./Image/wallpaper-1.jpg";
import wallpaper2 from "./Image/wallpaper-2.jpg";
import wallpaper3 from "./Image/wallpaper-3.jpg";
import wallpaper4 from "./Image/wallpaper-4.jpg";
import wallpaper5 from "./Image/wallpaper-5.jpg";
import "./Slide.css";

const slideStyle = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  arrows: true,
  indicators: true
};

const HomePage = () => {
  return (
    <React.Fragment>
      <Slide {...slideStyle}>
        <div className="each-slide">
          <div className="image-container">
            <img src={wallpaper1} alt="Wallpaper-1" />
          </div>
          <h2>Samsung S3 Ultra</h2>
        </div>
        <div className="each-slide">
          <div className="image-container">
            <img src={wallpaper2} alt="Wallpaper-2" />
          </div>
          <h2>IPhone 11 Pro</h2>
        </div>
        <div className="each-slide">
          <div className="image-container">
            <img src={wallpaper3} alt="Wallpaper-3" />
          </div>
          <h2>Motorola Flip</h2>
        </div>
        <div className="each-slide">
          <div className="image-container">
            <img src={wallpaper4} alt="Wallpaper-4" />
          </div>
          <h2>Google Pixel 3a</h2>
        </div>
        <div className="each-slide">
          <div className="image-container">
            <img src={wallpaper5} alt="Wallpaper-5" />
          </div>
          <h2>Droid DNA by HTC </h2>
        </div>
      </Slide>
      <div className="about">
        <p>
          We have achieved remarkable growth by debuting the best and newest
          products available in the market today. We continuously develop and
          expand strategic products in our Consumer Electronics division.
        </p>
        <p>
          We have worked continuously and have thrived along with our consumers.
          We have great products for all and we would like you to explore all
          our products. Please do leave us a feedback in any areas that you feel
          we need to improve.
        </p>
      </div>
    </React.Fragment>
  );
};

export default HomePage;
