export function ObsidianFooter() {
  return (
    <footer className="py-20 px-8 bg-[#151515] border-t border-border/30">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">
          <div className="md:col-span-6">
            <h3 className="text-[2.5rem] font-serif tracking-tight mb-6 leading-none">
              OBSIDIAN<br />HOUSE
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed max-w-sm">
              Sculptural fashion for the discerning.<br />
              Limited collections. Timeless form.
            </p>
          </div>
          
          <div className="md:col-span-3">
            <h4 className="text-[0.6rem] font-mono uppercase tracking-[0.3em] mb-8 text-muted-foreground">
              Navigate
            </h4>
            <ul className="space-y-4">
              <li>
                <a href="#collections" className="text-xs text-foreground hover:text-primary transition-colors duration-500">
                  Collections
                </a>
              </li>
              <li>
                <a href="#lookbook" className="text-xs text-foreground hover:text-primary transition-colors duration-500">
                  Lookbook
                </a>
              </li>
              <li>
                <a href="#manifesto" className="text-xs text-foreground hover:text-primary transition-colors duration-500">
                  Manifesto
                </a>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-3">
            <h4 className="text-[0.6rem] font-mono uppercase tracking-[0.3em] mb-8 text-muted-foreground">
              Inquiries
            </h4>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-xs text-foreground hover:text-primary transition-colors duration-500">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-xs text-foreground hover:text-primary transition-colors duration-500">
                  Stockists
                </a>
              </li>
              <li>
                <a href="#" className="text-xs text-foreground hover:text-primary transition-colors duration-500">
                  Care Instructions
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-border/20 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <p className="text-[0.6rem] font-mono tracking-[0.3em] uppercase text-muted-foreground">
            © 2026 Obsidian House
          </p>
          <div className="flex gap-10 text-[0.6rem] font-mono tracking-[0.3em] uppercase">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-500">
              Privacy
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-500">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
