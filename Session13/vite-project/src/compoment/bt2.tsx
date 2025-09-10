import React, { Component } from "react";

type StateType = {
  id: number;
  name: string;
  day: string; 
  address: string;
};

class myInfo extends Component<{}, StateType> {
  constructor(props: {}) {
    super(props);
    this.state = {
      id: 1,
      name: "Nguyễn Vũ Thành",
      day: "21-06-2006", 
      address: "Hà Nội"
    };
  }
zm
}

export default myInfo;
