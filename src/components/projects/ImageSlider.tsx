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

import { motion } from "framer-motion";

export default function ImageSlider({ images1, images2, name }: ImageSliderProps) {
  const [isOpen1, setIsOpen1] = useState(false);

  const handleOpen1 = () => {
    setIsOpen1(true);
  };

  if (isOpen1) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 left-0 w-full h-full z-50"
      >
        <div className="relative">
          <div className="w-full h-full fixed top-20 left-0 z-50 bg-black/50">
            <OnClickSwiper images={images1} />
          </div>
          <div onClick={() => setIsOpen1(false)} className="fixed cursor-pointer z-60 top-5 right-10 bg-white rounded-full p-2">
            <X />
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="flex gap-4 justify-center items-center my-10">
      {images1 && images1.length > 0 && (
        <>
          {/* {isOpen1 && (
            <div className="relative">
              <div className="fixed top-0 left-0 w-full h-screen bg-black opacity-50"></div>
              <OnClickSwiper images={images1}  width={800} height={600} />
            </div>
          )} */}
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
        <Swiper effect={"cards"} grabCursor={true} modules={[EffectCards]} className="mySwiper">
          {images2.map((image, index) => (
            <SwiperSlide key={index}>
              <Image src={image} alt={name} className="w-full h-full" />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
}
