"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const AchievementCard = () => {
  return (
    <div className="max-w-[120rem] mb-20">
      <div className="pt-20 flex flex-col items-center gap-24 text-sm text-center  md:text-left">
        <div className="flex flex-col gap-10 md:flex-row justify-between  items-center w-[73%] ">
          <div className="md:pl-10  md:order-2">
            <Image
              src="/assets/Achievement1.png"
              className="w-[230px] md:w-[500px]"
              height={300}
              width={400}
              alt="Picture"
            />
          </div>

          <motion.div
            initial={{
              opacity: 0,
              // x:200,
            }}
            whileInView={{
              opacity: [0, 0.4, 0, 0.6, 1],
            }}
            viewport={{ once: true }}
            transition={{
              type: "tween",
              duration: 0.5,
              delay: 0.3,
              repeatType: "loop",
              repeat: 1,
            }}
          >
            <div className="lg:text-[40px] text-3xl leading-10 tracking-tighter font-bold uppercase text-color-1 inline-block w-full text-center">
              <div className="drop-shadow-[3px_3px_0px_red] outline-color-1 text-white font-extrabold ">
                LEARN CYBER SECURITY
              </div>
            </div>
            <div className="flex justify-between items-center">
              <img
                src="/assets/Vector13.png"
                alt="v"
                className="lg:h-[15rem] lg:inline-block hidden"
              />
              <p className="text-white lg:ml-4 text-lg lg:text-xl pt-5">
                Being a part of DEFCON will help you in your journey of
                cybersecurity. Acknowledging both the beginners and the already
                skillful masters, we at MLSA will polish your artistry in this
                field with the assist of our experienced team members and will
                surely leave you hungry for more.
              </p>
              <img
                src="/assets/Vector13.png"
                alt="v"
                className="lg:h-[15rem] lg:inline-block hidden"
              />
            </div>
          </motion.div>
        </div>
        <div className="flex flex-col-reverse md:flex-row gap-8  justify-center items-center w-[73%] text-center md:text-left ">
          <motion.div
            className="md:order-2 "
            initial={{
              opacity: 0,
              // x:200,
            }}
            whileInView={{
              opacity: [0, 0.4, 0, 0.6, 1],
            }}
            viewport={{ once: true }}
            transition={{
              type: "tween",
              duration: 0.5,
              delay: 0.3,
              repeatType: "loop",
              repeat: 1,
            }}
          >
            <div className="text-3xl lg:text-[40px]  leading-7 tracking-tighter font-bold uppercase text-color-1 inline-block w-full text-center">
              <div className="drop-shadow-[3px_3px_0px_red] outline-color-1 text-white font-extrabold">
                EXCITING GOODIES
              </div>{" "}
            </div>
            <div className="flex justify-between items-center">
              <img
                src="/assets/Vector13.png"
                alt="v"
                className="lg:h-[15rem] lg:inline-block hidden"
              />
              <div className="text-white lg:ml-4 text-lg lg:text-xl pt-5 ">
                {" "}
                An event hosted by us does not end without a surprise. Each and
                every participant has an opportunity to win a free goodie which
                you can definitely flex among your friends with a proud face.
              </div>
              <img
                src="/assets/Vector13.png"
                alt="v"
                className="lg:h-[15rem] lg:inline-block hidden"
              />
            </div>
          </motion.div>
          <div className=" md:pr-20  ">
            <Image
              src="/assets/Achievement2.png"
              className="w-[257px]  md:w-[600px]"
              width={600}
              height={800}
              alt="Picture"
            />
          </div>
        </div>

        <div className="flex flex-col gap-10 md:flex-row justify-between  items-center w-[73%]">
          <div className="md:pl-10  md:order-2">
            <Image
              src="/assets/Achievement3.png"
              className="w-[257px]  md:w-[357px]"
              height={240}
              width={357}
              alt="Picture"
            />
          </div>

          <motion.div
            initial={{
              opacity: 0,
              // x:200,
            }}
            whileInView={{
              opacity: [0, 0.4, 0, 0.6, 1],
            }}
            viewport={{ once: true }}
            transition={{
              type: "tween",
              duration: 0.5,
              delay: 0.3,
              repeatType: "loop",
              repeat: 1,
            }}
          >
            <div className="text-3xl lg:text-[40px] leading-7 tracking-tighter font-bold uppercase text-color-1 inline-block w-full text-center">
              <div className="drop-shadow-[3px_3px_0px_red] outline-color-1 text-white font-extrabold">
                CERTIFICATE
              </div>
            </div>
            <div className="flex justify-between items-center">
              <img
                src="/assets/Vector13.png"
                alt="v"
                className="lg:h-[15rem] lg:inline-block hidden"
              />
              <p className="text-white lg:ml-4 text-lg lg:text-xl pt-5">
                MLSA believes it is important to acknowledge the hard work that
                each student has demonstrated throughout the event. All
                participants will be given a certificate of completion meant to
                be a a token of appreciation for their enthusiasm and eagerness
                to learn. This certificate serves as a recognition of their
                efforts and commitment to their personal and
                professional development.
              </p>
              <img
                src="/assets/Vector13.png"
                alt="v"
                className="lg:h-[15rem] lg:inline-block hidden"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AchievementCard;
