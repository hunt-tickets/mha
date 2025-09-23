'use client';

import { useEffect, useRef, useState, useCallback } from 'react';

const HeroBanner: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const retryCountRef = useRef(0);
  const playAttemptTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const [videoState, setVideoState] = useState({
    isPlaying: false,
    hasError: false,
    isLoading: true,
    userInteracted: true, // Start as if user already interacted for immediate autoplay
    retryCount: 0
  });

  const MAX_RETRIES = 5;
  const PLAY_RETRY_DELAY = 1000;

  const updateVideoState = useCallback((updates: Partial<typeof videoState>) => {
    setVideoState(prev => ({ ...prev, ...updates }));
  }, []);

  const forcePlay = useCallback(async () => {
    const video = videoRef.current;
    if (!video) return false;

    try {
      // Clear any existing timeout
      if (playAttemptTimeoutRef.current) {
        clearTimeout(playAttemptTimeoutRef.current);
      }

      // Ensure video is ready
      if (video.readyState < 2) {
        console.log('Video not ready, waiting...');
        return false;
      }

      if (video.paused) {
        await video.play();
        updateVideoState({ isPlaying: true, hasError: false, userInteracted: true });
        console.log('✅ Video playing successfully');
        return true;
      }
      return true;
    } catch (error) {
      console.log('❌ Play attempt failed:', error);

      if (retryCountRef.current < MAX_RETRIES) {
        retryCountRef.current++;
        updateVideoState({ retryCount: retryCountRef.current });

        console.log(`🔄 Retrying play attempt ${retryCountRef.current}/${MAX_RETRIES}`);

        playAttemptTimeoutRef.current = setTimeout(() => {
          forcePlay();
        }, PLAY_RETRY_DELAY * retryCountRef.current);
      } else {
        // If autoplay fails completely, show interaction prompt
        updateVideoState({ hasError: false, userInteracted: false });
        console.log('🎯 Autoplay blocked, showing interaction prompt');
      }
      return false;
    }
  }, [updateVideoState]);

  const handleVideoReload = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    console.log('🔄 Reloading video...');
    updateVideoState({ isLoading: true, hasError: false, userInteracted: true, retryCount: 0 });
    retryCountRef.current = 0;

    video.load();
  }, [updateVideoState]);

  const handleUserInteraction = useCallback(() => {
    if (!videoState.userInteracted) {
      updateVideoState({ userInteracted: true });
      forcePlay();
    }
  }, [videoState.userInteracted, forcePlay, updateVideoState]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedData = () => {
      console.log('📹 Video loaded, attempting immediate autoplay');
      updateVideoState({ isLoading: false });
      // Try to play immediately
      setTimeout(() => forcePlay(), 100);
    };

    const handleCanPlayThrough = () => {
      console.log('📹 Video can play through');
      forcePlay();
    };

    const handlePlaying = () => {
      console.log('▶️ Video started playing');
      updateVideoState({ isPlaying: true, hasError: false });
      retryCountRef.current = 0;
    };

    const handlePause = () => {
      console.log('⏸️ Video paused, attempting to resume');
      updateVideoState({ isPlaying: false });

      // Auto-resume after a short delay
      setTimeout(() => {
        if (video && video.paused) {
          forcePlay();
        }
      }, 500);
    };

    const handleWaiting = () => {
      console.log('⏳ Video waiting/buffering');
      updateVideoState({ isLoading: true });
    };

    const handleError = (e: Event) => {
      console.error('💥 Video error:', e);
      updateVideoState({ hasError: true, isLoading: false });

      // Try to reload after error
      setTimeout(handleVideoReload, 2000);
    };

    const handleStalled = () => {
      console.log('🚫 Video stalled');
      handleVideoReload();
    };

    const handleEnded = () => {
      console.log('🔄 Video ended, should loop');
      // Ensure it loops
      if (video) {
        video.currentTime = 0;
        forcePlay();
      }
    };

    // Add all event listeners
    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('canplaythrough', handleCanPlayThrough);
    video.addEventListener('playing', handlePlaying);
    video.addEventListener('pause', handlePause);
    video.addEventListener('waiting', handleWaiting);
    video.addEventListener('error', handleError);
    video.addEventListener('stalled', handleStalled);
    video.addEventListener('ended', handleEnded);

    // User interaction events for autoplay
    const events = ['touchstart', 'click', 'keydown'];
    events.forEach(event => {
      document.addEventListener(event, handleUserInteraction, { once: true, passive: true });
    });

    // Initial load attempt
    video.load();

    // Cleanup
    return () => {
      if (playAttemptTimeoutRef.current) {
        clearTimeout(playAttemptTimeoutRef.current);
      }

      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('canplaythrough', handleCanPlayThrough);
      video.removeEventListener('playing', handlePlaying);
      video.removeEventListener('pause', handlePause);
      video.removeEventListener('waiting', handleWaiting);
      video.removeEventListener('error', handleError);
      video.removeEventListener('stalled', handleStalled);
      video.removeEventListener('ended', handleEnded);

      events.forEach(event => {
        document.removeEventListener(event, handleUserInteraction);
      });
    };
  }, [forcePlay, handleVideoReload, handleUserInteraction, videoState.hasError]);

  // Watchdog - check video status every 5 seconds
  useEffect(() => {
    const watchdog = setInterval(() => {
      const video = videoRef.current;
      if (!video || videoState.hasError) return;

      if (video.readyState >= 3 && video.paused && !videoState.isLoading) {
        console.log('🐕 Watchdog: Video should be playing but is paused');
        forcePlay();
      }
    }, 5000);

    return () => clearInterval(watchdog);
  }, [forcePlay, videoState.hasError, videoState.isLoading]);

  return (
    <section className="w-full h-screen-safe relative overflow-hidden bg-black">
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
        disablePictureInPicture
        x5-video-player-type="h5"
        x5-video-player-fullscreen="true"
        poster=""
        defaultMuted
        data-testid="hero-video"
      >
        <source
          src="https://8qdflvbxjc.ufs.sh/f/Uou7Uf8rkNCSou3pojhe1kMVwIlP3d5rmDpRf0Aa72b8JzhX"
          type="video/mp4"
        />
      </video>

      {/* Loading/Error States */}
      {videoState.isLoading && !videoState.isPlaying && (
        <div className="absolute inset-0 bg-black flex items-center justify-center">
          <div className="text-white text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto mb-2"></div>
            <p className="text-sm">Cargando experiencia...</p>
          </div>
        </div>
      )}

      {videoState.hasError && (
        <div className="absolute inset-0 bg-black flex items-center justify-center">
          <div className="text-white text-center p-4">
            <p className="mb-4">Reintentando conexión...</p>
            <button
              onClick={handleVideoReload}
              className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200"
            >
              Reintentar
            </button>
          </div>
        </div>
      )}

      {/* User interaction prompt - only shows if autoplay fails completely */}
      {!videoState.userInteracted && !videoState.isPlaying && !videoState.isLoading && !videoState.hasError && videoState.retryCount >= MAX_RETRIES && (
        <div
          className="absolute inset-0 bg-black/50 flex items-center justify-center cursor-pointer z-20"
          onClick={handleUserInteraction}
        >
          <div className="text-white text-center">
            <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center mx-auto mb-4">
              <div className="w-0 h-0 border-l-8 border-l-white border-t-4 border-t-transparent border-b-4 border-b-transparent ml-1"></div>
            </div>
            <p>Toca para comenzar</p>
          </div>
        </div>
      )}

      {/* Debug overlay */}
      {process.env.NODE_ENV === 'development' && (
        <div className="absolute top-4 left-4 z-50 bg-black/75 text-white p-3 text-xs rounded font-mono">
          <div>Estado: {videoState.isPlaying ? '▶️ Playing' : '⏸️ Paused'}</div>
          <div>Carga: {videoState.isLoading ? '⏳ Loading' : '✅ Ready'}</div>
          <div>Error: {videoState.hasError ? '❌ Error' : '✅ OK'}</div>
          <div>Usuario: {videoState.userInteracted ? '✅ Interacted' : '❌ No'}</div>
          <div>Reintentos: {videoState.retryCount}/{MAX_RETRIES}</div>
          <div>ReadyState: {videoRef.current?.readyState || 0}</div>
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