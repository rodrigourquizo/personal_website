import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Download } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export function HeroSection() {
  return (
    <section id="hero" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex items-start justify-between gap-8">
        
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-2.5 w-2.5 rounded-full bg-primary pulse-dot" />
            <span className="text-xs text-muted-foreground">
              Available
            </span>
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-foreground mb-2">
            Rodrigo Urquizo
          </h1>
          <p className="text-lg text-terminal mb-6">
            AI Engineer
          </p>
          <p className="text-sm text-muted-foreground max-w-lg leading-relaxed">
            Big fan of doing difficult things<br />
            Previously at <span className="text-foreground">Enel</span> and{" "}
            <span className="text-foreground">NTT DATA</span>.
          </p>

          <div className="mt-8 flex items-center gap-4 text-muted-foreground">
            <div className="flex items-center gap-3">
              <a href="https://github.com/rodrigourquizo" target="_blank" rel="noopener noreferrer" className="hover:text-terminal transition-colors">
                <Github size={18} />
              </a>
              <a href="https://www.linkedin.com/in/rodrigo-urquizo-ab7a3220b/" target="_blank" rel="noopener noreferrer" className="hover:text-terminal transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="https://www.instagram.com/dr_rodh/" target="_blank" rel="noopener noreferrer" className="hover:text-terminal transition-colors">
                <Instagram size={18} />
              </a>
            </div>
            <span className="text-border">|</span>
            <span className="text-xs">rodhub09@gmail.com</span>
            <span className="text-border">|</span>
            <span className="text-xs">Lima, Peru</span>
          </div>

          <div className="mt-6">
            <a 
              href={`${import.meta.env.BASE_URL}CV Rodrigo Urquizo.pdf`} 
              download="CV_Rodrigo_Urquizo.pdf"
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-terminal text-terminal hover:bg-terminal hover:text-terminal-foreground h-10 px-4 py-2 gap-2"
            >
              <Download size={16} />
              Download CV
            </a>
          </div>
        </div>

        <motion.div initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.15 }}
        className="shrink-0">
          
          <Avatar className="h-48 w-48 border-2 border-border glow-terminal -ml-4">
            <AvatarImage src={`${import.meta.env.BASE_URL}foto.jpg`} alt="Rodrigo Urquizo" className="object-cover" />
            <AvatarFallback className="text-2xl font-bold text-terminal bg-secondary">RU</AvatarFallback>
          </Avatar>
        </motion.div>
      </motion.div>
    </section>);

}