import Achievements from "@/components/achievements/Achievements";
import { Defcon } from "@/components/defcon/Defcon";
import Events from "@/components/events/Events";
import Intro from "@/components/intro/Intro";
import LogoSlider from "@/components/ui/LogoSlider";

import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Intro />
      <LogoSlider />
      <Defcon />
      <Events />
      <Achievements />
    </div>
  );
}
