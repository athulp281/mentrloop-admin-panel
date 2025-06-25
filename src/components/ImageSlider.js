import { useState, useEffect } from "react";
import { Avatar, Box, IconButton, Stack, Typography } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import useResponsive from "./Hooks/useResponsive";

const images = [
  "/sliderimg/img1.webp",
  "/sliderimg/img2.webp",
  "/sliderimg/img3.webp",
  "/sliderimg/img4.webp",
  "/sliderimg/img5.webp",
  "/sliderimg/img6.webp",
];

const ImageSlider = () => {
  const smUp = useResponsive("up", "sm");

  const mdUp = useResponsive("up", "md");
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically go to the next slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <Box>
      <Box></Box>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: smUp ? "75vh" : "55vh",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            style={{
              position: "absolute",
              top: smUp ? 20 : 10,
              left: smUp ? 20 : -30,
              width: smUp ? 500 : 350,
              height: smUp ? 500 : 350,
            }}
          >
            {/* <Box sx={{ position: "fixed" }}> */}
            <Image
              src={images[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, 
              (max-width: 1200px) 50vw, 
              33vw"
              style={{ objectFit: "cover" }}
              priority
            />
            {/* </Box> */}
          </motion.div>
        </AnimatePresence>
        {/* ------------------------------------------------------- */}
        <Stack
          direction="column"
          spacing={1}
          sx={{
            position: "absolute",
            right: smUp ? "10px" : "1px",
            top: "50%",
            transform: "translateY(-50%)",
          }}
        >
          {images.map((_, index) => (
            <Box
              key={index}
              sx={{
                borderRadius: "50%",
                width: 20,
                height: 20,
                background:
                  currentIndex === index
                    ? `linear-gradient(to right, #0089d0 0%, #0089d0 10%, #0089d0 100%)`
                    : null,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                key={index}
                sx={{
                  width: 15,
                  height: 15,
                  borderRadius: "50%",
                  backgroundColor: "white",
                  transition: "background-color 0.3s",
                  cursor: "pointer",
                }}
                onClick={() => setCurrentIndex(index)}
              />
            </Box>
          ))}
        </Stack>
        {/* --------------------------------------------- */}
        <Box
          sx={{
            width: "100%",
            position: "absolute",
            bottom: 0,
            left: "50%",
            transform: "translateX(-50%)",
            background: "rgba(0, 0, 0, 0.1)",
            borderTopLeftRadius: "16px",
            borderTopRightRadius: "30px",
            borderBottomRightRadius: "60px",
            borderBottomLeftRadius: "5px",
            padding: "2px",
            backdropFilter: "blur(10px)",
            color: "white",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            textShadow: "1px 1px 4px rgba(0, 0, 0, 0.7)",
          }}
        >
          <Box sx={{ padding: 1, borderRadius: 4 }}>
            <Box padding={1}>
              <Typography sx={{ fontSize: 10 }}>CEO&apos;s Quotes</Typography>
            </Box>

            <Stack direction={"row"} spacing={1}>
              <Box>
                <Avatar
                  sx={{ width: 40, height: 40 }}
                  alt="ceo img"
                  src="/ceo.jpg"
                />
              </Box>
              <Box pt={1}>
                <Typography sx={{ fontSize: 12 }}>Ramees Ali CK</Typography>
                <Box>
                  <Typography sx={{ fontSize: 10 }}>
                    &quot;You are our future. And I can’t wait to see the
                    incredible things you’ll achieve.&quot;
                  </Typography>
                </Box>
              </Box>
            </Stack>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ImageSlider;
