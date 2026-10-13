import type { QuizAnswers, QuizQuestion, QuizRecommendation } from '../types';
import { TREATMENTS } from './treatments';

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    title: 'What are you seeking most today?',
    subtitle: 'Select the primary intention that aligns with your current rhythm and well-being.',
    options: [
      {
        id: 'relaxation',
        label: 'Relaxation and unwinding',
        description: 'Quiet mental noise, release chronic overwhelm, and settle deeply into calm.',
        tag: 'Mind & Nervous System'
      },
      {
        id: 'tension',
        label: 'Relief from everyday muscle tension',
        description: 'Soothe stubborn physical tightness, stiff joints, and fatigue from physical strain.',
        tag: 'Musculoskeletal Relief'
      },
      {
        id: 'skincare',
        label: 'A botanical skincare experience',
        description: 'Revitalize skin vitality with pure plant elixirs, gentle facial marma, and herbal masks.',
        tag: 'Botanical Radiance'
      },
      {
        id: 'traditional',
        label: 'A traditional Ayurvedic ritual',
        description: 'Experience classical therapies practiced for millennia with authentic warm herbalized oils.',
        tag: 'Classical Heritage'
      },
      {
        id: 'short-break',
        label: 'A short wellness break',
        description: 'A focused, time-efficient restorative session to ground and recharge between duties.',
        tag: 'Express Reset'
      }
    ]
  },
  {
    id: 2,
    title: 'How much time do you have for your visit?',
    subtitle: 'Each ritual is paced intentionally, ensuring you never feel rushed or hurried.',
    options: [
      {
        id: '30min',
        label: '30 to 45 minutes',
        description: 'A focused, targeted therapy designed to refresh without a long schedule commitment.',
        tag: 'Targeted Pace'
      },
      {
        id: '60min',
        label: '60 to 75 minutes',
        description: 'Our standard ritual duration allowing deep relaxation and balanced physiological unwinding.',
        tag: 'Balanced Immersion'
      },
      {
        id: '90min',
        label: '90 minutes or more',
        description: 'An expansive sanctuary journey allowing multi-phase treatments and contemplative rest.',
        tag: 'Full Sanctuary Immersion'
      }
    ]
  },
  {
    id: 3,
    title: 'What kind of tactile experience do you prefer?',
    subtitle: 'From delicate featherlight touches to warm rhythmic herbal warmth.',
    options: [
      {
        id: 'gentle',
        label: 'Gentle and calming',
        description: 'Light, meditative pressure designed to lull the nervous system into restful serenity.',
        tag: 'Subtle & Soothing'
      },
      {
        id: 'warm-oils',
        label: 'Warm oils and traditional rituals',
        description: 'Generous warm herbal oils, synchronized strokes, and traditional earthen warmth.',
        tag: 'Deeply Nourishing'
      },
      {
        id: 'skincare-focus',
        label: 'A skincare-focused experience',
        description: 'Facial massage, botanical hydrosols, botanical clays, and radiant botanical hydration.',
        tag: 'Nourishing Complexion'
      },
      {
        id: 'open',
        label: "I'm open to suggestions",
        description: 'Let our Ayurvedic wellness practitioners guide the ideal sensory therapy for you.',
        tag: 'Curated by Practitioner'
      }
    ]
  },
  {
    id: 4,
    title: 'Have you visited Lotus Ayurvedic Spa before?',
    subtitle: 'This helps our therapists prepare your welcome consultation and oil customization.',
    options: [
      {
        id: 'first-time',
        label: 'This is my first visit',
        description: 'Welcome. We will provide a brief introductory herbal tea and dosha preference orientation.',
        tag: 'New Sanctuary Guest'
      },
      {
        id: 'returning',
        label: 'I have visited before',
        description: 'Welcome back. We will review your sanctuary preferences and deepen your ritual journey.',
        tag: 'Returning Guest'
      }
    ]
  }
];

