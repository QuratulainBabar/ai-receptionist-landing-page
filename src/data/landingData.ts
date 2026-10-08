import { CallScenario, DoctorProfile, PatientRecord } from '../types';

export const callScenarios: CallScenario[] = [
  {
    id: 'urgent-booking',
    title: 'New Patient Appointment',
    category: 'Appointment Booking',
    patientName: 'Sarah Jenkins',
    patientPhone: '+1 (555) 234-8901',
    intent: 'Schedule New Consultation',
    transcript: [
      {
        speaker: 'ai',
        text: 'Thank you for calling St. Jude Family Medicine. I am the clinic AI assistant. Are you a new patient or returning patient today?',
        timestamp: '00:02'
      },
      {
        speaker: 'patient',
        text: "Hi, I'm a new patient. I've had persistent migraines for two weeks and I'd like to see Dr. Chen as soon as possible.",
        timestamp: '00:08'
      },
      {
        speaker: 'ai',
        text: "I understand that must be uncomfortable, Sarah. Dr. Chen has an opening tomorrow, Thursday at 10:15 AM, or Friday at 2:00 PM. Would 10:15 AM work for you?",
        timestamp: '00:16'
      },
      {
        speaker: 'patient',
        text: 'Tomorrow at 10:15 AM is perfect. Do you take Blue Cross Blue Shield?',
        timestamp: '00:22'
      },
      {
        speaker: 'ai',
        text: "Yes, Dr. Chen is fully in-network with Blue Cross Blue Shield PPO. I have reserved tomorrow at 10:15 AM for you. I just sent a secure intake link to your mobile number.",
        timestamp: '00:31'
      }
    ],
    extractedData: {
      requestedDoctor: 'Dr. Sarah Chen, MD',
      appointmentType: 'New Patient Consultation (45 min)',
      preferredDate: 'Tomorrow, 10:15 AM',
      insuranceProvider: 'BlueCross BlueShield PPO',
      chiefComplaint: 'Persistent migraine headaches x 14 days',
      urgencyLevel: 'Moderate'
    },
    ehrAction: 'Created New Patient Chart #84912 -> Booked Slot 10:15 AM in AthenaHealth EHR'
  },
  {
    id: 'insurance-check',
    title: 'Insurance & Copay Verification',
    category: 'Insurance Verification',
    patientName: 'David Miller',
    patientPhone: '+1 (555) 678-1249',
    intent: 'Verify In-Network Coverage & Copay',
    transcript: [
      {
        speaker: 'ai',
        text: 'Hello, welcome to Metro Heart & Vascular. How may I assist you with your appointment today?',
        timestamp: '00:02'
      },
      {
        speaker: 'patient',
        text: 'Hi, I need an echocardiogram scheduled, but I want to make sure you accept Aetna Choice POS and what my specialist copay is.',
        timestamp: '00:09'
      },
      {
        speaker: 'ai',
        text: 'We are preferred providers for Aetna Choice POS II. Standard specialist copays for diagnostic imaging typically range between $30 and $50 depending on your deductible.',
        timestamp: '00:18'
      },
      {
        speaker: 'patient',
        text: "Great! Can we book with Dr. Patel for next Tuesday afternoon?",
        timestamp: '00:24'
      },
      {
        speaker: 'ai',
        text: "Absolutely. Dr. Patel is open Tuesday at 3:30 PM. I've locked that slot and verified eligibility with Aetna in real time.",
        timestamp: '00:32'
      }
    ],
    extractedData: {
      requestedDoctor: 'Dr. Michael Patel, FACC',
      appointmentType: 'Diagnostic Echocardiogram + Consult',
      preferredDate: 'Tuesday, 3:30 PM',
      insuranceProvider: 'Aetna Choice POS II (Active)',
      chiefComplaint: 'Referral for cardiac evaluation & imaging',
      urgencyLevel: 'Low'
    },
    ehrAction: 'Real-time 270/271 Eligibility Query Succeeded -> Slot confirmed in Epic'
  },
  {
    id: 'reschedule',
    title: 'Post-Op Follow-up Reschedule',
    category: 'Rescheduling & Cancellations',
    patientName: 'Elena Rostova',
    patientPhone: '+1 (555) 912-3344',
    intent: 'Reschedule Existing Encounter',
    transcript: [
      {
        speaker: 'ai',
        text: 'Good afternoon, Summit Orthopedic Center. How can I help you today?',
        timestamp: '00:02'
      },
      {
        speaker: 'patient',
        text: "Hi, I have a post-surgery knee follow-up with Dr. Harrison this Friday at 9 AM, but my work schedule changed. Can I move it to next Monday?",
        timestamp: '00:10'
      },
      {
        speaker: 'ai',
        text: 'I can certainly help you with that, Elena. Dr. Harrison has Monday at 11:30 AM or Monday at 4:15 PM available. Which time suits you best?',
        timestamp: '00:18'
      },
      {
        speaker: 'patient',
        text: '11:30 AM works much better for me.',
        timestamp: '00:23'
      },
      {
        speaker: 'ai',
        text: 'Done! Your Friday slot has been released for waiting patients, and your follow-up is confirmed for Monday at 11:30 AM. A confirmation text is on its way.',
        timestamp: '00:31'
      }
    ],
    extractedData: {
      requestedDoctor: 'Dr. James Harrison, MD',
      appointmentType: 'Post-Op Orthopedic Follow-up',
      preferredDate: 'Monday, 11:30 AM',
      insuranceProvider: 'UnitedHealthcare Choice Plus',
      chiefComplaint: 'Post-ACL repair examination',
      urgencyLevel: 'Low'
    },
    ehrAction: 'Released Friday 9:00 AM -> Re-booked Monday 11:30 AM in Cerner EHR'
  },
  {
    id: 'prescription-refill',
    title: 'Prescription Refill Request',
    category: 'Refill & Clinical Triage',
    patientName: 'Robert Vance',
    patientPhone: '+1 (555) 441-9982',
    intent: 'Medication Refill Routing',
    transcript: [
      {
        speaker: 'ai',
        text: 'Thank you for calling Oakwood Internal Medicine. How can I help you today?',
        timestamp: '00:02'
      },
      {
        speaker: 'patient',
        text: "I need a refill on my Lisinopril 20mg. My pharmacy is the CVS on Main Street.",
        timestamp: '00:08'
      },
      {
        speaker: 'ai',
        text: 'I found your active chart, Mr. Vance. Your last blood pressure check was two months ago. I have submitted the refill request directly to Dr. Chen’s electronic inbox and notified CVS Pharmacy.',
        timestamp: '00:19'
      },
      {
        speaker: 'patient',
        text: 'Thank you, that was so quick!',
        timestamp: '00:23'
      },
      {
        speaker: 'ai',
        text: 'You are very welcome. You will receive an SMS as soon as the doctor electronically signs the authorization. Have a wonderful day!',
        timestamp: '00:30'
      }
    ],
    extractedData: {
      requestedDoctor: 'Dr. Sarah Chen, MD',
      appointmentType: 'Prescription Refill Order',
      preferredDate: 'Same-day clinical inbox queue',
      insuranceProvider: 'Medicare Part B & D',
      chiefComplaint: 'Lisinopril 20mg refill - CVS Pharmacy #4218',
      urgencyLevel: 'Low'
    },
    ehrAction: 'Appended Refill Task to Dr. Chen E-Prescribe queue in eClinicalWorks'
  }
];

export const doctorsData: DoctorProfile[] = [
  {
    id: 'dr-chen',
    name: 'Dr. Sarah Chen, MD',
    specialty: 'Internal Medicine & Primary Care',
    avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300',
    clinic: 'St. Jude Health Pavilion',
    rating: 4.9,
    reviewsCount: 312,
    availableSlotsCount: 6
  },
  {
    id: 'dr-patel',
    name: 'Dr. Michael Patel, FACC',
    specialty: 'Cardiovascular Disease & Echocardiography',
    avatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=300',
    clinic: 'Metro Heart Institute',
    rating: 5.0,
    reviewsCount: 428,
    availableSlotsCount: 4
  },
  {
    id: 'dr-harrison',
    name: 'Dr. James Harrison, MD',
    specialty: 'Orthopedic Surgery & Sports Medicine',
    avatar: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=300',
    clinic: 'Summit Orthopedic Care',
    rating: 4.95,
    reviewsCount: 289,
    availableSlotsCount: 8
  }
];

export const samplePatients: PatientRecord[] = [
  {
    id: 'PT-9021',
    name: 'Marcus Vance',
    dob: '10/14/1981 (44 yrs)',
    phone: '+1 (555) 782-9012',
    insurance: 'BlueCross PPO #XY908124',
    policyId: 'GRP-99201A',
    lastVisit: 'Oct 02, 2026',
    upcomingVisit: 'Tomorrow, 09:30 AM',
    doctor: 'Dr. Sarah Chen, MD',
    status: 'Confirmed',
    chiefComplaint: 'Follow-up hypertension & cholesterol panel review',
    timeline: [
      {
        date: 'Today, 08:14 AM',
        event: 'AI Voice Receptionist Call',
        type: 'call',
        note: 'Patient called to confirm fasting requirement for lab. AI clarified 8-hour fasting protocol.'
      },
      {
        date: 'Yesterday, 04:00 PM',
        event: 'Automated Two-Way SMS Reminder',
        type: 'sms',
        note: 'Patient replied "1" to confirm 09:30 AM appointment.'
      },
      {
        date: 'Oct 02, 2026',
        event: 'Clinical In-Person Consultation',
        type: 'visit',
        note: 'Routine comprehensive exam. Ordered follow-up lipid profile.'
      }
    ]
  },
  {
    id: 'PT-8834',
    name: 'Clara Oswald-Cruz',
    dob: '05/22/1990 (36 yrs)',
    phone: '+1 (555) 431-7781',
    insurance: 'Aetna Choice POS #AT88291',
    policyId: 'GRP-33100B',
    lastVisit: 'Aug 18, 2026',
    upcomingVisit: 'Friday, 02:15 PM',
    doctor: 'Dr. Michael Patel, FACC',
    status: 'Pending Lab',
    chiefComplaint: 'Palpitations during exercise; scheduled for Holter monitor return',
    timeline: [
      {
        date: 'Today, 10:20 AM',
        event: 'AI Intake Form Completed',
        type: 'sms',
        note: 'Completed pre-visit cardiac symptom history online via secure SMS link.'
      },
      {
        date: 'Oct 05, 2026',
        event: 'AI Inbound Booking Call',
        type: 'call',
        note: 'AI Receptionist matched insurance, validated copay ($40), and booked Friday slot.'
      }
    ]
  },
  {
    id: 'PT-7649',
    name: 'Arthur Pendelton',
    dob: '12/03/1962 (63 yrs)',
    phone: '+1 (555) 893-1120',
    insurance: 'Medicare Traditional + Medigap',
    policyId: 'MED-77192-CA',
    lastVisit: 'Jul 12, 2026',
    upcomingVisit: 'Monday, 11:00 AM',
    doctor: 'Dr. James Harrison, MD',
    status: 'Follow-up Due',
    chiefComplaint: 'Bilateral knee osteoarthritis, evaluation for hyaluronic injection',
    timeline: [
      {
        date: 'Yesterday, 02:45 PM',
        event: 'AI Proactive Recall Call',
        type: 'call',
        note: 'AI Receptionist called patient regarding 6-month orthopedic follow-up; booked appointment.'
      }
    ]
  }
];

