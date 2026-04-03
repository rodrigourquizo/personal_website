import { motion } from "framer-motion";

const experience = [
{
  period: "2026 — Present",
  role: "AI Engineer",
  company: "Attach Group",
  results: [
    "Developed an AI agent using Google Vertex AI and LLMs such as Gemini 2.5, integrated into a GitLab CI/CD pipeline for code review and automatic unit test generation",
    "Automated workflows through the integration of an OpenClaw agent with Vertex AI models for tasks with BigQuery and Excel",
  ]
},
{
  period: "2025 — 2026",
  role: "Software Engineer Intern",
  company: "NTT Data",
  results: [
    "Developed an AI agent for Jira using Azure OpenAI, LangChain and an MCP for task management automation",
    "Developed an MCP for Figma, enabling an AI agent to generate frontend code from UX designs"
  ]
},
{
  period: "2024 — 2025",
  role: "Python Developer Intern",
  company: "Enel",
  results: [
    "Implemented a machine learning model for time series forecasting to predict equipment failures",
    "Developed a dashboard for real-time industrial data analysis with PI System and Python"
  ]
},
{
  period: "2024",
  role: "Teaching Assistant",
  company: "PUCP",
  results: [
    "Provided advising and support to students on software engineering, data science, and Python topics",
  ]
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
            {experience.map((exp, i) =>
            <motion.tr
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="border-b border-border bg-surface-hover transition-colors">
              
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
                    {exp.results.filter(r => r.trim().length > 0).map((r, j) =>
                  <li key={j} className="text-muted-foreground">
                        <span className="text-terminal mr-2">→</span>
                        {r}
                      </li>
                  )}
                  </ul>
                </td>
              </motion.tr>
            )}
          </tbody>
        </table>
      </div>
    </section>);

}