import React from "react";
import PaypalExpressBtn from "react-paypal-express-checkout";

export default class MyApp extends React.Component {
  render() {
    const onSuccess = payment => {
       console.log("The payment was succeeded!", payment);
      this.props.clearCart();
      this.props.history.push("/ProductList");
     
    };

    const onCancel = data => {
         console.log("The payment was cancelled!", data);
     
    };

    const onError = err => {
        console.log("Error!", err);
     
    };

    let env = "sandbox"; 
    let currency = "USD"; 
   

    const client = {
      sandbox: "AfJMSt7ZKmWDN1W_1Ys39mcb_L0O0iZOQVTKzUhruZNXfovsENzr7SVQ3QjSmX__mGvQ3FxhGD0Z8MVH",
      production: "YOUR-PRODUCTION-APP-ID"
    };
  
    return (
      <PaypalExpressBtn
        env={env}
        client={client}
        currency={currency}
        total={this.props.total}
        onError={onError}
        onSuccess={onSuccess}
        onCancel={onCancel}
      />
    );
  }
}
