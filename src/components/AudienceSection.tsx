import { Card, CardContent } from "@/components/ui/card";
import { Users, GraduationCap, Sparkles } from "lucide-react";

const AudienceSection = () => {
  return (
    <section id="audience" className="py-20 px-4 bg-gradient-to-b from-transparent to-background/50">
      <div className="max-w-4xl mx-auto">
        <Card className="glass-card border-primary/30">
          <CardContent className="pt-10 pb-10">
            <div className="text-center space-y-6">
              <div className="flex justify-center gap-4">
                <div className="p-3 bg-primary/20 rounded-full">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <div className="p-3 bg-accent/20 rounded-full">
                  <GraduationCap className="w-8 h-8 text-accent" />
                </div>
                <div className="p-3 bg-secondary/20 rounded-full">
                  <Sparkles className="w-8 h-8 text-secondary" />
                </div>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="gradient-text">Who Should Attend?</span>
              </h2>
              
              <p className="text-xl text-foreground/90 leading-relaxed max-w-2xl mx-auto">
                This workshop is <span className="text-primary font-semibold">open to all students</span> and <span className="text-accent font-semibold">beginners</span> interested in full-stack web development. 
              </p>
              
              <p className="text-muted-foreground">
                No prior experience required! We'll take you from basics to building real-world applications.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AudienceSection;
