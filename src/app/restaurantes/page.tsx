'use client';

import { useRouter } from 'next/navigation';

const RestaurantesPage: React.FC = () => {
  const router = useRouter();

  const handleBack = () => {
    router.push('/');
  };

  const foodStands = [
    {
      id: 1,
      emoji: '🍭',
      name: 'Algo Areps',
      items: [
        'Algodón unicolor (1 sabor): $8.000',
        'Algodón arcoiris (3 sabores): $10.000',
        'Figura toda comestible: $15.000'
      ]
    },
    {
      id: 2,
      emoji: '🍬',
      name: 'Benitoys',
      items: [
        'Dulces: $3.000 – $55.000 (variedad de presentaciones)'
      ]
    },
    {
      id: 3,
      emoji: '🍔',
      name: 'Hamburguesa SOS',
      items: [
        'Hamburguesa Full: $25.000',
        'Hamburguesa con papas: $28.000'
      ]
    },
    {
      id: 4,
      emoji: '🥭',
      name: 'Mister Mango',
      items: [
        'Mango biche: $8.000',
        'Vaso pequeño: $7.000'
      ]
    },
    {
      id: 5,
      emoji: '🌮',
      name: 'Nachos-Santos & sus Ignacio\'s',
      items: [
        'Nachos 1 acompañamiento: $16.000',
        'Nachos 3 acompañamientos: $20.000',
        'Combo Nachos vegetarianos: $22.000',
        'Combo Nachos full carne: $24.000',
        'Dorilocos: $17.000'
      ]
    },
    {
      id: 6,
      emoji: '🍟',
      name: 'Papas Belgas',
      items: [
        'Berlinesa: $29.000',
        'Tocineta: $26.000',
        'Vegetariana: $22.000'
      ]
    },
    {
      id: 7,
      emoji: '🥞',
      name: 'Petite Creperie',
      items: [
        'Especial: $25.000',
        'Niza: $20.000',
        'Vegetariano: $25.000',
        'Serrano: $25.000',
        'Tolouse: $25.000',
        'Ferrant: $16.000',
        'Roscoff: $16.000',
        'Festival: $21.000',
        'Macarrones: $5.000',
        'Vaso de helado sencillo: $5.000',
        'Vaso de helado doble: $9.000'
      ]
    },
    {
      id: 8,
      emoji: '🍕',
      name: 'Piazzola',
      items: [
        'Pizza: $12.000'
      ]
    },
    {
      id: 9,
      emoji: '🧋',
      name: 'POFFI',
      items: [
        'POFFI SALUDABLE: $9.900',
        'POFFI (10 unidades): $12.900',
        'Salsas - Nutella: $2.900',
        'Salsas - Hersheys: $2.900',
        'Salsas - Lechera: $2.500',
        'Salsas - Arequipe: $2.500',
        'Salsa de frutos rojos: $2.500',
        'Frutas - Fresa: $2.500',
        'Frutas - Banano: $2.500',
        'Frutas - Arándano: $2.500',
        'Toppings (Chips chocolate, M&M, Oreo, Milo, Gomitas, Masmelos, Helado): $2.500'
      ]
    },
    {
      id: 10,
      emoji: '🍧',
      name: 'Raspados Hawaianos',
      items: [
        'Grande: $12.000',
        'Mediano: $10.000',
        'Pequeño: $8.000'
      ]
    },
    {
      id: 11,
      emoji: '🌭',
      name: 'Salchichas Alemanas',
      items: [
        'Papas chip: $5.000',
        'Combo salchicha + papitas: $25.000',
        'Pan baguette (mostaza dijon, curry, sauerkraut, mayonesa): $22.000'
      ]
    },
    {
      id: 12,
      emoji: '🍩',
      name: 'SK Churrería',
      items: [
        'Porción (7 unidades): $11.000'
      ]
    },
    {
      id: 13,
      emoji: '🍣',
      name: 'Sushi Izakaya',
      items: [
        'Philadelphia: 10 bocados $30.000 / 6 bocados $20.000',
        'California: 10 bocados $30.000 / 6 bocados $20.000',
        'Viggi Roll: 10 bocados $30.000 / 6 bocados $20.000',
        'Q\' Tropical: 10 bocados $30.000 / 6 bocados $20.000',
        'Ojo de Tigre: 10 bocados $30.000 / 6 bocados $20.000',
        'Salmon Skin: 10 bocados $30.000 / 6 bocados $20.000',
        'Salmon Tempura: 10 bocados $30.000 / 6 bocados $20.000',
        'Kappamaki: 10 bocados $30.000 / 6 bocados $20.000',
        'Sake Tempura: 10 bocados $34.000 / 6 bocados $22.000',
        'Tempura KO: 10 bocados $34.000 / 6 bocados $22.000',
        'Langostino Dinamita: 10 bocados $34.000 / 6 bocados $22.000',
        'Arroz de pollo, res y cerdo: $36.000',
        'Arroz de camarón: $40.000'
      ]
    }
  ];

  const beverages = [
    'Agua: $4.000',
    'Gaseosas (Coca cola, Kola Roman, Cuatro, Sprite, Colombiana, Manzana): $5.000',
    'Electrolit: $10.000'
  ];

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
          <div className="text-4xl mb-4">🍽️</div>
          <h1 className="text-2xl md:text-3xl font-black text-white mb-4 tracking-tight">
            RESTAURANTES
          </h1>
          <p className="text-white/80 text-sm">Deliciosa variedad de comida y bebidas</p>
        </div>

        {/* Food stands */}
        <div className="space-y-6 mb-8">
          {foodStands.map((stand, standIndex) => {
            const colors = [
              'bg-gradient-to-br from-pink-500 to-pink-600',
              'bg-gradient-to-br from-cyan-400 to-cyan-500',
              'bg-gradient-to-br from-yellow-400 to-yellow-500',
              'bg-gradient-to-br from-green-400 to-green-500',
              'bg-gradient-to-br from-orange-500 to-red-500',
              'bg-gradient-to-br from-purple-500 to-purple-600',
              'bg-gradient-to-br from-blue-500 to-blue-600',
              'bg-gradient-to-br from-red-500 to-red-600',
              'bg-gradient-to-br from-indigo-500 to-indigo-600',
              'bg-gradient-to-br from-teal-400 to-teal-500',
              'bg-gradient-to-br from-lime-400 to-lime-500',
              'bg-gradient-to-br from-emerald-500 to-emerald-600',
              'bg-gradient-to-br from-rose-500 to-rose-600'
            ];
            const colorClass = colors[standIndex % colors.length];

            return (
              <div key={stand.id} className={`${colorClass} border-4 border-black p-6 rounded-none shadow-[8px_8px_0px_0px_rgba(0,0,0,0.8)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,0.8)] transition-all duration-300 transform hover:brightness-110`}>
                <div className="flex items-center mb-4">
                  <div className="bg-white border-2 border-black rounded-none p-2 mr-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.8)]">
                    <span className="text-3xl">{stand.emoji}</span>
                  </div>
                  <h3 className="text-xl font-black text-white">{stand.name}</h3>
                </div>
                <div className="space-y-2">
                  {stand.items.map((item, index) => (
                    <p key={index} className="text-white text-sm leading-relaxed bg-black/30 px-3 py-2 border-2 border-black/50 rounded-none">
                      • {item}
                    </p>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Beverages section */}
        <div className="bg-gradient-to-br from-blue-500 to-cyan-500 border-4 border-black p-6 rounded-none shadow-[8px_8px_0px_0px_rgba(0,0,0,0.8)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,0.8)] transition-all duration-300 transform hover:brightness-110">
          <div className="flex items-center mb-4">
            <div className="bg-white border-2 border-black rounded-none p-2 mr-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.8)]">
              <span className="text-3xl">🥤</span>
            </div>
            <h3 className="text-xl font-black text-white">Gaseosas Comité CC-CD</h3>
          </div>
          <div className="space-y-2">
            {beverages.map((beverage, index) => (
              <p key={index} className="text-white text-sm leading-relaxed bg-black/30 px-3 py-2 border-2 border-black/50 rounded-none">
                • {beverage}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantesPage;