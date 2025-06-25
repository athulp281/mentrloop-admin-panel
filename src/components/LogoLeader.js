import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Box } from "@mui/material";
import Image from "next/image";
import part1 from "/public/loaderimg/img1.png";
import part2 from "/public/loaderimg/img2.png";
import part3 from "/public/loaderimg/img3.png";
import part4 from "/public/loaderimg/img4.png";

const logoParts = [
  { src: part1, delay: 0 },
  { src: part2, delay: 0.2 },
  { src: part3, delay: 0.4 },
  { src: part4, delay: 0.6 },
];

const LogoLoader = () => {
  const [isVisible, setIsVisible] = useState(true);
  const partSpacing = 49.4; // Adjust spacing as needed

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false); // Trigger exit animation after 5 seconds
    }, 4000);

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          height="100vh"
          overflow="hidden"
          position="relative"
          paddingLeft={7}
        >
          {logoParts.map((part, index) => (
            <motion.div
              key={index}
              initial={{
                x: Math.random() * window.innerWidth - window.innerWidth / 2,
                y: Math.random() * window.innerHeight - window.innerHeight / 2,
                opacity: 0,
              }}
              animate={{
                x: index * partSpacing - (logoParts.length * partSpacing) / 2,
                y: 0,
                opacity: 1,
                transition: {
                  delay: part.delay,
                  duration: 1,
                  type: "spring",
                  stiffness: 60,
                  damping: 10,
                },
              }}
              exit={{
                x: Math.random() * window.innerWidth - window.innerWidth / 2,
                y: Math.random() * window.innerHeight - window.innerHeight / 2,
                opacity: 0,
                transition: {
                  delay: part.delay,
                  duration: 0.8,
                  ease: "easeInOut",
                },
              }}
              style={{ position: "absolute" }}
            >
              <Image
                src={part.src}
                alt={`Logo part ${index + 1}`}
                width={50}
                height={50}
                priority
              />
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { delay: 1.6, duration: 0.8 },
            }}
            exit={{
              opacity: 0,
              y: -20,
              transition: { delay: 1.6, duration: 0.8 },
            }}
            style={{
              position: "relative",
              top: "-60px",
              textAlign: "center",
              paddingRight: 40,
            }}
          >
            <Image
              src={
                "https://portal.teaminterval.net/static/media/map.7dd1ec7c87cddefd09e4.gif"
              }
              alt="log img"
              height={80}
              width={80}
            />
          </motion.div>
        </Box>
      )}
    </AnimatePresence>
  );
};

export default LogoLoader;
