import { useState, useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";
import {
  FaBars,
  FaTimes,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import { motion } from "framer-motion";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");
  const [isMobile, setIsMobile] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);
  const handleLinkClick = (section) => setActiveLink(section);

  // Automatically close sidebar on screens smaller than md
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1000) {
        setIsOpen(true); // Keep sidebar open on md and larger
        setIsMobile(false);
      } else {
        setIsOpen(false); // Automatically close sidebar on smaller screens
        setIsMobile(true);
      }
    };

    handleResize(); // Initialize on component mount
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Logo and Toggle Button in Header (Visible on small screens) */}
      {isMobile && (
        <div className="fixed top-0 left-0 w-full h-16 flex justify-between items-center px-4 py-2 bg-secondary text-white z-50 md:hidden">
          {/* Logo */}
          <div className="">
            <img
              src="https://i.postimg.cc/T2V3WLRY/cropped-image.png"
              alt="logo"
              className="ss:w-[4rem] ss:h-[4rem] xx:w-[3rem] xx:h-[3rem]  p-2 border-2 rounded-full border-accent"
            />
          </div>

          {/* Toggle Button */}
          <button onClick={handleToggle} className="text-white">
            {isOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
          </button>
        </div>
      )}

      {/* Sidebar */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: isOpen || window.innerWidth >= 1000 ? "0%" : "-100%" }}
        transition={{ duration: 0.3 }}
        className={`fixed top-0 left-0 h-full bg-secondary shadow-accent shadow text-white w-64 z-40 ${
          isOpen ? "block" : "md:block hidden"
        }`} // Hidden by default on small screens
      >
        {/* Logo */}
        <div className="p-4 ">
          <img
            src="https://i.postimg.cc/T2V3WLRY/cropped-image.png"
            alt="logo"
            className="w-[4rem] h-[4rem] p-2 border-2 rounded-full border-accent xx:hidden md:block"
          />
        </div>
        {/* Sidebar Links */}
        <nav className="mt-10">
          <ul className="space-y-4 text-left">
            {[
              "#home",
              "#about",
              "#portfolio",
              "#services",
              "#testimonial",
              "#contact",
            ].map((section, idx) => (
              <li className="text-primary" key={idx}>
                <Link
                  smooth
                  to={section}
                  onClick={() => {
                    handleLinkClick(section);
                    if (isMobile) setIsOpen(false); // Close sidebar on link click (mobile only)
                  }}
                  className={`block py-2 px-4 hover:mx-4 hover:bg-accent rounded-md hover:text-secondary duration-100 ${
                    activeLink === section
                      ? "border border-accent mx-4 text-accent font-semibold"
                      : ""
                  }`}
                >
                  {section.replace("#", "").charAt(0).toUpperCase() +
                    section.slice(2)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social Links */}
        <div className="absolute bottom-10 left-0 w-full flex pl-4 space-x-8">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-accent duration-200"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-accent duration-200"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-accent duration-200"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-accent duration-200"
          >
            <FaInstagram size={24} />
          </a>
        </div>
      </motion.div>
    </>
  );
};

export default SideBar;
