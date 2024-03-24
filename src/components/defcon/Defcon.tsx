"use client";
import { motion } from "framer-motion"; 


export const Defcon: React.FC = () => {
  
  return (
    <div  id="about" className=" flex  h-[70vh] lg:h-screen xl:max-w-7xl 2xl:ml-40 overflow-hidden lg:gap-8 sm:gap-6 gap-4 px-6 lg:px-8 justify-between items-center">
      
      
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
        <p className="text-white text-Roboto-Mono font-extralight lg:text-3xl text-base  defcon lg:pl-8 sm:pl-6 pl-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
          unde. Aperiam voluptas saepe, impedit porro minus perferendis
          obcaecati aliquam magnam aliquid neque officia recusandae deserunt
          natus ullam nihil officiis est, dicta non corrupti incidunt deleniti
          distinctio, corporis necessitatibus unde! Amet aperiam et ab quis est
          fugit!
        </p>
      </motion.div>
    </div>
  );
};
