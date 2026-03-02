const categories = [
  {
    id: "1",
    name: "Defunct Startups",
    count: 47,
    description: "Failed ventures and abandoned dreams"
  },
  {
    id: "2",
    name: "Lost Personal Blogs",
    count: 89,
    description: "Individual voices from the blogosphere"
  },
  {
    id: "3",
    name: "Early Social Networks",
    count: 23,
    description: "Pre-Facebook platforms and experiments"
  },
  {
    id: "4",
    name: "Experimental Web Art",
    count: 62,
    description: "Digital creativity and browser-based work"
  }
];

export function Categories() {
  return (
    <section 
      className="px-6 py-40 relative z-10"
      style={{ backgroundColor: '#0d1118' }}
    >
      <div className="max-w-[1600px] mx-auto">
        <div className="mb-32">
          <h2 className="text-[clamp(3rem,6vw,5.5rem)] leading-[1.05] tracking-[-0.02em] font-serif font-bold">
            Archive<br />Categories
          </h2>
        </div>
        
        {/* 2-column editorial layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-24 gap-y-20">
          {categories.map((category, index) => (
            <a
              key={category.id}
              href={`#category-${category.id}`}
              className="group relative"
            >
              {/* Thin dividing line on top */}
              <div className="absolute -top-10 left-0 right-0 h-px bg-border/20" />
              
              <div className="relative">
                {/* Oversized count number offset */}
                <div 
                  className="absolute -top-6 font-mono text-[10rem] leading-none text-primary/10 tracking-tighter group-hover:text-primary/20 transition-colors duration-700"
                  style={{ 
                    right: index % 2 === 0 ? '-4rem' : 'auto',
                    left: index % 2 === 0 ? 'auto' : '-4rem',
                    fontWeight: 700
                  }}
                >
                  {String(category.count).padStart(2, '0')}
                </div>
                
                <div className="relative z-10">
                  <h3 className="text-[3rem] leading-[1.1] tracking-[-0.015em] mb-4 font-serif font-bold group-hover:text-primary transition-colors duration-500">
                    {category.name}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-6 max-w-sm">
                    {category.description}
                  </p>
                  
                  <span className="inline-flex items-center text-primary font-mono text-xs tracking-wider uppercase">
                    Browse Collection
                    <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
