import homeIcon from '../assets/icons/icn-home.svg';
import checkIcon from '../assets/icons/icn-check.svg';
import profIcon from '../assets/icons/icn-prof.svg';

type Screen = 'home' | 'check' | 'profile';

interface FooterNavProps {
  currentScreen: Screen;
  onNavigate: (screen: Screen) => void;
}

const navItems: { key: Screen; icon: string; alt: string; iconClass: string }[] = [
  { key: 'home', icon: homeIcon, alt: 'HOME', iconClass: 'footer-nav-icon-home' },
  { key: 'check', icon: checkIcon, alt: 'CHECK', iconClass: 'footer-nav-icon-check' },
  { key: 'profile', icon: profIcon, alt: 'PROFILE', iconClass: 'footer-nav-icon-profile' },
];

export function FooterNav({ currentScreen, onNavigate }: FooterNavProps) {
  return (
    <nav className="footer-nav fixed bottom-4 left-1/2 -translate-x-1/2 w-[calc(100%-48px)] max-w-sm bg-black rounded-full flex items-center justify-between card-shadow z-50">
      {navItems.map(({ key, icon, alt, iconClass }) => {
        const isActive = currentScreen === key;
        return (
          <button
            key={key}
            onClick={() => onNavigate(key)}
            className={`footer-nav-item${isActive ? ' footer-nav-item-active' : ''} flex-1 flex items-center justify-center h-14 rounded-full transition-all ${
              isActive ? 'bg-white' : ''
            }`}
          >
            <img
              src={icon}
              alt={alt}
              className={`footer-nav-icon ${iconClass} w-7 h-7 ${isActive ? '' : '[filter:brightness(0)_invert(1)]'}`}
            />
          </button>
        );
      })}
    </nav>
  );
}
