import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import Hero from './components/Hero';
import AboutContact from './components/AboutContact';
import MembersGallery from './components/MembersGallery';
import Achievements from './components/Achievements';
import Events from './components/Events';

// Page Transition Variants
const pageVariants = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 20 },
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5,
};

// Page Wrapper for transitions
const PageWrapper = ({ children }) => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={pageTransition}
      className="min-h-screen bg-brand-dark overflow-x-hidden pt-20"
    >
      {children}
    </motion.div>
  );
};

// Home is now just the Hero or a landing experience
const Home = () => (
  <motion.div
    initial="initial"
    animate="animate"
    exit="exit"
    variants={pageVariants}
    transition={pageTransition}
  >
    <Hero />
  </motion.div>
);

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <CustomCursor />
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<PageWrapper><AboutContact /></PageWrapper>} />
          <Route path="/members" element={<PageWrapper><MembersGallery /></PageWrapper>} />
          <Route path="/achievements" element={<PageWrapper><Achievements /></PageWrapper>} />
          <Route path="/events" element={<PageWrapper><Events /></PageWrapper>} />
          <Route path="/contact" element={<PageWrapper><AboutContact /></PageWrapper>} />
        </Routes>
      </AnimatePresence>

      <footer className="py-12 px-6 border-t border-white/5 text-center text-white/20 text-sm">
        <p>&copy; 2025 IEEE Computer Society NSSCE. Designed for the future.</p>
      </footer>
    </>
  );
}

export default App;
