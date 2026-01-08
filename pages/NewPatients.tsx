import React from 'react';
import { ClipboardList, UserCheck, ShieldCheck } from 'lucide-react';

interface NewPatientsProps {
  onOpenAppointment: () => void;
}

const NewPatients: React.FC<NewPatientsProps> = ({ onOpenAppointment }) => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-center text-slate-800 mb-8">New Patient Guide</h1>
        <p className="text-xl text-gray-600 text-center mb-12">Welcome to White Pearl Dental Clinic. We look forward to meeting you and helping you achieve a healthy smile.</p>

        <div className="space-y-12">
            {/* Step 1 */}
            <div className="flex gap-6">
                <div className="shrink-0">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-primary font-bold text-xl">1</div>
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-3 flex items-center gap-2">
                        <ClipboardList className="w-6 h-6 text-secondary" /> First Visit
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                        Your first appointment will take approximately 45-60 minutes. Dr. Sanjay will conduct a comprehensive oral examination, take necessary digital X-rays, and discuss your dental history. We believe in transparency, so we will explain all findings clearly.
                    </p>
                </div>
            </div>

             {/* Step 2 */}
            <div className="flex gap-6">
                <div className="shrink-0">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-primary font-bold text-xl">2</div>
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-3 flex items-center gap-2">
                        <UserCheck className="w-6 h-6 text-secondary" /> Treatment Plan
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                        Based on the examination, we will create a personalized treatment plan. We will discuss the procedures, estimated costs, and number of visits required. We prioritize saving natural teeth and providing lifelong solutions.
                    </p>
                </div>
            </div>

             {/* Step 3 */}
            <div className="flex gap-6">
                <div className="shrink-0">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-primary font-bold text-xl">3</div>
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-3 flex items-center gap-2">
                        <ShieldCheck className="w-6 h-6 text-secondary" /> Insurance & Payment
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                        We accept major credit/debit cards, UPI, and cash. We can also assist you with documentation if you have dental insurance reimbursement.
                    </p>
                </div>
            </div>
        </div>

        <div className="mt-16 bg-blue-50 p-8 rounded-2xl text-center">
            <h3 className="text-2xl font-bold text-primary mb-4">Ready to schedule your first visit?</h3>
            <button 
                onClick={onOpenAppointment}
                className="bg-secondary text-white px-8 py-3 rounded-full font-bold hover:bg-teal-600 transition shadow-lg"
            >
                Book Appointment Now
            </button>
        </div>
      </div>
    </div>
  );
};

export default NewPatients;