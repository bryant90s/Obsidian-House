import { useRef } from 'react';

interface TimelineEra {
  year: number;
  title: string;
  description: string;
}

const eras: TimelineEra[] = [
  {
    year: 1998,
    title: "Personal Homepages",
    description: "GeoCities neighborhoods and handcrafted HTML"
  },
  {
    year: 2004,
    title: "Flash Microsites",
    description: "Interactive experiences and splash pages"
  },
  {
    year: 2010,
    title: "Tumblr Aesthetics",
    description: "Custom themes and reblog culture"
  },
  {
    year: 2015,
    title: "Early Crypto Landing Pages",
    description: "ICO hype and blockchain promises"
  }
];

export function Timeline() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section 
      className="py-40 relative z-10 overflow-hidden"
      style={{ backgroundColor: '#08090f' }}
    >
      <div className="px-6 mb-20">
        <div className="max-w-[1600px] mx-auto">
          <h2 className="text-[clamp(3rem,6vw,5.5rem)] leading-[1.05] tracking-[-0.02em] font-serif font-bold">
            Timeline
          </h2>
        </div>
      </div>
      
      {/* Horizontal scrolling timeline */}
      <div className="relative">
        {/* Connecting line */}
        <div className="absolute top-1/2 left-0 right-0 h-px bg-border/30 -translate-y-1/2" />
        
        <div 
          ref={scrollRef}
          className="overflow-x-auto pb-8 px-6"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
        >
          <div className="flex gap-32 min-w-max py-12">
            {eras.map((era, index) => (
              <div key={era.year} className="w-[400px] flex-shrink-0 relative">
                {/* Accent dot milestone */}
                <div className="absolute -top-12 left-0 w-3 h-3 bg-primary rounded-full" />
                
                {/* Oversized year that bleeds */}
                <div 
                  className="font-mono text-[8rem] leading-none text-primary/80 mb-8 tracking-tighter"
                  style={{ 
                    marginLeft: index % 2 === 0 ? '-2rem' : '0',
                    fontWeight: 700
                  }}
                >
                  {era.year}
                </div>
                
                <h3 className="text-[2rem] leading-[1.15] tracking-[-0.01em] mb-4 font-serif font-semibold">
                  {era.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {era.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
