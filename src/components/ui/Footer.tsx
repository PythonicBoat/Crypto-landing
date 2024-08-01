"use client";

import { siteConfig } from "@/constants/siteConfig";
import Link from "next/link";
import {
  FaDiscord,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <div>
      <div className="2xl:px-20 px-2 mb-1 w-full h-full relative overflow-hidden">
        <div className="flex items-start justify-between border-t-3 border-black">
          <span className="text-lg md:text-3xl font-bold italic">
            MLSA X BITGET
          </span>
          <Socials />
          <span className="text-md md:text-xl font-bold italic">to be continued...</span>
        </div>
      </div>
    </div>
  );
};

type socialsProps = {
  logo: React.ReactNode;
  src: string;
};

const Socials = () => {
  return (
    <div className="hidden md:flex gap-2 md:gap-6 mt-1 justify-center md:justify-normal">
      <SocialItem
        logo={<FaGithub className="md:size-8 size-5" />}
        src={siteConfig.socials.github}
      />
      <SocialItem
        logo={<FaDiscord className="md:size-8 size-5" />}
        src={siteConfig.socials.discord}
      />
      <SocialItem
        logo={<FaFacebook className="md:size-8 size-5" />}
        src={siteConfig.socials.facebook}
      />
      <SocialItem
        logo={<FaInstagram className="md:size-8 size-5" />}
        src={siteConfig.socials.instagram}
      />
      <SocialItem
        logo={<FaTwitter className="md:size-8 size-5" />}
        src="https://x.com/mlsakiit"
      />
    </div>
  );
};
const SocialItem = ({ logo, src }: socialsProps) => {
  return (
    <Link href={src} target="_blank">
      {logo}
    </Link>
  );
};
export default Footer;
