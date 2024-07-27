import React from "react";
import Image from "next/image";
const LogoSlider = () => {
  return (
    <div className="logoBox h-100 w-full mt-6 lg:mt-12 lg:mb-4 mb-10 ">
      <div className="row align-items-center w-full h-100">
        <div className="logoBox rounded w-full">
          <h1 className="text-center text-white text-2xl defcon w-full lg:text-4xl">
            Our Sponsors
          </h1>
          <div className="mt-8 justify-center flex gap-20 lg:gap-40 ">
            <div className="logos flex gap-5 lg:gap-32 ">
              <Image
                src={"/assets/sponsors/bitget.png"}
                width={100}
                height={100}
                alt="biggies"
                className="fab"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoSlider;
