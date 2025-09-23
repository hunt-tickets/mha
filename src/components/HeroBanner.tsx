const HeroBanner: React.FC = () => {
  return (
    <section className="w-full h-screen bg-primary-green relative">
      {/* Green placeholder background - easily replaceable with background image */}
      <div className="absolute inset-0 bg-primary-green" />

      {/* Content overlay - ready for future content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        {/* Future content can be added here */}
      </div>
    </section>
  );
};

export default HeroBanner;