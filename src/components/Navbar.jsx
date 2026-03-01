import { useState, useEffect, useRef } from "react";
import logo from "../favicon.ico";
import { motion } from "framer-motion";
import cvFile from "../assets/MahibOrnobResume.pdf";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const burgerIconRef = useRef(null);

  // This function closes the mobile menu when a link is clicked
  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  // This effect handles closing the menu when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the click is outside the menu panel AND outside the burger icon
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        burgerIconRef.current &&
        !burgerIconRef.current.contains(event.target)
      ) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []); // Empty dependency array is correct here

  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      {/* Logo */}
      <div className="flex flex-shrink-0 items-center">
        <a href="#hero">
          <motion.img
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="mx-2 w-10"
            src={logo}
            alt="logo"
          />
        </a>
      </div>

      {/* --- Desktop Menu (Visible on Medium screens and up) --- */}
      <div className="hidden text-sm md:flex items-center gap-4">
        <motion.a whileHover={{ scale: 1.1 }} href={cvFile} target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-2 py-1 rounded-sm hover:bg-blue-700">Resume</motion.a>
        <motion.a whileHover={{ scale: 1.1 }} href="#about" className="hover:text-blue-400">About</motion.a>
        <motion.a whileHover={{ scale: 1.1 }} href="#technologies" className="hover:text-blue-400">Technologies</motion.a>
        <motion.a whileHover={{ scale: 1.1 }} href="#education" className="hover:text-blue-400">Education</motion.a>
        <motion.a whileHover={{ scale: 1.1 }} href="#experience" className="hover:text-blue-400">Experience</motion.a>
        <motion.a whileHover={{ scale: 1.1 }} href="#research" className="hover:text-blue-400">Research</motion.a>
        <motion.a whileHover={{ scale: 1.1 }} href="#projects" className="hover:text-blue-400">Projects</motion.a>
        <motion.a whileHover={{ scale: 1.1 }} href="#photography" className="hover:text-blue-400">Photography</motion.a>
        <motion.a whileHover={{ scale: 1.1 }} href="#contact" className="hover:text-blue-400">Contact</motion.a>
      </div>

      {/* --- Burger Icon (Visible on Small screens only) --- */}
      <div ref={burgerIconRef} className="md:hidden">
        <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? (
            <div className="text-3xl">&times;</div> // Close icon
          ) : (
            // Burger icon
            <div className="w-6">
              <div className="h-1 bg-blue-600 mb-1"></div>
              <div className="h-1 bg-blue-600 mb-1"></div>
              <div className="h-1 bg-blue-600"></div>
            </div>
          )}
        </button>
      </div>

      {/* --- Mobile Menu Panel (Appears when open on small screens) --- */}
      {isMobileMenuOpen && (
        <motion.div
          ref={menuRef}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden absolute top-20 right-8 z-50 flex flex-col items-start gap-4 p-4 bg-neutral-900 rounded-lg shadow-lg"
        >
          <a href={cvFile} target="_blank" rel="noopener noreferrer" onClick={handleLinkClick} className="w-full text-center bg-blue-600 text-white px-2 py-1 rounded-sm hover:bg-blue-70s00">Resume</a>
          <a href="#about" onClick={handleLinkClick} className="hover:text-blue-400">About</a>
          <a href="#technologies" onClick={handleLinkClick} className="hover:text-blue-400">Technologies</a>
          <a href="#education" onClick={handleLinkClick} className="hover:text-blue-400">Education</a>
          <a href="#experience" onClick={handleLinkClick} className="hover:text-blue-400">Experience</a>
          <a href="#research" onClick={handleLinkClick} className="hover:text-blue-400">Research</a>
          <a href="#projects" onClick={handleLinkClick} className="hover:text-blue-400">Projects</a>
          <a href="#photography" onClick={handleLinkClick} className="hover:text-blue-400">Photography</a>
          <a href="#contact" onClick={handleLinkClick} className="hover:text-blue-400">Contact</a>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;