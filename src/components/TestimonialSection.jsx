/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Typography,
  Card,
  CardBody,
  CardFooter,
  Avatar,
  IconButton,
} from "@material-tailwind/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const testimonials = [
  {
    id: 1,
    name: "Emma Thompson",
    role: "CEO, TechInnovate",
    avatar: "https://i.postimg.cc/rFrtmvVj/1000-X-1000-2.png",
    content:
      "Working with this team has been an absolute pleasure. Their innovative solutions and attention to detail have significantly improved our business processes.",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CTO, DataDrive",
    avatar: "https://i.postimg.cc/rFrtmvVj/1000-X-1000-2.png",
    content:
      "The level of expertise and professionalism displayed by this company is unparalleled. They delivered our project on time and exceeded all expectations.",
  },
  {
    id: 3,
    name: "Sophia Rodriguez",
    role: "Marketing Director, BrandBoost",
    avatar: "https://i.postimg.cc/rFrtmvVj/1000-X-1000-2.png",
    content:
      "Their creative approach to problem-solving and ability to adapt to our unique needs made them the perfect partner for our marketing initiatives.",
  },
  {
    id: 4,
    name: "Alexander Kim",
    role: "Founder, StartupX",
    avatar: "https://i.postimg.cc/rFrtmvVj/1000-X-1000-2.png",
    content:
      "As a startup founder, finding the right tech partner was crucial. This team not only understood our vision but also helped us bring it to life efficiently.",
  },
  {
    id: 5,
    name: "Olivia Patel",
    role: "UX Designer, DesignCraft",
    avatar: "https://i.postimg.cc/rFrtmvVj/1000-X-1000-2.png",
    content:
      "The attention to detail in their UX/UI work is remarkable. They truly understand how to create intuitive and visually appealing interfaces.",
  },
];

const TestimonialCard = ({ testimonial, isFocused }) => {
  return (
    <motion.div
      className={`w-full  max-w-sm mx-auto ${isFocused ? "z-10" : "z-0"}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: isFocused ? 1 : 0.6,
        scale: isFocused ? 1 : 0.8,
        filter: isFocused ? "blur(0px)" : "blur(4px)",
      }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: isFocused ? 1.05 : 1 }}
    >
      <Card className="w-full shadow-lg">
        <CardBody>
          <Typography variant="h6" color="blue-gray" className="mb-4">
            "{testimonial.content}"
          </Typography>
        </CardBody>
        <CardFooter className="flex items-center justify-between">
          <div className="flex items-center">
            <Avatar
              size="lg"
              variant="circular"
              src={testimonial.avatar}
              alt={testimonial.name}
              className="mr-4"
            />
            <div>
              <Typography variant="h6">{testimonial.name}</Typography>
              <Typography color="gray" className="font-normal">
                {testimonial.role}
              </Typography>
            </div>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3); // Default number of visible cards

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 1024) {
        setVisibleCards(3); // 3 cards on large screens
      } else if (screenWidth >= 800) {
        setVisibleCards(2); // 2 cards on medium screens
      } else {
        setVisibleCards(1); // 1 card on small screens
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call it once initially

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < visibleCards; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push(testimonials[index]);
    }
    return visible;
  };

  return (
    <div className="relative w-full mx-auto">
      <div className="flex justify-center items-center space-x-4">
        {getVisibleTestimonials().map((testimonial, index) => (
          <TestimonialCard
            key={testimonial.id}
            testimonial={testimonial}
            isFocused={index === 0}
          />
        ))}
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between z-10">
        <IconButton
          variant="text"
          size="lg"
          onClick={prevTestimonial}
          className="rounded-full text-accent "
        >
          <ChevronLeftIcon strokeWidth={2} className="w-6 h-6" />
        </IconButton>
        <IconButton
          variant="text"
          size="lg"
          onClick={nextTestimonial}
          className="rounded-full text-accent"
        >
          <ChevronRightIcon strokeWidth={2} className="w-6 h-6" />
        </IconButton>
      </div>
    </div>
  );
};

export default function TestimonialSection() {
  return (
    <section
      id="testimonial"
      className="min-h-screen p-8 ml-0 md:ml-64 mt-16 flex flex-col bg-secondary justify-center"
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ y: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.75 }}
        className="mb-12 "
      >
        <Typography
          variant="h2"
          className="mb-4  ss:text-3xl xx:text-2xl text-primary"
        >
          What Our <span className="text-accent">Clients</span> Say
        </Typography>
        <Typography
          variant="lead"
          className="ss:text-base xx:text-sm text-primary"
        >
          Don't just take our word for it. Here's what some of our valued
          clients have to say about their experience working with us.
        </Typography>
      </motion.div>
      <TestimonialCarousel />
    </section>
  );
}
