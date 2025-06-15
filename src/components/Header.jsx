// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FiGithub, FiTwitter, FiLinkedin, FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";

const Header = () => {
  const navItems = ["Home", "About", "Projects", "Experience", "Contact"];
  // Toggle the Menu open/close
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="absolute w-full z-50 transition-all duration-300 py-4">
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo/Name */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 25,
            delay: 0.3,
          }}
          className="flex items-center"
        >
          <div className="h-10 w-10 rounded-xl bg-gradient-to-r from-purple-500 to-purple-300 flex items-center justify-center text-white font-bold text-lg mr-3">
            R
          </div>
          <span className="text-white text-lg font-semibold">RohitCode</span>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item, idx) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + idx * 0.1 }}
              className="text-white hover:text-purple-300 transition-colors"
            >
              {item}
            </motion.a>
          ))}
        </nav>

        {/* Social Icons + CTA */}
        <div className="hidden md:flex items-center space-x-4">
          {[FiGithub, FiTwitter, FiLinkedin].map((Icon, index) => (
            <motion.a
              key={index}
              href="#"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.1 + index * 0.1 }}
              className="text-white hover:text-purple-300 transition"
            >
              <Icon className="w-5 h-5" />
            </motion.a>
          ))}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 1.6,
              duration: 0.8,
              type: "spring",
              stiffness: 100,
              damping: 15,
            }}
            className="ml-4 px-4 py-2 rounded-xl bg-gradient-to-r
          from-gray-400 to-gray-100 text-violet-700 font-bold hover:from-violet-700
          hover:to-purple-700 hover:text-white transition-all duration-500"
          >
            Hire Me
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <motion.button
            whileTap={{ scale: 0.7 }}
            onClick={toggleMenu}
            className="text-gray-300"
          >
            {isOpen ? (
              <FiX className="h-6 w-6" />
            ) : (
              <FiMenu className="h-6 w-6" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
      initial={{opacity: 0, height: 0}}
      animate={{
        opacity: isOpen ? 1:0,
        height: isOpen ? "auto":0,
      }}
      transition={{duration: 0.5}}
        className="md:hidden overflow-hidden bg-white 
      dark:bg-gray-900 shadow-lg px-4 py-5 space-y-5"
      >
        <nav className="flex flex-col space-y-3">
          {navItems.map((item) => (
            <a
              onClick={toggleMenu}
              className="test-gray-300 font-medium py-2"
              key={item}
              href="#"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="pt-4 border-t border-gray-200
        dark:border-gray-700">
          <div className="flex space-x-5">
            <a href="#">
              <FiGithub className="h-5 w-5 text-gray-300"/>
            </a>

            <a href="#">
              <FiTwitter className="h-5 w-5 text-gray-300"/>
            </a>

            <a href="#">
              <FiLinkedin className="h-5 w-5 text-gray-300"/>
            </a>
          </div>

          <button 
          onClick={() => {
            toggleMenu()
          }}
          className="mt-4 block w-full px-4 py-2 rounded-lg
          bg-gradient-to-r from_violet-600 to-violet-400 font-bold">
            Contact Me
          </button>

        </div>
      </motion.div>
    </header>
  );
};

export default Header;
