import AchievementCard from "./AchievementCard";
import AchievementsTitle from "./AchievementsTitle";

export default function Achievements() {
  return (
    <div id="achievements" className=" py-6 lg:py-24 defcon flex flex-col items-center justify-around">
      <AchievementsTitle/>
      <AchievementCard/>
    </div>
  )
}
