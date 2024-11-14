import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useTheme } from './hooks/useTheme';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Work } from './pages/Work';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';

export function App() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <BrowserRouter>
      <div className={`min-h-screen transition-colors duration-200 ${isDark ? 'dark bg-gray-900 text-text-primary-dark' : 'bg-gray-50 text-text-primary'
        }`}>
        <Navbar isDark={isDark} toggleTheme={toggleTheme} />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sampath.github.io" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Work />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}