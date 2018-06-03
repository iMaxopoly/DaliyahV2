import React from "react";

const Header = () => (
  <header className="header">
    <nav className="navigation">
      <ul className="navigation__container">
        <li className="navigation__container--logo">Daliyah</li>
        <li className="navigation__container--item active">Modules</li>
        <li className="navigation__container--item">Updates</li>
        <li className="navigation__container--item">Billing</li>
        <li className="navigation__container--item">About</li>
      </ul>
    </nav>
  </header>
);

export default Header;
