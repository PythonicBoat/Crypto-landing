"use client"
import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
const Events = () => {
  return (
    <div id='events'  className="max-w-[120rem]  mb-20">

      <div className="pt-20 flex flex-col justify-center items-center defcon gap-24 text-sm text-center  md:text-left">
        <h1 className='text-color-1 text-5xl lg:text-7xl font-extrabold'>EVENTS</h1>
        <div className="flex flex-col gap-10 md:flex-row justify-between  items-center w-[73%] ">
          <div className="md:pl-10  md:order-2">
            <Image
              src="/assets/icon/events1.png"
              className="w-[150px] md:w-[500px]"
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
              opacity: [0, 0.4, 0,.6, 1],
            }}
            viewport={{ once: true }}
            transition={{ type: "tween", duration: 0.5, delay:.3,repeatType: "loop", repeat:1}}
          >
            <div className="lg:text-[40px] text-3xl leading-10 tracking-tighter font-bold uppercase text-color-1 inline-block w-full text-center">
              <div className="drop-shadow-[3px_3px_0px_red] text-3xl lg:text-[40px] outline-color-1 text-white font-extrabold">Seminar</div>
            </div>
            <div className="flex justify-between items-center">
              <img
                src="/assets/Vector13.png"
                alt="v"
                className="lg:h-[15rem] lg:inline-block hidden"
              />
              <p className="text-white  lg:ml-4 text-lg lg:text-xl pt-5">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Quibusdam quam aperiam sapiente modi aliquam animi officia
                doloremque sunt sit veniam laboriosam placeat maxime veritatis
                illum deleniti, nesciunt cum, quia cupiditate eum. Maiores ullam
                voluptate.
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
            transition={{ type: "tween", duration: 0.5, delay:0.3,repeatType: "loop", repeat:1}}
          >
            <div className="text-3xl lg:text-[40px]  leading-7 tracking-tighter font-bold uppercase text-color-1 inline-block w-full text-center">
              <div className="drop-shadow-[3px_3px_0px_red] outline-color-1 text-white font-extrabold">Fun Part</div>{" "}
            </div>
            <div className="flex justify-between items-center">
              <img
                src="/assets/Vector13.png"
                alt="v"
                className="lg:h-[15rem] lg:inline-block hidden"
              />
              <div className="text-white lg:ml-4 text-lg lg:text-xl pt-5 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                nesciunt eveniet eligendi veritatis modi aliquid impedit
                sapiente sequi perferendis! Autem sit earum totam asperiores
                voluptatem non maiores delectus voluptatibus quos!
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
              src="/assets/icon/events2.png"
              className="w-[150px]  md:w-[600px]"
              width={600}
              height={800}
              alt="Picture"
            />
          </div>
        </div>

        <div className="flex flex-col gap-10 md:flex-row justify-between  items-center w-[73%]">
          <div className="md:pl-10  md:order-2">
            <Image
              src="/assets/icon/events3.png"
              className="w-[150px]  md:w-[357px]"
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
            transition={{ type: "tween", duration: 0.5, delay:0.3, repeatType: "loop", repeat:1}}
          >
            <div className="text-3xl lg:text-[40px] leading-7 tracking-tighter font-bold uppercase text-color-1 inline-block w-full text-center">
              <div className="VT drop-shadow-[3px_3px_0px_red] outline-color-1 text-white font-extrabold">Capture the Flag</div>
            </div>
            <div className="flex justify-between items-center">
              <img
                src="/assets/Vector13.png"
                alt="v"
                className="lg:h-[15rem] lg:inline-block hidden"
              />
              <p className="text-white lg:ml-4 text-lg lg:text-xl pt-5">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Mollitia repellat eveniet recusandae praesentium assumenda
                reiciendis molestias dolores fugit ab molestiae ratione dolor
                eum deleniti magni, placeat voluptatum nesciunt voluptas
                aliquid.
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
  )
}

export default Events
