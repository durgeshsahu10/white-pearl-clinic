import { Service, Review, Doctor } from './types';

export const TRANSLATIONS = {
  en: {
    home: "Home",
    services: "Services",
    testimonials: "Testimonials",
    about: "About Us",
    contact: "Contact",
    newPatient: "New Patient Guide",
    bookAppointment: "Book Appointment",
    heroTitle: "Smile brighter with confidence",
    heroSubtitle: "Expert Dental Care in Kharadi, Pune by Dr. Sanjay Gajare",
    whyChooseUs: "Why Choose White Pearl?",
    readMore: "Read More",
    ourTeam: "Our Expert Team",
    testimonialsTitle: "Happy Patients",
    contactUs: "Get in Touch",
    officeHours: "Office Hours",
    address: "Address",
    formName: "Full Name",
    formMobile: "Mobile Number",
    formEmail: "Email Address",
    formProblem: "Select Problem",
    formDate: "Preferred Date",
    formTime: "Preferred Time",
    formMessage: "Message (Optional)",
    submit: "Confirm Appointment",
    sending: "Sending...",
  },
  hi: {
    home: "होम",
    services: "सेवाएं",
    testimonials: "प्रशंसापत्र",
    about: "हमारे बारे में",
    contact: "संपर्क करें",
    newPatient: "नए मरीज",
    bookAppointment: "अपॉइंटमेंट बुक करें",
    heroTitle: "आत्मविश्वास के साथ मुस्कुराएं",
    heroSubtitle: "खराडी, पुणे में डॉ. संजय गजरे द्वारा विशेषज्ञ दंत चिकित्सा",
    whyChooseUs: "व्हाइट पर्ल क्यों चुनें?",
    readMore: "और पढ़ें",
    ourTeam: "हमारी विशेषज्ञ टीम",
    testimonialsTitle: "खुश मरीज",
    contactUs: "संपर्क में रहें",
    officeHours: "खुलने का समय",
    address: "पता",
    formName: "पूरा नाम",
    formMobile: "मोबाइल नंबर",
    formEmail: "ईमेल पता",
    formProblem: "समस्या चुनें",
    formDate: "पसंदीदा तारीख",
    formTime: "पसंदीदा समय",
    formMessage: "संदेश (वैकल्पिक)",
    submit: "अपॉइंटमेंट पक्का करें",
    sending: "भेजा जा रहा है...",
  }
};

