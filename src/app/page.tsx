
import Achievements from "@/components/achievements/Achievements";
import { Defcon } from "@/components/defcon/Defcon";
import Events from "@/components/events/Events";
import Intro from "@/components/intro/Intro";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
    <Intro/>
    <Defcon/>
    <Events/>
    <Achievements/>
  
  </div>
  );
}
