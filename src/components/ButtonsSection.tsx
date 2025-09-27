'use client';

const ButtonsSection: React.FC = () => {
  const buttons = [
    {
      id: 'tickets',
      text: 'COMPRAR\nTICKETS',
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22 10V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v4a2 2 0 0 1 0 4v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 1 0-4z"/>
          <path d="M13 5v14" stroke="white" strokeWidth="2"/>
        </svg>
      ),
      color: 'bg-gradient-to-br from-pink-500 to-pink-600',
      textColor: 'text-white',
      rotation: 'rotate-2',
      scale: 'scale-105'
    },
    {
      id: 'location',
      text: 'UBICACIÓN',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
        </svg>
      ),
      color: 'bg-gradient-to-br from-cyan-400 to-cyan-500',
      textColor: 'text-black',
      rotation: '-rotate-1',
      scale: 'scale-100'
    },
    {
      id: 'schedule',
      text: 'HORARIOS',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="12" r="10"/>
          <polyline points="12,6 12,12 16,14" stroke="white" strokeWidth="2" fill="none"/>
        </svg>
      ),
      color: 'bg-gradient-to-br from-yellow-400 to-yellow-500',
      textColor: 'text-black',
      rotation: 'rotate-3',
      scale: 'scale-100'
    },
    {
      id: 'restaurants',
      text: 'RESTAURANTES',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
          <path d="M8.1 13.34l2.83-2.83L3.91 3.5c-1.56 1.56-1.56 4.09 0 5.66l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.2-1.1-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88 1.41-1.41L13.41 13l1.47-1.47z"/>
        </svg>
      ),
      color: 'bg-gradient-to-br from-green-400 to-green-500',
      textColor: 'text-black',
      rotation: '-rotate-2',
      scale: 'scale-100'
    },
    {
      id: 'cashless',
      text: 'CASHLESS',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
          <rect x="2" y="6" width="20" height="12" rx="2"/>
          <circle cx="12" cy="12" r="2"/>
          <path d="M6 12h.01M18 12h.01"/>
        </svg>
      ),
      color: 'bg-gradient-to-br from-orange-500 to-red-500',
      textColor: 'text-white',
      rotation: 'rotate-1',
      scale: 'scale-100'
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
              transform transition-all duration-300 hover:brightness-125
              shadow-[8px_8px_0px_0px_rgba(0,0,0,0.8)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,0.8)]
              border-4 border-black
              group overflow-hidden
              active:brightness-90 active:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.8)]
            `}
          >
            <div className="relative z-10 text-center">
              <div className="mb-3 flex justify-center">{buttons[0].icon}</div>
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
          {buttons.slice(1).map((button) => (
            <button
              key={button.id}
              onClick={() => {
                if (button.id === 'schedule') {
                  window.location.href = '/horarios';
                } else if (button.id === 'location') {
                  window.location.href = '/ubicacion';
                } else if (button.id === 'restaurants') {
                  window.location.href = '/restaurantes';
                } else if (button.id === 'cashless') {
                  window.location.href = '/cashless';
                }
              }}
              className={`
                ${button.color} ${button.rotation}
                relative p-4 md:p-6 rounded-none
                transform transition-all duration-300 hover:brightness-125
                shadow-[6px_6px_0px_0px_rgba(0,0,0,0.8)] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,0.8)]
                border-3 border-black
                group overflow-hidden
                active:brightness-90 active:shadow-[3px_3px_0px_0px_rgba(0,0,0,0.8)]
              `}
            >
              <div className="relative z-10 text-center">
                <div className="mb-2 flex justify-center">{button.icon}</div>
                <div className={`text-sm md:text-base font-black ${button.textColor} tracking-wide`}>
                  {button.text}
                </div>
              </div>
            </button>
          ))}
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