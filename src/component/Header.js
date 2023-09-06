import React, { useState } from 'react';
import PropTypes from 'prop-types';
import UserModal from './UserModel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faHeart, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Header({ cart }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleUserClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <header>
      <div className="header-2" style={{ backgroundColor: 'rgb(125, 125, 125)' }}>
        <a href="/" className="logo"><i className="fa-solid fa-seedling" style={{color: '#252627'}}></i>From The Garden</a>
        <form action="" className="search-bar-container" style={{display:'flex', flexDirection:'row'}}>
          <input type="search" id="search-bar" placeholder="search here..." />
          <label htmlFor="search-bar" className="fas fa-search"></label>
        </form>
      </div>

      <div className="header-3" style={{ backgroundColor: 'lightgrey' }}>
        <div id="menu-bar" className="fas fa-bars" ></div>
        <nav className="navbar">
          <a href="#home">Home</a>
          <a href="#category">Indoor Plants</a>
          <a href="#product">Outdoor Plants</a>
          <a href="#seeds">Seeds</a>
          <a href="#contact">contact</a>
          <a href="#cart">cart</a>
          {/* No cart link here */}
        </nav>
        <div className="icons">
          <Link to="/cart">
            <FontAwesomeIcon icon={faShoppingCart} />({cart.length})
          </Link>
          <Link to="/wishlist">
            <FontAwesomeIcon icon={faHeart} />
          </Link>
          <button onClick={handleUserClick}>
          </button>
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  cart: PropTypes.array.isRequired,
};

export default Header;
