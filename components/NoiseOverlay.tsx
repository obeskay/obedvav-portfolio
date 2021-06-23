import React from "react";

const NoiseOverlay = () => {
  return (
    <div
      className="absolute opacity-40 mix-blend-soft-light w-[300%] h-[300%] -left-[50%] -top-[110%] bg-noise z-5 animate-noiseMove"
      style={{
        backgroundImage: `url('https://i.ibb.co/jG7Vgm1/img-noise-380x380.png')`,
      }}
    ></div>
  );
};

export default NoiseOverlay;
