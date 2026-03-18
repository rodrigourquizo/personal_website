import { motion } from "framer-motion";

const awards = [
  { 
    date: "2025", 
    title: "Business Builders with Agentic AI Hackathon", 
    org: "Credicorp"
  },
  { 
    date: "2025", 
    title: "Innovation with the Client", 
    org: "NTT DATA"
  },
  { 
    date: "2023", 
    title: "Innova & Business Fest Hackathon", 
    org: "CIDE PUCP"  
  },
];

export function AwardsSection() {
  return (
    <section id="awards" className="py-16">
      <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-8">
        ~/awards
      </h2>

      <div className="space-y-3">
        {awards.map((award, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group grid grid-cols-1 md:grid-cols-[60px_1fr] gap-2 md:gap-4 border-b border-border pb-2 transition-colors"
          >
            <div className="text-xs text-muted-foreground tabular-nums">
              {award.date}
            </div>
            <div className="space-y-2">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <span className="text-sm font-medium text-foreground">
                  {award.title}
                </span>
                <span className="text-xs text-terminal">
                  {award.org}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
