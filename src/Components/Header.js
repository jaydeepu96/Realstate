import React from 'react';
import '../ComponentCss/Header.css'; // Make sure to adjust the path to your CSS file if needed

function Header() {
  return (
    <div className="header">
      <nav>
        <ul className="nav-list">
          <li><a href="/">Home</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/projects">Projects</a></li>
          <li><a href="/pages">Pages</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
      <div className="contact-info">
        <p>Call Us Anytime</p>
        <p>(+123) 987.654.32</p>
      </div>
    </div>
  );
}

export default Header;
