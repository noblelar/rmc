// components/Footer.js
import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import HeaderNavigation from "../navigation/HeaderNavigation";
import Logo from "../../resources/images/logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-cd0e2d text-white py-4 md:flex-col md:items-start md:space-y-4 md:text-center">
      <div className="container mx-auto flex space-x-4">
        <HeaderNavigation />
        <div className="flex space-x-4">
          <FaPhone className="text-2xl" />
          <FaEnvelope className="text-2xl" />
          <FaFacebook className="text-2xl" />
          <FaTwitter className="text-2xl" />
          <FaInstagram className="text-2xl" />
        </div>
      </div>
      <div className="container mx-auto text-center">
        <img src={Logo} alt="Logo" className="h-8 mb-2" />
        <p>Rayleigh Methodist Church</p>
      </div>
    </footer>
  );
};

export default Footer;
