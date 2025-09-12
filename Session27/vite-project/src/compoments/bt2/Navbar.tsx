import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav
      style={{
        padding: "10px",
        background: "#1518d0ff",
        display: "flex",
        justifyContent: "center",
        gap: "100px",
        height: "50px",
      }}
    >
          <h1>Trang chi tiết sản phầm</h1>
          <p>Danh sách sản phầm</p>
    </nav>
  );
};

export default Navbar;
