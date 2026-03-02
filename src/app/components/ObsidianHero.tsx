import { ChevronDown } from 'lucide-react';

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-8">
      <div className="max-w-[1440px] mx-auto flex justify-between items-start">
        <a href="/" className="text-[0.65rem] font-mono tracking-[0.3em] uppercase text-foreground hover:text-primary transition-colors duration-500">
          Obsidian House
        </a>
        
        <div className="flex gap-12 text-[0.65rem] font-mono tracking-[0.2em] uppercase">
          <a href="#collections" className="text-foreground hover:text-primary transition-colors duration-500">
            Collections
          </a>
          <a href="#lookbook" className="text-foreground hover:text-primary transition-colors duration-500">
            Lookbook
          </a>
          <a href="#manifesto" className="text-foreground hover:text-primary transition-colors duration-500">
            Manifesto
          </a>
        </div>
      </div>
    </nav>
  );
}

export function ObsidianHero() {
  return (
    <>
      <Navigation />
      
      <section className="h-screen relative overflow-hidden">
        {/* Full-screen fashion image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1768578717065-299c3f9b2543?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWdoJTIwZmFzaGlvbiUyMHNpbGhvdWV0dGUlMjBkcmFtYXRpYyUyMGJsYWNrfGVufDF8fHx8MTc3MjQ1MjIxMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Fashion silhouette"
            className="w-full h-full object-cover brightness-75 contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/20" />
        </div>
        
        {/* Oversized headline overlapping image */}
        <div className="absolute bottom-32 left-0 right-0 px-8">
          <div className="max-w-[1440px] mx-auto">
            <h1 className="text-[clamp(5rem,12vw,11rem)] leading-[0.9] tracking-[-0.04em] font-serif font-bold mix-blend-difference text-white">
              SCULPTURAL<br />
              MINIMALISM
            </h1>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
          <span className="text-[0.6rem] font-mono tracking-[0.3em] uppercase text-foreground/50">
            Scroll
          </span>
          <ChevronDown size={16} className="text-foreground/50 animate-bounce" />
        </div>
      </section>
    </>
  );
}
