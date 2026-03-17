import { motion } from "framer-motion";
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
            Building scalable distributed systems and developer tools.
            Previously at <span className="text-foreground">Enel</span> and{" "}
            <span className="text-foreground">NTT DATA</span>.
          </p>

          <div className="mt-8 flex items-center gap-4 text-xs text-muted-foreground">
            <span>https://github.com/rodrigourquizo</span>
            <span className="text-border">|</span>
            <span>alex@chen.dev</span>
            <span className="text-border">|</span>
            <span>San Francisco, CA</span>
          </div>
        </div>

        <motion.div initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.15 }}
        className="shrink-0">
          
          <Avatar className="h-32 w-32 border-2 border-border glow-terminal">
            <AvatarImage src="/placeholder.svg" alt="Profile photo" />
            <AvatarFallback className="text-2xl font-bold text-terminal bg-secondary">RU</AvatarFallback>
          </Avatar>
        </motion.div>
      </motion.div>
    </section>);

}