export const SERVICES: Service[] = [
  {
    id: 'root-canal',
    title: 'Root Canal Treatment',
    titleHi: 'रूट कैनाल उपचार',
    description: 'Painless single sitting root canal treatment.',
    icon: 'Activity',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop',
    experienceYears: 15,
    detailedDescription: 'Save your natural tooth with our advanced painless root canal therapy. We use rotary endodontics for precision and comfort, ensuring most treatments are completed in a single sitting.',
    faqs: [
      { question: "Is it painful?", answer: "No, we use advanced local anesthesia to ensure a completely painless procedure." },
      { question: "How long does it take?", answer: "Most cases are completed in a single sitting of 45-60 minutes." },
      { question: "Do I need a crown after RCT?", answer: "Yes, a cap (crown) is highly recommended to protect the tooth from fracturing." },
      { question: "Can a treated tooth get infected again?", answer: "It is rare, but if oral hygiene is ignored, re-infection can occur." }
    ],
    myths: [
      { myth: "Root canal causes illness.", fact: "There is no scientific evidence linking root canals to other diseases." }
    ]
  },
  {
    id: 'implants',
    title: 'Dental Implants',
    titleHi: 'डेंटल इम्प्लांट्स',
    description: 'Permanent solution for missing teeth.',
    icon: 'Anchor',
    image: 'https://images.unsplash.com/photo-1609840114035-1c29046a8028?q=80&w=800&auto=format&fit=crop',
    experienceYears: 12,
    detailedDescription: 'Replace missing teeth with titanium implants that look and feel just like natural teeth. A lifelong solution for your smile that prevents bone loss and restores chewing ability.',
    faqs: [
      { question: "Are implants safe?", answer: "Yes, they have a success rate of over 95%." },
      { question: "How long do they last?", answer: "With proper care, dental implants can last a lifetime." },
      { question: "Is the surgery painful?", answer: "The procedure is done under local anesthesia, so you won't feel pain during surgery." },
      { question: "How long is the waiting period?", answer: "Typically 3 months are required for the implant to fuse with the bone before placing the crown." }
    ],
    myths: [
      { myth: "Implants are visible.", fact: "The crown placed on top is color-matched to your natural teeth." }
    ]
  },
  {
    id: 'cosmetic',
    title: 'Cosmetic Dentistry',
    titleHi: 'कॉस्मेटिक दंत चिकित्सा',
    description: 'Smile designing, veneers, and laminates.',
    icon: 'Sparkles',
    image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=800&auto=format&fit=crop',
    experienceYears: 10,
    detailedDescription: 'Transform your smile with our cosmetic solutions. From ceramic veneers to composite bonding and complete smile makeovers, we design the smile you have always wanted.',
    faqs: [
      { question: "What are veneers?", answer: "Veneers are thin shells of ceramic attached to the front surface of teeth to improve appearance." },
      { question: "Do you cut natural teeth?", answer: "Minimal preparation is needed for veneers, preserving most of your natural tooth structure." },
      { question: "How long do veneers last?", answer: "They can last 10-15 years or more with proper maintenance." },
      { question: "Can I preview my new smile?", answer: "Yes, we use Digital Smile Design to show you the result before starting treatment." }
    ],
    myths: [
      { myth: "Cosmetic dentistry looks fake.", fact: "Modern materials mimic natural enamel translucency perfectly." }
    ]
  },
  {
    id: 'braces',
    title: 'Braces & Aligners',
    titleHi: 'ब्रेसेस और एलाइनर',
    description: 'Straighten your teeth with invisible aligners.',
    icon: 'Smile',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop',
    experienceYears: 14,
    detailedDescription: 'Correct misaligned teeth using traditional metal braces, ceramic braces, or modern invisible aligners like Invisalign. We treat patients of all ages.',
    faqs: [
      { question: "What is the best age?", answer: "Orthodontic treatment can be done at any age, but childhood (7-14 yrs) is ideal." },
      { question: "Are invisible aligners effective?", answer: "Yes, they are highly effective for most cases and are much more comfortable." },
      { question: "How long does treatment take?", answer: "It varies from 6 months to 2 years depending on the complexity." },
      { question: "Will I need to extract teeth?", answer: "Not always. We prioritize non-extraction plans whenever possible." }
    ],
    myths: [
      { myth: "Braces set off metal detectors.", fact: "No, the materials used are non-magnetic and small." }
    ]
  },
  {
    id: 'kids',
    title: 'Pediatric Dentistry',
    titleHi: 'बच्चों की दंत चिकित्सा',
    description: 'Gentle dental care for children.',
    icon: 'Baby',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop',
    experienceYears: 15,
    detailedDescription: 'We provide a friendly and fearless environment for children. Services include fluoride application, pit and fissure sealants, and habit breaking appliances.',
    faqs: [
      { question: "When should a child first visit?", answer: "The first dental visit is recommended by the first birthday." },
      { question: "Are milk teeth important?", answer: "Yes, they hold space for permanent teeth and are crucial for chewing and speech." },
      { question: "How to prevent cavities?", answer: "Regular brushing, limiting sugary snacks, and fluoride treatments help." },
      { question: "Is fluoride safe?", answer: "Yes, when applied professionally, it strengthens enamel significantly." }
    ],
    myths: [
      { myth: "Milk teeth don't need filling.", fact: "Decay in milk teeth can spread to developing permanent teeth." }
    ]
  },
  {
    id: 'whitening',
    title: 'Teeth Whitening',
    titleHi: 'दांतों की सफेदी',
    description: 'Brighten your smile in just one hour.',
    icon: 'Sun',
    image: 'https://images.unsplash.com/photo-1552196563-55cd4e45efb3?q=80&w=800&auto=format&fit=crop',
    experienceYears: 10,
    detailedDescription: 'Get a sparkling white smile with our advanced laser teeth whitening procedures. Safely removes stains from coffee, tea, smoking, and aging.',
    faqs: [
      { question: "Does it damage enamel?", answer: "Professional whitening is safe and does not damage enamel." },
      { question: "How long does it last?", answer: "Results can last 1-3 years depending on dietary habits." },
      { question: "Does it cause sensitivity?", answer: "Some temporary sensitivity may occur but fades within 24 hours." },
      { question: "Can I drink coffee after?", answer: "It is best to avoid staining foods/drinks for 48 hours after the procedure." }
    ],
    myths: [
      { myth: "Whitening makes teeth sensitive forever.", fact: "Sensitivity is usually temporary and fades within 24 hours." }
    ]
  },
  {
    id: 'crowns',
    title: 'Crowns & Bridges',
    titleHi: 'क्राउन और ब्रिज',
    description: 'Restore damaged or missing teeth.',
    icon: 'Crown',
    image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=800&auto=format&fit=crop',
    experienceYears: 15,
    detailedDescription: 'High-quality Zirconia and Ceramic crowns to restore broken teeth or replace missing ones. We use CAD/CAM technology for precise fitting.',
    faqs: [
      { question: "What are Zirconia crowns?", answer: "They are extremely strong, metal-free crowns that look very natural." },
      { question: "How long do they last?", answer: "10-15 years or more with good oral hygiene." },
      { question: "Is there a warranty?", answer: "Yes, most of our Zirconia crowns come with a 5 to 15-year warranty." },
      { question: "Does the process hurt?", answer: "The tooth preparation is done under anesthesia, so it is painless." }
    ],
    myths: [
      { myth: "Crowns always look fake.", fact: "Modern layered ceramic crowns are indistinguishable from natural teeth." }
    ]
  },
  {
    id: 'wisdom',
    title: 'Wisdom Tooth Removal',
    titleHi: 'अकल दाढ़ निकालना',
    description: 'Expert surgical removal of wisdom teeth.',
    icon: 'Scissors',
    image: 'https://images.unsplash.com/photo-1507646870377-502a3a78f216?q=80&w=800&auto=format&fit=crop',
    experienceYears: 15,
    detailedDescription: 'Surgical extraction of impacted wisdom teeth. We specialize in complex impactions ensuring minimal trauma and faster recovery.',
    faqs: [
      { question: "Is it painful?", answer: "It is done under effective anesthesia. You will feel pressure, but no pain." },
      { question: "What is the recovery time?", answer: "Usually 3-5 days. Swelling may last for a few days." },
      { question: "Can I eat after surgery?", answer: "Soft, cold diet is recommended for the first 24 hours." },
      { question: "Do I need stitches?", answer: "In most impacted cases, stitches are placed and removed after 7 days." }
    ],
    myths: [
      { myth: "Removing wisdom teeth affects eyesight.", fact: "There is absolutely no connection between teeth and eyesight." }
    ]
  },
  {
    id: 'gum',
    title: 'Gum Treatment',
    titleHi: 'मसूड़ों का इलाज',
    description: 'Treatment for bleeding gums and mobility.',
    icon: 'Droplet',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop',
    experienceYears: 12,
    detailedDescription: 'Comprehensive periodontal care including scaling, root planing, and flap surgery to treat pyorrhea, bleeding gums, and mobile teeth.',
    faqs: [
      { question: "Why do gums bleed?", answer: "Bleeding is usually a sign of gum infection (gingivitis) caused by plaque." },
      { question: "Is cleaning/scaling harmful?", answer: "No, professional cleaning removes tartar that brushing cannot remove." },
      { question: "Can loose teeth be saved?", answer: "In early stages, gum treatment and splinting can save mobile teeth." },
      { question: "Is laser treatment available?", answer: "Yes, we use lasers for painless and bloodless gum surgeries." }
    ],
    myths: [
      { myth: "Scaling makes teeth loose.", fact: "Scaling removes the tartar holding loose teeth; it treats the disease causing looseness." }
    ]
  },
  {
    id: 'dentures',
    title: 'Dentures',
    titleHi: 'बत्तीसी',
    description: 'Complete and partial denture solutions.',
    icon: 'Grid',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop',
    experienceYears: 15,
    detailedDescription: 'We offer flexible partial dentures and BPS complete dentures for comfortable chewing and a natural look for elderly patients.',
    faqs: [
      { question: "What are flexible dentures?", answer: "They are made of a soft material that adapts better to gums and is unbreakable." },
      { question: "Can I eat hard food?", answer: "With practice, you can eat most foods, but very hard items should be avoided." },
      { question: "Should I sleep with dentures?", answer: "No, gums need rest. Remove them at night." },
      { question: "Are implant-supported dentures better?", answer: "Yes, they offer much better stability than regular removable dentures." }
    ],
    myths: [
      { myth: "Dentures last forever.", fact: "The jawbone changes over time, so dentures may need relining or replacement every 5-7 years." }
    ]
  }
];

