"use client";
import { motion } from "framer-motion";

export const Defcon: React.FC = () => {
  return (
    <div
      id="about"
      className=" flex  h-[70vh] lg:h-screen xl:max-w-7xl 2xl:ml-40 overflow-hidden lg:gap-8 sm:gap-6 gap-4 px-6 lg:px-8 justify-between items-center"
    >
      <img
        src="/assets/Group.png"
        alt=""
        className="sm:h-[33rem]  hidden md:inline-block"
      />
      <img
        src="/assets/Maskgroup.png"
        alt=""
        className="hidden md:inline-block  mt-6 h-[15.5rem] w-[15.5rem]"
      />
      <motion.div
        className="flex flex-col "
        initial={{
          opacity: 0,
          x: 200,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{ once: true }}
        transition={{ type: "tween", duration: 1 }}
      >
        <img
          src="/assets/defcon.png"
          alt=""
          className="lg:w-[31rem] mb-8 lg:h-[8rem]"
        />
        <p className="text-white text-Roboto-Mono font-extralight lg:text-xl text-base  defcon lg:pl-8 sm:pl-6 pl-4">
          Cryptoblitz is an exhilarating one-week event designed for
          cryptocurrency enthusiasts and traders. Attendees immerse themselves
          in a dynamic trading environment, where they can buy, sell, and trade
          cryptocurrencies. Whether you&apos;re a seasoned trader or new to the
          crypto space, Cryptoblitz offers an engaging platform to enhance your
          trading skills, compete for prizes, and connect with the crypto
          community.
        </p>
      </motion.div>
    </div>
  );
};
