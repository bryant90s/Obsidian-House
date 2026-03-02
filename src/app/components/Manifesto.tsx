export function Manifesto() {
  return (
    <section id="manifesto" className="py-40 px-8 bg-[#1a1a1a]">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          {/* Editorial text with asymmetrical margins */}
          <div className="lg:col-span-10 lg:col-start-3">
            <div className="border-t border-border/40 pt-12">
              <h2 className="text-[0.65rem] font-mono tracking-[0.3em] uppercase text-primary mb-16">
                Manifesto
              </h2>
              
              <div className="space-y-16">
                <p className="text-[2.5rem] leading-[1.2] tracking-[-0.02em] font-serif">
                  Form follows function. But function is subjective. We create for those who understand 
                  that clothing is architecture for the body.
                </p>
                
                <div className="lg:pl-32">
                  <p className="text-[1.5rem] leading-[1.4] tracking-[-0.01em] text-foreground/70 font-serif">
                    Each piece is a statement of restraint. A rejection of excess. An embrace of shadow 
                    and negative space.
                  </p>
                </div>
                
                <div className="lg:pr-32">
                  <p className="text-[1.5rem] leading-[1.4] tracking-[-0.01em] text-foreground/70 font-serif">
                    We work in monochrome because color is a distraction. We sculpt fabric like stone. 
                    We blur the line between garment and art object.
                  </p>
                </div>
                
                <div className="pt-16 border-t border-border/20">
                  <p className="text-xs font-mono tracking-[0.2em] uppercase text-muted-foreground leading-relaxed">
                    Limited production. No seasonal cycles.<br />
                    Released when ready. Sold until gone.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
