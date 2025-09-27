'use client';

import { useRouter } from 'next/navigation';

const Dia1Page: React.FC = () => {
  const router = useRouter();

  const handleBack = () => {
    router.push('/horarios');
  };

  const cronograma = [
    {
      tiempo: '5:00 – 5:30',
      duracion: '30 min',
      actividad: 'Espacio presentadores',
      lugar: 'Coliseo/pedana'
    },
    {
      tiempo: '5:10 – 5:30',
      duracion: '15 min',
      actividad: 'Calentamiento – Colegio 1',
      lugar: 'Pedana de calentamiento'
    },
    {
      tiempo: '5:30 – 5:40',
      duracion: '8 min',
      actividad: 'Presentación – Colegio 1',
      lugar: 'Coliseo/pedana'
    },
    {
      tiempo: '5:40 – 5:55',
      duracion: '15 min',
      actividad: 'Sala de repetición – Colegio 1',
      lugar: '2º piso coliseo'
    },
    {
      tiempo: '5:40 – 6:10',
      duracion: '30 min',
      actividad: 'Espacio presentadores',
      lugar: 'Coliseo/pedana'
    },
    {
      tiempo: '5:50 – 6:10',
      duracion: '15 min',
      actividad: 'Calentamiento – Colegio 2',
      lugar: 'Pedana de calentamiento'
    },
    {
      tiempo: '6:10 – 6:20',
      duracion: '8 min',
      actividad: 'Presentación – Colegio 2',
      lugar: 'Coliseo/pedana'
    },
    {
      tiempo: '6:20 – 6:35',
      duracion: '15 min',
      actividad: 'Sala de repetición – Colegio 2',
      lugar: '2º piso coliseo'
    },
    {
      tiempo: '6:20 – 6:50',
      duracion: '30 min',
      actividad: 'Espacio presentadores',
      lugar: 'Coliseo/pedana'
    },
    {
      tiempo: '6:30 – 6:50',
      duracion: '15 min',
      actividad: 'Calentamiento – Colegio 3',
      lugar: 'Pedana de calentamiento'
    },
    {
      tiempo: '6:50 – 7:00',
      duracion: '8 min',
      actividad: 'Presentación – Colegio 3',
      lugar: 'Coliseo/pedana'
    },
    {
      tiempo: '7:00 – 7:15',
      duracion: '15 min',
      actividad: 'Sala de repetición – Colegio 3',
      lugar: '2º piso coliseo'
    },
    {
      tiempo: '7:00 – 7:30',
      duracion: '30 min',
      actividad: 'Espacio presentadores',
      lugar: 'Coliseo/pedana'
    },
    {
      tiempo: '7:10 – 7:30',
      duracion: '15 min',
      actividad: 'Calentamiento – Colegio 4',
      lugar: 'Pedana de calentamiento'
    },
    {
      tiempo: '7:30 – 7:40',
      duracion: '8 min',
      actividad: 'Presentación – Colegio 4',
      lugar: 'Coliseo/pedana'
    },
    {
      tiempo: '7:40 – 7:55',
      duracion: '15 min',
      actividad: 'Sala de repetición – Colegio 4',
      lugar: '2º piso coliseo'
    },
    {
      tiempo: '7:55 – 8:10',
      duracion: '30 min',
      actividad: 'Finaliza Evento',
      lugar: 'Campus Moderno'
    }
  ];

  const getActivityColor = (actividad: string) => {
    if (actividad.includes('Presentación')) return 'bg-gradient-to-br from-pink-500 to-pink-600';
    if (actividad.includes('Calentamiento')) return 'bg-gradient-to-br from-yellow-400 to-yellow-500';
    if (actividad.includes('Sala de repetición')) return 'bg-gradient-to-br from-purple-500 to-purple-600';
    if (actividad.includes('Espacio presentadores')) return 'bg-gradient-to-br from-blue-500 to-blue-600';
    if (actividad.includes('Finaliza')) return 'bg-gradient-to-br from-green-400 to-green-500';
    return 'bg-gradient-to-br from-gray-500 to-gray-600';
  };

  const getTextColor = (actividad: string) => {
    if (actividad.includes('Calentamiento')) return 'text-black';
    if (actividad.includes('Finaliza')) return 'text-black';
    return 'text-white';
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

      {/* Content */}
      <div className="px-6 py-8 pb-20">
        {/* Title */}
        <div className="mb-8 text-center">
          <div className="mb-4 flex justify-center">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="white">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
              <line x1="16" y1="2" x2="16" y2="6" stroke="white" strokeWidth="2"/>
              <line x1="8" y1="2" x2="8" y2="6" stroke="white" strokeWidth="2"/>
              <line x1="3" y1="10" x2="21" y2="10" stroke="white" strokeWidth="2"/>
            </svg>
          </div>
          <h1 className="text-2xl md:text-3xl font-black text-white mb-4 tracking-tight">
            DÍA 1 - LUNES
          </h1>
          <p className="text-white/80 text-sm">Cronograma de Presentaciones</p>
        </div>

        {/* Cronograma */}
        <div className="space-y-4">
          {cronograma.map((item, index) => (
            <div key={index} className={`${getActivityColor(item.actividad)} border-4 border-black p-4 rounded-none shadow-[6px_6px_0px_0px_rgba(0,0,0,0.8)] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,0.8)] transition-all duration-300 transform hover:brightness-110`}>
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center">
                  <div className="bg-white border-2 border-black rounded-none p-2 mr-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.8)]">
                    <span className="text-lg font-black text-black">{item.tiempo}</span>
                  </div>
                  <div className="bg-black/30 border-2 border-black/50 rounded-none px-2 py-1">
                    <span className={`text-xs font-bold ${getTextColor(item.actividad)}`}>
                      {item.duracion}
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className={`text-lg font-black ${getTextColor(item.actividad)}`}>
                  {item.actividad}
                </h3>
                <p className={`text-sm ${getTextColor(item.actividad)} bg-black/30 px-3 py-2 border-2 border-black/50 rounded-none flex items-center`}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="mr-2">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  {item.lugar}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dia1Page;