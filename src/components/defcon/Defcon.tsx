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
        <p className="text-white text-Roboto-Mono font-extralight lg:text-xl text-base  defcon lg:pl-8 sm:pl-6 pl-4">
       
DEFCON is a tremendous learning opportunity for all CyberSecurity enthusiasts! The one-day event commences at 10:30 with a theoretical blueprint being provided to the participants, they will be explained the flow of the event and given brief introductions on the agenda. The evening segment starting at 3:00 will feature hands-on learning activities like Capture The Flag (CTF) where participants can engage and get the opportunity to become the top-performing individuals and win gifts/prizes! Bring your best Elliot impressions with you!

        </p>
      </motion.div>
    </div>
  );
};
