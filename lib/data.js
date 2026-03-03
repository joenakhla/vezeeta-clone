// ============================================
// SPECIALTIES (Excluding Pharmacy, Lab, Scans)
// ============================================
export const specialties = [
  {
    id: 'general-practice',
    name: 'General Practice',
    nameAr: 'طب عام',
    icon: '🩺',
    description: 'General health checkups and consultations',
  },
  {
    id: 'dentistry',
    name: 'Dentistry',
    nameAr: 'أسنان',
    icon: '🦷',
    description: 'Dental care, cleaning, and oral health',
  },
  {
    id: 'cardiology',
    name: 'Cardiology',
    nameAr: 'قلب وأوعية دموية',
    icon: '❤️',
    description: 'Heart and cardiovascular system',
  },
  {
    id: 'dermatology',
    name: 'Dermatology',
    nameAr: 'جلدية',
    icon: '🧴',
    description: 'Skin, hair, and nail conditions',
  },
  {
    id: 'orthopedics',
    name: 'Orthopedics',
    nameAr: 'عظام',
    icon: '🦴',
    description: 'Bones, joints, and muscles',
  },
  {
    id: 'pediatrics',
    name: 'Pediatrics',
    nameAr: 'أطفال',
    icon: '👶',
    description: 'Children\'s health and development',
  },
  {
    id: 'ent',
    name: 'Ear, Nose & Throat',
    nameAr: 'أنف وأذن وحنجرة',
    icon: '👂',
    description: 'ENT conditions and treatments',
  },
  {
    id: 'gynecology',
    name: 'Gynecology & Obstetrics',
    nameAr: 'نساء وتوليد',
    icon: '🤰',
    description: 'Women\'s reproductive health',
  },
  {
    id: 'ophthalmology',
    name: 'Ophthalmology',
    nameAr: 'عيون',
    icon: '👁️',
    description: 'Eye care and vision',
  },
  {
    id: 'psychiatry',
    name: 'Psychiatry',
    nameAr: 'نفسية',
    icon: '🧠',
    description: 'Mental health and wellbeing',
  },
  {
    id: 'urology',
    name: 'Urology',
    nameAr: 'مسالك بولية',
    icon: '🏥',
    description: 'Urinary tract and male reproductive health',
  },
  {
    id: 'neurology',
    name: 'Neurology',
    nameAr: 'مخ وأعصاب',
    icon: '🧬',
    description: 'Brain, spine, and nervous system',
  },
  {
    id: 'internal-medicine',
    name: 'Internal Medicine',
    nameAr: 'باطنة',
    icon: '💊',
    description: 'Adult diseases and internal organ conditions',
  },
  {
    id: 'nutrition',
    name: 'Nutrition',
    nameAr: 'تغذية',
    icon: '🥗',
    description: 'Diet plans and nutritional guidance',
  },
];

