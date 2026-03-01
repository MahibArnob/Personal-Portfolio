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
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          target="_blank"
          href="https://linkedin.com/in/mahibornob"
        >
          <FaLinkedinIn />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          target="_blank"
          href="https://github.com/MahibArnob"
        >
          <FaGithub />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          target="_blank"
          href="https://leetcode.com/u/MahibArnob"
        >
          <SiLeetcode />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          target="_blank"
          href="https://www.instagram.com/_mahib_arnob_"
        >
          <FaInstagram />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          target="_blank"
          href="https://www.facebook.com/mahib.arnob"
        >
          <FaFacebook />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          target="_blank"
          href="https://x.com/mahibarnob"
        >
          <FaTwitterSquare />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          target="_blank"
          href="https://www.kaggle.com/mahibarnob"
        >
          <FaKaggle />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          target="_blank"
          href="https://scholar.google.com/citations?hl=en&user=7Vu8_PUAAAAJ"
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
