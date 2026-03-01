import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { PHOTOGRAPHY_IMAGES } from "../constants";

const Photography = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  
  // Zoom slideshow properties
  const zoomOutProperties = {
    scale: 0.7,
    duration: 4000,
    transitionDuration: 600,
    infinite: true,
    indicators: true,
    arrows: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const handleImageClick = (e, imageSrc) => {
    // Only trigger if the click is directly on the image element
    if (e.target.tagName === 'IMG') {
      setSelectedImage(imageSrc);
    }
  };

  return (
    <div id="photography" className="border-b border-neutral-800 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Photography
      </motion.h1>
      
      <div className="mx-auto max-w-6xl px-4">
        {/* Slideshow Container */}
        <div className="slideshow-container">
          <Zoom {...zoomOutProperties}>
            {PHOTOGRAPHY_IMAGES.map((photo, index) => (
              <div key={index} className="each-slide-effect">
                <div 
                  className="slide-content"
                  onClick={(e) => handleImageClick(e, photo.src)}
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="slide-image cursor-pointer"
                    style={{
                      objectFit: "contain",
                      width: "100%",
                      height: "80vh",
                      borderRadius: "12px",
                      maxWidth: "100%",
                      maxHeight: "100%"
                    }}
                  />
                  {/* Optional: Add image caption */}
                  {photo.alt && photo.alt !== "Photograph by Mahib Ornob" && (
                    <div className="slide-caption">
                      <p className="text-white text-lg font-medium bg-black bg-opacity-50 px-4 py-2 rounded-lg">
                        {photo.alt}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </Zoom>
        </div>
      </div>

      {/* Lightbox Modal using AnimatePresence for exit animations */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            // This is the backdrop, clicking it closes the modal
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              // This is the modal content, stopPropagation prevents backdrop click
              onClick={(e) => e.stopPropagation()}
              className="relative p-2 bg-neutral-900 rounded-lg shadow-2xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <img
                src={selectedImage}
                alt="Enlarged view"
                className="max-h-[85vh] max-w-[90vw] object-contain rounded"
              />
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-4 -right-4 w-10 h-10 bg-white text-black rounded-full flex items-center justify-center text-2xl font-bold border-2 border-neutral-900 hover:bg-gray-100 transition-colors"
              >
                &times;
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Custom styles to enhance the slideshow appearance */}
      <style jsx>{`
        .slideshow-container {
          position: relative;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          border-radius: 12px;
          overflow: visible;
          background: transparent;
        }

        .each-slide-effect {
          display: flex;
          align-items: center;
          justify-content: center;
          background: transparent;
          height: 80vh;
          position: relative;
        }

        .slide-content {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: transparent;
        }

        .slide-image {
          transition: transform 0.3s ease;
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
        }

        .slide-caption {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 10;
          pointer-events: none; /* Disable pointer events on caption */
        }

        /* Custom styling for indicators */
        .react-slideshow-container .indicators {
          position: absolute;
          bottom: 15px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 8px;
        }

        .react-slideshow-container .indicators .each-indicator {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.5);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .react-slideshow-container .indicators .each-indicator.active {
          background: white;
          transform: scale(1.2);
        }

        /* Custom styling for navigation arrows */
        .react-slideshow-container .nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 50px;
          height: 50px;
          background: rgba(248, 250, 252, 0.15);
          border: 1px solid rgba(248, 250, 252, 0.3);
          border-radius: 50%;
          color: rgba(248, 250, 252, 0.9);
          font-size: 24px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
          z-index: 10;
        }

        .react-slideshow-container .nav:hover {
          background: rgba(248, 250, 252, 0.25);
          border-color: rgba(248, 250, 252, 0.5);
          color: rgba(248, 250, 252, 1);
          transform: translateY(-50%) scale(1.1);
        }

        .react-slideshow-container .nav.default-nav {
          color: white;
        }

        .react-slideshow-container .nav:first-of-type {
          left: 20px;
        }

        .react-slideshow-container .nav:last-of-type {
          right: 20px;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .each-slide-effect {
            height: 60vh;
          }

          .slide-image {
            height: 60vh !important;
          }

          .react-slideshow-container .nav {
            width: 40px;
            height: 40px;
            font-size: 18px;
          }

          .react-slideshow-container .nav:first-of-type {
            left: 10px;
          }

          .react-slideshow-container .nav:last-of-type {
            right: 10px;
          }

          .slide-caption p {
            font-size: 16px;
            padding: 8px 16px;
          }
        }

        @media (max-width: 480px) {
          .each-slide-effect {
            height: 50vh;
          }

          .slide-image {
            height: 50vh !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Photography;