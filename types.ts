export type Language = 'en' | 'hi';

export interface Service {
  id: string;
  title: string;
  titleHi?: string;
  description: string;
  icon: string;
  image: string;
  experienceYears: number;
  detailedDescription: string;
  faqs: { question: string; answer: string }[];
  myths: { myth: string; fact: string }[];
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  text: string;
  image: string;
  date: string;
}

export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  image: string;
  bio: string;
  experience: string;
}

export interface AppointmentFormData {
  fullName: string;
  mobile: string;
  email: string;
  problem: string;
  specificProblem?: string;
  date: string;
  time: string;
  message?: string;
}

export const PROBLEM_TYPES = [
  "Root Canal Treatment",
  "Dental Implants",
  "Braces & Aligners",
  "Teeth Whitening",
  "Cosmetic/Smile Design",
  "Kids Dental Issue",
  "Wisdom Tooth Pain",
  "Crowns & Bridges",
  "Gum Bleeding/Issues",
  "Dentures",
  "General Checkup",
  "Other"
];