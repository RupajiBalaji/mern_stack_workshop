import { Button } from "@/components/ui/button";
import { Calendar, Clock, Video, IndianRupee } from "lucide-react";

const HeroSection = () => {
  const handleRegisterClick = () => {
    window.open("https://forms.gle/bEzfhREdH64pksc49", "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center space-y-8">
        <div className="space-y-4 animate-fade-up">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="gradient-text">3-Day Virtual MERN Stack</span>
            <br />
            <span className="text-foreground">Web Development Workshop</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            (Beginner to Advanced)
          </p>
        </div>

        <p className="text-xl md:text-2xl text-foreground/90 max-w-4xl mx-auto animate-fade-up" style={{ animationDelay: "0.2s" }}>
          Learn to build and deploy full-stack web apps using MongoDB, Express.js, React.js, and Node.js — from beginner to advanced in just 3 days!
        </p>

        <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base animate-fade-up" style={{ animationDelay: "0.4s" }}>
          <div className="glass-card px-6 py-3 rounded-full flex items-center gap-2">
            <Calendar className="w-5 h-5 text-primary" />
            <span>31st Oct – 2nd Nov 2025</span>
          </div>
          <div className="glass-card px-6 py-3 rounded-full flex items-center gap-2">
            <Clock className="w-5 h-5 text-accent" />
            <span>6:00 PM – 8:00 PM</span>
          </div>
          <div className="glass-card px-6 py-3 rounded-full flex items-center gap-2">
            <Video className="w-5 h-5 text-secondary" />
            <span>Online (Google Meet)</span>
          </div>
          <div className="glass-card px-6 py-3 rounded-full flex items-center gap-2">
            <IndianRupee className="w-5 h-5 text-primary" />
            <span>₹450 per participant (₹350 for early birds)</span>
          </div>
        </div>

        <div className="pt-6 animate-fade-up" style={{ animationDelay: "0.6s" }}>
          <Button 
            variant="hero" 
            size="lg" 
            className="text-lg px-12 py-7 h-auto"
            onClick={handleRegisterClick}
          >
            Register Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
