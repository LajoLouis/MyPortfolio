import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io5";
import { MdClose } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const navLinks = (
    <>
      <motion.div whileTap={{ scale: 0.95 }}>
        <RouterLink to="/" className="hover:text-yellow-400 border-b-2 border-yellow-400 pb-1 block py-2">
          HOME
        </RouterLink>
      </motion.div>
      <motion.div whileTap={{ scale: 0.95 }}>
        <Link to="resume" smooth={true} duration={2000} className="hover:text-yellow-400 block py-2">
          RESUME
        </Link>
      </motion.div>
      <motion.div whileTap={{ scale: 0.95 }}>
        <Link to="projects" smooth={true} duration={2000}  className="hover:text-yellow-400 block py-2">
          PROJECTS
        </Link>
      </motion.div>
      <motion.div whileTap={{ scale: 0.95 }}>
        <Link to="contact" smooth={true} duration={2000} className="hover:text-yellow-400 block py-2">
          CONTACT
        </Link>
      </motion.div>
    </>
  );

  return (
    <header className="bg-black text-white px-6 py-4 sticky top-0 z-10 bg-opacity-80">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold text-yellow-600">FRANKLIN</h1>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex space-x-6">{navLinks}</nav>

        {/* Social Icons */}
        <div className="hidden lg:flex space-x-3">
          <a href="https://github.com/LajoLouis" target="_blank" rel="noopener noreferrer">
            <IoLogoGithub className="text-2xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/franklin-ezeoke-27327121b/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600"
          >
            <FaLinkedin className="text-2xl" />
          </a>
          <a
            href="https://x.com/Lajo_Frank?t=pqAZb5dF_MXa7TQk25cyDw&s=08"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter className="text-2xl" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-3xl"
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          {isNavOpen ? <MdClose /> : <IoMdMenu />}
        </button>
      </div>

      {/* Mobile Slide-Down Menu */}
      <AnimatePresence>
        {isNavOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col lg:hidden mt-4 space-y-2 border-t border-gray-700 pt-4"
          >
            {navLinks}

            {/* Social Icons for mobile */}
            <div className="flex justify-start space-x-4 pt-4">
              <a href="https://github.com/LajoLouis" target="_blank" rel="noopener noreferrer">
                <IoLogoGithub className="text-2xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/franklin-ezeoke-27327121b/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600"
              >
                <FaLinkedin className="text-2xl" />
              </a>
              <a
                href="https://x.com/Lajo_Frank?t=pqAZb5dF_MXa7TQk25cyDw&s=08"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaXTwitter className="text-2xl" />
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
