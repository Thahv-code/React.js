import React, { Component } from "react";

type User = {
  id: number;
  name: string;
  address: string;
};

type StateType = {
  users: User[];
};

class MangUser extends Component<{}, StateType> {
  constructor(props: {}) {
    super(props);
    this.state = {
      users: [
        { id: 1, name: "Nguyễn Văn C", address: "Hà Nội" },
        { id: 2, name: "Trần Văn A", address: "Hải Phòng" },
        { id: 3, name: "Lê Thị B", address: "Đà Nẵng" },
      ],
    };
  }

  render() {
    return (
      <div>
        <h2>Danh sách Users</h2>
        <ul>
          {this.state.users.map((user) => (
            <li key={user.id}>
              <p><b>ID:</b> {user.id}</p>
              <p><b>Tên:</b> {user.name}</p>
              <p><b>Địa chỉ:</b> {user.address}</p>
              <hr />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default MangUser;
