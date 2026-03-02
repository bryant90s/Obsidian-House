export function Hero() {
  return (
    <section className="h-screen flex items-center justify-center px-6 relative overflow-hidden">
      {/* Oversized faded "ARCHIVE" background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div 
          className="text-[clamp(8rem,20vw,18rem)] font-serif font-bold tracking-tighter opacity-[0.06] select-none"
          style={{ 
            lineHeight: 1,
            color: '#ffffff'
          }}
        >
          ARCHIVE
        </div>
      </div>
      
      {/* Radial glow behind text */}
      <div 
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 800px 600px at center, rgba(122, 149, 163, 0.08) 0%, transparent 70%)'
        }}
      />
      
      {/* Main content */}
      <div className="relative z-10 text-center max-w-6xl w-full">
        <h1 className="text-[clamp(4rem,10vw,9rem)] leading-[0.95] tracking-[-0.03em] mb-16 font-serif font-bold">
          The Internet Forgets.<br />
          <span className="block mt-4">We Don't.</span>
        </h1>
        
        <a 
          href="#archive" 
          className="inline-block px-10 py-4 border border-primary/60 text-primary hover:border-primary hover:text-foreground transition-all duration-500"
          style={{ backdropFilter: 'blur(10px)' }}
        >
          Enter Archive
        </a>
      </div>
      
      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
}