// ============================================
// DOCTORS - Dummy Data
// ============================================
export const doctors = [
  {
    id: 'dr-ahmed-hassan',
    name: 'Dr. Ahmed Hassan',
    specialty: 'General Practice',
    specialtySlug: 'general-practice',
    title: 'Consultant General Practitioner',
    location: 'Nasr City, Cairo',
    address: '15 Makram Ebeid St, Nasr City, Cairo',
    rating: 4.8,
    reviewCount: 324,
    price: 300,
    currency: 'EGP',
    bio: 'Experienced general practitioner with over 15 years in family medicine. Specializes in preventive care, chronic disease management, and comprehensive health assessments.',
    education: [
      'MD - Cairo University (2008)',
      'Fellowship in Family Medicine - Ain Shams University (2012)',
    ],
    experience: 15,
    languages: ['Arabic', 'English'],
    waitTime: '15 minutes',
    gender: 'male',
    initials: 'AH',
    availableDays: [1, 2, 3, 4, 6], // Mon, Tue, Wed, Thu, Sat
    slotTimes: ['09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '02:00 PM', '02:30 PM', '03:00 PM'],
  },
  {
    id: 'dr-sara-elsayed',
    name: 'Dr. Sara El-Sayed',
    specialty: 'Dentistry',
    specialtySlug: 'dentistry',
    title: 'Cosmetic Dentist',
    location: 'Maadi, Cairo',
    address: '22 Road 9, Maadi, Cairo',
    rating: 4.9,
    reviewCount: 512,
    price: 400,
    currency: 'EGP',
    bio: 'Leading cosmetic dentist specializing in smile makeovers, dental implants, and teeth whitening. Known for gentle care and excellent patient communication.',
    education: [
      'BDS - Alexandria University (2010)',
      'MSc Cosmetic Dentistry - Cairo University (2014)',
    ],
    experience: 13,
    languages: ['Arabic', 'English', 'French'],
    waitTime: '10 minutes',
    gender: 'female',
    initials: 'SE',
    availableDays: [0, 1, 3, 4, 5], // Sun, Mon, Wed, Thu, Fri
    slotTimes: ['10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM', '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM'],
  },
  {
    id: 'dr-mohamed-karim',
    name: 'Dr. Mohamed Karim',
    specialty: 'Cardiology',
    specialtySlug: 'cardiology',
    title: 'Interventional Cardiologist',
    location: 'Dokki, Giza',
    address: '45 Tahrir St, Dokki, Giza',
    rating: 4.7,
    reviewCount: 287,
    price: 500,
    currency: 'EGP',
    bio: 'Board-certified interventional cardiologist with expertise in cardiac catheterization and stent procedures. Over 20 years of experience in cardiovascular medicine.',
    education: [
      'MD - Ain Shams University (2003)',
      'PhD Cardiology - Cairo University (2009)',
      'Fellowship - Cleveland Clinic (2011)',
    ],
    experience: 20,
    languages: ['Arabic', 'English'],
    waitTime: '20 minutes',
    gender: 'male',
    initials: 'MK',
    availableDays: [0, 2, 4, 6], // Sun, Tue, Thu, Sat
    slotTimes: ['09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM'],
  },
  {
    id: 'dr-nadia-mostafa',
    name: 'Dr. Nadia Mostafa',
    specialty: 'Dermatology',
    specialtySlug: 'dermatology',
    title: 'Consultant Dermatologist',
    location: 'Heliopolis, Cairo',
    address: '8 Baghdad St, Heliopolis, Cairo',
    rating: 4.6,
    reviewCount: 198,
    price: 350,
    currency: 'EGP',
    bio: 'Specialized in medical and cosmetic dermatology including acne treatment, laser therapy, and skin cancer screening.',
    education: [
      'MD - Cairo University (2011)',
      'MSc Dermatology - Ain Shams University (2015)',
    ],
    experience: 12,
    languages: ['Arabic', 'English'],
    waitTime: '15 minutes',
    gender: 'female',
    initials: 'NM',
    availableDays: [1, 2, 3, 5, 6], // Mon, Tue, Wed, Fri, Sat
    slotTimes: ['11:00 AM', '11:30 AM', '12:00 PM', '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM', '04:00 PM'],
  },
  {
    id: 'dr-omar-farouk',
    name: 'Dr. Omar Farouk',
    specialty: 'Orthopedics',
    specialtySlug: 'orthopedics',
    title: 'Orthopedic Surgeon',
    location: 'Mohandessin, Cairo',
    address: '30 Shehab St, Mohandessin, Cairo',
    rating: 4.9,
    reviewCount: 445,
    price: 450,
    currency: 'EGP',
    bio: 'Expert orthopedic surgeon specializing in sports injuries, joint replacement, and spinal surgery. Team physician for multiple professional sports teams.',
    education: [
      'MD - Cairo University (2006)',
      'Fellowship in Sports Medicine - Germany (2012)',
    ],
    experience: 17,
    languages: ['Arabic', 'English', 'German'],
    waitTime: '25 minutes',
    gender: 'male',
    initials: 'OF',
    availableDays: [0, 1, 3, 4], // Sun, Mon, Wed, Thu
    slotTimes: ['09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '02:00 PM', '02:30 PM', '03:00 PM'],
  },
  {
    id: 'dr-yasmin-abdelaziz',
    name: 'Dr. Yasmin Abdel-Aziz',
    specialty: 'Pediatrics',
    specialtySlug: 'pediatrics',
    title: 'Pediatrician & Neonatologist',
    location: 'New Cairo',
    address: '5th Settlement, New Cairo',
    rating: 4.8,
    reviewCount: 376,
    price: 350,
    currency: 'EGP',
    bio: 'Caring pediatrician with special expertise in newborn care and childhood vaccinations. Trusted by hundreds of families across Cairo.',
    education: [
      'MD - Ain Shams University (2009)',
      'MSc Pediatrics - Cairo University (2013)',
    ],
    experience: 14,
    languages: ['Arabic', 'English'],
    waitTime: '10 minutes',
    gender: 'female',
    initials: 'YA',
    availableDays: [0, 1, 2, 3, 4, 6], // Sun-Thu, Sat
    slotTimes: ['09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '04:00 PM', '04:30 PM', '05:00 PM'],
  },
  {
    id: 'dr-khaled-ibrahim',
    name: 'Dr. Khaled Ibrahim',
    specialty: 'Ear, Nose & Throat',
    specialtySlug: 'ent',
    title: 'ENT Specialist',
    location: 'Zamalek, Cairo',
    address: '12 July 26th St, Zamalek, Cairo',
    rating: 4.5,
    reviewCount: 156,
    price: 400,
    currency: 'EGP',
    bio: 'ENT specialist with extensive experience in sinus surgery, hearing disorders, and pediatric ENT conditions.',
    education: [
      'MD - Alexandria University (2010)',
      'MSc ENT - Cairo University (2014)',
    ],
    experience: 13,
    languages: ['Arabic', 'English'],
    waitTime: '15 minutes',
    gender: 'male',
    initials: 'KI',
    availableDays: [0, 2, 4, 6], // Sun, Tue, Thu, Sat
    slotTimes: ['10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '03:00 PM', '03:30 PM', '04:00 PM'],
  },
  {
    id: 'dr-mona-rashid',
    name: 'Dr. Mona Rashid',
    specialty: 'Gynecology & Obstetrics',
    specialtySlug: 'gynecology',
    title: 'OB/GYN Consultant',
    location: 'Maadi, Cairo',
    address: '18 Road 206, Maadi, Cairo',
    rating: 4.7,
    reviewCount: 298,
    price: 400,
    currency: 'EGP',
    bio: 'Dedicated OB/GYN specialist providing comprehensive women\'s healthcare including prenatal care, high-risk pregnancies, and gynecological surgery.',
    education: [
      'MD - Cairo University (2007)',
      'PhD Obstetrics - Ain Shams University (2013)',
    ],
    experience: 16,
    languages: ['Arabic', 'English'],
    waitTime: '20 minutes',
    gender: 'female',
    initials: 'MR',
    availableDays: [0, 1, 3, 4, 5], // Sun, Mon, Wed, Thu, Fri
    slotTimes: ['09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '02:00 PM', '02:30 PM'],
  },
  {
    id: 'dr-tarek-elsharkawy',
    name: 'Dr. Tarek El-Sharkawy',
    specialty: 'Ophthalmology',
    specialtySlug: 'ophthalmology',
    title: 'LASIK & Cataract Surgeon',
    location: 'Nasr City, Cairo',
    address: '33 Abbas El-Akkad St, Nasr City, Cairo',
    rating: 4.8,
    reviewCount: 421,
    price: 350,
    currency: 'EGP',
    bio: 'Leading eye surgeon specializing in LASIK, cataract surgery, and retinal treatments. Performed over 5,000 successful eye surgeries.',
    education: [
      'MD - Cairo University (2005)',
      'Fellowship in Ophthalmology - Moorfields Eye Hospital, London (2010)',
    ],
    experience: 18,
    languages: ['Arabic', 'English'],
    waitTime: '15 minutes',
    gender: 'male',
    initials: 'TS',
    availableDays: [1, 2, 4, 5], // Mon, Tue, Thu, Fri
    slotTimes: ['09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM'],
  },
  {
    id: 'dr-heba-mansour',
    name: 'Dr. Heba Mansour',
    specialty: 'Psychiatry',
    specialtySlug: 'psychiatry',
    title: 'Clinical Psychiatrist',
    location: 'Dokki, Giza',
    address: '7 Mossadak St, Dokki, Giza',
    rating: 4.6,
    reviewCount: 178,
    price: 500,
    currency: 'EGP',
    bio: 'Compassionate psychiatrist specializing in anxiety disorders, depression, and cognitive behavioral therapy. Provides a safe, non-judgmental environment.',
    education: [
      'MD - Ain Shams University (2008)',
      'MSc Psychiatry - Cairo University (2012)',
      'CBT Certification - Beck Institute (2015)',
    ],
    experience: 15,
    languages: ['Arabic', 'English'],
    waitTime: '5 minutes',
    gender: 'female',
    initials: 'HM',
    availableDays: [0, 1, 2, 3, 4], // Sun-Thu
    slotTimes: ['10:00 AM', '11:00 AM', '12:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'],
  },
  {
    id: 'dr-ali-nabil',
    name: 'Dr. Ali Nabil',
    specialty: 'Urology',
    specialtySlug: 'urology',
    title: 'Urological Surgeon',
    location: 'Heliopolis, Cairo',
    address: '20 Cleopatra St, Heliopolis, Cairo',
    rating: 4.7,
    reviewCount: 234,
    price: 400,
    currency: 'EGP',
    bio: 'Skilled urological surgeon specializing in minimally invasive procedures, kidney stones, and prostate conditions.',
    education: [
      'MD - Cairo University (2009)',
      'MSc Urology - Ain Shams University (2013)',
    ],
    experience: 14,
    languages: ['Arabic', 'English'],
    waitTime: '20 minutes',
    gender: 'male',
    initials: 'AN',
    availableDays: [0, 2, 3, 5, 6], // Sun, Tue, Wed, Fri, Sat
    slotTimes: ['09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM'],
  },
  {
    id: 'dr-dina-samir',
    name: 'Dr. Dina Samir',
    specialty: 'Neurology',
    specialtySlug: 'neurology',
    title: 'Neurologist',
    location: 'New Cairo',
    address: 'Medical Park, 5th Settlement, New Cairo',
    rating: 4.8,
    reviewCount: 203,
    price: 450,
    currency: 'EGP',
    bio: 'Expert neurologist specializing in headaches, epilepsy, multiple sclerosis, and neurodegenerative disorders.',
    education: [
      'MD - Cairo University (2007)',
      'PhD Neurology - Ain Shams University (2013)',
      'Research Fellow - Johns Hopkins (2015)',
    ],
    experience: 16,
    languages: ['Arabic', 'English'],
    waitTime: '15 minutes',
    gender: 'female',
    initials: 'DS',
    availableDays: [1, 2, 3, 4, 6], // Mon-Thu, Sat
    slotTimes: ['09:00 AM', '10:00 AM', '11:00 AM', '02:00 PM', '03:00 PM', '04:00 PM'],
  },
  {
    id: 'dr-hassan-youssef',
    name: 'Dr. Hassan Youssef',
    specialty: 'General Practice',
    specialtySlug: 'general-practice',
    title: 'Family Medicine Specialist',
    location: 'Smouha, Alexandria',
    address: '14 Victor Emmanuel St, Smouha, Alexandria',
    rating: 4.5,
    reviewCount: 189,
    price: 250,
    currency: 'EGP',
    bio: 'Experienced family doctor providing comprehensive primary care. Known for thorough examinations and patient education.',
    education: [
      'MD - Alexandria University (2011)',
      'Diploma in Family Medicine (2014)',
    ],
    experience: 12,
    languages: ['Arabic', 'English'],
    waitTime: '10 minutes',
    gender: 'male',
    initials: 'HY',
    availableDays: [0, 1, 2, 3, 4, 5, 6], // All week
    slotTimes: ['09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM', '03:00 PM', '03:30 PM', '04:00 PM'],
  },
  {
    id: 'dr-laila-mahmoud',
    name: 'Dr. Laila Mahmoud',
    specialty: 'Dentistry',
    specialtySlug: 'dentistry',
    title: 'Orthodontist',
    location: 'Zamalek, Cairo',
    address: '25 Hassan Sabry St, Zamalek, Cairo',
    rating: 4.9,
    reviewCount: 567,
    price: 500,
    currency: 'EGP',
    bio: 'Top-rated orthodontist specializing in braces, Invisalign, and jaw alignment. Transforms smiles with precision and artistry.',
    education: [
      'BDS - Cairo University (2008)',
      'MSc Orthodontics - London (2012)',
    ],
    experience: 15,
    languages: ['Arabic', 'English', 'French'],
    waitTime: '10 minutes',
    gender: 'female',
    initials: 'LM',
    availableDays: [0, 1, 2, 4, 5], // Sun, Mon, Tue, Thu, Fri
    slotTimes: ['10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM', '02:00 PM', '02:30 PM', '03:00 PM'],
  },
  {
    id: 'dr-amr-elshafei',
    name: 'Dr. Amr El-Shafei',
    specialty: 'Internal Medicine',
    specialtySlug: 'internal-medicine',
    title: 'Internal Medicine Consultant',
    location: 'Maadi, Cairo',
    address: '10 Road 233, Maadi, Cairo',
    rating: 4.6,
    reviewCount: 267,
    price: 350,
    currency: 'EGP',
    bio: 'Experienced internist specializing in diabetes management, hypertension, and metabolic disorders. Provides comprehensive adult medical care.',
    education: [
      'MD - Cairo University (2006)',
      'PhD Internal Medicine - Cairo University (2012)',
    ],
    experience: 17,
    languages: ['Arabic', 'English'],
    waitTime: '20 minutes',
    gender: 'male',
    initials: 'AE',
    availableDays: [0, 1, 3, 4, 6], // Sun, Mon, Wed, Thu, Sat
    slotTimes: ['09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM'],
  },
  {
    id: 'dr-rania-fawzy',
    name: 'Dr. Rania Fawzy',
    specialty: 'Nutrition',
    specialtySlug: 'nutrition',
    title: 'Clinical Nutritionist',
    location: 'Heliopolis, Cairo',
    address: '5 El-Hegaz St, Heliopolis, Cairo',
    rating: 4.7,
    reviewCount: 312,
    price: 300,
    currency: 'EGP',
    bio: 'Certified clinical nutritionist helping patients achieve their health goals through personalized diet plans and lifestyle modifications.',
    education: [
      'BSc Nutrition - Cairo University (2012)',
      'MSc Clinical Nutrition - Ain Shams University (2016)',
    ],
    experience: 11,
    languages: ['Arabic', 'English'],
    waitTime: '5 minutes',
    gender: 'female',
    initials: 'RF',
    availableDays: [0, 1, 2, 3, 4], // Sun-Thu
    slotTimes: ['10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM', '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM', '04:00 PM'],
  },
];

// ============================================
// HELPER FUNCTIONS
// ============================================

export function getDoctorsBySpecialty(specialtySlug) {
  return doctors.filter((d) => d.specialtySlug === specialtySlug);
}

export function getDoctorById(id) {
  return doctors.find((d) => d.id === id);
}

export function getSpecialtyBySlug(slug) {
  return specialties.find((s) => s.id === slug);
}

export function searchDoctors(query) {
  const q = query.toLowerCase();
  return doctors.filter(
    (d) =>
      d.name.toLowerCase().includes(q) ||
      d.specialty.toLowerCase().includes(q) ||
      d.location.toLowerCase().includes(q)
  );
}

// Generate available slots for a doctor for the next 7 days (client-side)
export function generateSlots(doctor) {
  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const slots = [];

  for (let i = 1; i <= 7; i++) {
    const date = new Date();
    date.setDate(date.getDate() + i);
    const dayOfWeek = date.getDay();

    if (!doctor.availableDays.includes(dayOfWeek)) continue;

    const dateStr = date.toISOString().split('T')[0];
    const dayName = dayNames[dayOfWeek];
    const displayDate = date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
    });

    slots.push({
      date: dateStr,
      dayName,
      displayDate,
      times: [...doctor.slotTimes],
    });
  }

  return slots;
}

// ============================================
// DUMMY REVIEWS
// ============================================
export const reviews = [
  { id: 1, patient: 'M. Ahmed', rating: 5, text: 'Excellent doctor, very thorough examination. Highly recommended!', date: '2 days ago' },
  { id: 2, patient: 'S. Hassan', rating: 4, text: 'Good experience overall. The wait was a bit long but the consultation was worth it.', date: '1 week ago' },
  { id: 3, patient: 'N. Ibrahim', rating: 5, text: 'Very professional and caring. Explained everything clearly.', date: '2 weeks ago' },
  { id: 4, patient: 'A. Mohamed', rating: 5, text: 'Best doctor I\'ve visited. The clinic is clean and well-organized.', date: '3 weeks ago' },
  { id: 5, patient: 'F. Ali', rating: 4, text: 'Knowledgeable and patient. Would definitely visit again.', date: '1 month ago' },
  { id: 6, patient: 'R. Youssef', rating: 5, text: 'Wonderful experience from booking to consultation. Thank you!', date: '1 month ago' },
];

// ============================================
// BOOKING TYPES
// ============================================
export const bookingTypes = [
  { id: 'clinic', name: 'Clinic Visit', icon: '🏥', description: 'Visit the doctor at their clinic' },
  { id: 'video', name: 'Video Consultation', icon: '📹', description: 'Online video call with the doctor' },
  { id: 'home', name: 'Home Visit', icon: '🏠', description: 'Doctor visits you at home' },
];

// ============================================
// SALESIQ DEPARTMENTS
// ============================================
export const SALESIQ_DEPARTMENTS = {
  DOCTORS: 'Medical Bookings',
  DIAGNOSTICS: 'Pharmacy & Diagnostics',
};

// ============================================
// PHARMACY - Dummy Data
// ============================================
export const pharmacyCategories = [
  { id: 'pain-relief', name: 'Pain Relief', icon: '💊' },
  { id: 'antibiotics', name: 'Antibiotics', icon: '🧬' },
  { id: 'vitamins', name: 'Vitamins & Supplements', icon: '🍊' },
  { id: 'skincare', name: 'Skincare', icon: '🧴' },
  { id: 'cold-flu', name: 'Cold & Flu', icon: '🤧' },
  { id: 'digestive', name: 'Digestive Health', icon: '🫁' },
  { id: 'diabetes', name: 'Diabetes Care', icon: '🩸' },
  { id: 'heart', name: 'Heart & Blood Pressure', icon: '❤️' },
];

export const pharmacyItems = [
  { id: 'panadol-extra', name: 'Panadol Extra', category: 'pain-relief', price: 45, unit: 'Box (24 tablets)', description: 'Fast-acting pain relief for headaches, toothache, and muscle pain', requiresPrescription: false },
  { id: 'brufen-400', name: 'Brufen 400mg', category: 'pain-relief', price: 36, unit: 'Box (30 tablets)', description: 'Anti-inflammatory pain reliever for joints and back pain', requiresPrescription: false },
  { id: 'voltaren-gel', name: 'Voltaren Gel 50g', category: 'pain-relief', price: 85, unit: 'Tube', description: 'Topical anti-inflammatory gel for muscle and joint pain', requiresPrescription: false },
  { id: 'augmentin-1g', name: 'Augmentin 1g', category: 'antibiotics', price: 120, unit: 'Box (14 tablets)', description: 'Broad-spectrum antibiotic for bacterial infections', requiresPrescription: true },
  { id: 'amoxicillin-500', name: 'Amoxicillin 500mg', category: 'antibiotics', price: 45, unit: 'Box (12 capsules)', description: 'Common antibiotic for respiratory and ear infections', requiresPrescription: true },
  { id: 'azithromycin', name: 'Azithromycin 500mg', category: 'antibiotics', price: 75, unit: 'Box (3 tablets)', description: 'Antibiotic for respiratory tract infections', requiresPrescription: true },
  { id: 'vitamin-d3', name: 'Vitamin D3 1000IU', category: 'vitamins', price: 95, unit: 'Bottle (60 capsules)', description: 'Essential vitamin for bone health and immunity', requiresPrescription: false },
  { id: 'vitamin-c', name: 'Vitamin C 1000mg', category: 'vitamins', price: 65, unit: 'Tube (20 effervescent)', description: 'Immune system booster and antioxidant', requiresPrescription: false },
  { id: 'omega3', name: 'Omega-3 Fish Oil', category: 'vitamins', price: 180, unit: 'Bottle (90 softgels)', description: 'Heart and brain health supplement', requiresPrescription: false },
  { id: 'zinc-50', name: 'Zinc 50mg', category: 'vitamins', price: 55, unit: 'Bottle (30 tablets)', description: 'Immune support and wound healing mineral', requiresPrescription: false },
  { id: 'bioderma-sunscreen', name: 'Bioderma Sunscreen SPF50', category: 'skincare', price: 450, unit: 'Tube (40ml)', description: 'High protection sunscreen for sensitive skin', requiresPrescription: false },
  { id: 'avene-cream', name: 'Avène Moisturizing Cream', category: 'skincare', price: 320, unit: 'Tube (50ml)', description: 'Rich moisturizer for dry and sensitive skin', requiresPrescription: false },
  { id: 'congestal', name: 'Congestal', category: 'cold-flu', price: 30, unit: 'Box (12 tablets)', description: 'Cold and flu symptom relief with decongestant', requiresPrescription: false },
  { id: 'comtrex', name: 'Comtrex Night', category: 'cold-flu', price: 42, unit: 'Box (20 tablets)', description: 'Nighttime cold and flu relief for better sleep', requiresPrescription: false },
  { id: 'antinal', name: 'Antinal 200mg', category: 'digestive', price: 24, unit: 'Box (24 capsules)', description: 'Intestinal antiseptic for diarrhea treatment', requiresPrescription: false },
  { id: 'nexium-40', name: 'Nexium 40mg', category: 'digestive', price: 150, unit: 'Box (14 tablets)', description: 'Proton pump inhibitor for acid reflux and ulcers', requiresPrescription: true },
  { id: 'glucophage-1000', name: 'Glucophage 1000mg', category: 'diabetes', price: 48, unit: 'Box (30 tablets)', description: 'Metformin for type 2 diabetes management', requiresPrescription: true },
  { id: 'januvia-100', name: 'Januvia 100mg', category: 'diabetes', price: 380, unit: 'Box (28 tablets)', description: 'DPP-4 inhibitor for blood sugar control', requiresPrescription: true },
  { id: 'concor-5', name: 'Concor 5mg', category: 'heart', price: 75, unit: 'Box (30 tablets)', description: 'Beta-blocker for high blood pressure and heart rate', requiresPrescription: true },
  { id: 'plavix-75', name: 'Plavix 75mg', category: 'heart', price: 210, unit: 'Box (28 tablets)', description: 'Blood thinner to prevent heart attack and stroke', requiresPrescription: true },
];

export function getPharmacyItemsByCategory(categoryId) {
  return pharmacyItems.filter((item) => item.category === categoryId);
}

// ============================================
// LAB TESTS - Dummy Data
// ============================================
export const labCategories = [
  { id: 'blood', name: 'Blood Tests', icon: '🩸' },
  { id: 'hormones', name: 'Hormones', icon: '⚗️' },
  { id: 'liver', name: 'Liver Function', icon: '🫀' },
  { id: 'kidney', name: 'Kidney Function', icon: '🏥' },
  { id: 'diabetes', name: 'Diabetes', icon: '💉' },
  { id: 'allergy', name: 'Allergy Tests', icon: '🤧' },
  { id: 'packages', name: 'Checkup Packages', icon: '📦' },
];

export const labTests = [
  { id: 'cbc', name: 'Complete Blood Count (CBC)', category: 'blood', price: 120, turnaround: 'Same day', description: 'Measures red/white blood cells, hemoglobin, platelets', fastingRequired: false },
  { id: 'esr', name: 'ESR (Sed Rate)', category: 'blood', price: 60, turnaround: 'Same day', description: 'Inflammation marker test', fastingRequired: false },
  { id: 'blood-group', name: 'Blood Group + Rh Factor', category: 'blood', price: 80, turnaround: 'Same day', description: 'Determine your blood type', fastingRequired: false },
  { id: 'iron-studies', name: 'Iron Studies (Serum Iron + TIBC)', category: 'blood', price: 200, turnaround: '1 day', description: 'Evaluate iron levels and anemia', fastingRequired: true },
  { id: 'tsh', name: 'TSH (Thyroid Stimulating Hormone)', category: 'hormones', price: 150, turnaround: '1 day', description: 'Screen for thyroid disorders', fastingRequired: false },
  { id: 'free-t4', name: 'Free T4', category: 'hormones', price: 130, turnaround: '1 day', description: 'Measure active thyroid hormone', fastingRequired: false },
  { id: 'testosterone', name: 'Total Testosterone', category: 'hormones', price: 200, turnaround: '2 days', description: 'Measure testosterone levels', fastingRequired: true },
  { id: 'vitamin-d-test', name: 'Vitamin D (25-OH)', category: 'hormones', price: 250, turnaround: '2 days', description: 'Check vitamin D deficiency', fastingRequired: false },
  { id: 'alt', name: 'ALT (SGPT)', category: 'liver', price: 80, turnaround: 'Same day', description: 'Liver enzyme - detects liver damage', fastingRequired: true },
  { id: 'ast', name: 'AST (SGOT)', category: 'liver', price: 80, turnaround: 'Same day', description: 'Liver and heart enzyme marker', fastingRequired: true },
  { id: 'liver-panel', name: 'Complete Liver Panel', category: 'liver', price: 350, turnaround: '1 day', description: 'ALT, AST, Bilirubin, Albumin, ALP', fastingRequired: true },
  { id: 'creatinine', name: 'Creatinine', category: 'kidney', price: 70, turnaround: 'Same day', description: 'Kidney function marker', fastingRequired: false },
  { id: 'urea', name: 'Blood Urea (BUN)', category: 'kidney', price: 60, turnaround: 'Same day', description: 'Kidney function and hydration marker', fastingRequired: false },
  { id: 'uric-acid', name: 'Uric Acid', category: 'kidney', price: 80, turnaround: 'Same day', description: 'Screen for gout and kidney stones', fastingRequired: true },
  { id: 'fbs', name: 'Fasting Blood Sugar (FBS)', category: 'diabetes', price: 50, turnaround: 'Same day', description: 'Measure glucose after fasting', fastingRequired: true },
  { id: 'hba1c', name: 'HbA1c (Glycated Hemoglobin)', category: 'diabetes', price: 180, turnaround: '1 day', description: '3-month average blood sugar level', fastingRequired: false },
  { id: 'ogtt', name: 'Oral Glucose Tolerance Test', category: 'diabetes', price: 150, turnaround: 'Same day', description: 'Diagnose diabetes and pre-diabetes', fastingRequired: true },
  { id: 'ige-total', name: 'Total IgE', category: 'allergy', price: 200, turnaround: '2 days', description: 'General allergy screening', fastingRequired: false },
  { id: 'food-allergy-panel', name: 'Food Allergy Panel (20 items)', category: 'allergy', price: 900, turnaround: '5 days', description: 'Test for common food allergens', fastingRequired: false },
  { id: 'basic-checkup', name: 'Basic Health Checkup', category: 'packages', price: 500, turnaround: '2 days', description: 'CBC, Fasting Sugar, Lipid Profile, Liver & Kidney', fastingRequired: true },
  { id: 'comprehensive-checkup', name: 'Comprehensive Checkup', category: 'packages', price: 1200, turnaround: '3 days', description: 'Full blood work, hormones, vitamins, tumor markers', fastingRequired: true },
  { id: 'cardiac-checkup', name: 'Cardiac Risk Profile', category: 'packages', price: 800, turnaround: '2 days', description: 'Lipid panel, CRP, Homocysteine, Troponin', fastingRequired: true },
];

export function getLabTestsByCategory(categoryId) {
  return labTests.filter((test) => test.category === categoryId);
}

// ============================================
// SCANS / RADIOLOGY - Dummy Data
// ============================================
export const scanCategories = [
  { id: 'xray', name: 'X-Ray', icon: '🦴' },
  { id: 'ultrasound', name: 'Ultrasound', icon: '📡' },
  { id: 'ct', name: 'CT Scan', icon: '🔬' },
  { id: 'mri', name: 'MRI', icon: '🧲' },
  { id: 'mammogram', name: 'Mammography', icon: '🩺' },
  { id: 'echo', name: 'Echocardiography', icon: '❤️' },
];

export const scanTypes = [
  { id: 'xray-chest', name: 'Chest X-Ray', category: 'xray', price: 150, turnaround: '30 minutes', description: 'Lung, heart, and rib cage imaging', preparation: 'Remove jewelry and metal objects' },
  { id: 'xray-spine', name: 'Spine X-Ray', category: 'xray', price: 200, turnaround: '30 minutes', description: 'Cervical, thoracic, or lumbar spine', preparation: 'Remove jewelry and metal objects' },
  { id: 'xray-limb', name: 'Extremity X-Ray (Arm/Leg)', category: 'xray', price: 180, turnaround: '30 minutes', description: 'Bone and joint imaging for fractures', preparation: 'Remove jewelry around the area' },
  { id: 'us-abdomen', name: 'Abdominal Ultrasound', category: 'ultrasound', price: 250, turnaround: '1 hour', description: 'Liver, gallbladder, kidneys, spleen imaging', preparation: 'Fasting 6-8 hours before scan' },
  { id: 'us-pelvis', name: 'Pelvic Ultrasound', category: 'ultrasound', price: 250, turnaround: '1 hour', description: 'Uterus, ovaries, bladder imaging', preparation: 'Full bladder required' },
  { id: 'us-thyroid', name: 'Thyroid Ultrasound', category: 'ultrasound', price: 200, turnaround: '45 minutes', description: 'Thyroid gland size and nodule evaluation', preparation: 'No special preparation' },
  { id: 'us-breast', name: 'Breast Ultrasound', category: 'ultrasound', price: 300, turnaround: '1 hour', description: 'Breast tissue evaluation and masses', preparation: 'No special preparation' },
  { id: 'ct-brain', name: 'CT Brain', category: 'ct', price: 800, turnaround: '2 hours', description: 'Brain imaging for headaches, stroke, trauma', preparation: 'May require contrast dye injection' },
  { id: 'ct-chest', name: 'CT Chest (HRCT)', category: 'ct', price: 900, turnaround: '2 hours', description: 'High-resolution lung and chest imaging', preparation: 'May require contrast dye' },
  { id: 'ct-abdomen', name: 'CT Abdomen & Pelvis', category: 'ct', price: 1200, turnaround: '3 hours', description: 'Detailed abdominal organ imaging', preparation: 'Fasting 4 hours, contrast dye may be needed' },
  { id: 'mri-brain', name: 'MRI Brain', category: 'mri', price: 1500, turnaround: '3 hours', description: 'Detailed brain soft tissue imaging', preparation: 'Remove all metal objects, 45-60 min scan' },
  { id: 'mri-spine', name: 'MRI Spine (Lumbar/Cervical)', category: 'mri', price: 1800, turnaround: '3 hours', description: 'Disc herniation, spinal cord evaluation', preparation: 'Remove all metal objects, 45-60 min scan' },
  { id: 'mri-knee', name: 'MRI Knee', category: 'mri', price: 1600, turnaround: '3 hours', description: 'Ligament, meniscus, cartilage imaging', preparation: 'Remove all metal objects, 30-45 min scan' },
  { id: 'mammogram-digital', name: 'Digital Mammogram', category: 'mammogram', price: 400, turnaround: '1 hour', description: 'Breast cancer screening', preparation: 'No deodorant or powder before test' },
  { id: 'echo-heart', name: 'Echocardiogram (2D Echo)', category: 'echo', price: 500, turnaround: '1 hour', description: 'Heart structure and function assessment', preparation: 'No special preparation' },
  { id: 'echo-stress', name: 'Stress Echocardiogram', category: 'echo', price: 900, turnaround: '2 hours', description: 'Heart function under stress conditions', preparation: 'Wear comfortable clothing' },
];

export function getScansByCategory(categoryId) {
  return scanTypes.filter((scan) => scan.category === categoryId);
}
