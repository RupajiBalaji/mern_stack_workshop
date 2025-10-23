import HeroSection from "@/components/HeroSection";
import ScheduleSection from "@/components/ScheduleSection";
import BenefitsSection from "@/components/BenefitsSection";
import TrainersSection from "@/components/TrainersSection";
import AudienceSection from "@/components/AudienceSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ScheduleSection />
      <BenefitsSection />
      <TrainersSection />
      <AudienceSection />
      <Footer />
    </div>
  );
};

export default Index;
