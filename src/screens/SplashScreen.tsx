import { useEffect, useState } from 'react';
import { getImageUrl } from '../utils/images';

interface SplashScreenProps {
  onDone: () => void;
}

export function SplashScreen({ onDone }: SplashScreenProps) {
  const [fadingOut, setFadingOut] = useState(false);
  const logoUrl = getImageUrl('logo.svg');

  useEffect(() => {
    const timer = setTimeout(() => setFadingOut(true), 1400);
    return () => clearTimeout(timer);
  }, []);

  const handleTransitionEnd = () => {
    if (fadingOut) onDone();
  };

  return (
    <div
      className={`splash-screen fixed inset-0 z-50 flex items-center justify-center bg-background transition-opacity duration-500 ${fadingOut ? 'splash-fade-out opacity-0' : 'opacity-100'}`}
      onTransitionEnd={handleTransitionEnd}
    >
      {logoUrl ? (
        <img src={logoUrl} alt="SLACK STEPS" className="splash-logo w-48" />
      ) : (
        <span className="font-jost font-bold text-2xl text-text-primary tracking-widest">SLACK STEPS</span>
      )}
    </div>
  );
}
