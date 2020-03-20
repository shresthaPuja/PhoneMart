import React, { Component } from "react";
import { ProductConsumer } from "../../Context";
import { Link } from "react-router-dom";
import { ButtonContainer } from "../Home/Button";

class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {detail => {
          const {
            id,
            company,
            title,
            img,
            price,
            info,
            inCart
          } = detail.detailProduct;
          return (
            <div className="container py-5">
              {/* {title} */}
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                  <h1 className="text-title">{title}</h1>
                </div>
                {/* {end title} */}
                {/* {Product Info} */}
                <div className="row">
                  <div className="col-10 mx-auto col-md-6 text-capitalize">
                    <img src={img} alt="Detail"></img>
                  </div>
                  <div className="col-10 mx-auto col-md-6 text-capitalize  ">
                    <h3>Model Name: {title}</h3>
                    <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                      Made by :<span className="text-uppercase">{company}</span>{" "}
                    </h4>
                    <h4 className="text-blue">
                      <strong>
                        Price:
                        <span> $</span>
                        {price}
                      </strong>
                    </h4>
                    <h4 className=" text-capitalize font-weight-bold mt-3 mb-0">
                      Product Info
                    </h4>
                    <h5 className="text-muted">{info}</h5>
                    {/* {Buttons} */}
                    <Link to="./ProductList">
                      <ButtonContainer>Back To Products</ButtonContainer>
                    </Link>

                    <ButtonContainer
                      cart
                      disable={inCart ? true : false}
                      onClick={() => {
                        detail.addToCart(id);
                        detail.openModal(id);
                      }}
                    >
                      {inCart ? "In Cart" : "Add To Cart"}
                    </ButtonContainer>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
export default Details;
