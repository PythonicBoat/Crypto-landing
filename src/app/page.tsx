import Achievements from "@/components/achievements/Achievements";
import { Defcon } from "@/components/defcon/Defcon";
import Benefits from "@/components/events/Benefits";
import Events from "@/components/events/Events";
import Faq from "@/components/events/Faq";
import ConnectWithUs from "@/components/events/ConnectWithUs";
import Information from "@/components/events/Information";
import Intro from "@/components/intro/Intro";
import LogoSlider from "@/components/ui/LogoSlider";

export default function Home() {
  return (
    <div className="flex flex-col gap-10 md:gap-40">
      <Intro />
      <Information />
      <Benefits />
      <Faq />
      <ConnectWithUs />
      {/* <LogoSlider /> */}
      {/* <Defcon /> */}
      {/* <Events /> */}
      {/* <Achievements /> */}
    </div>
  );
}
