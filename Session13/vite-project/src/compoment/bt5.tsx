import React, { Component } from "react";

type Product = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

type ChildrenProps = {
  product: Product;
};

class Children_Comp extends Component<ChildrenProps> {
  render() {
    const { id, name, price, quantity } = this.props.product;
    return (
      <div>
        <h2>Thông tin sản phẩm</h2>
        <p><b>ID:</b> {id}</p>
        <p><b>Tên sản phẩm:</b> {name}</p>
        <p><b>Giá:</b> {price} VND</p>
        <p><b>Số lượng:</b> {quantity}</p>
      </div>
    );
  }
}

type ParentState = {
  product: Product;
};

class Parent_Comp extends Component<{}, ParentState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      product: {
        id: 101,
        name: "Laptop ASUS ROG",
        price: 35000000,
        quantity: 5
      }
    };
  }

  render() {
    return (
      <div>
        <h1>Component Cha</h1>
        <Children_Comp product={this.state.product} />
      </div>
    );
  }
}

export default Parent_Comp;
