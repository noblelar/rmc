// components/Header.js
import React from 'react';
import HeaderNavigation from '../navigation/HeaderNavigation';
import Logo from "../../resources/images/logo.jpg";

const Header = () => {
  return (
    <header className="bg-cd0e2d text-white py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img src={Logo} alt="Logo" className="h-8 mr-2" />
          <span className="text-lg font-semibold">Rayleigh Methodist Church</span>
        </div>
        <HeaderNavigation />
        <div className="flex items-center">
          {/* Calendar and Search Icons */}
        </div>
      </div>
    </header>
  );
};

export default Header;
