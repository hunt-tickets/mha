'use client';

const StripCarousel: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-background py-8">
      {/* Infinite scrolling strip */}
      <div className="flex animate-scroll">
        {/* Multiple copies of the strip for seamless looping */}
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-screen h-24 md:h-32"
            style={{ minWidth: '100vw' }}
          >
            <img
              src="https://8qdflvbxjc.ufs.sh/f/Uou7Uf8rkNCSj2jJMutQcabRiPf7NYCdWtl8gh1TSy5nZA6s"
              alt={`Strip ${index + 1}`}
              className="w-full h-full object-cover object-center"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Gradient overlays for smooth edges */}
      <div className="absolute top-0 left-0 w-16 h-full bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>
    </section>
  );
};

export default StripCarousel;