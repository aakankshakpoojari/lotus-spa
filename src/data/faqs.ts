import type { FaqItem } from '../types';

export const FAQS: FaqItem[] = [
  {
    id: 'first-visit',
    question: 'What should I expect during my first visit to Lotus?',
    answer: 'We invite you to arrive 15 minutes before your scheduled ritual. You will be greeted with a warm cup of herbal infusion and guided to complete a brief lifestyle preference profile. Your practitioner will explain your selected ritual, verify any sensitivities, and escort you to a temperature-controlled sanctuary suite.',
    category: 'preparation'
  },
  {
    id: 'choosing-treatment',
    question: 'How do I choose the most suitable treatment for my needs?',
    answer: 'You can explore our interactive Wellness Guide on this website, which recommends rituals based on your time, muscle needs, and tactile preferences. Alternatively, our sanctuary concierge is delighted to offer personalized advice based on your current physical rhythm.',
    category: 'wellness'
  },
  {
    id: 'attire',
    question: 'What should I wear to my appointment?',
    answer: 'Please wear comfortable, loose-fitting clothing that you do not mind exposing to botanical oils. We provide freshly laundered organic cotton robes, disposable undergarments, and slippers. For rituals involving hair oil like Shirodhara, we provide soft head wraps so you can allow the herbal oils to absorb post-treatment.',
    category: 'preparation'
  },
  {
    id: 'duration',
    question: 'Can I customize or extend a particular treatment duration?',
    answer: 'Yes. Most body rituals can be tailored with add-ons such as an extended 30-minute Shirodhara or an additional herbal steam bath (Swedana). Simply let us know your preferences during your visit request.',
    category: 'treatments'
  },
  {
    id: 'booking-request',
    question: 'How does the appointment request system work?',
    answer: 'Our online form submits your preferred date, time, and ritual directly to our sanctuary desk. Since we maintain limited daily sessions to preserve peaceful ambiance, our concierge confirms your specific time slot via WhatsApp or telephone within a few hours.',
    category: 'booking'
  },
  {
    id: 'health-concerns',
    question: 'How can I contact the spa regarding specific wellness or health concerns?',
    answer: 'Our therapies are restorative holistic wellness rituals and are not intended as medical treatments. If you are pregnant, recovering from recent surgery, or taking cardiovascular medication, please notify our concierge during your booking request so we can ensure the selected treatment is gentle and appropriate.',
    category: 'wellness'
  }
];
