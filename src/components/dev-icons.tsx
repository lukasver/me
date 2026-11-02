'use client';
import { useEffect } from 'react';

function DevIcons() {
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href =
      'https://cdn.jsdelivr.net/gh/devicons/devicon@2.18.0/devicon.min.css';
    document.head.appendChild(link);
  }, []);

  return null;
}

export default DevIcons;
