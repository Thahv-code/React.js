import React, { Component } from "react";

type StateType = {
  name: string;
};

class myName extends Component<{}, StateType> {
  constructor(props: {}) {
    super(props);
    this.state = {
      name: "Nguyễn Vũ Thành" 
    };
  }

}

export default myName;
