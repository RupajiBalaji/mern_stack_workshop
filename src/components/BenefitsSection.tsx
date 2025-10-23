import { Card, CardContent } from "@/components/ui/card";
import { Video, FileText, FolderGit2, Award } from "lucide-react";

const benefits = [
  {
    icon: Video,
    title: "Live Sessions + Recordings",
    description: "Attend live interactive sessions and get access to all recordings for future reference"
  },
  {
    icon: FileText,
    title: "Notes & Materials",
    description: "Comprehensive learning materials, notes, and resources to support your journey"
  },
  {
    icon: FolderGit2,
    title: "Hands-on Project",
    description: "Build a real-world full-stack project from scratch and add it to your portfolio"
  },
  {
    icon: Award,
    title: "E-Certificate",
    description: "Receive an official certificate of completion to showcase your achievement"
  }
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-20 px-4 bg-gradient-to-b from-transparent to-background/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="gradient-text">What You'll Get</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Everything you need to succeed in your full-stack development journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card 
                key={index}
                className="glass-card hover:border-accent/50 transition-all duration-300 hover:scale-105 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="pt-6 text-center space-y-4">
                  <div className="inline-flex p-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
