import React, { useRef } from "react";
import FormPic from "../assets/formPic.jpg";
import { useInView, motion } from "framer-motion";
const GetInvloved = () => {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
  });
  return (
    <div className="h-fit py-11 bg-gray-100">
      <div
        ref={ref}
        className="flex lg:flex-row flex-col justify-between px-8 md:px-24 gap-4 items-center"
      >
        <motion.img
          src={FormPic}
          initial={{ x: -100, opacity: 0 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1.3, ease: "easeOut", delay: 0.3 }}
          className="w-[500px] h-[700px] object-cover hidden lg:inline-block"
        />
        <motion.div
          src={FormPic}
          initial={{ x: 100, opacity: 0 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1.3, ease: "easeOut", delay: 0.4 }}
          className="w-full md:w-1/2 bg-transparent p-8 shadow-lg rounded-lg mt-8 md:mt-0"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-6">
            Support Our Cause
          </h2>
          <p className="text-gray-600 text-center mb-8">
            Your small contribution can make a big difference.
          </p>

          <form className="space-y-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Donation Amount
              </label>
              <input
                type="number"
                placeholder="Enter amount in USD"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Message (Optional)
              </label>
              <textarea
                placeholder="Write a message (optional)"
                rows="4"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="w-full bg-orange-500 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Donate Now
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default GetInvloved;
