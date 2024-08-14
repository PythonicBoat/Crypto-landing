import Benefits from "@/components/events/Benefits";
import Faq from "@/components/events/Faq";
import ConnectWithUs from "@/components/events/ConnectWithUs";
import Information from "@/components/events/Information";
import Intro from "@/components/intro/Intro";
import Prizes from "@/components/prizes/Prizes";

export default function Home() {
  return (
    <div className="flex flex-col gap-10 md:gap-32">
      <Intro />
      <Prizes />
      <Information />
      <Benefits />
      <Faq />
      <ConnectWithUs />
    </div>
  );
}
