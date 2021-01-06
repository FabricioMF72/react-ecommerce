import React, {Component} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import Layout from "../Layout/Layout"
import ProductList from "../../screens/ProductList"
function App() {
  return (
    <React.Fragment>
      <Header/>
      <Layout>
        <Router>
          <Switch>
            <Route exact path="/" component={ProductList} />
            <Route path="/about" component={ProductList} />
            <Route path="/contact" component={ProductList} />
            <Route component={ProductList} />
          </Switch>
        </Router>
      </Layout>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
