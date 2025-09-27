'use client';

import { useState, useEffect } from 'react';
import DesktopMessage from './DesktopMessage';
import AppWrapper from './AppWrapper';

interface MobileOnlyProps {
  children: React.ReactNode;
}

const MobileOnly: React.FC<MobileOnlyProps> = ({ children }) => {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const checkDevice = () => {
      const userAgent = navigator.userAgent;
      const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
      const isSmallScreen = window.innerWidth <= 768;

      setIsMobile(isMobileDevice || isSmallScreen);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);

    return () => {
      window.removeEventListener('resize', checkDevice);
    };
  }, []);

  // Show loading while detecting device
  if (isMobile === null) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-foreground">Cargando...</div>
      </div>
    );
  }

  // Show desktop message if not mobile
  if (!isMobile) {
    return <DesktopMessage />;
  }

  // Show mobile content
  return <AppWrapper>{children}</AppWrapper>;
};

export default MobileOnly;