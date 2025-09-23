'use client';

import { useEffect, useRef, useState } from 'react';

const HeroBanner: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [userInteracted, setUserInteracted] = useState(false);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const attemptPlay = async () => {
      try {
        await video.play();
        console.log('Video playing successfully');
      } catch (error) {
        console.log('Auto-play prevented, waiting for user interaction:', error);
      }
    };

    const handleCanPlay = () => {
      console.log('Video can play');
      attemptPlay();
    };

    const handleError = (e: Event) => {
      console.error('Video error:', e);
      setVideoError(true);
    };

    const handleStall = () => {
      console.log('Video stalled, trying to reload');
      video.load();
    };

    // Handle user interaction to enable autoplay
    const handleUserInteraction = () => {
      if (!userInteracted) {
        setUserInteracted(true);
        attemptPlay();
      }
    };

    // Add event listeners
    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('error', handleError);
    video.addEventListener('stalled', handleStall);

    // User interaction events
    document.addEventListener('touchstart', handleUserInteraction, { once: true });
    document.addEventListener('click', handleUserInteraction, { once: true });

    // Initial play attempt
    attemptPlay();

    // Cleanup
    return () => {
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('error', handleError);
      video.removeEventListener('stalled', handleStall);
      document.removeEventListener('touchstart', handleUserInteraction);
      document.removeEventListener('click', handleUserInteraction);
    };
  }, [userInteracted]);

  // Cache busting URL
  const videoUrl = `https://8qdflvbxjc.ufs.sh/f/Uou7Uf8rkNCSou3pojhe1kMVwIlP3d5rmDpRf0Aa72b8JzhX?v=${Date.now()}`;

  return (
    <section className="w-full h-screen-safe relative overflow-hidden">
      {/* Video background */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        controls={false}
        webkit-playsinline="true"
        disablePictureInPicture
        x5-video-player-type="h5"
        x5-video-player-fullscreen="true"
      >
        <source
          src={videoError ?
            "https://8qdflvbxjc.ufs.sh/f/Uou7Uf8rkNCSou3pojhe1kMVwIlP3d5rmDpRf0Aa72b8JzhX" :
            videoUrl
          }
          type="video/mp4"
        />
      </video>

      {/* Debug overlay - remove in production */}
      {process.env.NODE_ENV === 'development' && (
        <div className="absolute top-4 left-4 z-50 bg-black/50 text-white p-2 text-xs">
          User Interacted: {userInteracted ? '✅' : '❌'}<br/>
          Video Error: {videoError ? '❌' : '✅'}
        </div>
      )}

      {/* Content overlay - ready for future content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        {/* Future content can be added here */}
      </div>
    </section>
  );
};

export default HeroBanner;