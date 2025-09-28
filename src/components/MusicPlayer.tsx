'use client';

import { useState, useRef, useEffect } from 'react';

const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleCanPlay = () => {
      setIsLoaded(true);
    };

    const handleEnded = () => {
      setIsPlaying(false);
    };

    audio.addEventListener('canplay', handleCanPlay);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('canplay', handleCanPlay);
      audio.removeEventListener('ended', handleEnded);
    };
  }, []);

  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio || !isLoaded) return;

    try {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {
        await audio.play();
        setIsPlaying(true);
      }
    } catch (error) {
      console.error('Error playing audio:', error);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="https://8qdflvbxjc.ufs.sh/f/Uou7Uf8rkNCSPNcMBIHENTYDX9OJ8FGxuzlR5mAjM0tgH4Qd"
        preload="auto"
        loop
      />

      <button
        onClick={togglePlay}
        disabled={!isLoaded}
        className={`
          fixed bottom-6 left-6 z-50
          w-16 h-16
          bg-gradient-to-br from-purple-500 to-pink-500
          border-4 border-black
          rounded-none
          flex items-center justify-center
          transition-all duration-300
          hover:brightness-125
          active:brightness-90
          shadow-[6px_6px_0px_0px_rgba(0,0,0,0.8)]
          hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,0.8)]
          active:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.8)]
          disabled:opacity-50 disabled:cursor-not-allowed
          ${isPlaying ? 'animate-pulse' : ''}
        `}
        title={isPlaying ? 'Pausar música' : 'Reproducir música'}
      >
        {!isLoaded ? (
          <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
        ) : isPlaying ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
            <rect x="6" y="4" width="4" height="16" rx="1" />
            <rect x="14" y="4" width="4" height="16" rx="1" />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
            <polygon points="8,5 19,12 8,19" />
          </svg>
        )}
      </button>
    </>
  );
};

export default MusicPlayer;