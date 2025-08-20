import React, { Component } from "react";

type ChildrenProps = {
  name: string;
};

class Children extends Component<ChildrenProps> {
  render() {
    return (
      <div>
        <h2>Component Con</h2>
        <p>Tên nhận từ cha: <b>{this.props.name}</b></p>
      </div>
    );
  }
}

type ParentState = {
  name: string;
};

class Parent extends Component<{}, ParentState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      name: "Nguyễn Van A"
    };
  }

  render() {
    return (
      <div>
        <h1>Component Cha</h1>
        <Children name={this.state.name} />
      </div>
    );
  }
}

export default Parent_;
