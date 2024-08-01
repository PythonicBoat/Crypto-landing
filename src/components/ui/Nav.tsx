import React from "react";
import Image from "next/image";
import { Link, Button } from "@nextui-org/react";

const Nav = () => {
  return (
    <div className="2xl:px-20 lg:flex justify-between  backdrop-blur-sm  filter py-1  bg-transparent items-center w-full z-50 max-w-[120rem]  ">
      {/* For small screens */}
      <div className="lg:hidden flex justify-between items-center px-4 py-2">
        <Image
          src="/assets/icon/logo.png"
          alt="logo"
          width={130}
          height={130}
        />
        <Button
          as={Link}
          className="bg-red-600 text-white font-bold py-2 px-2 rounded"
          href="https://docs.google.com/forms/d/e/1FAIpQLSemfe20wN5I7B3aZbUW5XzM3Gcm2tPPTBiEqT9G21NR92ak6A/viewform"
        >
          REGISTER NOW
        </Button>
      </div>
      {/* For larger screens */}
      <div className="hidden lg:flex gap-10 top-0 min-w-[800px] bg-transparent backdrop-blur-sm filter py-2  max-w-[120rem] w-full justify-between items-center g-8 pr-1.5 z-[100] text-sm">
        <Image
          src="/assets/icon/logo.png"
          className="items-center"
          alt="logo"
          width={120}
          height={80}
        />
        <div className="flex gap-10  items-baseline text-sm z-10 font-[600] text-xl italic">
          <div>
            <Link href="/">Home</Link>
          </div>
          <div>
            <Link href="#about">About</Link>
          </div>
          <div>
            <Link href="#achievements">Benefits</Link>
          </div>
          <div>
            <Link href="#events">FAQs</Link>
          </div>
        </div>
        <Button
          as={Link}
          className="bg-red-500 z-40 text-white font-dm font-semibold py-1 px-4 rounded text-xl"
          target="_blank"
          href="https://docs.google.com/forms/d/e/1FAIpQLSemfe20wN5I7B3aZbUW5XzM3Gcm2tPPTBiEqT9G21NR92ak6A/viewform"
        >
          Register Now
        </Button>
      </div>
    </div>
  );
};

export default Nav;
