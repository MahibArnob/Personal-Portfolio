import { CONTACT } from "../constants";
import {
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaFacebook,
  FaTwitterSquare,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaKaggle } from "react-icons/fa6";
import { FaGoogleScholar } from "react-icons/fa6";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div id="contact" className="border-b border-neutral-900 pb-20">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="my-10 text-center text-4xl"
      >
        Get in Touch
      </motion.h1>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <motion.a
          whileHover={{ scale: 1.5, y: -5 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          target="_blank"
          href="https://linkedin.com/in/mahibornob"
          className="hover:text-purple-400 hover:drop-shadow-[0_0_10px_rgba(168,85,247,0.5)] transition-colors duration-300"
        >
          <FaLinkedinIn />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.5, y: -5 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          target="_blank"
          href="https://github.com/MahibArnob"
          className="hover:text-purple-400 hover:drop-shadow-[0_0_10px_rgba(168,85,247,0.5)] transition-colors duration-300"
        >
          <FaGithub />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.5, y: -5 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          target="_blank"
          href="https://leetcode.com/u/MahibArnob"
          className="hover:text-purple-400 hover:drop-shadow-[0_0_10px_rgba(168,85,247,0.5)] transition-colors duration-300"
        >
          <SiLeetcode />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.5, y: -5 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          target="_blank"
          href="https://www.instagram.com/_mahib_arnob_"
          className="hover:text-purple-400 hover:drop-shadow-[0_0_10px_rgba(168,85,247,0.5)] transition-colors duration-300"
        >
          <FaInstagram />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.5, y: -5 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          target="_blank"
          href="https://www.facebook.com/mahib.arnob"
          className="hover:text-purple-400 hover:drop-shadow-[0_0_10px_rgba(168,85,247,0.5)] transition-colors duration-300"
        >
          <FaFacebook />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.5, y: -5 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          target="_blank"
          href="https://x.com/mahibarnob"
          className="hover:text-purple-400 hover:drop-shadow-[0_0_10px_rgba(168,85,247,0.5)] transition-colors duration-300"
        >
          <FaTwitterSquare />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.5, y: -5 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          target="_blank"
          href="https://www.kaggle.com/mahibarnob"
          className="hover:text-purple-400 hover:drop-shadow-[0_0_10px_rgba(168,85,247,0.5)] transition-colors duration-300"
        >
          <FaKaggle />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.5, y: -5 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          target="_blank"
          href="https://scholar.google.com/citations?hl=en&user=7Vu8_PUAAAAJ"
          className="hover:text-purple-400 hover:drop-shadow-[0_0_10px_rgba(168,85,247,0.5)] transition-colors duration-300"
        >
          <FaGoogleScholar />
        </motion.a>
      </div>
      <div className="text-center tracking-tighter">
        <p className="my-4">{CONTACT.address}</p>
        <a href={`mailto:${CONTACT.email}`} className="border-b">
          {CONTACT.email}
        </a>
      </div>
    </div>
  );
};

export default Contact;
