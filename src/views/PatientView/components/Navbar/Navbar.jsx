import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const cartItemCount = 3;

  return (
    <>
      <nav className="navbar shadow">
        <Link to="/" id="medicare_logo">Medicare</Link>
        <div id="navbar_items_container">
          <Link to="/find-doctors" className="nav_item">
            <i className="fa-solid fa-stethoscope"></i>
            <span>Find Doctors</span>
          </Link>

          <Link to="/buy-medicines" className="nav_item">
            <i className="fa-solid fa-pills"></i>
            <span>Buy Medicines</span>
          </Link>

          <div className="nav_item">
            <i className="fa-solid fa-calendar-check"></i>
            <span>My Appointments</span>
          </div>

          <div className="nav_item">
            <i className="fas fa-box"></i>
            <span>My Orders</span>
          </div>

          <div className="nav_item cart">
            <div className="cart_icon_wrapper">
              <i className="fa-solid fa-cart-shopping"></i>
              {cartItemCount > 0 && (
                <span className="cart_badge">{cartItemCount}</span>
              )}
            </div>
            <span>Cart</span>
          </div>
        </div>

        <div id="navbar_user_profile_container">
          <div className="user_profile">
            <i className="fa-regular fa-user"></i>
            <span>Manikanta Parameswarappa</span>
            <i className="fa-solid fa-angle-down"></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;