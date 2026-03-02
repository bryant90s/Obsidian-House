import { useRef } from 'react';

interface LookbookImage {
  id: string;
  url: string;
  caption: string;
}

const lookbookImages: LookbookImage[] = [
  {
    id: "1",
    url: "https://images.unsplash.com/photo-1759090889143-87a03c4b81e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwcnVud2F5JTIwYmxhY2slMjBjbG90aGluZyUyMGFyY2hpdGVjdHVyYWx8ZW58MXx8fHwxNzcyNDUyMjE0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    caption: "01 / Void I"
  },
  {
    id: "2",
    url: "https://images.unsplash.com/photo-1765044006785-4b25587747c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwcGhvdG9ncmFwaHklMjBzdHVkaW8lMjBtaW5pbWFsfGVufDF8fHx8MTc3MjQ1MjIxMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    caption: "02 / Studio"
  },
  {
    id: "3",
    url: "https://images.unsplash.com/photo-1767049603596-79204ada5273?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXV0ZSUyMGNvdXR1cmUlMjBkYXJrJTIwZWRpdG9yaWFsfGVufDF8fHx8MTc3MjQ1MjIxM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    caption: "03 / Editorial"
  },
  {
    id: "4",
    url: "https://images.unsplash.com/photo-1768578717065-299c3f9b2543?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWdoJTIwZmFzaGlvbiUyMHNpbGhvdWV0dGUlMjBkcmFtYXRpYyUyMGJsYWNrfGVufDF8fHx8MTc3MjQ1MjIxMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    caption: "04 / Silhouette"
  }
];

export function Lookbook() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section id="lookbook" className="py-40 bg-[#151515] overflow-hidden">
      <div className="px-8 mb-16">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="text-[clamp(4rem,8vw,7rem)] leading-[0.95] tracking-[-0.03em] font-serif font-bold">
            Lookbook
          </h2>
        </div>
      </div>
      
      {/* Horizontal scrolling gallery */}
      <div 
        ref={scrollRef}
        className="overflow-x-auto pb-8 px-8"
        style={{
          scrollbarWidth: 'thin',
          scrollbarColor: '#888 transparent'
        }}
      >
        <div className="flex gap-8 min-w-max">
          {lookbookImages.map((image) => (
            <div key={image.id} className="w-[600px] flex-shrink-0 group">
              <div className="relative overflow-hidden mb-6">
                <img 
                  src={image.url}
                  alt={image.caption}
                  className="w-full aspect-[3/4] object-cover brightness-90 contrast-125 grayscale group-hover:grayscale-0 transition-all duration-1000"
                />
              </div>
              
              <p className="text-[0.65rem] font-mono tracking-[0.3em] uppercase text-muted-foreground">
                {image.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
