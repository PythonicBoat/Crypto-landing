import React from 'react';
import Image from 'next/image';
import { Link, Button } from '@nextui-org/react';

const Nav = () => {
  return (
    <div className="2xl:px-20 lg:flex justify-between  backdrop-blur-sm  filter py-1  bg-transparent items-center w-full z-50 max-w-[120rem]  ">
      {/* For small screens */}
      <div className="lg:hidden flex justify-between items-center px-4 py-2">
        <Image src="/assets/icon/defcon.png" alt="logo" width={130} height={130} />
        <Button
          as={Link}
          className="bg-red-600 text-white font-bold py-2 px-2 rounded"
          href="https://register.d3fc0n.tech/"
        >
          REGISTER NOW
        </Button>
      </div>
      {/* For larger screens */}
      <div className="hidden lg:flex gap-10 top-0 min-w-[800px] bg-transparent backdrop-blur-sm filter py-2  max-w-[120rem] w-full justify-between items-center g-8 pr-1.5 z-[100] text-sm">
        <Image src="/assets/icon/defcon.png" className='items-center' alt="logo" width={150} height={100} />
        <div className="flex gap-10 text-white items-baseline text-sm z-10">
        <div>
        <Link  className="text-white z-40" href="/">
            Home
          </Link>
          </div>
          <div>
        <Link  className="text-white z-40" href="/sponsors">
          Our Sponsors
          </Link>
          </div>
          <div>
        <Link  className="text-white z-40" href="#about">
          About
          </Link>
          </div>
          <div>
        <Link className="text-white" href="#achievements">
         Achievments
          </Link>
          </div>
          <div>
        <Link className="text-white" href="#events">
       Events
          </Link>
          </div>
        </div>
        <Button
          as={Link}
          className="bg-red-600 z-40 text-white font-bold py-2 px-2 rounded"
          href="https://register.d3fc0n.tech/"
        >
          REGISTER NOW
        </Button>
      </div>
    </div>
  );
};

export default Nav;
