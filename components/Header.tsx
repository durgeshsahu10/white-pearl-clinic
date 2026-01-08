import React, { useState } from 'react';
import { Menu, X, Globe, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { TRANSLATIONS } from '../constants';

interface HeaderProps {
  language: 'en' | 'hi';
  setLanguage: (lang: 'en' | 'hi') => void;
  onOpenAppointment: () => void;
}

const Header: React.FC<HeaderProps> = ({ language, setLanguage, onOpenAppointment }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const t = TRANSLATIONS[language];

  const navLinks = [
    { path: '/', label: t.home },
    { path: '/services', label: t.services },
    { path: '/about', label: t.about },
    { path: '/testimonials', label: t.testimonials },
    { path: '/new-patient', label: t.newPatient },
    { path: '/contact', label: t.contact },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-primary/10 p-2 rounded-full group-hover:bg-primary/20 transition">
              <img src="/broken-teeth.png" alt="White Pearl Logo" className="w-8 h-8 md:w-10 md:h-10" />
            </div>
            <div>
              <h1 className="text-lg md:text-2xl font-bold text-primary leading-tight">White Pearl</h1>
              <p className="text-xs text-gray-500 font-medium">Dental Clinic</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-semibold transition-colors duration-200 ${
                  isActive(link.path) ? 'text-primary' : 'text-gray-600 hover:text-primary'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
              className="flex items-center gap-1 text-gray-600 hover:text-primary font-medium"
            >
              <Globe className="w-4 h-4" />
              {language === 'en' ? 'HI' : 'EN'}
            </button>
            <button
              onClick={onOpenAppointment}
              className="bg-secondary text-white px-5 py-2.5 rounded-full font-semibold hover:bg-teal-600 transition shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              {t.bookAppointment}
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden flex items-center gap-3">
             <button
              onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
              className="flex items-center gap-1 text-gray-600 font-medium border border-gray-200 px-2 py-1 rounded"
            >
              {language === 'en' ? 'HI' : 'EN'}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary"
            >
              {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-100 animate-fade-in">
            <nav className="flex flex-col gap-2 mt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg text-sm font-semibold ${
                    isActive(link.path) ? 'bg-primary/10 text-primary' : 'text-gray-600'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <button
                onClick={() => {
                  onOpenAppointment();
                  setIsMenuOpen(false);
                }}
                className="mt-2 mx-4 bg-secondary text-white px-5 py-3 rounded-lg font-bold text-center"
              >
                {t.bookAppointment}
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;