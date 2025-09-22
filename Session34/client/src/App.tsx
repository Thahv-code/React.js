import React from "react";
import "./App.css";
import ProductList from "./component/ProductList";
import ShoppingCart from "./component/ShoppingCart";
export default function App() {
  return (
    <div className="container">
      <div className="page-header">
        <h1>Shopping Cart</h1>
      </div>
      {}
      <div className="row">
        <ProductList></ProductList>
        {}
        <ShoppingCart></ShoppingCart>
      </div>
    </div>
  );
}
