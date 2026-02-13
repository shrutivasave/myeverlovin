// components.js - Reusable components

const { useState } = React;

const StaticContact = () => (
  <div className="fixed top-4 right-4 text-red-600 text-xs z-50 font-mono">
    email: aaa-@ighandle-telephonenumbere
  </div>
);

const Logo = ({ onClick, className = "" }) => (
  <button 
    onClick={onClick}
    className={`font-mono font-bold text-2xl tracking-wider hover:text-red-600 transition-colors ${className}`}
  >
    URMYEVERLOVIN
  </button>
);

const Navigation = ({ onNavigate, mobile = false }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const tabs = ['Artists', 'Shows', 'Taste', 'About'];
  
  if (mobile) {
    return (
      <div className="relative">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="font-mono text-black hover:text-red-600 transition-colors mb-4"
        >
          [MENU]
        </button>
        
        {isMenuOpen && (
          <div className="flex flex-col gap-2 mb-4">
            {tabs.map(tab => (
              <button
                key={tab}
                onClick={() => {
                  onNavigate(tab.toLowerCase());
                  setIsMenuOpen(false);
                }}
                className="font-mono text-black opacity-60 hover:opacity-100 transition-opacity text-left"
              >
                {tab}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="flex gap-8">
      {tabs.map(tab => (
        <button
          key={tab}
          onClick={() => onNavigate(tab.toLowerCase())}
          className="font-mono text-black hover:text-red-600 transition-colors"
        >
          {tab}
        </button>
      ))}
    </div>
  );
};
