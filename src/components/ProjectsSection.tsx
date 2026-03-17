import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    name: "Credit risk classification with LLMs, ML and AWS",
    description: "Data labeling using LLMs on Amazon Bedrock and classification model training with AWS SageMaker",
    stack: ["Rust", "Redis", "Cloudflare Workers"],
    url: "#",
    stars: "2.4k",
  },
  {
    name: "trpc-codegen",
    description: "Automatic TypeScript client generation from tRPC routers",
    stack: ["TypeScript", "tRPC", "Zod"],
    url: "#",
    stars: "1.8k",
  },
  {
    name: "k8s-autotune",
    description: "ML-powered resource optimization for Kubernetes clusters",
    stack: ["Go", "Python", "Kubernetes"],
    url: "#",
    stars: "950",
  },
  {
    name: "pgstream",
    description: "Real-time PostgreSQL change data capture with WebSocket support",
    stack: ["Rust", "PostgreSQL", "WebSockets"],
    url: "#",
    stars: "3.1k",
  },
  {
    name: "dotenv-vault",
    description: "Encrypted environment variable management for teams",
    stack: ["Go", "AES-256", "CLI"],
    url: "#",
    stars: "720",
  },
  {
    name: "bench-ci",
    description: "Continuous benchmarking integrated into your CI/CD pipeline",
    stack: ["Rust", "GitHub Actions", "Charts"],
    url: "#",
    stars: "1.1k",
  },
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
              <span className="text-[10px] text-muted-foreground">
                ★ {project.stars}
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
