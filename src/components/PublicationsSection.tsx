import { motion } from "framer-motion";

const publications = [
  {
    publisher: "Springer",
    title: "Real-time 3D reconstruction algorithm for sewer pipes based on LiDAR and video data",
    description: "Development of a real-time 3D reconstruction algorithm using Python, combining LiDAR and video data for infrastructure inspection."
  }
];

export function PublicationsSection() {
  return (
    <section id="publications" className="py-16">
      <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-8">
        ~/publications
      </h2>

      <div className="space-y-3">
        {publications.map((pub, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group grid grid-cols-1 md:grid-cols-[60px_1fr] gap-2 md:gap-4 border-b border-border pb-2 transition-colors"
          >
            <div className="text-xs text-muted-foreground font-medium">
              {pub.publisher}
            </div>
            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-foreground">
                {pub.title}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {pub.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
