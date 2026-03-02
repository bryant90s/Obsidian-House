interface Collection {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  released: string;
}

const collections: Collection[] = [
  {
    id: "1",
    name: "VOID I",
    subtitle: "Winter 2026",
    description: "A study in absence. Form emerges from shadow. Silhouettes carved from darkness.",
    imageUrl: "https://images.unsplash.com/photo-1739961065341-6246cdb8b3d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdmFudCUyMGdhcmRlJTIwZmFzaGlvbiUyMGVkaXRvcmlhbCUyMG1vbm9jaHJvbWV8ZW58MXx8fHwxNzcyNDUyMjEzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    released: "Limited"
  },
  {
    id: "2",
    name: "MONOCHROME / 02",
    subtitle: "Spring 2026",
    description: "Binary aesthetics. The intersection of structure and fluidity. Pure geometric form.",
    imageUrl: "https://images.unsplash.com/photo-1706969800608-1793b3116c3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwZmFzaGlvbiUyMGRhcmslMjBzY3VscHR1cmFsfGVufDF8fHx8MTc3MjQ1MjIxNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    released: "Active"
  }
];

export function CollectionsSection() {
  return (
    <section id="collections" className="py-40 px-8 bg-[#1c1c1c]">
      <div className="max-w-[1440px] mx-auto">
        <div className="mb-32">
          <h2 className="text-[clamp(4rem,8vw,7rem)] leading-[0.95] tracking-[-0.03em] font-serif font-bold">
            Collections
          </h2>
        </div>
        
        <div className="space-y-48">
          {collections.map((collection, index) => (
            <div 
              key={collection.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
            >
              {/* Large image block */}
              <div 
                className={`lg:col-span-7 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'} relative overflow-hidden group`}
              >
                <img 
                  src={collection.imageUrl}
                  alt={collection.name}
                  className="w-full aspect-[3/4] object-cover brightness-90 contrast-110 group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-1000" />
              </div>
              
              {/* Text offset to the side */}
              <div 
                className={`lg:col-span-5 ${index % 2 === 0 ? 'lg:order-2 lg:pl-12' : 'lg:order-1 lg:pr-12'}`}
                style={{ marginTop: index % 2 === 0 ? '0' : '-8rem' }}
              >
                <div className="border-t border-border/40 pt-8">
                  <span className="inline-block text-[0.65rem] font-mono tracking-[0.3em] uppercase text-primary mb-6">
                    {collection.released}
                  </span>
                  
                  <h3 className="text-[3.5rem] leading-[0.95] tracking-[-0.02em] mb-4 font-serif font-bold">
                    {collection.name}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm font-mono tracking-wider uppercase mb-8">
                    {collection.subtitle}
                  </p>
                  
                  <p className="text-foreground/70 text-base leading-relaxed mb-12 max-w-md">
                    {collection.description}
                  </p>
                  
                  <a 
                    href={`#collection-${collection.id}`}
                    className="inline-block text-[0.65rem] font-mono tracking-[0.3em] uppercase text-foreground hover:text-primary transition-colors duration-500 border-b border-foreground hover:border-primary pb-1"
                  >
                    View Collection
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
