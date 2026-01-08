import React from 'react';
import { X, Calendar, CheckCircle, HelpCircle, Info } from 'lucide-react';
import { Service } from '../types';

interface ServiceModalProps {
  service: Service | null;
  onClose: () => void;
  onBook: () => void;
}

const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose, onBook }) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col animate-fade-in-up">
        {/* Header Image */}
        <div className="relative h-48 md:h-64 shrink-0">
          <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition backdrop-blur-md"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="absolute bottom-6 left-6 text-white">
            <h2 className="text-3xl font-bold mb-2">{service.title}</h2>
            <div className="flex items-center gap-2 bg-secondary/90 px-3 py-1 rounded-full text-sm inline-flex backdrop-blur">
                <CheckCircle className="w-4 h-4" />
                <span>{service.experienceYears}+ Years of Expertise</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-6 md:p-8 space-y-8">
            
            {/* Description */}
            <div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">About the Treatment</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{service.detailedDescription}</p>
            </div>

            {/* FAQs */}
            <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-primary mb-4 flex items-center gap-2">
                    <HelpCircle className="w-5 h-5" /> Frequently Asked Questions
                </h3>
                <div className="space-y-4">
                    {service.faqs.map((faq, index) => (
                        <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                            <p className="font-bold text-slate-800 mb-1">Q: {faq.question}</p>
                            <p className="text-gray-600 text-sm">A: {faq.answer}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Myth Buster */}
             <div className="border border-orange-200 bg-orange-50 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-orange-600 mb-4 flex items-center gap-2">
                    <Info className="w-5 h-5" /> Myth Busters
                </h3>
                <div className="space-y-4">
                    {service.myths.map((item, index) => (
                        <div key={index} className="flex gap-4 items-start">
                             <div className="bg-red-100 text-red-600 px-2 py-1 rounded text-xs font-bold uppercase shrink-0">Myth</div>
                             <div>
                                 <p className="font-medium text-gray-800 strike-through decoration-red-400 mb-1">{item.myth}</p>
                                 <p className="text-green-700 text-sm font-semibold flex items-center gap-1">
                                    <CheckCircle className="w-3 h-3" /> Fact: {item.fact}
                                 </p>
                             </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>

        {/* Footer Actions */}
        <div className="p-6 border-t border-gray-100 bg-gray-50 flex justify-end gap-4 shrink-0">
            <button onClick={onClose} className="px-6 py-3 text-gray-600 font-semibold hover:bg-gray-200 rounded-lg transition">Close</button>
            <button 
                onClick={() => { onClose(); onBook(); }}
                className="bg-primary text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-600 transition shadow-lg flex items-center gap-2"
            >
                <Calendar className="w-5 h-5" /> Book Consultation
            </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceModal;