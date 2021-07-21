import React from "react";
import Link from "next/link";
import { useAppContext } from "./context/GeneralContext";
import { motion } from "framer-motion";

const Navbar = () => {
  const { isCursorHover, setCursorHover } = useAppContext();
  const { isCursorContact, setCursorContact } = useAppContext();
  return (
    <nav className="z-[10] hidden w-full md:block md:fixed  backdrop-blur-sm  mix-blend-difference">
      <div className="container flex py-[1rem] mx-auto text-sm  items-center spaced-text space-x-[1rem] justify-between  text-secondary">
        <Link href="/">
          <motion.a
            onHoverStart={() => setCursorHover(true)}
            onHoverEnd={() => setCursorHover(false)}
            onClick={() => setCursorHover(false)}
          >
            <svg
              height="24"
              viewBox="0 0 316 69"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-current"
            >
              <path d="M9.17677 47.5104H9.22997C9.25657 47.5104 9.28317 47.5104 9.28317 47.5104H9.30977C12.6613 47.5104 15.5872 46.2915 17.9811 43.9067C20.4017 41.4954 21.6253 38.5276 21.6253 35.0829C21.6253 31.7177 20.4549 28.8295 18.1407 26.4447L17.6354 25.9147L16.9172 26.0737C15.667 26.3387 14.4434 26.7097 13.2731 27.1866L11.0121 28.0876L13.0071 29.4919C13.3263 29.7304 13.6455 29.9954 13.9381 30.2869C15.268 31.6118 15.9064 33.1486 15.8798 34.977C15.8798 36.8053 15.1882 38.3422 13.8317 39.72C12.4751 41.0714 10.9057 41.7339 9.01717 41.7604C7.18182 41.7604 5.63906 41.1244 4.30909 39.773C4.0431 39.5081 3.77711 39.2166 3.59091 38.9251L2.18115 36.9113L1.25017 39.1901C0.771381 40.356 0.39899 41.5749 0.132997 42.8203L0 43.5092L0.531987 44.0127C2.92593 46.2915 5.82525 47.4574 9.12357 47.4839C9.15017 47.5104 9.15017 47.5104 9.17677 47.5104Z" />
              <path d="M40.3778 36.6728C39.8192 35.6659 39.1542 34.712 38.4626 33.8111L37.8242 33.0161L34.0471 34.606L35.6697 30.8698L34.8717 30.2339C33.9673 29.5184 33.0098 28.8825 31.9724 28.2995L30.669 27.5841L23.1946 45.3111L41.1226 37.9712L40.3778 36.6728Z" />
              <path d="M2.42055 57.765C3.00573 58.7984 3.64412 59.7523 4.3623 60.6532L5.00068 61.4482L8.75119 59.8318L7.15523 63.5945L7.95321 64.2304C8.85758 64.9459 9.81516 65.5818 10.8259 66.1383L12.1293 66.8802L19.4973 49.0207L1.67577 56.4931L2.42055 57.765Z" />
              <path d="M33.6748 47.0599H33.5152C30.1371 47.0599 27.2111 48.2523 24.8704 50.5841C22.1573 53.2869 20.9071 56.4666 21.1731 60.0703C21.3859 63.25 22.5828 65.9263 24.7108 68.0991L25.2162 68.629L25.9344 68.47C27.1845 68.2051 28.4081 67.8341 29.5785 67.3571L31.8394 66.4297L29.8445 65.0253C29.5253 64.7869 29.1795 64.5219 28.8603 64.2039C27.6367 62.985 27.0249 61.4747 26.9717 59.6198C26.9451 57.765 27.6101 56.2016 29.0465 54.7707C30.403 53.4194 31.9458 52.7569 33.7812 52.7569H33.8344C35.6431 52.7569 37.1593 53.3929 38.4892 54.7177C38.7818 55.0092 39.0478 55.3272 39.2606 55.6187L40.6704 57.5795L41.5748 55.3272C42.0535 54.1613 42.4259 52.9424 42.6919 51.697L42.8515 50.9816L42.3195 50.4781C39.899 48.2258 36.9997 47.0864 33.6748 47.0599Z" />
              <path d="M72.4034 27.0276C67.9081 27.0276 63.8916 28.856 60.3273 32.5392V0H51.4431V66.3767H60.3273V62.3756C63.8118 65.7938 67.8017 67.4896 72.2438 67.4896C77.5104 67.4896 81.8461 65.5818 85.304 61.7396C88.7886 57.8975 90.5175 53.0219 90.5175 47.1129C90.5175 41.3894 88.7885 36.6463 85.3572 32.8041C81.8993 28.962 77.5902 27.0276 72.4034 27.0276ZM78.3616 56.1486C76.3401 58.4274 73.7865 59.5668 70.701 59.5668C67.4293 59.5668 64.8226 58.4274 62.801 56.1486C60.8061 53.9228 59.7953 50.9551 59.7953 47.2189C59.7953 43.6152 60.8061 40.674 62.8276 38.4217C64.8758 36.1429 67.5357 35.0035 70.8074 35.0035C73.8663 35.0035 76.3933 36.1693 78.4148 38.5276C80.4098 40.8329 81.4205 43.8272 81.4205 47.4839C81.4471 50.9816 80.4098 53.8433 78.3616 56.1486Z" />
              <path d="M122.889 58.0035C121.453 59.0634 119.617 59.5668 117.409 59.5668C114.563 59.5668 112.249 58.6394 110.44 56.8111C108.632 54.9562 107.594 52.4389 107.355 49.3122H134.885L134.912 47.2189C134.912 40.9124 133.289 35.9574 130.018 32.4067C126.719 28.8295 122.251 27.0276 116.611 27.0276C110.999 27.0276 106.504 28.8825 103.126 32.5657C99.7475 36.3018 98.0717 41.2039 98.0717 47.2719C98.0717 53.3664 99.8007 58.2684 103.285 61.9781C106.77 65.6348 111.371 67.4896 117.09 67.4896C119.085 67.4896 120.947 67.2777 122.649 66.8537C124.352 66.4297 125.948 65.7673 127.411 64.8664C128.874 63.9654 130.257 62.7995 131.56 61.3952C132.837 59.9908 134.061 58.3214 135.231 56.3341L127.73 52.174C125.948 55.0092 124.325 56.9436 122.889 58.0035ZM109.217 39.1371C109.775 38.2627 110.44 37.5207 111.212 36.9113C111.983 36.3018 112.861 35.8249 113.792 35.5069C114.749 35.1889 115.76 35.0035 116.824 35.0035C121.559 35.0035 124.538 37.3618 125.788 42.0783H107.967C108.233 40.9919 108.658 40.0115 109.217 39.1371Z" />
              <path d="M172.922 32.5392C169.358 28.8825 165.341 27.0276 160.846 27.0276C155.659 27.0276 151.377 28.962 147.945 32.8041C144.488 36.6198 142.785 41.3894 142.785 47.1129C142.785 52.9424 144.514 57.818 147.945 61.7396C151.43 65.5553 155.792 67.4896 161.032 67.4896C165.448 67.4896 169.411 65.7938 172.896 62.3756V66.3767H181.806V0H172.896V32.5392H172.922ZM170.422 56.2016C168.4 58.4539 165.74 59.5933 162.442 59.5933C159.357 59.5933 156.803 58.4274 154.781 56.0956C152.813 53.7903 151.829 50.7961 151.829 47.1394C151.829 43.6947 152.84 40.833 154.861 38.5012C156.909 36.1959 159.463 35.03 162.522 35.03C165.767 35.03 168.374 36.1694 170.422 38.4482C172.443 40.78 173.454 43.7477 173.454 47.3249C173.481 50.9021 172.47 53.8698 170.422 56.2016Z" />
              <path d="M207.741 49.6037L197.819 28.0876H187.871L207.661 69L227.637 28.0876H217.662L207.741 49.6037Z" />
              <path d="M260.567 32.5392C257.029 28.8825 253.013 27.0276 248.544 27.0276C243.357 27.0276 239.048 28.9355 235.617 32.7776C232.159 36.5933 230.457 41.3894 230.457 47.1129C230.457 52.9424 232.186 57.818 235.617 61.7396C239.101 65.5553 243.49 67.4896 248.783 67.4896C252.986 67.4896 256.923 65.7938 260.567 62.3756V66.3767H269.478V28.0876H260.567V32.5392ZM258.093 56.2016C256.072 58.4539 253.412 59.5933 250.113 59.5933C247.028 59.5933 244.474 58.4274 242.453 56.0956C240.484 53.7903 239.5 50.7961 239.5 47.1394C239.5 43.6947 240.511 40.833 242.533 38.5012C244.581 36.1959 247.134 35.03 250.193 35.03C253.438 35.03 256.045 36.1694 258.093 38.4482C260.115 40.78 261.126 43.7477 261.126 47.3249C261.126 50.9021 260.115 53.8698 258.093 56.2016Z" />
              <path d="M306.025 28.0876L296.104 49.6037L286.182 28.0876H276.234L296.051 69L316 28.0876H306.025Z" />
            </svg>
          </motion.a>
        </Link>
        <div className="space-x-[2rem] flex align-center">
          <Link href="/projects">
            <motion.a
              onHoverStart={() => setCursorHover(true)}
              onHoverEnd={() => setCursorHover(false)}
              onClick={() => setCursorHover(false)}
            >
              Mi trabajo
            </motion.a>
          </Link>
          <Link href="/me">
            <motion.a
              onHoverStart={() => setCursorHover(true)}
              onHoverEnd={() => setCursorHover(false)}
              onClick={() => setCursorHover(false)}
            >
              Sobre mí
            </motion.a>
          </Link>
          <motion.p
            onHoverStart={() => {
              setCursorHover(true);
              setCursorContact(true);
            }}
            onHoverEnd={() => {
              setCursorHover(false);
              setCursorContact(false);
            }}
          >
            Contáctame
          </motion.p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
