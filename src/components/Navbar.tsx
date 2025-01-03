"use client"

import React, { useState } from 'react';
import './Navbar.css'; // Add this CSS for styling
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      {/* Logo Section */}
      <div className="navbar-logo">
        <Link href="/" className='a'>
          <img src="/globe.svg" alt="Logo" className="logo" /> {/* Replace with your logo */}
          ETechnnie
        </Link>
      </div>

      {/* Search Bar */}
      <div className="navbar-search">
        <input
          type="text"
          className="search-input"
          placeholder="Search for events"
        />
        <button className="search-button">
          Search
        </button>
      </div>

      {/* Buttons and Hamburger */}
      <div className="navbar-actions">
        <a href="/signin" className="btn btn-signin">
          SignIn
        </a>
        <a href="/register" className="btn btn-register">
          Register
        </a>
        <button className="hamburger" onClick={toggleMenu}>
          |||
        </button>
      </div>

      {/* Hamburger Menu Links */}
      <div className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
        <Link href="/signin" className="menu-item">
          <i className="fa fa-home"></i>SignIn
        </Link>
        <Link href="/register" className="menu-item">
          <i className="fa fa-home"></i>Register
        </Link>
        <Link href="/" className="menu-item">
          <i className="fa fa-home"></i> Home
        </Link>
        <Link href="/browse-events" className="menu-item">
          <i className="fa fa-calendar"></i> Browse Events
        </Link>
        <Link href="/venues" className="menu-item">
          <i className="fa fa-map-marker"></i> Venues
        </Link>
        <Link href="/how-it-works" className="menu-item">
          <i className="fa fa-question-circle"></i> How It Works?
        </Link>
        <Link href="/blog" className="menu-item">
          <i className="fa fa-pencil"></i> Blog
        </Link>
        <Link href="/my-tickets" className="menu-item">
          <i className="fa fa-ticket"></i> My Tickets
        </Link>
        <Link href="/add-event" className="menu-item">
          <i className="fa fa-plus-circle"></i> Add My Event
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;