import React, { useState } from "react";

export default function Exersice2() {
  const [user, setUser] = useState({
    name: "",
    email: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <h2>User Profile</h2>
          <p>Tên: {name}</p>
          <p>Email: {email}</p>
        <button>Submit</button>
    </div>
  );
}
