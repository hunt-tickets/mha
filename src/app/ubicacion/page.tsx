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
        {/* Main venue info */}
        <div className="mb-8">
          <div className="text-4xl mb-4">📍</div>
          <h1 className="text-2xl md:text-3xl font-black text-white mb-4 tracking-tight">
            COLEGIO GIMNASIO MODERNO
          </h1>

          <div className="space-y-6">
            {/* Address */}
            <div>
              <h2 className="text-lg font-bold text-white mb-2">Dirección:</h2>
              <div className="text-white/80 space-y-1">
                <p>Carrera 11 # 74-55</p>
                <p>Chapinero, Bogotá</p>
                <p>Colombia</p>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h2 className="text-lg font-bold text-white mb-2">Contacto:</h2>
              <div className="text-white/80 space-y-1">
                <p>Teléfono: +57 (1) 312-0008</p>
                <p>Email: eventos@gimnasimoderno.edu.co</p>
                <p>WhatsApp: +57 300 123 4567</p>
              </div>
            </div>

            {/* Google Maps Button */}
            <button
              onClick={openGoogleMaps}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-none border-2 border-blue-800 transition-all duration-300 active:scale-95 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.8)]"
            >
              ABRIR EN GOOGLE MAPS
            </button>
          </div>
        </div>

        {/* Information sections */}
        <div className="space-y-6">
          {/* Access hours */}
          <div className="bg-white/5 border border-white/10 p-4 rounded-none">
            <div className="flex items-center mb-2">
              <span className="text-2xl mr-2">🕐</span>
              <h3 className="text-lg font-bold text-white">Horarios de Acceso</h3>
            </div>
            <p className="text-white/80">Puertas abren a las 8:30 AM • Evento inicia 9:00 AM</p>
          </div>

          {/* What to bring */}
          <div className="bg-white/5 border border-white/10 p-4 rounded-none">
            <div className="flex items-center mb-2">
              <span className="text-2xl mr-2">🎒</span>
              <h3 className="text-lg font-bold text-white">Qué Traer</h3>
            </div>
            <p className="text-white/80">Cédula o documento de identidad • Cámara permitida • Ropa cómoda</p>
          </div>

          {/* Restrictions */}
          <div className="bg-white/5 border border-white/10 p-4 rounded-none">
            <div className="flex items-center mb-2">
              <span className="text-2xl mr-2">🚫</span>
              <h3 className="text-lg font-bold text-white">Restricciones</h3>
            </div>
            <p className="text-white/80">No bebidas alcohólicas • No mascotas • No elementos cortopunzantes</p>
          </div>

          {/* Facilities */}
          <div className="bg-white/5 border border-white/10 p-4 rounded-none">
            <div className="flex items-center mb-2">
              <span className="text-2xl mr-2">♿</span>
              <h3 className="text-lg font-bold text-white">Facilidades</h3>
            </div>
            <p className="text-white/80">Acceso para sillas de ruedas • Baños familiares • Zona de primeros auxilios</p>
          </div>
        </div>

        {/* Support section */}
        <div className="mt-8">
          <div className="text-4xl mb-4">🆘</div>
          <h2 className="text-2xl font-black text-white mb-4 tracking-tight">
            SOPORTE Y AYUDA
          </h2>

          <div className="space-y-4">
            {/* Event day support */}
            <div className="bg-white/5 border border-white/10 p-4 rounded-none">
              <h3 className="text-lg font-bold text-white mb-2">Día del Evento</h3>
              <p className="text-white/80 mb-2">Personal de apoyo en entrada principal</p>
              <div className="space-y-1">
                <p className="text-white/80"><strong>WhatsApp:</strong> +57 300 123 4567</p>
                <p className="text-white/80"><strong>Atención inmediata</strong></p>
              </div>
            </div>

            {/* Hunt Tickets support */}
            <div className="bg-white/5 border border-white/10 p-4 rounded-none">
              <h3 className="text-lg font-bold text-white mb-2">Hunt Tickets</h3>
              <p className="text-white/80 mb-2">Soporte técnico para boletos</p>
              <p className="text-white/80">support@hunttickets.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UbicacionPage;