import { motion } from "framer-motion";

const experience = [
  {
    period: "2026 — Present",
    role: "AI Engineer",
    company: "Attach Group",
    results: [
      "Reduced build times by 60% across the platform",
      "Led migration from REST to tRPC, improving DX for 50+ engineers",
      "Shipped Edge Middleware v2, adopted by 12K+ projects",
    ],
  },
  {
    period: "2025 — 2026",
    role: "Software Engineer Intern",
    company: "NTT Data",
    results: [
      "Built real-time fraud detection pipeline processing 10M events/day",
      "Reduced false-positive rate by 35% with ML-based scoring",
      "Mentored 4 junior engineers through promotion cycles",
    ],
  },
  {
    period: "2024 — 2025",
    role: "Python Developer Intern",
    company: "Enel",
    results: [
      "Contributed to Kubernetes autoscaler, reducing cloud costs by 25%",
      "Designed internal CLI tool adopted by 200+ teams",
      "Published 2 papers on distributed consensus optimization",
    ],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-16">
      <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-8">
        ~/experience
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border text-left text-xs text-muted-foreground">
              <th className="pb-3 pr-8 font-medium">Period</th>
              <th className="pb-3 pr-8 font-medium">Role</th>
              <th className="pb-3 pr-8 font-medium">Company</th>
              <th className="pb-3 font-medium">Key Results</th>
            </tr>
          </thead>
          <tbody>
            {experience.map((exp, i) => (
              <motion.tr
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="border-b border-border bg-surface-hover transition-colors"
              >
                <td className="py-4 pr-8 align-top text-muted-foreground tabular-nums whitespace-nowrap">
                  {exp.period}
                </td>
                <td className="py-4 pr-8 align-top text-foreground whitespace-nowrap">
                  {exp.role}
                </td>
                <td className="py-4 pr-8 align-top text-terminal whitespace-nowrap">
                  {exp.company}
                </td>
                <td className="py-4 align-top">
                  <ul className="space-y-1">
                    {exp.results.map((r, j) => (
                      <li key={j} className="text-muted-foreground">
                        <span className="text-terminal mr-2">→</span>
                        {r}
                      </li>
                    ))}
                  </ul>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
