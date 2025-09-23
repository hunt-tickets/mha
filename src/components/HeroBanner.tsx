const HeroBanner: React.FC = () => {
  return (
    <section className="w-full h-screen relative overflow-hidden">
      {/* Video background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        <source
          src="https://8qdflvbxjc.ufs.sh/f/Uou7Uf8rkNCSou3pojhe1kMVwIlP3d5rmDpRf0Aa72b8JzhX"
          type="video/mp4"
        />
      </video>

      {/* Optional overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Content overlay - ready for future content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        {/* Future content can be added here */}
      </div>
    </section>
  );
};

export default HeroBanner;