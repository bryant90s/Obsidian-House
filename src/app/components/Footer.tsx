export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer 
      className="px-6 py-24 relative z-10 border-t border-border/40"
      style={{ backgroundColor: '#070911' }}
    >
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">
          <div className="md:col-span-5">
            <h3 className="text-[2.5rem] font-serif font-bold tracking-tight mb-6 leading-tight">
              DEADLINK
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
              Preserving the forgotten corners of the internet. A digital archive of what once was.
            </p>
          </div>
          
          <div className="md:col-span-3">
            <h4 className="text-xs font-mono uppercase tracking-widest mb-8 text-muted-foreground">
              Navigate
            </h4>
            <ul className="space-y-4">
              <li>
                <a href="#archive" className="text-foreground hover:text-primary transition-colors duration-300 text-sm">
                  Browse Archive
                </a>
              </li>
              <li>
                <a href="#timeline" className="text-foreground hover:text-primary transition-colors duration-300 text-sm">
                  Timeline
                </a>
              </li>
              <li>
                <a href="#categories" className="text-foreground hover:text-primary transition-colors duration-300 text-sm">
                  Categories
                </a>
              </li>
              <li>
                <a href="#about" className="text-foreground hover:text-primary transition-colors duration-300 text-sm">
                  About
                </a>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-4">
            <h4 className="text-xs font-mono uppercase tracking-widest mb-8 text-muted-foreground">
              Connect
            </h4>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-foreground hover:text-primary transition-colors duration-300 text-sm">
                  Submit a Link
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground hover:text-primary transition-colors duration-300 text-sm">
                  Newsletter
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground hover:text-primary transition-colors duration-300 text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-10 border-t border-border/30 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <p className="font-mono text-xs text-muted-foreground tracking-wide">
            © {currentYear} DEADLINK — Remembering what was lost
          </p>
          <div className="flex gap-8 font-mono text-xs">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300 tracking-wide">
              Privacy
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300 tracking-wide">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
