import React, { useRef } from "react";
import Paper from "../assets/paper-texture.jpg";
import { GiChickenLeg, GiGraduateCap, GiMedicinePills } from "react-icons/gi";
import { useInView, motion } from "framer-motion";

const Card = ({ icon, title, description, delay, inView }) => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1.3, ease: "easeOut", delay }}
      className="bg-white py-4 shadow-xl md:h-[300px] md:w-[400px] rounded-2xl"
    >
      <div className="flex flex-col gap-4 items-center mt-5">
        <span className="text-6xl text-orange-500">{icon}</span>
        <span className="text-xl md:text-3xl font-semibold">{title}</span>
        <p className="text-sm md:text-md px-8 text-gray-400 text-center">
          {description}
        </p>
        <button className="md:py-3 py-2.5 px-5 md:px-10 bg-orange-500 rounded-full text-white ease-in">
          Learn More
        </button>
      </div>
    </motion.div>
  );
};
const CardsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
  });
  return (
    <div
      className=" h-fit py-28 w-full overflow-hidden"
      style={{
        backgroundImage: `url(${Paper})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div ref={ref} className="mt-10 flex flex-col gap-8 items-center">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.3, ease: "easeOut", delay: 0.5 }}
          className="flex text-xl font-semibold text-orange-500 items-center gap-3"
        >
          <span className="bg-orange-500 text-orange-500 h-[2px] w-16" />
          <span>Charity Services</span>
          <span span className="bg-orange-500 h-[2px] w-16" />
        </motion.div>
        <motion.h1
          initial={{ y: 100, opacity: 0 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.3, ease: "easeOut", delay: 0.7 }}
          className="font-bold text-2xl md:text-5xl text-center"
        >
          We Do it for all People <br /> Humanist Services
        </motion.h1>

        <div className="lg:flex-row flex-col flex gap-4 px-6 mt-8 items-center">
          <Card
            icon={<GiChickenLeg />}
            title="Healthy Foods"
            description="Share stories and experiences from current volunteers to inspire others to join. Allow user to sign up for volunteer opportunities."
            delay={0.9}
            inView={inView}
          />

          <Card
            icon={<GiGraduateCap />}
            title="Educations"
            description="Explore our charity website to discover impactful projects, opportunities, and ways to donate, helping those in need thrive."
            delay={1.2}
            inView={inView}
          />

          <Card
            icon={<GiMedicinePills />}
            title="Medical Help"
            description="Join us in making a difference! Our charity website connects you with volunteer, donation options, and inspiring stories."
            delay={1.4}
            inView={inView}
          />
        </div>
      </div>
    </div>
  );
};

export default CardsSection;
