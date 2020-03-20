import React, { Component } from "react";
import contactImg from "./Image/calling.jpg";

class Contact extends Component {
  render() {
    return (
      <div>
        <img style={imgStyle} src={contactImg} alt="Contact"></img>
        <div style={txtStyle}>
          <h1>Contact us online</h1>
          <p>
            Contact us online through chat and get support from an expert on
            your computer, mobile device or tablet. Support is also available on
            your mobile device through the Our App
          </p>
          <h1>Call us</h1>
          <p>Call us at our toll free number 1-800-159-6586</p>
        </div>
      </div>
    );
  }
}

var imgStyle = {
  display: "block",
  margin: "auto",
  width: "80%"
};
var txtStyle = {
  textAlign: "center",
  fontFamily: "Oswald",
  margin: "100px"
};
export default Contact;
