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
