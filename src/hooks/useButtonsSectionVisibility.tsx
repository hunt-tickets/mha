'use client';

import { useState, useEffect, useRef } from 'react';

export const useButtonsSectionVisibility = () => {
  const [isButtonsSectionCovering70Percent, setIsButtonsSectionCovering70Percent] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // Find the ButtonsSection element
    const findButtonsSection = () => {
      // Look for the section with ButtonsSection content
      const section = document.querySelector('section[class*="py-16"]') as HTMLElement;
      if (section) {
        sectionRef.current = section;
        return section;
      }
      return null;
    };

    const checkVisibility = () => {
      const section = sectionRef.current || findButtonsSection();
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Calculate if the section covers 70% of the viewport
      // When section top is at 30% from viewport top, it covers 70% of the screen
      const threshold = viewportHeight * 0.3; // 30% from top means 70% coverage

      setIsButtonsSectionCovering70Percent(rect.top <= threshold);
    };

    // Initial check
    checkVisibility();

    // Listen to scroll events
    window.addEventListener('scroll', checkVisibility, { passive: true });

    // Listen to resize events
    window.addEventListener('resize', checkVisibility, { passive: true });

    return () => {
      window.removeEventListener('scroll', checkVisibility);
      window.removeEventListener('resize', checkVisibility);
    };
  }, []);

  return isButtonsSectionCovering70Percent;
};