import React, { useState, useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./styles.css";

// import required modules
import { FreeMode, Navigation, Thumbs, Autoplay } from "swiper/modules";
import Image, { StaticImageData } from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface OnClickSwiperProps {
  images?: StaticImageData[];
}

export default function OnClickSwiper({ images }: OnClickSwiperProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const mainSwiperRef = useRef<SwiperType | null>(null);

  const handlePrev = () => {
    if (mainSwiperRef.current) {
      mainSwiperRef.current.slidePrev();
    }
  };

  const handleNext = () => {
    if (mainSwiperRef.current) {
      mainSwiperRef.current.slideNext();
    }
  };

  return (
    <div className="relative">
      {/* External Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-2 top-5/12 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-black rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
        aria-label="Previous image"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-2 top-5/12 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-black rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
        aria-label="Next image"
      >
        <ChevronRight size={24} />
      </button>

      {/* Main Swiper */}
      <Swiper
        onSwiper={(swiper) => {
          mainSwiperRef.current = swiper;
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        spaceBetween={10}
        navigation={false}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs, Autoplay]}
        className="2xl:min-w-[1800px] xl:min-w-[1400px] lg:min-w-[1000px] md:min-w-[600px] min-w-[300px] min-h-[700px] object-cover"
      >
        {images &&
          images.map((image, index) => (
            <SwiperSlide key={index} className="w-full h-full object-cover">
              <Image
                src={image}
                alt={`Nature image ${index + 1}`}
                width={100}
                height={100}
                className="w-full h-full object-cover"
                unoptimized
              />
            </SwiperSlide>
          ))}
      </Swiper>

      {/* Thumbnail Swiper */}
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView="auto"
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 5,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 8,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
          1280: {
            slidesPerView: 6,
            spaceBetween: 10,
          },
          1536: {
            slidesPerView: 8,
            spaceBetween: 10,
          },
        }}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="2xl:min-w-[1800px] xl:min-w-[1400px] lg:min-w-[1000px] md:min-w-[600px] min-w-[300px] max-h-[100px] my-10 w-full px-4"
      >
        {images &&
          images.map((image, index) => (
            <SwiperSlide key={index}>
              <Image
                src={image}
                alt={`Nature image ${index + 1}`}
                width={100}
                height={100}
                className="w-full h-full object-cover"
                unoptimized
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}
