'use client';

import { useEffect, useRef } from 'react';

const HeroBanner: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const forcePlay = () => {
      if (video.paused) {
        video.play().catch((error) => {
          console.log('Auto-play was prevented:', error);
        });
      }
    };

    const handleVideoEvents = () => {
      forcePlay();
    };

    // Ensure video plays when loaded
    video.addEventListener('loadeddata', handleVideoEvents);
    video.addEventListener('pause', handleVideoEvents);
    video.addEventListener('ended', handleVideoEvents);

    // Force play on mount
    forcePlay();

    // Cleanup
    return () => {
      video.removeEventListener('loadeddata', handleVideoEvents);
      video.removeEventListener('pause', handleVideoEvents);
      video.removeEventListener('ended', handleVideoEvents);
    };
  }, []);

  return (
    <section className="w-full h-screen relative overflow-hidden">
      {/* Video background */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        controls={false}
        webkit-playsinline="true"
      >
        <source
          src="https://8qdflvbxjc.ufs.sh/f/Uou7Uf8rkNCSou3pojhe1kMVwIlP3d5rmDpRf0Aa72b8JzhX"
          type="video/mp4"
        />
      </video>

      {/* Content overlay - ready for future content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        {/* Future content can be added here */}
      </div>
    </section>
  );
};

export default HeroBanner;