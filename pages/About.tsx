import React from 'react';
import { DOCTORS } from '../constants';
import { Calendar } from 'lucide-react';

interface AboutProps {
  onOpenAppointment: () => void;
}

const About: React.FC<AboutProps> = ({ onOpenAppointment }) => {
  return (
    <div className="bg-white">
      {/* Clinic Story */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
           <div className="max-w-4xl mx-auto text-center">
             <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-8">About White Pearl Dental</h1>
             <p className="text-xl text-gray-600 leading-relaxed mb-8">
               Established in 2008, White Pearl Dental Clinic has been a beacon of oral health in Kharadi, Pune. 
               What started as a small practice by Dr. Sanjay Gajare has grown into a state-of-the-art dental center 
               trusted by thousands of families.
             </p>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
               <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=600&h=400&fit=crop" alt="Clinic Interior" className="rounded-lg shadow-md" />
               <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=600&h=400&fit=crop" alt="Dental Chair" className="rounded-lg shadow-md" />
               <img src="https://images.unsplash.com/photo-1516549655169-df83a0929519?q=80&w=600&h=400&fit=crop" alt="Reception" className="rounded-lg shadow-md" />
             </div>
           </div>
        </div>
      </section>

      {/* Main Doctor */}
      <section className="py-20">
        <div className="container mx-auto px-4">
           <div className="flex flex-col md:flex-row items-center gap-12 bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
             <div className="md:w-1/3">
               <img src={DOCTORS[0].image} alt={DOCTORS[0].name} className="w-full h-full object-cover min-h-[400px]" />
             </div>
             <div className="md:w-2/3 p-8 md:p-12">
               <span className="text-secondary font-bold text-sm tracking-widest uppercase mb-2 block">Founder & Lead Dentist</span>
               <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">{DOCTORS[0].name}</h2>
               <p className="text-lg text-gray-600 mb-6 italic border-l-4 border-primary pl-4">
                 "I believe that a smile is the prettiest thing you can wear. My mission is to ensure every patient wears theirs with confidence."
               </p>
               <p className="text-gray-600 leading-relaxed mb-8">
                 {DOCTORS[0].bio} With over 15 years of experience, he specializes in painless root canals and full mouth rehabilitation. He is known for his gentle hand and ability to make even the most anxious patients feel at ease.
               </p>
               <button onClick={onOpenAppointment} className="bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-blue-600 transition shadow-lg flex items-center gap-2 w-fit">
                 <Calendar className="w-5 h-5" /> Book Appointment with Dr. Sanjay
               </button>
             </div>
           </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
           <h2 className="text-3xl font-bold text-center mb-16">Meet Our Specialists</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {DOCTORS.slice(1).map((doc) => (
               <div key={doc.id} className="bg-white rounded-xl shadow-lg overflow-hidden group hover:-translate-y-2 transition duration-300">
                 <div className="h-64 overflow-hidden">
                    <img src={doc.image} alt={doc.name} className="w-full h-full object-cover group-hover:scale-105 transition" />
                 </div>
                 <div className="p-6">
                   <h3 className="text-xl font-bold text-slate-800">{doc.name}</h3>
                   <p className="text-primary font-medium mb-2">{doc.specialty}</p>
                   <p className="text-gray-500 text-sm mb-4">{doc.experience} Experience</p>
                   <p className="text-gray-600 text-sm mb-6">{doc.bio}</p>
                   <button onClick={onOpenAppointment} className="w-full border-2 border-primary text-primary font-bold py-2 rounded-lg hover:bg-primary hover:text-white transition">
                     Book Visit
                   </button>
                 </div>
               </div>
             ))}
             
             {/* Hiring / Join Us Card placeholder */}
             <div className="bg-gray-100 rounded-xl border-2 border-dashed border-gray-300 flex flex-col items-center justify-center p-6 text-center">
                <p className="text-gray-500 font-medium mb-2">We are growing!</p>
                <h3 className="text-xl font-bold text-gray-700">Join Our Team</h3>
                <p className="text-sm text-gray-500 mt-2">Send your resume to careers@whitepearl.in</p>
             </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default About;