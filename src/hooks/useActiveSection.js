import { useState, useEffect, useCallback } from 'react';

export const useActiveSection = (sectionIds = []) => {
  const [activeSection, setActiveSection] = useState(null);

  const handleScroll = useCallback(() => {
    for (const id of sectionIds) {
      const element = document.getElementById(id);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= 300) {
          setActiveSection(id);
          break;
        }
      }
    }
  }, [sectionIds]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return activeSection;
};
