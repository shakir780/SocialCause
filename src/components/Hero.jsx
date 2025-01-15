import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Hero1 from "../assets/Hero1.jpg";
import Hero2 from "../assets/Hero2.jpg";
import { button } from "framer-motion/client";
import { MdArrowOutward } from "react-icons/md";
import { RiPlayCircleLine } from "react-icons/ri";

const Hero = () => {
  const slides = [
    {
      image: Hero1,
      title: "Helping each other can <br/>   make the world better",
      subtitle: " Every small action contributes to a larger",
      button: "Join the Cause",
      button2: "Watch video",
    },
    {
      image: Hero2,
      title: "Every Donation matters, <br/> Every Heart Matters",
      subtitle: "Your support brings hope and change to the world.",
      button: "Join the Cause",
      button2: "Watch video",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative h-[60vh] md:h-screen w-full overflow-hidden">
      <AnimatePresence>
        <motion.div
          key={currentIndex}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${slides[currentIndex].image})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
            <motion.h1
              className="text-2xl  md:text-6xl font-bold"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              dangerouslySetInnerHTML={{ __html: slides[currentIndex].title }}
            />
            <motion.p
              className="mt-4 text-lg md:text-2xl"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {slides[currentIndex].subtitle}
            </motion.p>
            <div className="flex gap-4 mt-7 items-center">
              <motion.button
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 100 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="md:py-5 py-2.5 px-5 md:px-10 bg-orange-500 hover:bg-white hover:text-black ease-in rounded-full"
              >
                <div className="flex gap-1 items-center font-bold">
                  {slides[currentIndex].button}
                  <span>
                    <MdArrowOutward className="text-2xl" />
                  </span>
                </div>
              </motion.button>
              <motion.button
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 100 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="md:py-5 py-2.5 px-5 md:px-10 bg-green-500 rounded-full hover:bg-white hover:text-black ease-in"
              >
                <div className="flex gap-1 items-center font-bold">
                  <span>
                    <RiPlayCircleLine className="text-2xl" />
                  </span>
                  {slides[currentIndex].button2}
                </div>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Hero;
