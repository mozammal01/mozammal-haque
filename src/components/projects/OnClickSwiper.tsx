import React, { useState } from "react";
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

interface OnClickSwiperProps {
  images?: StaticImageData[];
}

export default function OnClickSwiper({ images }: OnClickSwiperProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  return (
    <div>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs, Autoplay]}
        className="min-w-[1500px] min-h-[800px] object-cover"
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
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={10}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper max-h-[100px]  my-10 min-w-[2000px]"
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
