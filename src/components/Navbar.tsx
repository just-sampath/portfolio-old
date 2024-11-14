import { Link, useLocation } from 'react-router-dom';
import { Moon, Sun } from 'lucide-react';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export function Navbar({ isDark, toggleTheme }: NavbarProps) {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-lg bg-white/90 dark:bg-gray-900/90 border-b border-gray-200 dark:border-gray-800 elevation-1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-primary dark:text-primary">
              Sampath
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {[
              { name: 'Home', path: '/' },
              { name: 'About', path: '/about' },
              { name: 'Work', path: '/work' },
              { name: 'Contact', path: '/contact' }
            ].map(({ name, path }) => (
              <Link
                key={name}
                to={path}
                className={`font-medium transition-colors ${
                  isActive(path)
                    ? 'text-primary dark:text-primary'
                    : 'text-text-secondary dark:text-text-secondary-dark hover:text-primary dark:hover:text-primary'
                }`}
              >
                {name}
              </Link>
            ))}
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}