export const REVIEWS: Review[] = [
  {
    id: '1',
    name: 'Rahul Patil',
    rating: 5,
    text: "Dr. Sanjay is magical. I had a severe toothache, and his root canal treatment was absolutely painless. Highly recommended!",
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    date: '2 months ago'
  },
  {
    id: '2',
    name: 'Sneha Deshmukh',
    rating: 5,
    text: "Best dental clinic in Kharadi. Very hygienic and the staff is polite. The doctor explains everything clearly before treatment.",
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    date: '1 month ago'
  },
  {
    id: '3',
    name: 'Amit Kumar',
    rating: 5,
    text: "Got my implants done here. The process was smooth and the results are fantastic. Thank you Dr. Gajare!",
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
    date: '3 weeks ago'
  },
  {
    id: '4',
    name: 'Priya Sharma',
    rating: 5,
    text: "Very kid friendly dentist. My son was afraid but Dr. Sanjay made him very comfortable.",
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop',
    date: '1 week ago'
  },
  {
    id: '5',
    name: 'Vikram Singh',
    rating: 5,
    text: "Affordable and effective. No unnecessary treatments suggested. Genuine advice.",
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
    date: '2 days ago'
  }
];

export const DOCTORS: Doctor[] = [
  {
    id: 'dr-sanjay',
    name: 'Dr. Sanjay Gajare',
    specialty: 'Senior Dental Surgeon & Implantologist',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=400&h=500&auto=format&fit=crop',
    experience: '15+ Years',
    bio: "Dr. Sanjay Gajare has been operating White Pearl Dental Clinic for over 15 years in Kharadi, Pune. He has treated over 10,000 patients, providing lifelong dental solutions with a focus on painless dentistry."
  },
  {
    id: 'dr-anita',
    name: 'Dr. Anita Desai',
    specialty: 'Orthodontist',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=400&h=500&auto=format&fit=crop',
    experience: '8 Years',
    bio: "Specialist in braces and aligners, Dr. Anita creates beautiful smiles for children and adults alike."
  }
];