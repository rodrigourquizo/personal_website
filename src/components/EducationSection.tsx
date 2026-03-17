import { motion } from "framer-motion";

const education = [
  {
    period: "2022 — 2026",
    degree: "Bachelor's in Computer Science",
    institution: "Your University",
    details: ["Add your details here"]
  }
];

export function EducationSection() {
  return (
    <section id="education" className="py-16">
      <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-8">
        ~/education
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border text-left text-xs text-muted-foreground">
              <th className="pb-3 pr-8 font-medium">Period</th>
              <th className="pb-3 pr-8 font-medium">Degree</th>
              <th className="pb-3 pr-8 font-medium">Institution</th>
              <th className="pb-3 font-medium">Details</th>
            </tr>
          </thead>
          <tbody>
            {education.map((edu, i) => (
              <motion.tr
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="border-b border-border bg-surface-hover transition-colors"
              >
                <td className="py-4 pr-8 align-top text-muted-foreground tabular-nums whitespace-nowrap">
                  {edu.period}
                </td>
                <td className="py-4 pr-8 align-top text-foreground whitespace-nowrap">
                  {edu.degree}
                </td>
                <td className="py-4 pr-8 align-top text-terminal whitespace-nowrap">
                  {edu.institution}
                </td>
                <td className="py-4 align-top">
                  <ul className="space-y-1">
                    {edu.details.filter(d => d.trim().length > 0).map((d, j) => (
                      <li key={j} className="text-muted-foreground">
                        <span className="text-terminal mr-2">→</span>
                        {d}
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
