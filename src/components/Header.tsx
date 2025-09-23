'use client';

import Image from 'next/image';
import { useScrollEffect } from '@/hooks/useScrollEffect';

const Header: React.FC = () => {
  const isScrolled = useScrollEffect(50);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled
          ? 'backdrop-blur-md bg-background/20 border-b border-white/10'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-center items-center">
          <div className="relative w-24 h-12">
            <Image
              src="https://8qdflvbxjc.ufs.sh/f/Uou7Uf8rkNCSg4djGcXTKYxbtG0lfPosRc5S2WVq4C1JdFME"
              alt="Maria Helena Amador Logo"
              fill
              className="object-contain"
              priority
              sizes="(max-width: 768px) 96px, 96px"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;