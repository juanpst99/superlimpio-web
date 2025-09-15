export const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.4 },
}

export const slideIn = {
  left: {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.5 },
  },
  right: {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.5 },
  },
  up: {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  },
  down: {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  },
}

export const scale = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.4 },
}

export const stagger = {
  container: {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  },
  item: fadeIn,
}