import { motion } from "framer-motion";

const awards = [
  { year: "2024", title: "OSS Contributor of the Year", org: "GitHub" },
  { year: "2023", title: "Best Developer Tool", org: "ProductHunt Golden Kitty" },
  { year: "2023", title: "Top 100 Engineers", org: "Forbes 30 Under 30" },
  { year: "2022", title: "Engineering Excellence Award", org: "Stripe Internal" },
  { year: "2021", title: "Best Paper — Distributed Systems Track", org: "USENIX ATC" },
  { year: "2019", title: "Peer Bonus (3x recipient)", org: "Google" },
  { year: "2018", title: "ACM ICPC Regional Finalist", org: "ACM" },
];

export function AwardsSection() {
  return (
    <section id="awards" className="py-16">
      <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-8">
        ~/awards
      </h2>

      <div className="space-y-0">
        {awards.map((award, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="group flex items-baseline gap-6 border-b border-border py-3 bg-surface-hover transition-colors"
          >
            <span className="text-xs text-muted-foreground tabular-nums w-12 shrink-0">
              {award.year}
            </span>
            <span className="text-sm text-foreground flex-1">
              {award.title}
            </span>
            <span className="text-xs text-muted-foreground text-right">
              {award.org}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
