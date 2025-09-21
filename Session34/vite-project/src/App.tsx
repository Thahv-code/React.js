import React from "react";
import "./App.css";
import "./bootstrap.css";
import ProductList from "./compoment/ProductList";
import Cart from "./compoment/cart";

const App: React.FC = () => (
  <div className="container">
    <div className="page-header">
      <h1>Shopping Cart</h1>
    </div>
    <div className="row">
      <div >
        <ProductList />
      </div>
      <div >
        <Cart />
      </div>
    </div>
  </div>
);

export default App;
