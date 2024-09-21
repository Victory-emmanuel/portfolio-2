/* eslint-disable react/prop-types */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Typography,
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

const portfolioItems = [
  {
    title: "E-commerce Platform",
    description: "A fully responsive online store with advanced features",
    image: "https://i.postimg.cc/5NKYG32c/1500-x-1000-2.png",
    details:
      "This e-commerce platform was built to provide a seamless shopping experience. It features a responsive design, user authentication, product catalog, shopping cart, and secure checkout process. The admin panel allows easy management of products, orders, and customer data.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe API"],
  },
  {
    title: "Task Management App",
    description: "Efficient task organization and team collaboration tool",
    image: "https://i.postimg.cc/5NKYG32c/1500-x-1000-2.png",
    details:
      "This task management application helps teams organize and track their projects efficiently. It includes features such as task creation, assignment, due dates, priority levels, and progress tracking. The app also supports team collaboration with comments and file attachments.",
    technologies: ["Vue.js", "Firebase", "Vuex", "Element UI"],
  },
  {
    title: "Fitness Tracking Mobile App",
    description: "Personal health and fitness monitoring application",
    image: "https://i.postimg.cc/5NKYG32c/1500-x-1000-2.png",
    details:
      "This mobile app helps users track their fitness goals and monitor their health. It includes features like workout logging, calorie counting, step tracking, and progress visualization. The app integrates with various fitness devices and provides personalized recommendations.",
    technologies: [
      "React Native",
      "Redux",
      "Firebase",
      "HealthKit",
      "Google Fit API",
    ],
  },
  {
    title: "Real-time Chat Application",
    description: "Instant messaging platform with group chat support",
    image: "https://i.postimg.cc/5NKYG32c/1500-x-1000-2.png",
    details:
      "This real-time chat application enables instant communication between users. It supports one-on-one and group conversations, file sharing, and message encryption. The app uses WebSocket technology for real-time updates and includes features like read receipts and typing indicators.",
    technologies: ["Angular", "Socket.io", "Node.js", "MongoDB", "WebRTC"],
  },
  {
    title: "AI-powered Image Recognition",
    description: "Advanced image analysis and object detection system",
    image: "https://i.postimg.cc/5NKYG32c/1500-x-1000-2.png",
    details:
      "This AI-powered image recognition system uses deep learning algorithms to analyze and identify objects in images. It can detect and classify multiple objects, recognize faces, and provide detailed information about the content of images. The system is scalable and can be integrated into various applications.",
    technologies: ["Python", "TensorFlow", "OpenCV", "Flask", "AWS Lambda"],
  },
  {
    title: "Blockchain-based Supply Chain",
    description: "Transparent and secure supply chain management solution",
    image: "https://i.postimg.cc/5NKYG32c/1500-x-1000-2.png",
    details:
      "This blockchain-based supply chain solution provides transparency and traceability in product lifecycles. It uses smart contracts to automate processes, ensures data integrity, and allows stakeholders to track products from origin to destination. The system improves efficiency and reduces fraud in supply chain operations.",
    technologies: ["Ethereum", "Solidity", "Web3.js", "React", "Node.js"],
  },
];

const PortfolioItem = ({
  title,
  description,
  image,
  details,
  technologies,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleCardClick = () => {
    setIsClicked(!isClicked); // Toggle isClicked state
  };
  return (
    <>
      <motion.div
        className="relative overflow-hidden rounded-lg cursor-pointer"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        onClick={handleCardClick} // Trigger card click on mobile
      >
        <motion.img
          src={image}
          alt={title}
          className="w-full h-64 object-cover"
          animate={{
            filter: isHovered || isClicked ? "blur(5px)" : "blur(0px)",
          }}
        />
        <AnimatePresence>
          {(isHovered || isClicked) && (
            <motion.div
              className="absolute inset-0 bg-secondary bg-opacity-70 flex flex-col justify-center items-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Typography
                variant="h5"
                className="mb-2 text-center ss:text-2xl xx:text-xl text-accent"
              >
                {title}
              </Typography>
              <Typography className="text-center mb-4 text-primary">
                {description}
              </Typography>
              <Button
                className="hover:border-accent hover:text-accent font-semibold border-primary text-primary duration-300"
                variant="outlined"
                size="sm"
                onClick={() => setIsDialogOpen(true)}
              >
                Read More
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <Dialog
        size="md"
        className="bg-black h-fit"
        open={isDialogOpen}
        handler={() => setIsDialogOpen(false)}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogHeader className="text-accent  font-semibold">
          {title}
        </DialogHeader>
        <div className=" md:my-6">
          <DialogBody divider className="h-[40rem] overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <div className="xx:h-[40vh] md:h-[15rem] overflow-hidden overflow-y-scroll">
              <div className="mt-16  ">
                <Typography className="text-lg mb-4 font-semibold text-primary">
                  {description}
                </Typography>
                <Typography className="text-base mb-4  text-primary">
                  {details}
                </Typography>
                <Typography variant="h6" className="mb-2 text-primary">
                  Technologies Used:
                </Typography>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-blue-gray-50  text-accent rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </DialogBody>
          <DialogFooter>
            <Button
              variant="text"
              color="red"
              onClick={() => setIsDialogOpen(false)}
              className="mr-2  text-primary bg-red-400 hover:bg-red-600 duration-300"
            >
              <span>Close</span>
            </Button>
            <Button
              className="text-secondary bg-accent hover:text-primary duration-300 "
              onClick={() => setIsDialogOpen(false)}
            >
              <a href="#">Visit Project</a>
            </Button>
          </DialogFooter>
        </div>
      </Dialog>
    </>
  );
};

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="min-h-screen p-8  ml-0 md:ml-64 mt-16">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <Typography
          variant="h2"
          className="mb-4 ss:text-3xl xx:text-2xl text-primary"
        >
          My <span className="text-accent">Portfolio</span>
        </Typography>
        <Typography
          variant="lead"
          className="max-w-3xl ss:text-base xx:text-sm text-primary"
        >
          Explore a collection of my recent projects showcasing a diverse range
          of skills and technologies. Each project represents a unique challenge
          and innovative solution.
        </Typography>
      </motion.div>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {portfolioItems.map((item, index) => (
          <PortfolioItem key={index} {...item} />
        ))}
      </motion.div>
    </section>
  );
}