export const clinicLocations = [
  {
    id: 'loc-1',
    name: 'Downtown Medical Pavilion',
    address: '450 Sutter Street, Suite 1200, San Francisco, CA',
    doctorsCount: 8,
    dailyCalls: 382,
    automatedRate: '94.2%',
    avgResponseTime: '1.2s'
  },
  {
    id: 'loc-2',
    name: 'Westside Family Practice Center',
    address: '11800 Wilshire Blvd, Los Angeles, CA',
    doctorsCount: 6,
    dailyCalls: 294,
    automatedRate: '92.8%',
    avgResponseTime: '1.1s'
  },
  {
    id: 'loc-3',
    name: 'Northshore Pediatric & Specialty',
    address: '700 Michigan Ave, Chicago, IL',
    doctorsCount: 11,
    dailyCalls: 512,
    automatedRate: '95.1%',
    avgResponseTime: '0.9s'
  },
  {
    id: 'loc-4',
    name: 'Metropolitan Heart & Spine Network',
    address: '1240 Park Avenue, New York, NY',
    doctorsCount: 15,
    dailyCalls: 740,
    automatedRate: '93.7%',
    avgResponseTime: '1.0s'
  }
];

export const integrations = [
  {
    name: 'Epic Systems',
    category: 'EHR / EMR',
    description: 'Bi-directional patient chart sync, instant schedule locking & FHIR API connectivity.',
    type: 'Gold Partner'
  },
  {
    name: 'Cerner / Oracle Health',
    category: 'EHR / EMR',
    description: 'Real-time provider schedule lookups, direct appointment bookings & patient record sync.',
    type: 'Certified'
  },
  {
    name: 'AthenaHealth',
    category: 'EHR / EMR',
    description: 'Instant slot availability, automated patient registration & real-time insurance verification.',
    type: 'Marketplace'
  },
  {
    name: 'Kareo / Tebra',
    category: 'Practice Management',
    description: 'Seamless calendar synchronization, encounter notes, and demographic capture.',
    type: 'Direct API'
  },
  {
    name: 'eClinicalWorks',
    category: 'EHR / EMR',
    description: 'Native provider schedule reading, patient portal linking & refill task creation.',
    type: 'Direct API'
  },
  {
    name: 'Google Calendar & O365',
    category: 'Scheduling',
    description: 'Real-time calendar conflict resolution, doctor personal buffer zones & mobile sync.',
    type: 'Instant Sync'
  },
  {
    name: 'Twilio Voice & Telecom',
    category: 'Telecom & SMS',
    description: 'Carrier-grade SIP trunking, HD medical voice audio, and HIPAA-compliant SMS gateways.',
    type: 'Enterprise'
  },
  {
    name: 'Zoom for Healthcare',
    category: 'Telehealth',
    description: 'Automated telehealth link creation for virtual patient consultations.',
    type: 'Verified'
  },
  {
    name: 'Stripe Billing',
    category: 'Payments',
    description: 'Secure copay collection links sent via SMS prior to patient visits.',
    type: 'PCI DSS'
  }
];

