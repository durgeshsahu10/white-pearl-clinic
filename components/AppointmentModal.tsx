import React, { useState } from 'react';
import { X, Calendar, Clock, AlertCircle } from 'lucide-react';
import { AppointmentFormData, PROBLEM_TYPES } from '../types';
import { TRANSLATIONS } from '../constants';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: 'en' | 'hi';
}

const AppointmentModal: React.FC<AppointmentModalProps> = ({ isOpen, onClose, language }) => {
  const t = TRANSLATIONS[language];
  const [formData, setFormData] = useState<AppointmentFormData>({
    fullName: '',
    mobile: '',
    email: '',
    problem: '',
    date: '',
    time: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API/Zoho submission
    setTimeout(() => {
      alert(`Appointment Request Sent for ${formData.fullName}! We will contact you shortly.`);
      setIsSubmitting(false);
      onClose();
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Generate time slots based on day
  const getDayType = (dateString: string) => {
    const date = new Date(dateString);
    const day = date.getDay(); // 0 is Sunday
    if (day === 0 || day === 6) return 'weekend';
    return 'weekday';
  };

  const getTimeSlots = () => {
    const slots = [];
    const isWeekend = formData.date ? getDayType(formData.date) === 'weekend' : false;
    
    // Weekday: 09:30 to 22:30
    // Weekend: 10:00 to 19:00
    const startHour = isWeekend ? 10 : 9;
    const endHour = isWeekend ? 19 : 22;

    for (let i = startHour; i < endHour; i++) {
        const time = `${i}:00`;
        const time30 = `${i}:30`;
        if (isWeekend && i === 19) {
            // Stop at 19:00
            slots.push(`${i}:00`);
            break;
        }
        slots.push(time);
        slots.push(time30);
    }
    return slots;
  };

  const inputClass = "w-full bg-white border border-gray-200 text-slate-700 rounded-lg p-3 focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all duration-200 shadow-sm hover:border-gray-300 placeholder-gray-400";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden animate-fade-in-up max-h-[90vh] overflow-y-auto">
        <div className="bg-primary p-4 flex justify-between items-center text-white">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <Calendar className="w-6 h-6" /> {t.bookAppointment}
          </h2>
          <button onClick={onClose} className="hover:bg-white/20 p-1 rounded-full transition">
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-5 bg-slate-50">
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-1">{t.formName}</label>
            <input
              required
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className={inputClass}
              placeholder="e.g. John Doe"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-1">{t.formMobile}</label>
              <input
                required
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                className={inputClass}
                placeholder="+91 9876543210"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-1">{t.formEmail}</label>
              <input
                required
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={inputClass}
                placeholder="john@example.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-700 mb-1">{t.formProblem}</label>
            <select
              required
              name="problem"
              value={formData.problem}
              onChange={handleChange}
              className={inputClass}
            >
              <option value="">Select a service</option>
              {PROBLEM_TYPES.map(prob => (
                <option key={prob} value={prob}>{prob}</option>
              ))}
            </select>
          </div>

          {formData.problem === 'Other' && (
            <div className="animate-fade-in">
              <label className="block text-sm font-bold text-slate-700 mb-1">Please specify problem</label>
              <input
                type="text"
                name="specificProblem"
                value={formData.specificProblem}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-1">{t.formDate}</label>
              <input
                required
                type="date"
                name="date"
                min={new Date().toISOString().split('T')[0]}
                value={formData.date}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-1">{t.formTime}</label>
              <div className="relative">
                <select
                    required
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    disabled={!formData.date}
                    className={`${inputClass} appearance-none disabled:bg-gray-100 disabled:text-gray-400`}
                >
                    <option value="">Select Time</option>
                    {formData.date && getTimeSlots().map(time => (
                        <option key={time} value={time}>{time}</option>
                    ))}
                </select>
                <Clock className="absolute right-3 top-3.5 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
            </div>
          </div>

           <div>
              <label className="block text-sm font-bold text-slate-700 mb-1">{t.formMessage}</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={2}
                className={inputClass}
                placeholder="Any specific requirements?"
              ></textarea>
            </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-secondary text-white font-bold py-3.5 rounded-lg hover:bg-teal-600 transition shadow-lg disabled:opacity-70 flex justify-center items-center gap-2 transform hover:-translate-y-0.5"
          >
            {isSubmitting ? (
              <><span>{t.sending}</span></>
            ) : (
              t.submit
            )}
          </button>
          
          <p className="text-xs text-center text-gray-500 flex items-center justify-center gap-1">
            <AlertCircle className="w-3 h-3" /> 
            <span>We use Zoho CRM for secure data handling.</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default AppointmentModal;