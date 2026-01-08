import React from 'react';
import { SERVICES } from '../constants';
import { Service } from '../types';
import { ArrowRight } from 'lucide-react';

interface ServicesProps {
  onOpenService: (service: Service) => void;
}

const ServicesPage: React.FC<ServicesProps> = ({ onOpenService }) => {
  return (
    <div className="py-12 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">Our Dental Services</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Comprehensive care for your entire family using the latest technology and painless procedures.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 group cursor-pointer flex flex-col"
              onClick={() => onOpenService(service)}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition duration-300 translate-y-4 group-hover:translate-y-0">
                    <span className="bg-secondary text-xs font-bold px-2 py-1 rounded">Click for details</span>
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-slate-800 mb-2 group-hover:text-primary transition">{service.title}</h3>
                <p className="text-gray-600 mb-6 flex-1">{service.description}</p>
                <div className="flex items-center text-primary font-bold group-hover:gap-2 transition-all">
                  View Details <ArrowRight className="w-5 h-5 ml-2" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;