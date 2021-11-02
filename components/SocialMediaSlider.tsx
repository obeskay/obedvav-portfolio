import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Mousewheel, Virtual, Navigation } from "swiper";

SwiperCore.use([Mousewheel, Virtual, Navigation]);

const SocialMediaSlider = ({ images }) => {
  const [swiperRef, setSwiperRef] = useState(null);
  return (
    <Swiper
      onSwiper={setSwiperRef}
      direction={"horizontal"}
      spaceBetween={24}
      centeredSlides={true}
      mousewheel={true}
      className="w-full !h-full"
      virtual
      navigation={true}
      breakpoints={{
        "@0.00": {
          slidesPerView: 1,
        },
        "@1.50": {
          slidesPerView: 4,
        },
      }}
    >
      {images.map((image, index) => (
        <SwiperSlide key={image.photo} virtualIndex={index}>
          <p className="mb-8 text-center">Para: {image.name}</p>
          <div
            className="relative flex items-center justify-center w-full min-h-full mx-auto"
            style={{
              maxHeight: `${image.height}`,
              maxWidth: `${image.width}`,
            }}
          >
            <Image
              height={image.height}
              width={image.width}
              src={image.photo}
              className="mx-auto my-auto"
              placeholder="blur"
              blurDataURL="/img/placeholder.webp"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SocialMediaSlider;
