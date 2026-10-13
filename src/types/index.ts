export interface Treatment {
  id: string;
  name: string;
  sanskritName: string;
  category: 'Body Therapy' | 'Deep Relaxation' | 'Botanical Skincare' | 'Specialized Ritual';
  shortDescription: string;
  fullDescription: string;
  durationMinutes: number;
  priceINR: number;
  imageUrl: string;
  accentFlower?: string;
  benefits: string[];
  herbalIngredients: string[];
  bestFor: string;
  idealTime: string;
}

export interface QuizQuestion {
  id: number;
  title: string;
  subtitle: string;
  options: {
    id: string;
    label: string;
    description: string;
    iconName?: string;
    tag?: string;
  }[];
}

export interface QuizAnswers {
  need: string;
  timeAvailable: string;
  experienceType: string;
  hasVisited: string;
}

export interface QuizRecommendation {
  primaryTreatment: Treatment;
  matchReason: string;
  alternativeTreatments: Treatment[];
}

export interface BookingFormData {
  treatmentId: string;
  treatmentName: string;
  date: string;
  timeSlot: string;
  duration: number;
  fullName: string;
  email: string;
  phone: string;
  specialRequests: string;
  isFirstVisit: boolean;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  treatmentName: string;
  location: string;
  date: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'preparation' | 'treatments' | 'booking' | 'wellness';
}
