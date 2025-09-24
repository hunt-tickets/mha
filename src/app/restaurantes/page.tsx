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
      emoji: '🥭',
      name: 'Mangos',
      items: [
        'Mango biche: $8.000',
        'Vaso pequeño: $7.000'
      ]
    },
    {
      id: 2,
      emoji: '🍧',
      name: 'Raspados',
      items: [
        'Grande: $12.000',
        'Mediano: $10.000',
        'Pequeño: $8.000'
      ]
    },
    {
      id: 3,
      emoji: '🍟',
      name: 'Papas',
      items: [
        'Berlinesa: $29.000',
        'Tocineta: $26.000',
        'Vegetariana: $22.000'
      ]
    },
    {
      id: 4,
      emoji: '🍩',
      name: 'Churros',
      items: [
        'Porción (7 unidades): $11.000'
      ]
    },
    {
      id: 5,
      emoji: '🌭',
      name: 'Salchichas',
      items: [
        'Papas chip: $5.000',
        'Combo salchicha + papitas: $25.000',
        'Pan baguette (mostaza dijon, curry, sauerkraut, mayonesa): $22.000'
      ]
    },
    {
      id: 6,
      emoji: '🍬',
      name: 'Dulces y Juguetes',
      items: [
        'Dulces: $3.000 – $55.000 (variedad de presentaciones)'
      ]
    },
    {
      id: 7,
      emoji: '🍭',
      name: 'Algoareps (algodón de azúcar)',
      items: [
        'Algodón unicolor (1 sabor): $8.000',
        'Algodón arcoiris (3 sabores): $10.000',
        'Figura toda comestible: $15.000'
      ]
    },
    {
      id: 8,
      emoji: '🍣',
      name: 'Sushi',
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
    },
    {
      id: 9,
      emoji: '🥞',
      name: 'Creperie',
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
      id: 10,
      emoji: '🌮',
      name: 'Nachos',
      items: [
        'Nachos 1 acompañamiento: $16.000',
        'Nachos 3 acompañamientos: $20.000',
        'Combo Nachos vegetarianos: $22.000',
        'Combo Nachos full carne: $24.000',
        'Dorilocos: $17.000'
      ]
    },
    {
      id: 11,
      emoji: '🍕',
      name: 'Pizzas',
      items: [
        'Pizza: $12.000'
      ]
    },
    {
      id: 12,
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
      id: 13,
      emoji: '🍔',
      name: 'Hamburguesas',
      items: [
        'Hamburguesa Full: $25.000',
        'Hamburguesa con papas: $28.000'
      ]
    }
  ];

  const beverages = [
    'Agua: $4.000',
    'Gaseosas (Coca cola, Kola Roman, Cuatro, Sprite, Colombiana, Manzana): $5.000',
    'Gatorade: $5.000'
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
              'bg-gradient-to-br from-pink-500/20 to-pink-600/20 border-pink-400/30',
              'bg-gradient-to-br from-blue-500/20 to-blue-600/20 border-blue-400/30',
              'bg-gradient-to-br from-green-500/20 to-green-600/20 border-green-400/30',
              'bg-gradient-to-br from-orange-500/20 to-orange-600/20 border-orange-400/30',
              'bg-gradient-to-br from-purple-500/20 to-purple-600/20 border-purple-400/30',
              'bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 border-yellow-400/30',
              'bg-gradient-to-br from-red-500/20 to-red-600/20 border-red-400/30',
              'bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 border-cyan-400/30',
              'bg-gradient-to-br from-indigo-500/20 to-indigo-600/20 border-indigo-400/30',
              'bg-gradient-to-br from-teal-500/20 to-teal-600/20 border-teal-400/30',
              'bg-gradient-to-br from-lime-500/20 to-lime-600/20 border-lime-400/30',
              'bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 border-emerald-400/30',
              'bg-gradient-to-br from-rose-500/20 to-rose-600/20 border-rose-400/30'
            ];
            const colorClass = colors[standIndex % colors.length];

            return (
              <div key={stand.id} className={`${colorClass} border-2 p-5 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300`}>
                <div className="flex items-center mb-4">
                  <div className="bg-white/90 rounded-full p-2 mr-4 shadow-md">
                    <span className="text-3xl">{stand.emoji}</span>
                  </div>
                  <h3 className="text-xl font-black text-white drop-shadow-lg">{stand.name}</h3>
                </div>
                <div className="space-y-2">
                  {stand.items.map((item, index) => (
                    <p key={index} className="text-white text-sm leading-relaxed bg-black/20 px-3 py-1 rounded-md">
                      • {item}
                    </p>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Beverages section */}
        <div className="bg-gradient-to-br from-blue-500/20 to-cyan-600/20 border-2 border-blue-400/30 p-5 rounded-lg shadow-lg">
          <div className="flex items-center mb-4">
            <div className="bg-white/90 rounded-full p-2 mr-4 shadow-md">
              <span className="text-3xl">🥤</span>
            </div>
            <h3 className="text-xl font-black text-white drop-shadow-lg">Bebidas</h3>
          </div>
          <div className="space-y-2">
            {beverages.map((beverage, index) => (
              <p key={index} className="text-white text-sm leading-relaxed bg-black/20 px-3 py-1 rounded-md">
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