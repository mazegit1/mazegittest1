import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaHome, FaUser, FaComments, FaPhone } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => setMenuOpen(!menuOpen);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-black z-10 text-yellow-400 fixed w-full flex justify-between items-center px-6 py-4 shadow-xl"
    >
      {/* Left: Name */}
      <a href="/" className="text-2xl font-bold">
        Huseyn Khalil
      </a>

      {/* Right: Links */}
      <nav className="hidden md:flex space-x-6">
        <Link to="/" className="flex items-center space-x-2 hover:text-white">
          <FaHome />
          <span>Home</span>
        </Link>
        <Link to="/about" className="flex items-center space-x-2 hover:text-white">
          <FaUser />
          <span>About</span>
        </Link>
        <Link to="/testimonials" className="flex items-center space-x-2 hover:text-white">
          <FaComments />
          <span>Testimonials</span>
        </Link>
        <Link to="/contact" className="flex items-center space-x-2 hover:text-white">
          <FaPhone />
          <span>Contact</span>
        </Link>
      </nav>

      {/* Hamburger Menu (Mobile) */}
      <div className="md:hidden">
        <button
          onClick={handleMenuToggle}
          className="text-yellow-400 focus:outline-none"
        >
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="absolute top-16 left-0 w-full bg-black text-yellow-400 shadow-md"
        >
          <div className="flex flex-col items-center space-y-4 py-4">
            <Link
              to="/"
              className="flex items-center space-x-2 hover:text-white"
              onClick={handleMenuToggle}
            >
              <FaHome />
              <span>Home</span>
            </Link>
            <Link
              to="/about"
              className="flex items-center space-x-2 hover:text-white"
              onClick={handleMenuToggle}
            >
              <FaUser />
              <span>About</span>
            </Link>
            <Link
              to="/testimonials"
              className="flex items-center space-x-2 hover:text-white"
              onClick={handleMenuToggle}
            >
              <FaComments />
              <span>Testimonials</span>
            </Link>
            <Link
              to="/contact"
              className="flex items-center space-x-2 hover:text-white"
              onClick={handleMenuToggle}
            >
              <FaPhone />
              <span>Contact</span>
            </Link>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
