import { Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-border/50 bg-background/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            <a href="mailto:info.urvahdynamics@gmail.com" className="hover:text-primary transition-colors">
              info.urvahdynamics@gmail.com
            </a>
          </div>
          
          <div className="text-center">
            <p>© 2025 MERN Stack Workshop. All rights reserved.</p>
            <p className="text-xs mt-1">Organized by Urvah Dynamics Private Limited</p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-xs">Built for aspiring developers</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
