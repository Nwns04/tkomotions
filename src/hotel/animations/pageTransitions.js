export const pageEnterAnimation = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export const pageExitAnimation = {
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.5 },
};
