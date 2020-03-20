import React, { Component } from "react";
import Products from "./Products.js";
import Title from "../Home/Title";

import { ProductConsumer } from "../../Context";

class ProductList extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="our" title="products" />
            <div className="row">
            <ProductConsumer>
              {values => {
                return values.products.map(product => {
                  return <Products key={product.id} product={product} />;
                });
              }}
            </ProductConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default ProductList;
