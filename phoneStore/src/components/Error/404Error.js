import React, { Component } from "react";

class Error extends Component {
  render() {
    return (
      <div className=" container">
        <div className="row">
          <div className="col-10 mx-auto text-center text-title text-uppercase pt-5">
            <h1>404 Error</h1>
            <h1>Page Not Found</h1>

            <h2>
              the requested URl
              <span className="text-danger">
                {this.props.location.pathname}
              </span>{" "}
              was not found. Please Check the Url and Try Again
            </h2>
          </div>
        </div>
      </div>
    );
  }
}
export default Error;
