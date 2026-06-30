import { useEffect, useState } from 'react';
import { getImageUrl } from '../utils/images';

interface SplashScreenProps {
  onDone: () => void;
}

export function SplashScreen({ onDone }: SplashScreenProps) {
  const [introVisible, setIntroVisible] = useState(false);
  const [fadingOut, setFadingOut] = useState(false);
  const logoUrl = getImageUrl('logo.svg');

  useEffect(() => {
    const frame = requestAnimationFrame(() => setIntroVisible(true));
    const timer = setTimeout(() => setFadingOut(true), 1800);
    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(timer);
    };
  }, []);

  const handleTransitionEnd = () => {
    if (fadingOut) onDone();
  };

  return (
    <div
      className={`splash-screen fixed inset-0 z-50 flex items-center justify-center bg-background transition-opacity duration-500 ${introVisible && !fadingOut ? 'opacity-100' : 'opacity-0'} ${fadingOut ? 'splash-fade-out' : ''}`}
      onTransitionEnd={handleTransitionEnd}
    >
      {logoUrl ? (
        <img src={logoUrl} alt="SLACK STEPS" className="splash-logo w-40 -translate-y-20" />
      ) : (
        <span className="font-jost font-bold text-2xl text-text-primary tracking-widest -translate-y-20">SLACK STEPS</span>
      )}
    </div>
  );
}
