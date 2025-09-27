'use client';

import { useRouter } from 'next/navigation';

const HorariosPage: React.FC = () => {
  const router = useRouter();

  const schedules = [
    {
      src: 'https://8qdflvbxjc.ufs.sh/f/Uou7Uf8rkNCSQuC81SFgEQz3dAsX0yjfHk1PnY9aCWOhqlvD',
      day: 'Día 1',
      date: 'Lunes'
    },
    {
      src: 'https://8qdflvbxjc.ufs.sh/f/Uou7Uf8rkNCSkxHe7FZnj4Pd9QZFbCroOAeq3svV5BTElW2H',
      day: 'Día 2',
      date: 'Martes'
    },
    {
      src: 'https://8qdflvbxjc.ufs.sh/f/Uou7Uf8rkNCSzGBUZLQFQO3H87VzW2exMadhsD0G4Rt1nocI',
      day: 'Día 3',
      date: 'Miércoles'
    },
    {
      src: 'https://8qdflvbxjc.ufs.sh/f/Uou7Uf8rkNCSjXPyEltQcabRiPf7NYCdWtl8gh1TSy5nZA6s',
      day: 'Día 4',
      date: 'Jueves'
    }
  ];

  const handleBack = () => {
    router.push('/');
  };

  const handleViewDay = (schedule: { day: string; date: string; src: string }) => {
    // Navigate to detailed day page if available, otherwise open image
    if (schedule.day === 'Día 1') {
      router.push('/horarios/dia-1');
    } else if (schedule.day === 'Día 2') {
      router.push('/horarios/dia-2');
    } else if (schedule.day === 'Día 3') {
      router.push('/horarios/dia-3');
    } else if (schedule.day === 'Día 4') {
      router.push('/horarios/dia-4');
    } else {
      // Open image in new tab for other days
      window.open(schedule.src, '_blank');
    }
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
        {schedules.map((schedule, index) => (
          <div key={index} className="relative w-full mb-4">
            <img
              src={schedule.src}
              alt={`Horario ${schedule.day} - ${schedule.date}`}
              className="w-full h-auto block"
              loading={index === 0 ? 'eager' : 'lazy'}
            />

            {/* Day button overlay */}
            <div className="absolute bottom-4 right-4">
              <button
                onClick={() => handleViewDay(schedule)}
                className="bg-white text-black font-black px-6 py-3 text-lg rounded-none border-3 border-black hover:bg-gray-100 transition-all duration-500 ease-in-out animate-bounce shadow-[6px_6px_0px_0px_rgba(0,0,0,0.8)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,0.8)]"
              >
                📅 Ver {schedule.day}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorariosPage;