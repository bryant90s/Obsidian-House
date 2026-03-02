export function About() {
  return (
    <section 
      className="px-6 py-40 relative z-10"
      style={{ backgroundColor: '#0a0d15' }}
    >
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          {/* Left side - title */}
          <div className="lg:col-span-5">
            <h2 className="text-[clamp(3rem,6vw,5.5rem)] leading-[1.05] tracking-[-0.02em] font-serif font-bold sticky top-20">
              About
            </h2>
          </div>
          
          {/* Right side - content */}
          <div className="lg:col-span-7">
            <div className="space-y-8 text-[1.15rem] leading-[1.7]">
              <p className="text-foreground">
                The web is ephemeral. Sites disappear. Domains expire. Servers shut down. 
                What remains are broken links and fading memories.
              </p>
              
              <p className="text-foreground">
                DEADLINK exists to preserve these digital ghosts — not as museum pieces, 
                but as evidence of what the internet once was. Before the consolidation. 
                Before the algorithms. Before everything looked the same.
              </p>
              
              <p className="text-foreground">
                We archive the personal, the experimental, the abandoned. The web pages that 
                someone cared enough to create, but not enough to maintain. The spaces that 
                were built with passion and left behind with time.
              </p>
              
              <div className="pt-12 mt-12 border-t border-border/40">
                <p className="text-muted-foreground font-mono text-xs leading-relaxed tracking-wide">
                  Digital memory is cultural memory.<br />
                  We refuse to forget.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
