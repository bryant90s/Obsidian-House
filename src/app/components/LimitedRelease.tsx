interface Product {
  id: string;
  name: string;
  price: string;
  availability: string;
  imageUrl: string;
}

const products: Product[] = [
  {
    id: "1",
    name: "Draped Coat",
    price: "2,400",
    availability: "3 pieces",
    imageUrl: "https://images.unsplash.com/photo-1739961065341-6246cdb8b3d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdmFudCUyMGdhcmRlJTIwZmFzaGlvbiUyMGVkaXRvcmlhbCUyMG1vbm9jaHJvbWV8ZW58MXx8fHwxNzcyNDUyMjEzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: "2",
    name: "Structured Blazer",
    price: "1,800",
    availability: "5 pieces",
    imageUrl: "https://images.unsplash.com/photo-1706969800608-1793b3116c3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwZmFzaGlvbiUyMGRhcmslMjBzY3VscHR1cmFsfGVufDF8fHx8MTc3MjQ1MjIxNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: "3",
    name: "Wide Trousers",
    price: "980",
    availability: "8 pieces",
    imageUrl: "https://images.unsplash.com/photo-1759090889143-87a03c4b81e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwcnVud2F5JTIwYmxhY2slMjBjbG90aGluZyUyMGFyY2hpdGVjdHVyYWx8ZW58MXx8fHwxNzcyNDUyMjE0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: "4",
    name: "Asymmetric Shirt",
    price: "720",
    availability: "4 pieces",
    imageUrl: "https://images.unsplash.com/photo-1765044006785-4b25587747c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwcGhvdG9ncmFwaHklMjBzdHVkaW8lMjBtaW5pbWFsfGVufDF8fHx8MTc3MjQ1MjIxMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  }
];

export function LimitedRelease() {
  return (
    <section className="py-40 px-8 bg-[#1c1c1c]">
      <div className="max-w-[1440px] mx-auto">
        <div className="mb-32">
          <h2 className="text-[clamp(4rem,8vw,7rem)] leading-[0.95] tracking-[-0.03em] font-serif font-bold">
            Limited<br />Release
          </h2>
          <p className="text-[0.65rem] font-mono tracking-[0.3em] uppercase text-muted-foreground mt-8">
            Available Now
          </p>
        </div>
        
        {/* Simple product grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-20">
          {products.map((product, index) => (
            <a 
              key={product.id}
              href={`#product-${product.id}`}
              className="group"
              style={{ marginTop: index % 2 === 0 ? '0' : '4rem' }}
            >
              <div className="relative overflow-hidden mb-8">
                <img 
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full aspect-[3/4] object-cover brightness-90 contrast-110 grayscale group-hover:grayscale-0 transition-all duration-1000"
                />
              </div>
              
              <div className="border-t border-border/40 pt-6">
                <h3 className="text-lg tracking-[-0.01em] font-serif mb-2 group-hover:text-primary transition-colors duration-500">
                  {product.name}
                </h3>
                
                <div className="flex justify-between items-baseline mt-4">
                  <p className="text-[0.65rem] font-mono tracking-[0.2em] uppercase text-foreground">
                    ${product.price}
                  </p>
                  <p className="text-[0.6rem] font-mono tracking-[0.2em] uppercase text-muted-foreground">
                    {product.availability}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
