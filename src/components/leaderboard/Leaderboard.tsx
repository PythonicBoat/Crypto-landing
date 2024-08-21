import Image from "next/image";
import { Suspense } from "react";
import LBNames from "./LBNames";

export default function Leaderboard() {
  return (
    <div className="w-screen overflow-x-hidden flex-col py-6 md:px-10 max-sm:px-5 bg-[#ffd68b] flex justify-center items-center">
      <div className=" flex absolute h-screen w-screen top-50 flex-col items-center justify-center my-4">
        <Image
          src="/assets/leaderboard/left coin.png"
          height={100}
          width={100}
          alt="left coin"
          className="absolute top-0 max-sm:left-[10%] left-[20%] w-12 md:w-16"
        ></Image>

        <Image
          src="/assets/leaderboard/right coin.png"
          height={100}
          width={100}
          alt="left coin"
          className="absolute top-0 max-sm:right-[10%] right-[20%] w-12 md:w-16"
        ></Image>

        <Image
          src="/assets/leaderboard/left coin.png"
          height={100}
          width={100}
          alt="left coin"
          className="absolute bottom-6 left-[20%] max-sm:left-[10%] w-10 md:w-16"
        ></Image>
        <Image
          src="/assets/leaderboard/left coin.png"
          height={100}
          width={100}
          alt="left coin"
          className="absolute bottom-6 left-[25%] max-sm:left-[15%] w-12 md:w-20"
        ></Image>

        <Image
          src="/assets/leaderboard/right coin.png"
          height={100}
          width={100}
          alt="left coin"
          className="absolute bottom-8 right-[20%] max-sm:right-[10%] w-10 md:w-16"
        ></Image>
        <Image
          src="/assets/leaderboard/right coin.png"
          height={100}
          width={100}
          alt="left coin"
          className="absolute bottom-8 right-[25%] max-sm:right-[15%] w-12 md:w-20"
        ></Image>

        {/* hidden on pc  */}
        <Image
          src="/assets/leaderboard/right coin.png"
          height={100}
          width={100}
          alt="left coin"
          className="absolute lg:hidden -bottom-8 left-1/2 -translate-x-[65%] w-9"
        ></Image>
        <Image
          src="/assets/leaderboard/left coin.png"
          height={100}
          width={100}
          alt="left coin"
          className="absolute lg:hidden -bottom-8 left-1/2 -translate-x-[40%] w-9"
        ></Image>

        {/* hidden on mobile  */}
        <Image
          src="/assets/leaderboard/right coin.png"
          height={100}
          width={100}
          alt="left coin"
          className="absolute max-sm:hidden top-1/2 right-[0%] w-12 md:w-20"
        ></Image>
        {/* <Image */}
        {/*   src="/assets/leaderboard/left coin.png" */}
        {/*   height={100} */}
        {/*   width={100} */}
        {/*   alt="left coin" */}
        {/*   className="absolute max-sm:hidden top-1/2 -right-[5%] w-12 md:w-20" */}
        {/* ></Image> */}

        <Image
          src="/assets/leaderboard/right coin.png"
          height={100}
          width={100}
          alt="left coin"
          className="absolute max-sm:hidden top-1/3 left-[0%] w-12 md:w-20"
        ></Image>
        <Image
          src="/assets/leaderboard/left coin.png"
          height={100}
          width={100}
          alt="left coin"
          className="absolute max-sm:hidden top-1/3 -left-[5%] w-12 md:w-20"
        ></Image>
      </div>
      <Image
        src="/assets/leaderboard/leaderboard_title.png"
        height={400}
        width={400}
        alt="leaderboard"
        className=""
      ></Image>
      <Suspense
        fallback={
          <div className="h-screen z-20 flex justify-center items-center">
            <div className="animate-spin rounded-full aspect-square border-black border-l-red-600 border-5 w-32"></div>
          </div>
        }
      >
        <LBNames />
      </Suspense>
    </div>
  );
}
