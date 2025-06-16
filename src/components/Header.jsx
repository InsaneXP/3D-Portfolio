// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiTwitter, FiLinkedin, FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";

const Header = () => {
  const navItems = ["Home", "About", "Projects", "Experience", "Contact"];
  // Toggle the Menu open/close
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  // State to track if the contact form is open
  const [contactFormOpen, setContactFormOpen] = useState(false);
  const openContactForm = () => setContactFormOpen(true);
  const closeContactForm = () => setContactFormOpen(false);

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
            onClick={openContactForm}
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
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isOpen ? 1 : 0,
          height: isOpen ? "auto" : 0,
        }}
        transition={{ duration: 0.5 }}
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

        <div
          className="pt-4 border-t border-gray-200
        dark:border-gray-700"
        >
          <div className="flex space-x-5">
            <a href="#">
              <FiGithub className="h-5 w-5 text-gray-300" />
            </a>

            <a href="#">
              <FiTwitter className="h-5 w-5 text-gray-300" />
            </a>

            <a href="#">
              <FiLinkedin className="h-5 w-5 text-gray-300" />
            </a>
          </div>

          <button
            onClick={() => {
              toggleMenu();
              openContactForm();
            }}
            className="mt-4 block w-full px-4 py-2 rounded-lg
            bg-gradient-to-r from-violet-600 to-violet-400 text-white font-bold"
          >
            Contact Me
          </button>
        </div>
      </motion.div>

      {/* Contact Form */}
      <AnimatePresence>
        {contactFormOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 bg-black/50 background-blur-sm z-50 flex 
        items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 30 }}
              transition={{
                type: "spring",
                damping: 30,
                stiffness: 200,
                duration: 0.8,
              }}
              className="bg-white dark:bg-gray-800 rounded-xl 
          shadow-xl w-full max-w-md p-6"
            >
              <div
                className="flex justify-between items-center 
            mb-4"
              >
                <h1
                  className="test-2xl font-bold 
              text-gray-300"
                >
                  Get In Touch
                </h1>

                <button onClick={closeContactForm}>
                  <FiX
                    className="w-5 h-5 text-gray-300
                font-extrabold"
                  />
                </button>
              </div>

              {/* Input Forms */}
              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block
                text-sm font-medium text-gray-300 mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your Name"
                    className="w-full px-4 py-2 border
                border-gray-600 rounded-ig focus:ring-2
                focus:ring-violet-500
                focus:border-violet-500
                bg-gray-700"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block
                text-sm font-medium text-gray-300 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-2 border
                border-gray-600 rounded-ig focus:ring-2
                focus:ring-violet-500
                focus:border-violet-500
                bg-gray-700"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block
                text-sm font-medium text-gray-300 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    rows="4"
                    id="message"
                    placeholder="How can we help you"
                    className="w-full px-4 py-2 border
                border-gray-600 rounded-ig focus:ring-2
                focus:ring-violet-500
                focus:border-violet-500
                bg-gray-700"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full px-4 py-2
              bg-gradient-to-r from-violet-600 to-violet-400
              hover:from-violet-700 hover:to-purple-700
              transition-all duration-300 rounded-lg shadow-md
              hover:shadow-lg hover:shadow-violet-600/50"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;

