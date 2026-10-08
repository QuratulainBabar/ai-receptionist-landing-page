export interface CallScenario {
  id: string;
  title: string;
  category: string;
  patientName: string;
  patientPhone: string;
  intent: string;
  transcript: {
    speaker: 'patient' | 'ai';
    text: string;
    timestamp: string;
  }[];
  extractedData: {
    requestedDoctor: string;
    appointmentType: string;
    preferredDate: string;
    insuranceProvider?: string;
    chiefComplaint: string;
    urgencyLevel: 'Low' | 'Moderate' | 'Urgent';
  };
  ehrAction: string;
}

export interface DoctorScheduleSlot {
  id: string;
  time: string;
  available: boolean;
  type?: string;
}

export interface DoctorProfile {
  id: string;
  name: string;
  specialty: string;
  avatar: string;
  clinic: string;
  rating: number;
  reviewsCount: number;
  availableSlotsCount: number;
}

export interface PatientRecord {
  id: string;
  name: string;
  dob: string;
  phone: string;
  insurance: string;
  policyId: string;
  lastVisit: string;
  upcomingVisit: string;
  doctor: string;
  status: 'Confirmed' | 'Pending Lab' | 'Follow-up Due';
  chiefComplaint: string;
  timeline: {
    date: string;
    event: string;
    type: 'call' | 'visit' | 'sms' | 'lab';
    note: string;
  }[];
}
