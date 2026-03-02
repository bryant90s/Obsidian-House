import { useState } from 'react';
import { Search } from 'lucide-react';

export function SearchSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedYear, setSelectedYear] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');

  return (
    <section 
      className="px-6 py-40 relative z-10"
      style={{ backgroundColor: '#090c13' }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="mb-20">
          <h2 className="text-[clamp(3rem,6vw,5.5rem)] leading-[1.05] tracking-[-0.02em] mb-6 font-serif font-bold">
            Search<br />Archive
          </h2>
          <p className="text-muted-foreground text-sm font-mono">
            Find specific entries in our collection
          </p>
        </div>
        
        <div className="space-y-10">
          <div className="relative border-b border-border/40 pb-4">
            <Search className="absolute left-0 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
            <input
              type="text"
              placeholder="Search by name or description..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent pl-10 pr-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary outline-none transition-colors duration-300"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <label className="block text-xs font-mono text-muted-foreground mb-4 tracking-wider uppercase">
                Year Range
              </label>
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="w-full bg-transparent border border-border/40 px-6 py-4 text-foreground focus:border-primary outline-none transition-colors duration-300"
              >
                <option value="all">All Years</option>
                <option value="1990s">1990s</option>
                <option value="2000s">2000s</option>
                <option value="2010s">2010s</option>
              </select>
            </div>
            
            <div>
              <label className="block text-xs font-mono text-muted-foreground mb-4 tracking-wider uppercase">
                Category
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full bg-transparent border border-border/40 px-6 py-4 text-foreground focus:border-primary outline-none transition-colors duration-300"
              >
                <option value="all">All Categories</option>
                <option value="startups">Defunct Startups</option>
                <option value="blogs">Lost Personal Blogs</option>
                <option value="social">Early Social Networks</option>
                <option value="art">Experimental Web Art</option>
              </select>
            </div>
          </div>
          
          <button className="w-full md:w-auto px-12 py-4 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-500 font-mono text-xs tracking-wider uppercase">
            Search Archive
          </button>
        </div>
      </div>
    </section>
  );
}
