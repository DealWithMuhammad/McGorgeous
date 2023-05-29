import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex justify-center items-center">
        <div className="flex space-x-4">
          <a href="https://www.instagram.com/_mariawaseem_arts" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white">
            <FaFacebook className="text-2xl" />
          </a>
          <a href="https://www.instagram.com/_mariawaseem_arts" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white">
            <FaTwitter className="text-2xl" />
          </a>
          <a href="https://www.instagram.com/_mariawaseem_arts/"
        target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white">
            <FaInstagram className="text-2xl" />
          </a>
        </div>
      </div>
      <div className="container mx-auto mt-4 text-center">
        <p className="text-sm">© Muhammad 2023. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
