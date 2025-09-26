'use client';

import { useRouter } from 'next/navigation';

const UbicacionPage: React.FC = () => {
  const router = useRouter();

  const handleBack = () => {
    router.push('/');
  };

  const openGoogleMaps = () => {
    const address = 'Carrera 11 # 74-55, Chapinero, Bogotá, Colombia';
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    window.open(url, '_blank');
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
          <div className="text-4xl mb-4">📍</div>
          <h1 className="text-2xl md:text-3xl font-black text-white mb-4 tracking-tight">
            UBICACIÓN
          </h1>
          <p className="text-white/80 text-sm">Colegio Gimnasio Moderno</p>
        </div>

        {/* Information sections */}
        <div className="space-y-6 mb-8">
          {/* Address */}
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 border-4 border-black p-6 rounded-none shadow-[8px_8px_0px_0px_rgba(0,0,0,0.8)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,0.8)] transition-all duration-300 transform hover:brightness-110">
            <div className="flex items-center mb-4">
              <div className="bg-white border-2 border-black rounded-none p-2 mr-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.8)]">
                <span className="text-3xl">🏫</span>
              </div>
              <h3 className="text-xl font-black text-white">Dirección</h3>
            </div>
            <div className="space-y-2">
              <p className="text-white text-sm leading-relaxed bg-black/30 px-3 py-2 border-2 border-black/50 rounded-none">
                • Carrera 11 # 74-55
              </p>
              <p className="text-white text-sm leading-relaxed bg-black/30 px-3 py-2 border-2 border-black/50 rounded-none">
                • Chapinero, Bogotá
              </p>
              <p className="text-white text-sm leading-relaxed bg-black/30 px-3 py-2 border-2 border-black/50 rounded-none">
                • Colombia
              </p>
            </div>
          </div>

          {/* Contact */}
          <div className="bg-gradient-to-br from-green-400 to-green-500 border-4 border-black p-6 rounded-none shadow-[8px_8px_0px_0px_rgba(0,0,0,0.8)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,0.8)] transition-all duration-300 transform hover:brightness-110">
            <div className="flex items-center mb-4">
              <div className="bg-white border-2 border-black rounded-none p-2 mr-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.8)]">
                <span className="text-3xl">📞</span>
              </div>
              <h3 className="text-xl font-black text-black">Contacto</h3>
            </div>
            <div className="space-y-2">
              <p className="text-black text-sm leading-relaxed bg-black/30 px-3 py-2 border-2 border-black/50 rounded-none">
                • Teléfono: +57 (1) 312-0008
              </p>
              <p className="text-black text-sm leading-relaxed bg-black/30 px-3 py-2 border-2 border-black/50 rounded-none">
                • Email: eventos@gimnasimoderno.edu.co
              </p>
              <p className="text-black text-sm leading-relaxed bg-black/30 px-3 py-2 border-2 border-black/50 rounded-none">
                • WhatsApp: +57 300 123 4567
              </p>
            </div>
          </div>

          {/* Access hours */}
          <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 border-4 border-black p-6 rounded-none shadow-[8px_8px_0px_0px_rgba(0,0,0,0.8)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,0.8)] transition-all duration-300 transform hover:brightness-110">
            <div className="flex items-center mb-4">
              <div className="bg-white border-2 border-black rounded-none p-2 mr-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.8)]">
                <span className="text-3xl">🕐</span>
              </div>
              <h3 className="text-xl font-black text-black">Horarios de Acceso</h3>
            </div>
            <div className="space-y-2">
              <p className="text-black text-sm leading-relaxed bg-black/30 px-3 py-2 border-2 border-black/50 rounded-none">
                • Puertas abren a las 8:30 AM
              </p>
              <p className="text-black text-sm leading-relaxed bg-black/30 px-3 py-2 border-2 border-black/50 rounded-none">
                • Evento inicia 9:00 AM
              </p>
            </div>
          </div>

          {/* What to bring */}
          <div className="bg-gradient-to-br from-purple-500 to-purple-600 border-4 border-black p-6 rounded-none shadow-[8px_8px_0px_0px_rgba(0,0,0,0.8)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,0.8)] transition-all duration-300 transform hover:brightness-110">
            <div className="flex items-center mb-4">
              <div className="bg-white border-2 border-black rounded-none p-2 mr-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.8)]">
                <span className="text-3xl">🎒</span>
              </div>
              <h3 className="text-xl font-black text-white">Qué Traer</h3>
            </div>
            <div className="space-y-2">
              <p className="text-white text-sm leading-relaxed bg-black/30 px-3 py-2 border-2 border-black/50 rounded-none">
                • Cédula o documento de identidad
              </p>
              <p className="text-white text-sm leading-relaxed bg-black/30 px-3 py-2 border-2 border-black/50 rounded-none">
                • Cámara permitida
              </p>
              <p className="text-white text-sm leading-relaxed bg-black/30 px-3 py-2 border-2 border-black/50 rounded-none">
                • Ropa cómoda
              </p>
            </div>
          </div>

          {/* Restrictions */}
          <div className="bg-gradient-to-br from-red-500 to-red-600 border-4 border-black p-6 rounded-none shadow-[8px_8px_0px_0px_rgba(0,0,0,0.8)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,0.8)] transition-all duration-300 transform hover:brightness-110">
            <div className="flex items-center mb-4">
              <div className="bg-white border-2 border-black rounded-none p-2 mr-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.8)]">
                <span className="text-3xl">🚫</span>
              </div>
              <h3 className="text-xl font-black text-white">Restricciones</h3>
            </div>
            <div className="space-y-2">
              <p className="text-white text-sm leading-relaxed bg-black/30 px-3 py-2 border-2 border-black/50 rounded-none">
                • No bebidas alcohólicas
              </p>
              <p className="text-white text-sm leading-relaxed bg-black/30 px-3 py-2 border-2 border-black/50 rounded-none">
                • No mascotas
              </p>
              <p className="text-white text-sm leading-relaxed bg-black/30 px-3 py-2 border-2 border-black/50 rounded-none">
                • No elementos cortopunzantes
              </p>
            </div>
          </div>

          {/* Facilities */}
          <div className="bg-gradient-to-br from-cyan-400 to-cyan-500 border-4 border-black p-6 rounded-none shadow-[8px_8px_0px_0px_rgba(0,0,0,0.8)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,0.8)] transition-all duration-300 transform hover:brightness-110">
            <div className="flex items-center mb-4">
              <div className="bg-white border-2 border-black rounded-none p-2 mr-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.8)]">
                <span className="text-3xl">♿</span>
              </div>
              <h3 className="text-xl font-black text-black">Facilidades</h3>
            </div>
            <div className="space-y-2">
              <p className="text-black text-sm leading-relaxed bg-black/30 px-3 py-2 border-2 border-black/50 rounded-none">
                • Acceso para sillas de ruedas
              </p>
              <p className="text-black text-sm leading-relaxed bg-black/30 px-3 py-2 border-2 border-black/50 rounded-none">
                • Baños familiares
              </p>
              <p className="text-black text-sm leading-relaxed bg-black/30 px-3 py-2 border-2 border-black/50 rounded-none">
                • Zona de primeros auxilios
              </p>
            </div>
          </div>
        </div>

        {/* Google Maps Button */}
        <button
          onClick={openGoogleMaps}
          className="w-full bg-gradient-to-br from-orange-500 to-red-500 text-white font-black py-6 px-6 text-lg rounded-none border-4 border-black transition-all duration-300 hover:brightness-125 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.8)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,0.8)] active:brightness-90 active:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.8)] mb-8"
        >
          📍 ABRIR EN GOOGLE MAPS
        </button>

        {/* Support section */}
        <div className="space-y-6">
          <div className="text-center mb-6">
            <div className="text-4xl mb-4">🆘</div>
            <h2 className="text-2xl font-black text-white mb-4 tracking-tight">
              SOPORTE Y AYUDA
            </h2>
          </div>

          {/* Event day support */}
          <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 border-4 border-black p-6 rounded-none shadow-[8px_8px_0px_0px_rgba(0,0,0,0.8)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,0.8)] transition-all duration-300 transform hover:brightness-110">
            <div className="flex items-center mb-4">
              <div className="bg-white border-2 border-black rounded-none p-2 mr-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.8)]">
                <span className="text-3xl">👥</span>
              </div>
              <h3 className="text-xl font-black text-white">Día del Evento</h3>
            </div>
            <div className="space-y-2">
              <p className="text-white text-sm leading-relaxed bg-black/30 px-3 py-2 border-2 border-black/50 rounded-none">
                • Personal de apoyo en entrada principal
              </p>
              <p className="text-white text-sm leading-relaxed bg-black/30 px-3 py-2 border-2 border-black/50 rounded-none">
                • WhatsApp: +57 300 123 4567
              </p>
              <p className="text-white text-sm leading-relaxed bg-black/30 px-3 py-2 border-2 border-black/50 rounded-none">
                • Atención inmediata
              </p>
            </div>
          </div>

          {/* Hunt Tickets support */}
          <div className="bg-gradient-to-br from-pink-500 to-pink-600 border-4 border-black p-6 rounded-none shadow-[8px_8px_0px_0px_rgba(0,0,0,0.8)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,0.8)] transition-all duration-300 transform hover:brightness-110">
            <div className="flex items-center mb-4">
              <div className="bg-white border-2 border-black rounded-none p-2 mr-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.8)]">
                <span className="text-3xl">🎫</span>
              </div>
              <h3 className="text-xl font-black text-white">Hunt Tickets</h3>
            </div>
            <div className="space-y-2">
              <p className="text-white text-sm leading-relaxed bg-black/30 px-3 py-2 border-2 border-black/50 rounded-none">
                • Soporte técnico para boletos
              </p>
              <p className="text-white text-sm leading-relaxed bg-black/30 px-3 py-2 border-2 border-black/50 rounded-none">
                • support@hunttickets.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UbicacionPage;