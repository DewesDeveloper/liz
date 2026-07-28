export const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1442120108414-42e7ea50d0b5?auto=format&fit=crop&q=80" 
          className="w-full h-full object-cover opacity-60 scale-105"
          alt="Background"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
      </div>
      
      <div className="relative z-10 text-center px-4">
        <h1 className="text-7xl md:text-9xl font-bold text-gold drop-shadow-2xl mb-4">
          The Goonies
        </h1>
        <p className="text-xl md:text-2xl tracking-[0.5em] uppercase font-light">
          Never Say Die
        </p>
      </div>
    </section>
  );
};