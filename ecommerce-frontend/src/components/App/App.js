import React, {Component} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import Layout from "../Layout/Layout"
import ProductList from "../../screens/ProductList"
import ProductScreen from "../../screens/ProductScreen"
function App() {
  return (
    <React.Fragment>
      <Router>
        <Header/>
        <Layout>
          
            <Switch>
              <Route exact path="/" component={ProductList} />
              <Route path="/about" component={ProductList} />
              <Route path="/product/:id" component={ProductScreen} />
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
