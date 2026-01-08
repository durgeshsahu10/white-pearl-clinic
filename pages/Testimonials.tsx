import React from 'react';
import { Star, PlayCircle } from 'lucide-react';
import { REVIEWS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="py-16 bg-blue-900 text-white text-center">
        <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">Patient Stories</h1>
            <p className="text-xl text-blue-200">Don't just take our word for it.</p>
            <div className="mt-8">
                <a href="https://maps.app.goo.gl/nN3QZ4hYtAWHbh7g7" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-white text-blue-900 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Google_Maps_icon_%282020%29.svg/1200px-Google_Maps_icon_%282020%29.svg.png" className="w-6 h-6" alt="Google" />
                    Read 200+ Reviews on Google
                </a>
            </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        
        {/* Video Testimonials */}
        <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">Video Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
             {/* Mock Video 1 */}
             <div className="relative rounded-2xl overflow-hidden shadow-2xl group cursor-pointer aspect-video bg-gray-900">
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop" alt="Patient Video" className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <PlayCircle className="w-20 h-20 text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition duration-300" />
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-bold">Mrs. Kulkarni</p>
                    <p className="text-sm">Implant Treatment</p>
                </div>
             </div>
             {/* Mock Video 2 */}
             <div className="relative rounded-2xl overflow-hidden shadow-2xl group cursor-pointer aspect-video bg-gray-900">
                <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop" alt="Patient Video" className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <PlayCircle className="w-20 h-20 text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition duration-300" />
                </div>
                 <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-bold">Mr. Sharma</p>
                    <p className="text-sm">Smile Design</p>
                </div>
             </div>
        </div>

        {/* Text Reviews Grid */}
        <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">What Our Patients Say</h2>
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {REVIEWS.map((review) => (
                <div key={review.id} className="bg-slate-50 p-6 rounded-xl break-inside-avoid shadow-sm hover:shadow-md transition">
                    <div className="flex items-center gap-3 mb-3">
                        <img src={review.image} alt={review.name} className="w-10 h-10 rounded-full object-cover" />
                        <div>
                            <h4 className="font-bold text-sm text-slate-800">{review.name}</h4>
                            <div className="flex text-yellow-400">
                                {[...Array(review.rating)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
                            </div>
                        </div>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">"{review.text}"</p>
                    <p className="text-xs text-gray-400 mt-3 text-right">{review.date}</p>
                </div>
            ))}
        </div>

      </div>
    </div>
  );
};

export default Testimonials;