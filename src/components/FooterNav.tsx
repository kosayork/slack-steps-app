import { ScanLine } from 'lucide-react';
import homeIcon from '../assets/icons/icn-home.svg';
import checkIcon from '../assets/icons/icn-check.svg';
import profIcon from '../assets/icons/icn-prof.svg';

export type FooterScreen = 'home' | 'scan' | 'check' | 'profile';

interface FooterNavProps {
  currentScreen: FooterScreen;
  onNavigate: (screen: FooterScreen) => void;
}

const navItems: (
  | { key: FooterScreen; icon: string; alt: string; iconClass: string; type: 'image' }
  | { key: FooterScreen; alt: string; type: 'scan' }
)[] = [
  { key: 'home', icon: homeIcon, alt: 'HOME', iconClass: 'footer-nav-icon-home', type: 'image' },
  { key: 'scan', alt: 'SCAN', type: 'scan' },
  { key: 'check', icon: checkIcon, alt: 'CHECK', iconClass: 'footer-nav-icon-check', type: 'image' },
  { key: 'profile', icon: profIcon, alt: 'PROFILE', iconClass: 'footer-nav-icon-profile', type: 'image' },
];

export function FooterNav({ currentScreen, onNavigate }: FooterNavProps) {
  return (
    <nav className="footer-nav fixed bottom-4 left-1/2 -translate-x-1/2 w-[calc(100%-48px)] max-w-sm bg-black rounded-full flex items-center justify-between card-shadow z-50">
      {navItems.map((item) => {
        const { key, alt } = item;
        const isActive = currentScreen === key;
        return (
          <button
            key={key}
            onClick={() => onNavigate(key)}
            className={`footer-nav-item${isActive ? ' footer-nav-item-active' : ''} flex-1 flex items-center justify-center h-14 rounded-full transition-all duration-200 ease-out active:scale-95 ${
              isActive ? 'bg-white' : ''
            }`}
            aria-label={alt}
          >
            {item.type === 'scan' ? (
              <ScanLine
                size={28}
                strokeWidth={2.4}
                className={`footer-nav-icon footer-nav-icon-scan ${isActive ? 'text-text-primary' : 'text-white'}`}
                aria-hidden="true"
              />
            ) : (
              <img
                src={item.icon}
                alt={alt}
                className={`footer-nav-icon ${item.iconClass} w-7 h-7 ${isActive ? '' : '[filter:brightness(0)_invert(1)]'}`}
              />
            )}
          </button>
        );
      })}
    </nav>
  );
}
