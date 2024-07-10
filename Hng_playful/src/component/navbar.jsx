import { ShoppingCart } from "phosphor-react";
import { Heart } from "phosphor-react";
import React from "react";
import {Link} from "react-router-dom";
import "./navbar.css";


export const Navbar = () => {
  return  <nav className="navbar">
  <div className="container">
    <Link to="/" className="logo">
      <img src="/images/logo.png" alt="Brand Logo" />
    </Link>

    <div className="search">
      <input type="text" placeholder="Search..." />
      <button>Search</button>
    </div>

    <ul className="nav-links">
      <li>
        <Link to="/home">Home</Link>
      </li>
      <li>
        <Link to="/shop">Shop</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>

    <Link to="/cart">
          <ShoppingCart size={32} />
    </Link>
    
    <Heart size={32} />
    

  </div>
</nav>
}
