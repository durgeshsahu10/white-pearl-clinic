import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  const inputClass = "w-full bg-white border border-gray-200 text-slate-700 rounded-lg p-3.5 focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all duration-200 shadow-sm hover:border-gray-300 placeholder-gray-400";

  return (
    <div className="bg-slate-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-slate-800 mb-12">Get In Touch</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Info Card */}
          <div className="space-y-8">
             <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold mb-6 text-primary">Contact Information</h3>
                <div className="space-y-6">
                   <div className="flex items-start gap-4">
                      <div className="bg-blue-100 p-3 rounded-full text-primary"><MapPin /></div>
                      <div>
                         <h4 className="font-bold text-gray-800">Visit Us</h4>
                         <p className="text-gray-600">Shop No. 4, Royal Complex, Kharadi Bypass, <br/>Pune, Maharashtra 411014</p>
                      </div>
                   </div>
                   <div className="flex items-start gap-4">
                      <div className="bg-teal-100 p-3 rounded-full text-secondary"><Phone /></div>
                      <div>
                         <h4 className="font-bold text-gray-800">Call Us</h4>
                         <p className="text-gray-600">+91 98765 43210</p>
                         <p className="text-gray-600">+91 91234 56789</p>
                      </div>
                   </div>
                   <div className="flex items-start gap-4">
                      <div className="bg-indigo-100 p-3 rounded-full text-indigo-600"><Mail /></div>
                      <div>
                         <h4 className="font-bold text-gray-800">Email Us</h4>
                         <p className="text-gray-600">info@whitepearldental.in</p>
                      </div>
                   </div>
                </div>
             </div>

             <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold mb-6 text-primary flex items-center gap-2"><Clock /> Opening Hours</h3>
                <ul className="space-y-3">
                    <li className="flex justify-between border-b border-gray-100 pb-2">
                        <span className="text-gray-600">Monday - Friday</span>
                        <span className="font-bold text-gray-800">09:30 AM - 10:30 PM</span>
                    </li>
                     <li className="flex justify-between border-b border-gray-100 pb-2">
                        <span className="text-gray-600">Saturday</span>
                        <span className="font-bold text-gray-800">10:00 AM - 07:00 PM</span>
                    </li>
                     <li className="flex justify-between">
                        <span className="text-gray-600">Sunday</span>
                        <span className="font-bold text-gray-800">10:00 AM - 07:00 PM</span>
                    </li>
                </ul>
             </div>
          </div>

          {/* Simple Inquiry Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
             <h3 className="text-2xl font-bold mb-6 text-slate-800">Send us a Message</h3>
             <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); alert("Message Sent!"); }}>
                <div>
                    <label className="block text-sm font-bold text-slate-700 mb-1">Full Name</label>
                    <input type="text" className={inputClass} placeholder="Your Name" required />
                </div>
                <div>
                    <label className="block text-sm font-bold text-slate-700 mb-1">Email</label>
                    <input type="email" className={inputClass} placeholder="your@email.com" required />
                </div>
                 <div>
                    <label className="block text-sm font-bold text-slate-700 mb-1">Phone</label>
                    <input type="tel" className={inputClass} placeholder="+91" required />
                </div>
                <div>
                    <label className="block text-sm font-bold text-slate-700 mb-1">Message</label>
                    <textarea rows={4} className={inputClass} placeholder="How can we help you?" required></textarea>
                </div>
                <button type="submit" className="w-full bg-secondary text-white font-bold py-3.5 rounded-lg hover:bg-teal-600 transition shadow-lg transform hover:-translate-y-0.5">Send Message</button>
             </form>
          </div>

        </div>

        {/* Map Placeholder */}
        <div className="mt-12 rounded-2xl overflow-hidden shadow-lg h-80 bg-gray-200 relative">
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-500">
                <div className="text-center">
                    <MapPin className="w-12 h-12 mx-auto mb-2 text-gray-400" />
                    <p className="text-lg font-bold">Google Map Integration</p>
                    <p className="text-sm">Location: Kharadi, Pune</p>
                </div>
            </div>
             {/* Actual map iframe would go here */}
             {/* <iframe src="..." width="100%" height="100%" style={{border:0}} loading="lazy"></iframe> */}
        </div>

      </div>
    </div>
  );
};

export default Contact;