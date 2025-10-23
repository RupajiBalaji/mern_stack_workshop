import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Linkedin, Mail, Phone } from "lucide-react";
import achyuthImg from "@/assets/achyuth.jpg";
import sandeepImg from "@/assets/sandeep.jpg";
import baladityaImg from "@/assets/baladitya.jpg";
import balajiImg from "@/assets/balaji.jpg";

const trainers = [
  {
    name: "T. Baladitya",
    linkedin: "https://www.linkedin.com/in/tatipamula-baladitya-b68520322/",
    email: "369astronomer@gmail.com",
    phone: "93925 92214",
    image: baladityaImg
  },
  {
    name: "R. Balaji",
    linkedin: "https://www.linkedin.com/in/rupaji-balaji-597aa5293/",
    email: "rupajibalaji@gmail.com",
    phone: "63095 53911",
    image: balajiImg
  },
  {
    name: "P. Achyuth",
    linkedin: "https://www.linkedin.com/in/achyuth-parisha-24469a296/",
    email: "achuthparisha005@gmail.com",
    phone: "93982 91845",
    image: achyuthImg
  },
  {
    name: "P S. Sandeep Babu",
    linkedin: "https://www.linkedin.com/in/pshalemsandeep/",
    email: "babussp05@gmail.com",
    phone: "95900 51599",
    image: sandeepImg
  }
];

const TrainersSection = () => {
  return (
    <section id="trainers" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="gradient-text">Meet Your Trainers</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Learn from experienced developers
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trainers.map((trainer, index) => (
            <Card 
              key={index}
              className="glass-card hover:border-secondary/50 transition-all duration-300 hover:scale-105 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="pt-6 space-y-6">
                <div className="flex justify-center">
                  <Avatar className="w-32 h-32">
                    <AvatarImage src={trainer.image} alt={trainer.name} />
                    <AvatarFallback className="text-4xl">
                      {trainer.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-center">{trainer.name}</h3>
                  
                  <div className="space-y-2">
                    {trainer.linkedin && (
                      <a 
                        href={trainer.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-secondary transition-colors"
                      >
                        <Linkedin className="w-4 h-4" />
                        <span className="truncate">LinkedIn Profile</span>
                      </a>
                    )}
                    
                    {trainer.email && (
                      <a 
                        href={`mailto:${trainer.email}`}
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-secondary transition-colors"
                      >
                        <Mail className="w-4 h-4" />
                        <span className="truncate">{trainer.email}</span>
                      </a>
                    )}
                    
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Phone className="w-4 h-4" />
                      <span>{trainer.phone}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainersSection;
