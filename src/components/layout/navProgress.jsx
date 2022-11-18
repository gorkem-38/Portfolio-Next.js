import { motion, useScroll, useSpring } from "framer-motion";

export const NavProgress = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001
    });

    return (
      <>
        <motion.div
          className="h-2 w-full bg-red-500 top fixed z-10 origin-left"
          style={{ scaleX }}
        />
      </>
    );
  }