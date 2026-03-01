import { RESEARCH } from "../constants";
import { motion } from "framer-motion";

const handleLinkClick = () => {
  setMobileMenuOpen(false); // Close the menu after clicking a link
};

const Research = () => {
  return (
    <div id="research" className="border-b border-neutral-800 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Research
      </motion.h1>
      <div>
        {RESEARCH.map((research, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <p className="mb-2 text-sm text-neutral-400">{research.year}</p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              {research.award && (
                <span className="inline-block mt-2 mb-3 rounded bg-[#FFD700]/20 px-2 py-1 text-xs font-semibold text-[#FFD700] border border-[#FFD700]/30 shadow-[0_0_10px_rgba(255,215,0,0.2)]">
                  <span className="mr-1">🏆</span> {research.award}
                </span>
              )}
              <h6 className="mb-2 font-semibold">
                <a
                  href={research.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-100 hover:underline"
                >
                  {research.name}
                </a>
              </h6>
              <p className="text-sm text-purple-100">{research.authors}</p>
              <motion.a
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                href={research.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 bg-blue-600 rounded-sm text-white px-1 py-0.7"
                onClick={handleLinkClick} // Close menu on click
              >
                Download PDF
              </motion.a>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Research;
