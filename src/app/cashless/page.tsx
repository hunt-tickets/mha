'use client';

import { useRouter } from 'next/navigation';

const CashlessPage: React.FC = () => {
  const router = useRouter();

  const handleBack = () => {
    router.push('/');
  };

  const openCashlessWebsite = () => {
    window.open('https://allcashlesscol.com/', '_blank');
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
          <div className="text-4xl mb-4">💳</div>
          <h1 className="text-2xl md:text-3xl font-black text-white mb-4 tracking-tight">
            CASHLESS
          </h1>
          <p className="text-white/80 text-sm">Sistema de pago sin efectivo para el evento</p>
        </div>

        {/* Information sections */}
        <div className="space-y-6 mb-8">
          {/* Puntos de recarga */}
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 border-4 border-black p-6 rounded-none shadow-[8px_8px_0px_0px_rgba(0,0,0,0.8)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,0.8)] transition-all duration-300 transform hover:brightness-110">
            <div className="flex items-center mb-4">
              <div className="bg-white border-2 border-black rounded-none p-2 mr-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.8)]">
                <span className="text-3xl">🏪</span>
              </div>
              <h3 className="text-xl font-black text-white">Puntos de Recarga Físicos</h3>
            </div>
            <div className="space-y-2">
              <p className="text-white text-sm leading-relaxed bg-black/30 px-3 py-2 border-2 border-black/50 rounded-none">
                • 3 puntos físicos de recarga disponibles en el evento
              </p>
              <p className="text-white text-sm leading-relaxed bg-black/30 px-3 py-2 border-2 border-black/50 rounded-none">
                • Personal capacitado para asistirte
              </p>
            </div>
          </div>

          {/* Valores mínimos */}
          <div className="bg-gradient-to-br from-green-400 to-green-500 border-4 border-black p-6 rounded-none shadow-[8px_8px_0px_0px_rgba(0,0,0,0.8)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,0.8)] transition-all duration-300 transform hover:brightness-110">
            <div className="flex items-center mb-4">
              <div className="bg-white border-2 border-black rounded-none p-2 mr-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.8)]">
                <span className="text-3xl">💰</span>
              </div>
              <h3 className="text-xl font-black text-black">Valores Mínimos de Recarga</h3>
            </div>
            <div className="space-y-2">
              <p className="text-black text-sm leading-relaxed bg-black/30 px-3 py-2 border-2 border-black/50 rounded-none">
                • Recarga con tarjeta: $10.000 mínimo
              </p>
              <p className="text-black text-sm leading-relaxed bg-black/30 px-3 py-2 border-2 border-black/50 rounded-none">
                • Recarga en efectivo: $1.000 mínimo
              </p>
            </div>
          </div>

          {/* Maneras móviles */}
          <div className="bg-gradient-to-br from-purple-500 to-purple-600 border-4 border-black p-6 rounded-none shadow-[8px_8px_0px_0px_rgba(0,0,0,0.8)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,0.8)] transition-all duration-300 transform hover:brightness-110">
            <div className="flex items-center mb-4">
              <div className="bg-white border-2 border-black rounded-none p-2 mr-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.8)]">
                <span className="text-3xl">📱</span>
              </div>
              <h3 className="text-xl font-black text-white">Recargas Móviles</h3>
            </div>
            <div className="space-y-2">
              <p className="text-white text-sm leading-relaxed bg-black/30 px-3 py-2 border-2 border-black/50 rounded-none">
                • Recarga desde tu celular de manera fácil y rápida
              </p>
              <p className="text-white text-sm leading-relaxed bg-black/30 px-3 py-2 border-2 border-black/50 rounded-none">
                • Disponible 24/7 durante el evento
              </p>
              <p className="text-white text-sm leading-relaxed bg-black/30 px-3 py-2 border-2 border-black/50 rounded-none">
                • No necesitas hacer filas
              </p>
            </div>
          </div>

          {/* Página de recarga */}
          <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 border-4 border-black p-6 rounded-none shadow-[8px_8px_0px_0px_rgba(0,0,0,0.8)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,0.8)] transition-all duration-300 transform hover:brightness-110">
            <div className="flex items-center mb-4">
              <div className="bg-white border-2 border-black rounded-none p-2 mr-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.8)]">
                <span className="text-3xl">🌐</span>
              </div>
              <h3 className="text-xl font-black text-black">Página de Recarga Online</h3>
            </div>
            <div className="space-y-2">
              <p className="text-black text-sm leading-relaxed bg-black/30 px-3 py-2 border-2 border-black/50 rounded-none">
                • Plataforma web para recargas remotas
              </p>
              <p className="text-black text-sm leading-relaxed bg-black/30 px-3 py-2 border-2 border-black/50 rounded-none">
                • Link específico pendiente por confirmar
              </p>
            </div>
          </div>

          {/* Ventajas */}
          <div className="bg-gradient-to-br from-cyan-400 to-cyan-500 border-4 border-black p-6 rounded-none shadow-[8px_8px_0px_0px_rgba(0,0,0,0.8)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,0.8)] transition-all duration-300 transform hover:brightness-110">
            <div className="flex items-center mb-4">
              <div className="bg-white border-2 border-black rounded-none p-2 mr-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.8)]">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="text-xl font-black text-black">Ventajas del Sistema Cashless</h3>
            </div>
            <div className="space-y-2">
              <p className="text-black text-sm leading-relaxed bg-black/30 px-3 py-2 border-2 border-black/50 rounded-none">
                • Pagos más rápidos y seguros
              </p>
              <p className="text-black text-sm leading-relaxed bg-black/30 px-3 py-2 border-2 border-black/50 rounded-none">
                • No necesitas llevar efectivo
              </p>
              <p className="text-black text-sm leading-relaxed bg-black/30 px-3 py-2 border-2 border-black/50 rounded-none">
                • Control total de tus gastos
              </p>
              <p className="text-black text-sm leading-relaxed bg-black/30 px-3 py-2 border-2 border-black/50 rounded-none">
                • Filas más cortas en restaurantes
              </p>
            </div>
          </div>
        </div>

        {/* Botón sitio web */}
        <button
          onClick={openCashlessWebsite}
          className="w-full bg-gradient-to-br from-orange-500 to-red-500 text-white font-black py-6 px-6 text-lg rounded-none border-4 border-black transition-all duration-300 hover:brightness-125 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.8)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,0.8)] active:brightness-90 active:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.8)] mb-8"
        >
          🌐 VISITAR SITIO WEB CASHLESS
        </button>

        {/* Support section */}
        <div className="space-y-6">
          <div className="text-center mb-6">
            <div className="text-4xl mb-4">🆘</div>
            <h2 className="text-2xl font-black text-white mb-4 tracking-tight">
              ¿NECESITAS AYUDA?
            </h2>
          </div>

          {/* Support info */}
          <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 border-4 border-black p-6 rounded-none shadow-[8px_8px_0px_0px_rgba(0,0,0,0.8)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,0.8)] transition-all duration-300 transform hover:brightness-110">
            <div className="flex items-center mb-4">
              <div className="bg-white border-2 border-black rounded-none p-2 mr-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.8)]">
                <span className="text-3xl">👥</span>
              </div>
              <h3 className="text-xl font-black text-white">Soporte Cashless</h3>
            </div>
            <div className="space-y-2">
              <p className="text-white text-sm leading-relaxed bg-black/30 px-3 py-2 border-2 border-black/50 rounded-none">
                • Personal capacitado en cada punto de recarga
              </p>
              <p className="text-white text-sm leading-relaxed bg-black/30 px-3 py-2 border-2 border-black/50 rounded-none">
                • Asistencia técnica disponible durante el evento
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CashlessPage;