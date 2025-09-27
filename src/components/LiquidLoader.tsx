'use client';

import { useEffect, useState } from 'react';

interface LiquidLoaderProps {
  onComplete?: () => void;
}

const LiquidLoader: React.FC<LiquidLoaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => onComplete?.(), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-background flex items-center justify-center z-50">
      <div className="relative">
        {/* Logo container with liquid fill effect */}
        <div className="relative w-48 h-48 overflow-hidden">
          {/* Background logo (empty state) */}
          <img
            src="https://8qdflvbxjc.ufs.sh/f/Uou7Uf8rkNCSg4djGcXTKYxbtG0lfPosRc5S2WVq4C1JdFME"
            alt="Maria Helena Amador Logo"
            className="w-full h-full object-contain filter brightness-0 invert opacity-20"
          />

          {/* Liquid fill container */}
          <div
            className="absolute bottom-0 left-0 right-0 overflow-hidden transition-all duration-100 ease-out"
            style={{ height: `${progress}%` }}
          >
            {/* Liquid wave effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-pink-500 via-cyan-400 to-yellow-400">
              {/* Wave animation */}
              <div
                className="absolute top-0 left-0 w-full h-4 opacity-80 animate-wave"
                style={{
                  background: 'linear-gradient(90deg, rgba(236,72,153,0.8) 0%, rgba(34,211,238,0.8) 50%, rgba(250,204,21,0.8) 100%)',
                  clipPath: 'polygon(0% 50%, 25% 60%, 50% 50%, 75% 40%, 100% 50%, 100% 100%, 0% 100%)',
                  animationDuration: '2s'
                }}
              />
              <div
                className="absolute top-0 left-0 w-full h-4 opacity-60"
                style={{
                  background: 'linear-gradient(90deg, rgba(250,204,21,0.6) 0%, rgba(236,72,153,0.6) 50%, rgba(34,211,238,0.6) 100%)',
                  clipPath: 'polygon(0% 40%, 25% 50%, 50% 40%, 75% 60%, 100% 40%, 100% 100%, 0% 100%)',
                  animation: 'wave 2.5s ease-in-out infinite reverse'
                }}
              />
            </div>

            {/* Logo filled state */}
            <img
              src="https://8qdflvbxjc.ufs.sh/f/Uou7Uf8rkNCSg4djGcXTKYxbtG0lfPosRc5S2WVq4C1JdFME"
              alt="Maria Helena Amador Logo"
              className="w-full h-48 object-contain filter brightness-0 invert mix-blend-multiply"
              style={{
                transform: `translateY(-${(100 - progress) * 1.92}px)`
              }}
            />
          </div>
        </div>

        {/* Loading text */}
        <div className="text-center mt-8">
          <div className="text-white font-black text-lg mb-2">
            CARGANDO EXPERIENCIA
          </div>
          <div className="text-white/60 text-sm">
            {Math.round(progress)}%
          </div>

          {/* Progress bar */}
          <div className="w-64 h-2 bg-white/20 rounded-none border-2 border-white/30 mt-4 mx-auto overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-pink-500 via-cyan-400 to-yellow-400 transition-all duration-100 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/40 rounded-none animate-float opacity-70"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + (i % 3) * 20}%`,
                animationDelay: `${i * 0.3}s`,
                animationDuration: '2s'
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LiquidLoader;