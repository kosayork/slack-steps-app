type MenuItemKey = 'guide' | 'cleared' | 'privacy' | 'about';

interface HamburgerMenuModalProps {
  onClose: () => void;
  onSelectItem: (item: MenuItemKey) => void;
}

const menuItems: { key: MenuItemKey; label: string }[] = [
  { key: 'guide',   label: '使い方ガイド' },
  { key: 'cleared', label: 'クリア者一覧画面' },
  { key: 'privacy', label: 'プライバシーポリシー' },
  { key: 'about',   label: 'このアプリについて' },
];

export function HamburgerMenuModal({ onClose, onSelectItem }: HamburgerMenuModalProps) {
  return (
    <div
      className="menu-modal-overlay fixed inset-0 z-[90] flex items-end justify-center"
      style={{ backgroundColor: 'rgba(0,0,0,0.45)' }}
      onClick={onClose}
    >
      <div
        className="menu-modal w-full max-w-md bg-card rounded-t-3xl animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="menu-modal-inner">
          <div className="menu-modal-content px-6 pt-8 pb-2">
            <ul className="menu-list">
              {menuItems.map((item) => (
                <li key={item.key} className="menu-item border-gray-100">
                  <button
                    className="menu-item-button w-full text-left font-jp font-bold text-lg text-text-primary py-3"
                    onClick={() => {
                      console.log('menu:', item.key);
                      onSelectItem(item.key);
                    }}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="menu-modal-actions flex justify-center px-6 pt-4 pb-10">
            <button
              className="menu-close-button px-16 py-3.5 rounded-full border-2 border-black font-jost font-bold text-text-primary tracking-widest text-sm bg-card"
              onClick={onClose}
            >
              CLOSE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
