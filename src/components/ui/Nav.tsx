import Image from "next/image";
import Link from "next/link";

const Nav = () => {
  return (
    <div className="px-2 2xl:px-20 flex justify-between backdrop-blur-sm filter py-1 bg-transparent items-center w-full z-50">
      <Image
        src="/assets/icon/logo.png"
        className="md:hidden"
        alt="logo"
        width={120}
        height={80}
      />
      <Image
        src="/assets/icon/logo.png"
        className="hidden md:block"
        alt="logo"
        width={150}
        height={100}
      />
      <div className="hidden md:flex gap-2 md:gap-10 items-baseline text-sm z-10 font-[600] text-xl italic">
        <div>
          <Link href="#home">Home</Link>
        </div>
        <div>
          <Link href="#about">About</Link>
        </div>
        <div>
          <Link href="#benefits">Benefits</Link>
        </div>
        <div>
          <Link href="https://youtu.be/VhbubyPwTpE?si=DOFP3UmVabUm1ksd">
            FAQs
          </Link>
        </div>

        <div>
          <Link href="/leaderboard">Leaderboard</Link>
        </div>
      </div>
      <Link
        target="_blank"
        href="https://docs.google.com/forms/d/e/1FAIpQLSemfe20wN5I7B3aZbUW5XzM3Gcm2tPPTBiEqT9G21NR92ak6A/viewform"
        className="bg-red-500 z-40 text-white font-dm font-semibold py-1 px-2 md:px-4 rounded text-sm md:text-xl"
      >
        Register Now
      </Link>
    </div>
  );
};

export default Nav;
