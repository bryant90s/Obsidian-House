interface ArchiveEntry {
  id: string;
  name: string;
  year: number;
  description: string;
  url: string;
  featured?: boolean;
}

const entries: ArchiveEntry[] = [
  {
    id: "1",
    name: "GeoCities Personal Homepage",
    year: 1999,
    description: "A vibrant personal homepage featuring animated GIFs, visitor counters, and under construction signs. A perfect snapshot of late 90s web optimism before the consolidation of the internet into corporate platforms.",
    url: "#",
    featured: true
  },
  {
    id: "2",
    name: "Flash Portfolio Site",
    year: 2006,
    description: "An interactive portfolio built entirely in Flash with smooth transitions and ambient music.",
    url: "#"
  },
  {
    id: "3",
    name: "Tumblr Theme Archive",
    year: 2012,
    description: "Custom Tumblr themes from the platform's golden age. Minimal layouts and aesthetic photography.",
    url: "#"
  },
  {
    id: "4",
    name: "Startup Landing Page",
    year: 2014,
    description: "A defunct startup's landing page promising to revolutionize social networking.",
    url: "#"
  },
  {
    id: "5",
    name: "Early Crypto Exchange",
    year: 2015,
    description: "One of the first cryptocurrency exchange websites before the boom.",
    url: "#"
  }
];

export function FeaturedEntries() {
  const featuredEntry = entries.find(e => e.featured);
  const otherEntries = entries.filter(e => !e.featured);
  
  return (
    <section 
      id="archive" 
      className="px-6 py-40 relative z-10"
      style={{ backgroundColor: '#0b0f17' }}
    >
      <div className="max-w-[1600px] mx-auto">
        <div className="mb-32">
          <h2 className="text-[clamp(3rem,6vw,5.5rem)] leading-[1.05] tracking-[-0.02em] mb-6 font-serif font-bold">
            Featured<br />Entries
          </h2>
          <p className="text-muted-foreground text-sm font-mono max-w-xl">
            Carefully preserved snapshots of digital spaces that no longer exist
          </p>
        </div>
        
        {/* Staggered masonry layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Large featured card on left */}
          {featuredEntry && (
            <div className="lg:col-span-7 border border-border/40 p-12 group hover:border-primary/30 transition-all duration-700 relative overflow-hidden">
              <div className="absolute top-6 right-6 font-mono text-[5rem] text-primary/20 leading-none">
                {featuredEntry.year}
              </div>
              
              <div className="relative z-10">
                <span className="inline-block font-mono text-xs text-primary mb-6 tracking-wider uppercase">
                  Featured
                </span>
                
                <h3 className="text-[2.5rem] leading-[1.1] tracking-[-0.01em] mb-8 font-serif font-bold">
                  {featuredEntry.name}
                </h3>
                
                <p className="text-foreground/70 leading-relaxed mb-8 text-[1.05rem]">
                  {featuredEntry.description}
                </p>
                
                <a 
                  href={featuredEntry.url}
                  className="inline-flex items-center text-primary group-hover:text-foreground transition-colors duration-300 font-mono text-sm"
                >
                  View Snapshot
                  <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
                </a>
              </div>
            </div>
          )}
          
          {/* Smaller stacked entries on right */}
          <div className="lg:col-span-5 space-y-8">
            {otherEntries.map((entry, index) => (
              <div 
                key={entry.id} 
                className="border-t border-border/40 pt-8 group hover:border-primary/30 transition-all duration-500"
                style={{ 
                  paddingLeft: index % 2 === 0 ? '0' : '3rem',
                  marginTop: index > 0 ? '4rem' : '0'
                }}
              >
                <div className="flex items-baseline justify-between mb-4">
                  <span className="font-mono text-xs text-primary tracking-wider">
                    {entry.year}
                  </span>
                </div>
                
                <h3 className="text-[1.75rem] leading-[1.15] tracking-[-0.01em] mb-4 font-serif font-semibold">
                  {entry.name}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {entry.description}
                </p>
                
                <a 
                  href={entry.url}
                  className="inline-flex items-center text-primary group-hover:text-foreground transition-colors duration-300 text-sm"
                >
                  View
                  <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
