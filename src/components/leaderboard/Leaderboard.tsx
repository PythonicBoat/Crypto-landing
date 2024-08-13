import Image from "next/image";
import React, { Suspense } from "react";
import LBNames from "./LBNames";

export default function Leaderboard() {
  return (
    <div className="w-full min-h-screen py-6 px-10 max-sm:px-5 bg-[#ffd68b] flex justify-center items-center relative">
      {/* <div className="absolute left-1/2 flex justify-center -translate-x-1/2 top-[25%]  lg:top-0">
        <div className="relative flex justify-center">
          <Image src="/left.png" height={150} width={150} alt="left" className="absolute w-1/2 -left-2 -z-10"></Image>

          <Image
            className="w-[80%]"
            src="/leaderboard.png"
            height={200}
            width={300}
            alt="lbHead"
          ></Image>
          <Image src="/right.png" height={150} width={150} alt="right" className="absolute w-1/2 -right-2 -z-10"></Image>
        </div>
        <div className="absolute font-bold bottom-[10%]">LEADERBOARD</div>
      </div> */}

      <Image
        src="/assets/leaderboard/left coin.png"
        height={100}
        width={100}
        alt="left coin"
        className="absolute top-[25%] md:top-0 max-sm:left-[10%] left-[35%] w-12 md:w-16"
      ></Image>

      <Image
        src="/assets/leaderboard/right coin.png"
        height={100}
        width={100}
        alt="left coin"
        className="absolute top-[25%] md:top-0 max-sm:right-[10%] right-[35%] w-12 md:w-16"
      ></Image>

      <Image
        src="/assets/leaderboard/left coin.png"
        height={100}
        width={100}
        alt="left coin"
        className="absolute bottom-[30%] md:bottom-6 left-[35%] max-sm:left-[10%] w-10 md:w-16"
      ></Image>
      <Image
        src="/assets/leaderboard/left coin.png"
        height={100}
        width={100}
        alt="left coin"
        className="absolute bottom-[30%] md:bottom-6 left-[32%] max-sm:left-[15%] w-12 md:w-20"
      ></Image>

      <Image
        src="/assets/leaderboard/right coin.png"
        height={100}
        width={100}
        alt="left coin"
        className="absolute bottom-[30%] md:bottom-8 right-[35%] max-sm:right-[10%] w-10 md:w-16"
      ></Image>
      <Image
        src="/assets/leaderboard/right coin.png"
        height={100}
        width={100}
        alt="left coin"
        className="absolute bottom-[30%] md:bottom-8 right-[32%] max-sm:right-[15%] w-12 md:w-20"
      ></Image>

      {/* hidden on pc  */}
      <Image
        src="/assets/leaderboard/right coin.png"
        height={100}
        width={100}
        alt="left coin"
        className="absolute lg:hidden bottom-[25%] md:bottom-8 left-1/2 -translate-x-[65%] w-9"
      ></Image>
      <Image
        src="/assets/leaderboard/left coin.png"
        height={100}
        width={100}
        alt="left coin"
        className="absolute lg:hidden bottom-[25%] md:bottom-8 left-1/2 -translate-x-[40%] w-9"
      ></Image>

      {/* hidden on mobile  */}
      <Image
        src="/assets/leaderboard/right coin.png"
        height={100}
        width={100}
        alt="left coin"
        className="absolute max-sm:hidden top-1/2 right-[25%] w-12 md:w-20"
      ></Image>
      <Image
        src="/assets/leaderboard/left coin.png"
        height={100}
        width={100}
        alt="left coin"
        className="absolute max-sm:hidden top-1/2 right-[20%] w-12 md:w-20"
      ></Image>

      <Image
        src="/assets/leaderboard/right coin.png"
        height={100}
        width={100}
        alt="left coin"
        className="absolute max-sm:hidden top-1/3 left-[25%] w-12 md:w-20"
      ></Image>
      <Image
        src="/assets/leaderboard/left coin.png"
        height={100}
        width={100}
        alt="left coin"
        className="absolute max-sm:hidden top-1/3 left-[20%] w-12 md:w-20"
      ></Image>

      <Image
        src="/assets/leaderboard/Vector.png"
        height={1550}
        width={1650}
        alt="imgBg"
        className=" lg:max-w-[45%] sm:w-[70%] max-sm:w-[100%] mt-7"
      />
      <div className="absolute flex flex-col gap-4 justify-center items-center top-[20%] lg:top-0 h-[45vh] lg:h-[75vh]  sm:h-[70%] z-10 max-sm:w-[80%] ">
        <div className="relative flex justify-center">
          <Image
            src="/assets/leaderboard/left.png"
            height={150}
            width={150}
            alt="left"
            className="absolute w-1/2 -left-2 -z-10"
          ></Image>

          <Image
            className="w-[80%]"
            src="/assets/leaderboard/leaderboard.png"
            height={200}
            width={300}
            alt="lbHead"
          ></Image>
          <div className="absolute font-bold bottom-8 translate-y-1 text-2xl">
            LEADERBOARD
          </div>
          <Image
            src="/assets/leaderboard/right.png"
            height={150}
            width={150}
            alt="right"
            className="absolute w-1/2 -right-2 -z-10"
          ></Image>
        </div>

        <Suspense fallback={<div>Loading</div>}>
          <LBNames />
        </Suspense>
      </div>
    </div>
  );
}
