/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */

import { motion } from "framer-motion";
import { Typography, Button } from "@material-tailwind/react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const CircularProgressBar = ({ percentage }) => {
  const circumference = 2 * Math.PI * 45; // 45 is the radius of the circle

  return (
    <div className="relative w-32 h-32">
      <svg className="w-full h-full" viewBox="0 0 100 100">
        <circle
          className="text-gray-200"
          strokeWidth="10"
          stroke="currentColor"
          fill="transparent"
          r="45"
          cx="50"
          cy="50"
        />
        <motion.circle
          className="text-accent"
          strokeWidth="10"
          stroke="currentColor"
          fill="transparent"
          r="45"
          cx="50"
          cy="50"
          initial={{
            strokeDasharray: circumference,
            strokeDashoffset: circumference,
          }}
          whileInView={{
            strokeDashoffset:
              circumference - (percentage / 100) * circumference,
          }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <Typography variant="h4">{percentage}%</Typography>
      </div>
    </div>
  );
};

export default function AboutSection() {
  const [text] = useTypewriter({
    words: ["Expertise", "Skills"],
    loop: 0,
    typeSpeed: 100,
    deleteSpeed: 100,
    delaySpeed: 5000,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <motion.section
      className="flex flex-col md:flex-row items-center justify-between min-h-screen p-8 ml-0 md:ml-64 "
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      id="about"
    >
      <motion.div
        className="md:w-1/2 mb-8 md:mb-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.75, ease: "backInOut" }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h2
            initial={{ x: 200 }}
            animate={{ x: 0 }}
            transition={{ duration: 1, ease: "backInOut" }}
            className="mb-4 text-primary ss:text-3xl xx:text-2xl font-bold"
          >
            About <span className="text-accent">Me</span>
          </motion.h2>
        </motion.div>
        <motion.div
          initial={{ x: -200 }}
          animate={{ x: 0 }}
          transition={{ duration: 1, ease: "backInOut" }}
          variants={itemVariants}
        >
          <h5 className="text-primary text-xl  font-semibold mt-12 mb-4">
            Hi, i'm <span className="text-accent">Victory Emmanuel</span>
          </h5>
          <Typography
            variant="lead"
            className="mb-8 text-primary ss:text-base xx:text-sm"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            illum dolore eius ipsum! Nostrum quisquam praesentium recusandae,
            ducimus aliquid sed soluta exercitationem, nesciunt suscipit
            incidunt, earum consequatur harum dolor minus vel dolore doloribus
            minima autem asperiores debitis distinctio nihil adipisci.
          </Typography>
        </motion.div>
        <motion.div
          initial={{ x: 200 }}
          animate={{ x: 0 }}
          transition={{ duration: 1, ease: "backInOut" }}
          variants={itemVariants}
        >
          <h5 className="text-primary text-xl font-semibold mt-12 mb-4">
            My
            <span className="text-accent  ml-2">
              {text}
              <Cursor cursorStyle="|" />
            </span>
          </h5>
          <Typography
            variant="lead"
            className="mb-8 ss:text-base xx:text-sm text-primary"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            perspiciatis error quia corrupti consectetur mollitia!
          </Typography>
        </motion.div>

        <motion.div
          className="mt-12"
          variants={itemVariants}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <div className="grid text-primary grid-cols-2 gap-8 justify-items-start ss:text-base text-sm">
            <div className="grid grid-cols-1 gap-2 justify-items-center">
              <h5 className="">HTML</h5>
              <CircularProgressBar percentage={85} />
            </div>
            <div className="grid grid-cols-1 gap-2 justify-items-center">
              <h5 className="">CSS</h5>
              <CircularProgressBar percentage={85} />
            </div>
            <div className="grid grid-cols-1 gap-2 justify-items-center">
              <h5 className="">Figma</h5>
              <CircularProgressBar percentage={85} />
            </div>
            <div className="grid grid-cols-1 gap-2 justify-items-center">
              <h5 className="">Adobe</h5>
              <CircularProgressBar percentage={85} />
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="w-fit mt-12"
        >
          <Button
            className="bg-accent text-secondary hover:bg-transparent border border-accent  hover:text-accent duration-300"
            ripple="light"
          >
            <a href="" className="">
              Contact Me
            </a>
          </Button>
        </motion.div>
      </motion.div>
      <motion.div
        className="md:w-[35rem] md:h-[50rem] pl-8"
        variants={itemVariants}
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 50 }}
      >
        <motion.div
          style={{
            background: `url("https://i.postimg.cc/T3hZSXcf/1000-x-1500-1.png") no-repeat center center/cover`,
          }}
          className="w-[100%] h-[100%] rounded-lg shadow-lg ml-auto" // Set a fixed height here
        ></motion.div>
      </motion.div>
    </motion.section>
  );
}