export const faqs = [
  {
    question: "Will patients know they're talking to an AI?",
    answer: "The AI Receptionist sounds remarkably natural, empathetic, and human, with low latency (<1.1s response time). By default, healthcare ethics and compliance guidelines allow it to introduce itself transparently (e.g., 'Hello, I'm the digital assistant for Dr. Chen's clinic'). Patients overwhelmingly report feeling heard and appreciate zero hold times."
  },
  {
    question: "Can the AI Receptionist book appointments directly into our EHR/EMR?",
    answer: "Yes. The AI Receptionist integrates natively with major EHRs including Epic, AthenaHealth, Cerner, eClinicalWorks, Kareo/Tebra, NextGen, and standard calendars. It checks real-time physician availability, applies your customized scheduling rules (e.g., buffer times, new patient vs follow-up duration), and locks the slot directly."
  },
  {
    question: "Can it integrate with our existing clinic phone numbers?",
    answer: "Yes, you keep your existing phone numbers. We configure standard call forwarding (either 24/7, after-hours, or rollover when lines are busy). There is zero need to change your telephone provider or install hardware."
  },
  {
    question: "Is patient data secure and HIPAA-compliant?",
    answer: "100% HIPAA-compliant. We execute a Business Associate Agreement (BAA) with every medical practice. All voice audio and data are encrypted in transit with TLS 1.3 and at rest with AES-256. We adhere to SOC-2 Type II standards and never sell or use patient health information."
  },
  {
    question: "How long does setup take?",
    answer: "Typical onboarding takes between 3 to 7 business days. Our dedicated medical implementation team trains your AI on your specific doctor schedules, appointment durations, accepted insurance plans, and FAQs. We test thoroughly before switching live."
  },
  {
    question: "Can human staff intervene or take over calls in real time?",
    answer: "Absolutely. If a patient requests to speak with a human or has a complex clinical need, the AI warm-transfers the call to your front desk or triage nurse with a live on-screen summary of the caller's identity and intent."
  },
  {
    question: "How does the AI handle medical emergencies or urgent symptoms?",
    answer: "Our medical safety protocol strictly detects red-flag clinical keywords (e.g., chest pain, difficulty breathing, stroke symptoms, severe bleeding). The AI Receptionist immediately advises the caller to hang up and dial 911 or proceed to the nearest emergency room, while logging the incident."
  },
  {
    question: "What languages does the AI receptionist support?",
    answer: "The AI Receptionist provides fluent, accent-adaptive voice support in English, Spanish, Mandarin, French, and Vietnamese. It automatically detects the caller's spoken language and responds seamlessly in their native tongue."
  }
];
