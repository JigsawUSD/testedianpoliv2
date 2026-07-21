export const revealVariants = {
  hidden: { opacity: 0, y: 30, filter: 'blur(20px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0)',
    transition: {
      duration: 1,
      ease: [0.23, 1, 0.32, 1]
    }
  }
};

export const maskRevealVariants = {
  hidden: { clipPath: 'inset(0 0 100% 0)' },
  visible: {
    clipPath: 'inset(0 0 0 0)',
    transition: {
      duration: 1.2,
      ease: [0.77, 0, 0.175, 1]
    }
  }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.4, 0, 0.2, 1]
    }
  }
};

export const floatAnimation = {
  y: [-10, 10, -10],
  transition: {
    duration: 6,
    ease: 'easeInOut',
    repeat: Infinity
  }
};

export const pulseSoft = {
  opacity: [1, 0.7, 1],
  transition: {
    duration: 3,
    ease: 'easeInOut',
    repeat: Infinity
  }
};

export const shimmer = {
  backgroundPosition: ['-200% 0', '200% 0'],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: 'linear'
  }
};

export const hoverLift = {
  y: -4,
  boxShadow: '0 20px 40px rgba(47, 47, 47, 0.1)',
  transition: {
    duration: 0.5,
    ease: [0.4, 0, 0.2, 1]
  }
};

export const hoverScale = {
  scale: 1.05,
  transition: {
    duration: 0.5,
    ease: [0.4, 0, 0.2, 1]
  }
};

export const tapScale = {
  scale: 0.95,
  transition: {
    duration: 0.1
  }
};

export const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
};

export const navLinkVariants = {
  rest: { x: 0 },
  hover: { x: 4 },
  tap: { x: -2 }
};

export const buttonVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.02 },
  tap: { scale: 0.98 }
};

export const cardVariants = {
  rest: { y: 0, boxShadow: '0 4px 20px rgba(47, 47, 47, 0.05)' },
  hover: {
    y: -8,
    boxShadow: '0 20px 40px rgba(47, 47, 47, 0.1)',
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
  }
};

export const imageRevealVariants = {
  hidden: { scale: 1.1, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 1.5, ease: [0.4, 0, 0.2, 1] }
  }
};

export const textRevealVariants = {
  hidden: { y: '100%', opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 1, ease: [0.77, 0, 0.175, 1] }
  }
};

export const preloaderVariants = {
  initial: { y: '100%', opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 1, ease: [0.4, 0, 0.2, 1] } },
  exit: { y: '-100%', opacity: 0, transition: { duration: 1, ease: [0.4, 0, 0.2, 1], delay: 0.5 } }
};

export const lineDrawVariants = {
  hidden: { scaleX: 0, originX: 0 },
  visible: { scaleX: 1, originX: 0, transition: { duration: 1, ease: [0.4, 0, 0.2, 1], delay: 0.5 } }
};