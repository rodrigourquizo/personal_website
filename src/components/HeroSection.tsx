import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section id="hero" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="h-2.5 w-2.5 rounded-full bg-primary pulse-dot" />
          <span className="text-xs text-muted-foreground">Available for hire</span>
        </div>

        <h1 className="text-3xl font-bold tracking-tight text-foreground mb-2">
          Alex Chen
        </h1>
        <p className="text-lg text-terminal mb-6">
          Senior Software Engineer
        </p>
        <p className="text-sm text-muted-foreground max-w-lg leading-relaxed">
          Building scalable distributed systems and developer tools.
          Previously at <span className="text-foreground">Google</span>,{" "}
          <span className="text-foreground">Stripe</span>, and{" "}
          <span className="text-foreground">Vercel</span>.
        </p>

        <div className="mt-8 flex items-center gap-4 text-xs text-muted-foreground">
          <span>github.com/alexchen</span>
          <span className="text-border">|</span>
          <span>alex@chen.dev</span>
          <span className="text-border">|</span>
          <span>San Francisco, CA</span>
        </div>
      </motion.div>
    </section>
  );
}
