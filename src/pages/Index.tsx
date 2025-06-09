import HeroSection from "@/components/HeroSection";
import TeamRoster from "@/components/TeamRoster";
import NewsSection from "@/components/NewsSection";
import MatchSchedule from "@/components/MatchSchedule";
import Achievements from "@/components/Achievements";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-950">
      <HeroSection />
      <TeamRoster />
      <NewsSection />
      <MatchSchedule />
      <Achievements />
    </div>
  );
};

export default Index;
