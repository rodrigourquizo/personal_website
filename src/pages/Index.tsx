import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { EducationSection } from "@/components/EducationSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { AwardsSection } from "@/components/AwardsSection";
import { CommandPalette } from "@/components/CommandPalette";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <CommandPalette />
      <Header />
      <main className="mx-auto max-w-4xl px-6">
        <HeroSection />
        <EducationSection />
        <ExperienceSection />
        <ProjectsSection />
        <AwardsSection />
        <footer className="border-t border-border py-8 text-center text-xs text-muted-foreground">
          <span className="text-terminal">$</span> echo "Built with conviction, not templates."
        </footer>
      </main>
    </div>
  );
};

export default Index;
