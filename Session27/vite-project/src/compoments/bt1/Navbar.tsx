import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav style={{ padding: "10px", background: "#1518d0ff", display:"flex", justifyContent:"center", gap:"100px", height:"50px" }}>
      <Link to="/" style={{ margin: "0 10px", color: "white",textDecoration:"none" }}>
        Home
      </Link>
      <Link to="/about" style={{ margin: "0 10px", color: "white",textDecoration:"none"  }}>
        About
      </Link>
      <Link to="/contact" style={{ margin: "0 10px", color: "white", textDecoration:"none"  }}>
        Contact
      </Link>
    </nav>
  );
};

export default Navbar;
