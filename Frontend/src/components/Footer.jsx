import React from 'react';
import { AiFillMediumCircle, AiFillInstagram, AiFillFacebook, AiFillYoutube, AiFillPinterest } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 to-black text-gray-300 py-10 mt-12">
      <div className="max-w-[1300px] mx-auto flex flex-col md:flex-row justify-between items-center px-6 md:px-20">
        
        <div className="space-y-4 text-center md:text-left">
          <h3 className="text-3xl font-semibold text-white">Kasun Sri</h3>
          <div className="flex flex-row gap-6 text-gray-400 text-3xl justify-center md:justify-start">
            <a href="http://medium.com/@Kasun_Sri_" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-transform transform hover:scale-110"><AiFillMediumCircle /></a>
            <a href="https://www.instagram.com/kasun_sri_?igsh=ejM2d2g1a3U3bzkx" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-transform transform hover:scale-110"><AiFillInstagram /></a>
            <a href="https://www.facebook.com/buddika.kb?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-transform transform hover:scale-110"><AiFillFacebook /></a>
            <a href="https://youtube.com/@kasunsri?si=4pTQbZu18tyMu1Tk" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-transform transform hover:scale-110"><AiFillYoutube /></a>
            <a href="https://pin.it/2n0Bh50x2" target="_blank" rel="noopener noreferrer" className="hover:text-red-600 transition-transform transform hover:scale-110"><AiFillPinterest /></a>
          </div>
        </div>

        <p className="text-gray-400 mt-6 md:mt-0 text-center">@ 2025 Kasun Sri | All Rights Reserved</p>
      </div>
      
      <div className="w-full border-t border-gray-700 mt-6"></div>
    </div>
  );
};

export default Footer;
