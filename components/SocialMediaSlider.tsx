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
      className="w-full h-full "
      virtual
      navigation={true}
      breakpoints={{
        "@0.00": {
          slidesPerView: 1,
        },
        "@1.50": {
          slidesPerView: 3,
        },
      }}
    >
      {images.map((image, index) => (
        <SwiperSlide key={image.photo} virtualIndex={index}>
          <p>Para: {image.name}</p>
          <div
            className="relative block mx-auto -translate-y-1/2 top-1/2"
            style={{
              height: `${image.height / 2} !important`,
              width: `${image.width / 2} !important`,
            }}
          >
            <Image
              height={image.height}
              width={image.width}
              src={image.photo}
              placeholder="blur"
              layout={"responsive"}
              blurDataURL="/img/placeholder.webp"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SocialMediaSlider;
