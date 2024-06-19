import './header.scss';
import { useState } from 'react';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="logo">Blogr</div>
      <button className="hamburger" onClick={toggleMenu}>
        {menuOpen ? '✖' : '☰'}
      </button>
      <nav className={menuOpen ? 'open' : ''}>
        <ul>
          <li>
            <a href="#product">Product</a>
            <ul>
              <li><a href="#product1">Product 1</a></li>
              <li><a href="#product2">Product 2</a></li>
              <li><a href="#product3">Product 3</a></li>
            </ul>
          </li>
          <li>
            <a href="#company">Company</a>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#team">Team</a></li>
              <li><a href="#careers">Careers</a></li>
            </ul>
          </li>
          <li>
            <a href="#connect">Connect</a>
            <ul>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#newsletter">Newsletter</a></li>
              <li><a href="#linkedin">LinkedIn</a></li>
            </ul>
          </li>
        </ul>
      </nav>
      <div className="auth-buttons">
        <button className="login">Login</button>
        <button className="signup">Sign Up</button>
      </div>
    </header>
  )
}
