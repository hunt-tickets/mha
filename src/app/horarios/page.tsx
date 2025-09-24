'use client';

import { useRouter } from 'next/navigation';

const HorariosPage: React.FC = () => {
  const router = useRouter();

  const images = [
    'https://8qdflvbxjc.ufs.sh/f/Uou7Uf8rkNCSQuC81SFgEQz3dAsX0yjfHk1PnY9aCWOhqlvD',
    'https://8qdflvbxjc.ufs.sh/f/Uou7Uf8rkNCSkxHe7FZnj4Pd9QZFbCroOAeq3svV5BTElW2H',
    'https://8qdflvbxjc.ufs.sh/f/Uou7Uf8rkNCSzGBUZLQFQO3H87VzW2exMadhsD0G4Rt1nocI',
    'https://8qdflvbxjc.ufs.sh/f/Uou7Uf8rkNCSjXPyEltQcabRiPf7NYCdWtl8gh1TSy5nZA6s'
  ];

  const handleBack = () => {
    router.push('/');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Close button */}
      <div className="fixed top-6 right-6 z-50">
        <button
          onClick={handleBack}
          className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-none border-2 border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-300 active:scale-95"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 6L6 18M6 6L18 18"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* Images container */}
      <div className="pb-6">
        {images.map((src, index) => (
          <div key={index} className="w-full">
            <img
              src={src}
              alt={`Horario ${index + 1}`}
              className="w-full h-auto block"
              loading={index === 0 ? 'eager' : 'lazy'}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorariosPage;