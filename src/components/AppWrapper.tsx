'use client';

import { useState, useEffect } from 'react';
import LiquidLoader from './LiquidLoader';

interface AppWrapperProps {
  children: React.ReactNode;
}

const AppWrapper: React.FC<AppWrapperProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if this is the first visit to the site
    const hasVisited = sessionStorage.getItem('mha-visited');

    if (hasVisited) {
      // If user has already visited, don't show loader
      setIsLoading(false);
    } else {
      // First visit, show loader
      sessionStorage.setItem('mha-visited', 'true');
    }
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <LiquidLoader onComplete={handleLoadingComplete} />;
  }

  return <>{children}</>;
};

export default AppWrapper;