export function determineRecommendation(answers: QuizAnswers): QuizRecommendation {
  const { need, timeAvailable, experienceType } = answers;

  // Decision matrix based on answers
  if (need === 'skincare' || experienceType === 'skincare-focus') {
    const primary = TREATMENTS.find(t => t.id === 'ayurvedic-facial') || TREATMENTS[3];
    const alts = [
      TREATMENTS.find(t => t.id === 'abhyanga')!,
      TREATMENTS.find(t => t.id === 'foot-ritual')!
    ];
    return {
      primaryTreatment: primary,
      matchReason: 'Your preference for botanical skincare and gentle nourishment makes Mukha Lepam ideal. Its pure saffron oils and gentle Marma facial stimulation restore luminous vitality without invasive techniques.',
      alternativeTreatments: alts
    };
  }

  if (need === 'short-break' || timeAvailable === '30min') {
    const primary = TREATMENTS.find(t => t.id === 'foot-ritual') || TREATMENTS[4];
    const alts = [
      TREATMENTS.find(t => t.id === 'shirodhara')!,
      TREATMENTS.find(t => t.id === 'abhyanga')!
    ];
    return {
      primaryTreatment: primary,
      matchReason: 'For your shorter timeframe, the Padabhyanga Bronze Foot Ceremony delivers concentrated grounding benefits in 45 minutes, drawing systemic heat away from tired limbs while calming the mind.',
      alternativeTreatments: alts
    };
  }

  if (need === 'tension') {
    const primary = TREATMENTS.find(t => t.id === 'herbal-potli') || TREATMENTS[2];
    const alts = [
      TREATMENTS.find(t => t.id === 'abhyanga')!,
      TREATMENTS.find(t => t.id === 'signature-relaxation')!
    ];
    return {
      primaryTreatment: primary,
      matchReason: 'Your goal of addressing muscular tension pairs naturally with the Herbal Potli Massage. Warm herbal poultices and medicated oils penetrate stiff connective tissue to relieve knots and restore effortless movement.',
      alternativeTreatments: alts
    };
  }

  if (timeAvailable === '90min' || (need === 'traditional' && experienceType === 'warm-oils')) {
    const primary = TREATMENTS.find(t => t.id === 'signature-relaxation') || TREATMENTS[5];
    const alts = [
      TREATMENTS.find(t => t.id === 'abhyanga')!,
      TREATMENTS.find(t => t.id === 'shirodhara')!
    ];
    return {
      primaryTreatment: primary,
      matchReason: 'With generous time and a desire for authentic traditional therapy, the Lotus Samatva Signature Immersion combines full-body herbal Abhyanga with Shirodhara oil flow for complete neuromuscular and mental equilibrium.',
      alternativeTreatments: alts
    };
  }

  if (need === 'relaxation' || experienceType === 'gentle') {
    const primary = TREATMENTS.find(t => t.id === 'shirodhara') || TREATMENTS[1];
    const alts = [
      TREATMENTS.find(t => t.id === 'abhyanga')!,
      TREATMENTS.find(t => t.id === 'signature-relaxation')!
    ];
    return {
      primaryTreatment: primary,
      matchReason: 'For stilling a busy mind and unwinding stress, Shirodhara is our most revered therapy. The continuous warm herbal oil stream gently guides your brainwaves into deep, meditative tranquility.',
      alternativeTreatments: alts
    };
  }

  // Default to foundational Abhyanga
  const primary = TREATMENTS.find(t => t.id === 'abhyanga') || TREATMENTS[0];
  const alts = [
    TREATMENTS.find(t => t.id === 'shirodhara')!,
    TREATMENTS.find(t => t.id === 'herbal-potli')!
  ];
  return {
    primaryTreatment: primary,
    matchReason: 'The Abhyanga Full-Body Ritual is the classical foundation of Ayurvedic wellness. Synchronized warm sesame herbal oil strokes calm physical fatigue, nourish deep tissues, and re-establish your natural vitality.',
    alternativeTreatments: alts
  };
}
