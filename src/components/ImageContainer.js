import React, { useContext, useEffect } from "react";
import "../assets/imgContainerStyle.css";
import useResponsive from "./Hooks/useResponsive";
import { motion, useTransform, useMotionValue } from "framer-motion";
import Image from "next/image";
export const ImageContainer = () => {
  const smUp = useResponsive("up", "sm");

  return (
    <div className="element-to-animate">
      <section className="home">
        <div className="users-color-container">
          <span className="item" style={{ "--i": 1 }} />
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          >
            <Image
              src={"/sliderimg/img1.webp"}
              className="item"
              width={80}
              height={80}
              style={{ "--i": 2, position: "static" }}
              alt="png"
              priority
            />
            {/* <img
              className="item"
              src={"/sliderimg/img1.png"}
              style={{ "--i": 2 }}
              alt=""
            /> */}
          </motion.div>
          <span className="item" style={{ "--i": 3 }} />
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          >
            {/* <img
              className="item"
              src={"/sliderimg/img2.png"}
              style={{ "--i": 4 }}
              alt=""
            /> */}
            <Image
              src={"/sliderimg/img2.webp"}
              className="item"
              width={80}
              height={80}
              style={{ "--i": 4 }}
              alt="png"
              priority
            />
          </motion.div>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          >
            {/* <img
              className="item"
              src={"/sliderimg/img3.png"}
              style={{ "--i": 10 }}
              alt=""
            /> */}
            <Image
              src={"/sliderimg/img3.webp"}
              className="item"
              width={80}
              height={80}
              style={{ "--i": 10 }}
              alt="png"
              priority
            />
          </motion.div>
          <span className="item" style={{ "--i": 11 }} />
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          >
            {/* <img
              className="item"
              src={"/sliderimg/img4.png"}
              style={{ "--i": 12 }}
              alt=""
            /> */}
            <Image
              src={"/sliderimg/img4.webp"}
              style={{ "--i": 12 }}
              className="item"
              width={80}
              height={80}
              alt="png"
              priority
            />
          </motion.div>
          <span className="item" style={{ "--i": 5 }} />

          <span className="item" style={{ "--i": 9 }} />
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          >
            {/* <img
              className="item"
              src={"/sliderimg/img5.png"}
              style={{ "--i": 8 }}
              alt=""
            /> */}
            <Image
              src={"/sliderimg/img5.webp"}
              className="item"
              width={80}
              height={80}
              alt="png"
              priority
            />
          </motion.div>
          <span className="item" style={{ "--i": 7 }} />
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          >
            {/* <img
              className="item"
              src={"/sliderimg/img6.png"}
              style={{ "--i": 6 }}
              alt=""
            /> */}
            <Image
              className="item"
              src={"/sliderimg/img6.webp"}
              width={80}
              height={80}
              alt="png"
              priority
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
};
