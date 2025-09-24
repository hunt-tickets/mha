'use client';

const ButtonsSection: React.FC = () => {
  const buttons = [
    {
      id: 'tickets',
      text: 'COMPRAR\nTICKETS',
      emoji: '🎫',
      color: 'bg-gradient-to-br from-pink-500 to-pink-600',
      textColor: 'text-white',
      rotation: 'rotate-2',
      scale: 'scale-105'
    },
    {
      id: 'location',
      text: 'UBICACIÓN',
      emoji: '📍',
      color: 'bg-gradient-to-br from-cyan-400 to-cyan-500',
      textColor: 'text-black',
      rotation: '-rotate-1',
      scale: 'scale-100'
    },
    {
      id: 'schedule',
      text: 'HORARIOS',
      emoji: '🕐',
      color: 'bg-gradient-to-br from-yellow-400 to-yellow-500',
      textColor: 'text-black',
      rotation: 'rotate-3',
      scale: 'scale-100'
    },
    {
      id: 'restaurants',
      text: 'RESTAURANTES',
      emoji: '🍽️',
      color: 'bg-gradient-to-br from-green-400 to-green-500',
      textColor: 'text-black',
      rotation: '-rotate-2',
      scale: 'scale-100'
    },
    {
      id: 'live',
      text: 'VER EN\nVIVO',
      emoji: '📺',
      color: 'bg-gradient-to-br from-orange-500 to-red-500',
      textColor: 'text-white',
      rotation: 'rotate-1',
      scale: 'scale-105'
    }
  ];

  return (
    <section className="relative py-16 px-4 bg-background overflow-hidden">
      {/* Abstract background patterns */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-pink-500 rounded-full blur-xl"></div>
        <div className="absolute top-32 right-20 w-24 h-24 bg-cyan-400 rounded-none rotate-45 blur-lg"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-20 bg-yellow-400 rounded-full blur-xl"></div>
        <div className="absolute bottom-32 right-10 w-28 h-28 bg-green-400 rounded-none -rotate-12 blur-lg"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Section title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-2 tracking-tight">
            EXPLORA LA
          </h2>
          <h3 className="text-4xl md:text-6xl font-black bg-gradient-to-r from-pink-500 via-cyan-400 to-yellow-400 bg-clip-text text-transparent">
            EXPERIENCIA
          </h3>
        </div>

        {/* Buttons grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {/* Main tickets button - spans 2 columns */}
          <button
            onClick={() => window.open('https://www.hunt-tickets.com/events/fe9e909d-a6e7-4647-a7ab-f947042332b6', '_blank')}
            className={`
              ${buttons[0].color} ${buttons[0].rotation}
              col-span-2 md:col-span-1 md:row-span-2
              relative p-6 md:p-8 rounded-none
              transform transition-all duration-300 hover:brightness-125 hover:-translate-y-2
              shadow-[8px_8px_0px_0px_rgba(0,0,0,0.8)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,0.8)]
              border-4 border-black
              group overflow-hidden
              active:brightness-90 active:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.8)]
            `}
          >
            <div className="relative z-10 text-center">
              <div className="text-4xl md:text-6xl mb-3">{buttons[0].emoji}</div>
              <div className={`text-lg md:text-xl font-black ${buttons[0].textColor} tracking-wider leading-tight`}>
                {buttons[0].text.split('\n').map((line, i) => (
                  <div key={i}>{line}</div>
                ))}
              </div>
            </div>
            {/* Brutalist stripe pattern */}
            <div className="absolute top-0 right-0 w-full h-2 bg-repeating-linear bg-gradient-to-r from-black via-transparent to-black opacity-20"></div>
          </button>

          {/* Other buttons */}
          {buttons.slice(1, 4).map((button) => (
            <button
              key={button.id}
              className={`
                ${button.color} ${button.rotation}
                relative p-4 md:p-6 rounded-none
                transform transition-all duration-300 hover:brightness-125 hover:-translate-y-2
                shadow-[6px_6px_0px_0px_rgba(0,0,0,0.8)] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,0.8)]
                border-3 border-black
                group overflow-hidden
                active:brightness-90 active:shadow-[3px_3px_0px_0px_rgba(0,0,0,0.8)]
              `}
            >
              <div className="relative z-10 text-center">
                <div className="text-2xl md:text-3xl mb-2">{button.emoji}</div>
                <div className={`text-sm md:text-base font-black ${button.textColor} tracking-wide`}>
                  {button.text}
                </div>
              </div>
            </button>
          ))}

          {/* Live button - spans 2 columns */}
          <button
            className={`
              ${buttons[4].color} ${buttons[4].rotation}
              col-span-2
              relative p-6 md:p-8 rounded-none
              transform transition-all duration-300 hover:brightness-125 hover:-translate-y-2
              shadow-[8px_8px_0px_0px_rgba(0,0,0,0.8)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,0.8)]
              border-4 border-black
              group overflow-hidden
              active:brightness-90 active:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.8)]
            `}
          >
            <div className="relative z-10 flex items-center justify-center gap-4">
              <div className="text-3xl md:text-5xl">{buttons[4].emoji}</div>
              <div className={`text-lg md:text-2xl font-black ${buttons[4].textColor} tracking-wider`}>
                {buttons[4].text.split('\n').map((line, i) => (
                  <div key={i}>{line}</div>
                ))}
              </div>
              {/* Pulse indicator */}
              <div className="relative">
                <div className="w-4 h-4 bg-white rounded-none animate-pulse border-2 border-black"></div>
                <div className="absolute -inset-1 w-6 h-6 bg-white rounded-none animate-ping border-2 border-black opacity-75"></div>
              </div>
            </div>
          </button>
        </div>

        {/* Brutalist decorative elements */}
        <div className="absolute -top-4 -left-4 w-8 h-8 bg-pink-500 rounded-none rotate-12 opacity-70 animate-bounce border-2 border-black" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-1/4 -right-2 w-6 h-6 bg-cyan-400 rotate-45 opacity-70 animate-bounce border-2 border-black" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 -left-2 w-4 h-8 bg-yellow-400 rounded-none rotate-12 opacity-70 animate-bounce border-2 border-black" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-2 right-1/4 w-6 h-6 bg-green-400 rounded-none rotate-45 opacity-70 animate-bounce border-2 border-black" style={{ animationDelay: '0.5s' }}></div>

        {/* Additional brutalist shapes */}
        <div className="absolute top-1/2 left-0 w-3 h-12 bg-orange-500 rounded-none opacity-50 border-2 border-black"></div>
        <div className="absolute top-20 right-0 w-12 h-3 bg-purple-500 rounded-none opacity-50 border-2 border-black"></div>
      </div>
    </section>
  );
};

export default ButtonsSection;