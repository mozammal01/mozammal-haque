"use client";
import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "./styles.css";

// import required modules
import { EffectCards } from "swiper/modules";
import Image from "next/image";
import OnClickSwiper from "./OnClickSwiper";
import { ImageSliderProps } from "@/interfaces/shared-interfaces";
import { X } from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";

export default function ImageSlider({ images1, images2, name }: ImageSliderProps) {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const handleOpen1 = () => {
    setIsOpen1(true);
  };

  const handleOpen2 = () => {
    setIsOpen2(true);
  };

  return (
    <>
      <AnimatePresence>
        {isOpen1 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{
              duration: 0.6,
              ease: [0.4, 0.0, 0.2, 1],
              scale: { duration: 0.4 },
            }}
            className="fixed top-0 left-0 w-full h-full z-50"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setIsOpen1(false)}
            />
            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="w-full h-full fixed top-0 left-0 z-50 py-10 object-cover"
              >
                <OnClickSwiper images={images1} />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -90 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.8, rotate: 90 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                onClick={() => setIsOpen1(false)}
                className="fixed cursor-pointer z-60 top-5 right-10 bg-white rounded-full p-2 hover:bg-gray-100 transition-colors duration-200"
              >
                <X />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen2 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{
              duration: 0.6,
              ease: [0.4, 0.0, 0.2, 1],
              scale: { duration: 0.4 },
            }}
            className="fixed top-0 left-0 w-full h-full z-50"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setIsOpen2(false)}
            />
            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="w-full h-full fixed top-0 left-0 z-50 py-10 object-cover"
              >
                <OnClickSwiper images={images2} />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -90 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.8, rotate: 90 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                onClick={() => setIsOpen2(false)}
                className="fixed cursor-pointer z-60 top-5 right-10 bg-white rounded-full p-2 hover:bg-gray-100 transition-colors duration-200"
              >
                <X />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex lg:flex-row flex-col gap-10 px-4 justify-center items-center my-10">
        {images1 && images1.length > 0 && (
          <>
            <Swiper effect={"cards"} grabCursor={true} modules={[EffectCards]} className="mySwiper" onClick={handleOpen1}>
              {images1.map((image, index) => (
                <>
                  <SwiperSlide key={index}>
                    <Image src={image} alt={name} className="w-full h-full" unoptimized />
                  </SwiperSlide>
                </>
              ))}
            </Swiper>
          </>
        )}
        {images2 && images2.length > 0 && (
          <Swiper effect={"cards"} grabCursor={true} modules={[EffectCards]} className="mySwiper" onClick={handleOpen2}>
            {images2.map((image, index) => (
              <SwiperSlide key={index}>
                <Image src={image} alt={name} className="w-full h-full" />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </>
  );
}
