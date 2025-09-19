import React from 'react';
import { Routes, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';

/**
 * AnimatedSwitch Component
 * 
 * A wrapper around React Router's Routes component that provides smooth
 * slide transitions between route changes using Framer Motion.
 * 
 * Features:
 * - Smooth slide transitions between routes
 * - Hardware-accelerated animations
 * - Proper enter/exit animations
 * - Compatible with React Router v6+
 */

// Container for the animated routes
const AnimatedContainer = styled(motion.div)`
  position: relative;
  overflow: hidden;
  height: 100vh;
  width: 100vw;
`;

// Animation variants for page transitions
const pageVariants = {
  initial: {
    opacity: 0,
    x: '100%',
  },
  in: {
    opacity: 1,
    x: 0,
  },
  out: {
    opacity: 0,
    x: '-100%',
  },
};

// Animation transition settings
const pageTransition = {
  type: 'tween' as const,
  ease: 'anticipate' as const,
  duration: 0.4,
};

const MyAnimatedSwitch: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <AnimatedContainer
        key={location.pathname}
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
      >
        <Routes location={location}>{children}</Routes>
      </AnimatedContainer>
    </AnimatePresence>
  );
};

export default MyAnimatedSwitch;
