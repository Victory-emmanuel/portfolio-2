import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Typography, Button } from "@material-tailwind/react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

export default function HeroSection() {
  const [text] = useTypewriter({
    words: ["UX DESIGNER", "DEVELOPER", "WEB DESIGNER"],
    loop: 0,
    typeSpeed: 100,
    deleteSpeed: 70,
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
      className="flex xx:flex-col ss:flex-row items-center ss:justify-between ss:min-h-screen lg:py-8 lg:px-8 md:py-4 md:px-4  xx:py-24  xx:px-8 ml-0 md:ml-64"
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
      id="home"
    >
      <motion.div
        className="md:w-1/2 mb-8 md:mb-0 lg:pr-4 md:pr-2"
        variants={itemVariants}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-primary"
        >
          <h1 className="mb-4 lg:text-5xl sm:text-4xl xs:text-3xl xx:text-2xl ss:text-left xx:text-center font-bold">
            HI, I'M VICTORY
            <br />A CREATIVE
            <span className="text-accent pl-3">
              {text}
              <Cursor cursorStyle="|" />
            </span>
          </h1>
        </motion.div>
        <motion.div
          variants={itemVariants}
          initial={{ opacity: 0, scale: 0.2 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className=""
        >
          <Typography
            variant="lead"
            className="mb-8  ss:text-left xx:text-center text-primary lg:text-lg ss:text-base xx:text-sm xx:w-[100%] ss:w-[80%]"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            eius enim suscipit accusamus rem, repellendus voluptas praesentium
            numquam! Nihil, nemo?
          </Typography>
        </motion.div>
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="w-fit text-center xx:mx-auto ss:mx-0"
        >
          <Button
            className="bg-accent  text-secondary hover:bg-transparent border border-accent  hover:text-accent duration-300"
            ripple="light"
          >
            <a href="" className="">
              Contact Me
            </a>
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        className=" h-auto "
        variants={itemVariants}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "backInOut", duration: 0.5 }}
      >
        <motion.div
          initial={{ x: -150 }}
          animate={{ x: 0 }}
          transition={{ ease: "backInOut", duration: 0.75 }}
          style={{
            background: `url("https://i.postimg.cc/rFrtmvVj/1000-X-1000-2.png") no-repeat center center/cover`,
          }}
          className="sm:w-[20rem] sm:h-[20rem] xs:w-[18rem] xs:h-[18rem] xx:w-[15rem] xx:h-[15rem]  rounded-full shadow-lg ml-auto border-4 border-accent" // Set a fixed height here
        ></motion.div>
      </motion.div>
    </motion.section>
  );
}
