import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Database, Rocket } from "lucide-react";

const scheduleData = [
  {
    day: "Day 1",
    date: "31-10-2025",
    title: "Foundation & Setup",
    icon: Code,
    topics: [
      "Intro to MERN Stack",
      "HTML, CSS & JavaScript basics",
      "Development environment setup",
      "MongoDB basics & installation"
    ]
  },
  {
    day: "Day 2",
    date: "1-11-2025",
    title: "Frontend & Backend",
    icon: Database,
    topics: [
      "React fundamentals & components",
      "Express.js setup & routing",
      "Node.js introduction",
      "Connecting frontend with backend"
    ]
  },
  {
    day: "Day 3",
    date: "2-11-2025",
    title: "Build & Deploy",
    icon: Rocket,
    topics: [
      "Hands-on project building",
      "Full-stack integration",
      "Deployment basics",
      "Best practices & Q&A"
    ]
  }
];

const ScheduleSection = () => {
  return (
    <section id="schedule" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="gradient-text">Workshop Schedule</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A comprehensive 3-day journey from basics to deployment
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {scheduleData.map((day, index) => {
            const Icon = day.icon;
            return (
              <Card 
                key={index} 
                className="glass-card hover:border-primary/50 transition-all duration-300 hover:scale-105 animate-fade-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-primary/20 rounded-lg">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{day.day}</p>
                      <p className="text-xs text-muted-foreground/70">{day.date}</p>
                    </div>
                  </div>
                  <CardTitle className="text-2xl">{day.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {day.topics.map((topic, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-primary mt-1">▹</span>
                        <span className="text-sm text-foreground/80">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
