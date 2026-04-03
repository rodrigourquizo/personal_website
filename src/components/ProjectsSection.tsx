import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    name: "HAWKEYE",
    description: "AI surveillance system for person detection using drones for archaeological site preservation",
    stack: ["Python", "OpenCV", "YOLOv8", "Telegram API"],
    url: "https://github.com/rodrigourquizo/HAWKEYE"
  },
  {
    name: "KRONOS",
    description: "AI project for predictive analysis in industrial systems, accepted into the Santander X Explorer entrepreneurship program.",
    stack: ["Python", "Azure ML"],
    url: "#"
  },
  {
    name: "Credit risk classification with LLMs, ML and AWS",
    description: "Data labeling using LLMs from Amazon Bedrock and a classification model training and deployment with AWS SageMaker",
    stack: ["Python", "AWS SageMaker", "Amazon Bedrock"],
    url: "https://github.com/rodrigourquizo/Fraud_Detection_AI"
  }
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-16">
      <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-8">
        ~/projects
      </h2>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <motion.a
            key={project.name}
            href={project.url}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="group block rounded-lg border border-border p-4 transition-all duration-200 hover:border-primary hover:glow-terminal"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-foreground">
                {project.name}
              </span>
              <ExternalLink className="h-3 w-3 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
            <p className="text-xs text-muted-foreground mb-3 leading-relaxed">
              {project.description}
            </p>
            <div className="flex items-center justify-between">
              <div className="flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded border border-border px-1.5 py-0.5 text-[10px] text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
