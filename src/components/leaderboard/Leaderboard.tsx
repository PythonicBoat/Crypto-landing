import Image from "next/image";
import React,{Suspense} from "react";
import LBNames from "./LBNames";

export default function Leaderboard() {
  return (
    <div className="w-full h-screen py-6 px-10 max-sm:px-5 bg-[#ffd68b] flex justify-center items-center lg:my-[10%]">
      <div className="relative flex flex-col items-center justify-center my-4">

        <Image src="/assets/leaderboard/left coin.png" height={100} width={100} alt="left coin" className="absolute top-0 max-sm:left-[10%] left-[20%] w-12 md:w-16"></Image>

        <Image src="/assets/leaderboard/right coin.png" height={100} width={100} alt="left coin" className="absolute top-0 max-sm:right-[10%] right-[20%] w-12 md:w-16"></Image>

        <Image src="/assets/leaderboard/left coin.png" height={100} width={100} alt="left coin" className="absolute bottom-6 left-[20%] max-sm:left-[10%] w-10 md:w-16"></Image>
        <Image src="/assets/leaderboard/left coin.png" height={100} width={100} alt="left coin" className="absolute bottom-6 left-[25%] max-sm:left-[15%] w-12 md:w-20"></Image>

        <Image src="/assets/leaderboard/right coin.png" height={100} width={100} alt="left coin" className="absolute bottom-8 right-[20%] max-sm:right-[10%] w-10 md:w-16"></Image>
        <Image src="/assets/leaderboard/right coin.png" height={100} width={100} alt="left coin" className="absolute bottom-8 right-[25%] max-sm:right-[15%] w-12 md:w-20"></Image>

        {/* hidden on pc  */}
        <Image src="/assets/leaderboard/right coin.png" height={100} width={100} alt="left coin" className="absolute lg:hidden -bottom-8 left-1/2 -translate-x-[65%] w-9"></Image>
        <Image src="/assets/leaderboard/left coin.png" height={100} width={100} alt="left coin" className="absolute lg:hidden -bottom-8 left-1/2 -translate-x-[40%] w-9"></Image>

        {/* hidden on mobile  */}
        <Image src="/assets/leaderboard/right coin.png" height={100} width={100} alt="left coin" className="absolute max-sm:hidden top-1/2 right-[0%] w-12 md:w-20"></Image>
        <Image src="/assets/leaderboard/left coin.png" height={100} width={100} alt="left coin" className="absolute max-sm:hidden top-1/2 -right-[5%] w-12 md:w-20"></Image>

        <Image src="/assets/leaderboard/right coin.png" height={100} width={100} alt="left coin" className="absolute max-sm:hidden top-1/3 left-[0%] w-12 md:w-20"></Image>
        <Image src="/assets/leaderboard/left coin.png" height={100} width={100} alt="left coin" className="absolute max-sm:hidden top-1/3 -left-[5%] w-12 md:w-20"></Image>

      <Image
        src="/assets/leaderboard/Vector.png"
        height={1550}
        width={1650}
        alt="imgBg"
        className=" lg:max-w-[95%] sm:w-[90%] max-sm:w-[100%] mt-7"
        />
      <div className="absolute -top-5 max-sm:-top-3 flex flex-col gap-4 items-center h-[45vh]  sm:h-[70%] z-10 max-sm:w-[80%] pb-3">
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
          <div className="absolute font-bold bottom-2">LEADERBOARD</div>
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
    </div>
  );
}
