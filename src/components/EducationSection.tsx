import { motion } from "framer-motion";

const education = [
  {
    period: "2025",
    degree: "Aspire Leaders Program",
    institution: "Aspire Institute",
    location: "Online"
  },
  {
    period: "2019 — 2024",
    degree: "BSc in Electronics Engineering",
    institution: "PUCP",
    location: "Lima, Peru"
  },
  {
    period: "2018",
    degree: "English Course",
    institution: "Key Educational Travel LTD",
    location: "London, UK"
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
              <th className="pb-3 font-medium">Place</th>
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
                <td className="py-4 align-top text-muted-foreground whitespace-nowrap">
                  {edu.location}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
