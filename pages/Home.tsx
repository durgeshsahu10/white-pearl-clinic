import React from 'react';
import { Star, Shield, Clock, Heart } from 'lucide-react';
import { TRANSLATIONS, SERVICES, REVIEWS } from '../constants';
import { Link } from 'react-router-dom';
import { Service } from '../types';

interface HomeProps {
  language: 'en' | 'hi';
  onOpenAppointment: () => void;
  onOpenService: (service: Service) => void;
}

const Home: React.FC<HomeProps> = ({ language, onOpenAppointment, onOpenService }) => {
  const t = TRANSLATIONS[language];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2000&auto=format&fit=crop" 
            alt="Dental Clinic" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/40"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center md:text-left">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-md">
              {t.heroTitle}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 font-light">
              {t.heroSubtitle}
            </p>
            <div className="flex flex-col md:flex-row gap-4">
              <button 
                onClick={onOpenAppointment}
                className="bg-secondary hover:bg-teal-600 text-white font-bold py-4 px-8 rounded-full shadow-lg transform transition hover:-translate-y-1 text-lg"
              >
                {t.bookAppointment}
              </button>
              <Link 
                to="/services"
                className="bg-white/10 backdrop-blur-md border border-white/30 hover:bg-white/20 text-white font-semibold py-4 px-8 rounded-full transition text-lg text-center"
              >
                {t.services}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 relative">
                <div className="absolute -inset-4 bg-primary/20 rounded-full blur-2xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=800&auto=format&fit=crop" 
                alt="Dr. Sanjay Gajare" 
                className="relative rounded-2xl shadow-2xl w-full object-cover h-[500px]"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl hidden md:block border-l-4 border-secondary">
                <p className="text-4xl font-bold text-primary">15+</p>
                <p className="text-gray-600 font-medium">Years Experience</p>
              </div>
            </div>
            <div className="md:w-1/2 space-y-6">
              <span className="text-secondary font-bold tracking-wider uppercase text-sm">About The Doctor</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Dr. Sanjay Gajare</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Operating White Pearl Dental Clinic in Kharadi, Pune for over 15 years, Dr. Sanjay has transformed the smiles of more than 10,000 patients. 
              </p>
              <p className="text-gray-600 leading-relaxed">
                He believes in providing not just treatment, but a lifelong dental solution. His compassionate approach and use of modern technology ensure that every patient leaves with a happy, healthy smile.
              </p>
              <Link to="/about" className="inline-flex items-center text-primary font-semibold hover:text-blue-700 transition group">
                {t.readMore} <span className="ml-2 group-hover:translate-x-1 transition">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">World Class Treatments</h2>
            <div className="w-20 h-1 bg-secondary mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.slice(0, 4).map((service) => (
              <div 
                key={service.id}
                onClick={() => onOpenService(service)} 
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-6 cursor-pointer group border border-transparent hover:border-primary/20"
              >
                <div className="h-48 overflow-hidden rounded-lg mb-4">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-primary transition">{language === 'hi' && service.titleHi ? service.titleHi : service.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{service.description}</p>
                <span className="text-secondary text-sm font-semibold uppercase tracking-wide group-hover:underline">Learn More</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/services" className="bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-blue-600 transition shadow-lg">View All Services</Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
             <div className="lg:w-1/2 space-y-8">
               <h2 className="text-3xl md:text-4xl font-bold text-slate-800">{t.whyChooseUs}</h2>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                 <div className="flex items-start gap-4">
                   <div className="bg-blue-100 p-3 rounded-lg text-primary"><Shield className="w-6 h-6" /></div>
                   <div>
                     <h4 className="font-bold text-lg mb-1">Safety First</h4>
                     <p className="text-sm text-gray-600">Strict sterilization protocols for your safety.</p>
                   </div>
                 </div>
                 <div className="flex items-start gap-4">
                   <div className="bg-teal-100 p-3 rounded-lg text-secondary"><Clock className="w-6 h-6" /></div>
                   <div>
                     <h4 className="font-bold text-lg mb-1">Flexible Hours</h4>
                     <p className="text-sm text-gray-600">Late evening and weekend appointments available.</p>
                   </div>
                 </div>
                 <div className="flex items-start gap-4">
                   <div className="bg-yellow-100 p-3 rounded-lg text-yellow-600"><Star className="w-6 h-6" /></div>
                   <div>
                     <h4 className="font-bold text-lg mb-1">Expert Care</h4>
                     <p className="text-sm text-gray-600">Experienced specialists for every dental need.</p>
                   </div>
                 </div>
                 <div className="flex items-start gap-4">
                   <div className="bg-pink-100 p-3 rounded-lg text-pink-500"><Heart className="w-6 h-6" /></div>
                   <div>
                     <h4 className="font-bold text-lg mb-1">Patient Centric</h4>
                     <p className="text-sm text-gray-600">Personalized treatment plans for your comfort.</p>
                   </div>
                 </div>
               </div>
               <button onClick={onOpenAppointment} className="bg-secondary text-white px-8 py-3 rounded-lg font-bold hover:bg-teal-600 transition">
                 Experience The Difference
               </button>
             </div>
             <div className="lg:w-1/2">
               <div className="relative">
                 <img src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop" alt="Advanced Equipment" className="rounded-2xl shadow-2xl" />
                 <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/90 backdrop-blur p-6 rounded-xl text-center shadow-xl">
                   <p className="text-3xl font-bold text-primary mb-1">10k+</p>
                   <p className="text-gray-600 font-medium text-sm">Happy Smiles</p>
                 </div>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* Reviews Snippet */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
           <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-2">{t.testimonialsTitle}</h2>
            <div className="flex justify-center gap-1 text-yellow-500 mb-4">
              {[...Array(5)].map((_, i) => <Star key={i} className="fill-current w-5 h-5" />)}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {REVIEWS.slice(0, 3).map((review) => (
              <div key={review.id} className="bg-white p-6 rounded-xl shadow-md border-t-4 border-secondary">
                <p className="text-gray-600 italic mb-4">"{review.text}"</p>
                <div className="flex items-center gap-4">
                  <img src={review.image} alt={review.name} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <h4 className="font-bold text-slate-800">{review.name}</h4>
                    <span className="text-xs text-gray-500">{review.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready for your new smile?</h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Book your consultation today and get a comprehensive dental health checkup.
          </p>
          <button 
            onClick={onOpenAppointment}
            className="bg-white text-primary text-lg font-bold py-4 px-10 rounded-full shadow-2xl hover:bg-gray-100 transition transform hover:scale-105"
          >
            Book Appointment
          </button>
        </div>
      </section>
    </main>
  );
};

export default Home;