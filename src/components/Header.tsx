export function Header() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur-md">
      <div className="mx-auto max-w-4xl flex items-center justify-between px-6 py-3">
        <nav className="flex items-center gap-1 text-xs text-muted-foreground">
          <button onClick={() => scrollTo("hero")} className="hover:text-foreground transition-colors">
            home
          </button>
          <span className="text-border mx-1">/</span>
          <button onClick={() => scrollTo("experience")} className="hover:text-foreground transition-colors">
            experience
          </button>
          <span className="text-border mx-1">/</span>
          <button onClick={() => scrollTo("projects")} className="hover:text-foreground transition-colors">
            projects
          </button>
          <span className="text-border mx-1">/</span>
          <button onClick={() => scrollTo("awards")} className="hover:text-foreground transition-colors">
            awards
          </button>
        </nav>

        <kbd className="hidden sm:inline-flex items-center gap-1 rounded border border-border px-2 py-1 text-[10px] text-muted-foreground">
          <span>⌘</span>K
        </kbd>
      </div>
    </header>
  );
}
