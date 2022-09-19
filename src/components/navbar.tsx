import React, { FC } from 'react';

interface NavbarProps {
  title: string;
}

const Navbar: FC<NavbarProps> = ({ title }) => {
  return (
    <nav>
      <div className="Navbar">
        <a href="/" className="Navbar-logo">
          {title}
        </a>
      </div>
    </nav>
  );
}

export default Navbar;