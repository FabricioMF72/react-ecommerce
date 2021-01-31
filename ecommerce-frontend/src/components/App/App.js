import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import Layout from "../Layout/Layout"
import ProductList from "../../screens/ProductList"
import ProductScreen from "../../screens/ProductScreen"
import CartScreen from "../../screens/CartScreen/CartScreen";
import SigninScreen from "../../screens/SigninScreen/SigninScreen";
import RegisterScreen from "../../screens/RegisterScreen/RegisterScreen";
import ShippingAddressScreen from "../../screens/ShippingAddressScreen/ShippingAddressScreen";
import PaymentMethodScreen from "../../screens/PaymentMethodScreen/PaymentMethodScreen";
import PlaceOrderScreen from "../../screens/PlaceOrderScreen/PlaceOrderScreen";
function App() {
  return (
    <React.Fragment>
      <Router>
        <Header/>
        <Layout>
          
            <Switch>
              <Route exact path="/" component={ProductList} />
              <Route path="/cart/:id?" component={CartScreen}/>
              <Route path="/about" component={ProductList} />
              <Route path="/product/:id" component={ProductScreen} />
              <Route path="/signin" component={SigninScreen} />
              <Route path="/register" component={RegisterScreen} />
              <Route path="/shipping" component={ShippingAddressScreen} />
              <Route path="/placeorder" component={PlaceOrderScreen}/>
              <Route path="/payment" component={PaymentMethodScreen} />
              <Route path="/contact" component={ProductList} />
              <Route component={ProductList} />
            </Switch>
          
        </Layout>
        <Footer/>
      </Router>
    </React.Fragment>
  );
}

export default App;
