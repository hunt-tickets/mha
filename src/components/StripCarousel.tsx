'use client';

const StripCarousel: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden py-6">
      {/* Infinite scrolling container */}
      <div className="flex animate-scroll">
        {/* Create multiple copies for seamless loop */}
        {Array.from({ length: 8 }, (_, i) => (
          <img
            key={i}
            src="https://8qdflvbxjc.ufs.sh/f/Uou7Uf8rkNCSj2jJMutQcabRiPf7NYCdWtl8gh1TSy5nZA6s"
            alt={`Strip ${i + 1}`}
            className="h-40 flex-shrink-0 object-contain"
            style={{ width: '100vw' }}
          />
        ))}
      </div>
    </div>
  );
};

export default StripCarousel;