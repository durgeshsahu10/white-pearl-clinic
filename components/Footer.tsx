import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { TRANSLATIONS } from '../constants';

interface FooterProps {
  language: 'en' | 'hi';
}

const Footer: React.FC<FooterProps> = ({ language }) => {
  const t = TRANSLATIONS[language];

  return (
    <footer className="bg-slate-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-white/10 p-2 rounded-full">
                <img src="https://cdn-icons-png.flaticon.com/512/3004/3004458.png" alt="Logo" className="w-8 h-8 invert opacity-90" />
              </div>
              <h3 className="text-xl font-bold">White Pearl</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Your smile is our passion. Providing world-class dental care in Kharadi with a gentle touch and lasting results.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition"><Twitter className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2 inline-block">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/" className="hover:text-primary transition">Home</Link></li>
              <li><Link to="/services" className="hover:text-primary transition">Our Services</Link></li>
              <li><Link to="/about" className="hover:text-primary transition">About Dr. Sanjay</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2 inline-block">{t.contactUs}</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary shrink-0" />
                <span>Shop No. 4, Royal Complex, Kharadi Bypass, Pune, Maharashtra 411014</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary shrink-0" />
                <a href="tel:+919876543210" className="hover:text-white">+91 98765 43210</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-secondary shrink-0" />
                <a href="mailto:info@whitepearldental.in" className="hover:text-white">info@whitepearldental.in</a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2 inline-block">{t.officeHours}</h4>
             <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex justify-between">
                <span>Mon - Fri:</span>
                <span>09:30 AM - 10:30 PM</span>
              </li>
              <li className="flex justify-between text-white font-medium">
                <span>Sat - Sun:</span>
                <span>10:00 AM - 07:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 text-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} White Pearl Dental Clinic. All rights reserved.</p>
          <p className="mt-1">Designed for Better Health & Safe Smiles.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;