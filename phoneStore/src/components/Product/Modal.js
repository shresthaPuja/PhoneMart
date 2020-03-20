import React, { Component } from "react";
import style from "styled-components";
import { ProductConsumer } from "../../Context";
import { ButtonContainer } from "../Home/Button";
import { Link } from "react-router-dom";

class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const { modalOpen, closeModal } = value;
          const { img, price, title } = value.modalProduct;
          if (!modalOpen) {
            return null;
          } else {
            return (
              <ModalContainer>
                <div className="container">
                  <div classname="row">
                    <div
                      id="modal"
                      className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5"
                    >
                      <h5>Item Added To Cart</h5>
                      <img src={img} className="img-fluid" alt="product"></img>
                      <h5>{title}</h5>
                      <h5 className="text-muted">Price: ${price}</h5>
                      <Link to="./ProductList">
                        <ButtonContainer onClick={() => closeModal()}>
                          Continue Shopping
                        </ButtonContainer>
                      </Link>
                      <Link to="./shoppingCart">
                        <ButtonContainer cart onClick={() => closeModal()}>
                          Go to Cart
                        </ButtonContainer>
                      </Link>
                    </div>
                  </div>
                </div>
              </ModalContainer>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}

const ModalContainer = style.div`
position: fixed;
top:0;
left:0;
right:0;
bottom:0;
background:rgba(0, 0, 0, 0.3);
display:flex;
align-items:center;
justify-content:center;
#modal{
    background: var(--mainWhite);
}
`;

export default Modal;
