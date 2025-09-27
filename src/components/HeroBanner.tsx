'use client';

const HeroBanner: React.FC = () => {
  return (
    <section className="w-full h-screen-safe relative overflow-hidden bg-black">
      {/* GIF background */}
      <img
        src="https://8qdflvbxjc.ufs.sh/f/Uou7Uf8rkNCSLvTmrjsTWCzdtPw2yL196hBsnH4ruRVIXNAl"
        alt="Maria Helena Amador Background"
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 0,
          objectFit: 'cover',
          objectPosition: 'center center',
          pointerEvents: 'none'
        }}
        loading="eager"
      />

      {/* Content overlay - ready for future content */}
      <div className="relative z-50 h-full flex items-center justify-center">
        {/* Future content can be added here */}
      </div>
    </section>
  );
};

export default HeroBanner;