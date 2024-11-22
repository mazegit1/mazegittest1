import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-black text-yellow-400  py-20 px-4"
    >
      <div className="max-w-6xl mx-auto">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center md:text-left"
          >
            <p className="text-lg font-bold">Huseyn Khalil</p>
            <p className="text-sm">Baku, Azerbaijan</p>
            <p className="text-sm">Age: 14</p>
            <p className="text-sm">Year: 2024</p>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-6"
          >
            <Link
              to="/testimonials"
              className="flex items-center space-x-2 hover:text-white"
            >
              <FaHeart />
              <span>Testimonials</span>
            </Link>
            <Link
              to="/contact"
              className="flex items-center space-x-2 hover:text-white"
            >
              <FaEnvelope />
              <span>Contact</span>
            </Link>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.hr
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="border-t border-yellow-400 my-4"
        />

        {/* Bottom Section */}
        <div className="text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-sm"
          >
            © 2024 Huseyn Khalil. All rights reserved.
          </motion.p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
