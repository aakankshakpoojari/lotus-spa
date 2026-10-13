import type { Treatment } from '../types';

export const TREATMENTS: Treatment[] = [
  {
    id: 'abhyanga',
    name: 'Abhyanga Full-Body Ritual',
    sanskritName: 'अभ्यङ्ग (Abhyaṅga)',
    category: 'Body Therapy',
    shortDescription: 'Warm, herb-infused sesame oil synchronized body massage that dissolves fatigue and restores neuromuscular balance.',
    fullDescription: 'Abhyanga is the cornerstone of classical Ayurvedic bodywork. Warm herbal oils custom-blended with Bala, Ashwagandha, and Sesame are applied with rhythmic, flowing strokes aligned with energy pathways (Nadis). The gentle heat promotes lymphatic flow, nourishes deep tissues, and encourages profound cellular restoration.',
    durationMinutes: 75,
    priceINR: 4200,
    imageUrl: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1200&q=85',
    accentFlower: '/images/f1.png',
    benefits: [
      'Encourages lymphatic circulation and natural detoxification',
      'Relieves neuromuscular stiffness and physical fatigue',
      'Deeply conditions dehydrated skin with medicinal lipids',
      'Calms an agitated Vata dosha and promotes restorative sleep'
    ],
    herbalIngredients: ['Cold-pressed Sesame Oil', 'Ashwagandha Root', 'Bala (Sida cordifolia)', 'Camphor Essence'],
    bestFor: 'Those experiencing general fatigue, dry skin, muscle tension, or restless sleep.',
    idealTime: 'Morning or late afternoon'
  },
  {
    id: 'shirodhara',
    name: 'Shirodhara Mind Sanctuary',
    sanskritName: 'शिरोधारा (Śirodhārā)',
    category: 'Deep Relaxation',
    shortDescription: 'A continuous, rhythmic stream of warm herbalized medicated oil poured across the forehead to still mental chatter.',
    fullDescription: 'Often called the crown jewel of Ayurvedic relaxation, Shirodhara involves a continuous, rhythmic stream of warm medicated oil suspended above the third eye center (Ajna chakra). As the warm herbal oil cascades steadily across the forehead and temples, brainwaves soften into meditative theta states, releasing deep-seated mental tension and emotional fatigue.',
    durationMinutes: 60,
    priceINR: 4800,
    imageUrl: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=1200&q=85',
    accentFlower: '/images/f2.png',
    benefits: [
      'Profound nervous system relaxation and stress dissolution',
      'Supports healthy circadian rhythms and deep insomnia relief',
      'Nourishes the scalp, hair follicles, and cranial nerves',
      'Enhances mental clarity, focus, and quiet introspection'
    ],
    herbalIngredients: ['Brahmi Medicated Oil', 'Gotu Kola', 'Shankhpushpi', 'Organic Virgin Coconut Oil'],
    bestFor: 'Busy minds, digital burnout, chronic stress, or disturbed sleep patterns.',
    idealTime: 'Afternoon or early evening'
  },
  {
    id: 'herbal-potli',
    name: 'Herbal Potli Poultice Massage',
    sanskritName: 'किऴि / स्वेद (Kizhi Svedana)',
    category: 'Body Therapy',
    shortDescription: 'Warm botanical poultices filled with therapeutic dried herbs dipped in medicated oil and pressed into tense muscle groups.',
    fullDescription: 'Cotton poultices packed with dried therapeutic leaves, turmeric, ginger, rock salt, and aromatic botanicals are warmed in medicated herbal decoctions. The warm bundles are rhythmically tapped and massaged into stiff joints and strained muscles, combining deep heat therapy with the transdermal absorption of active plant compounds.',
    durationMinutes: 90,
    priceINR: 5200,
    imageUrl: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=85',
    accentFlower: '/images/f3.png',
    benefits: [
      'Targeted relief for stiff shoulders, lower back, and joints',
      'Thermo-therapy improves local circulation and mobility',
      'Reduces inflammatory soreness after physical exertion',
      'Releases stagnation within tight fascial networks'
    ],
    herbalIngredients: ['Nirgundi Leaves', 'Wild Turmeric', 'Castor Leaves', 'Himalayan Pink Salt', 'Mahanarayan Oil'],
    bestFor: 'Athletes, desk workers with chronic upper-back stiffness, and joint discomfort.',
    idealTime: 'Any time of day'
  },
  {
    id: 'ayurvedic-facial',
    name: 'Mukha Lepam Botanical Facial',
    sanskritName: 'मुख लेपनम् (Mukha Lepanam)',
    category: 'Botanical Skincare',
    shortDescription: 'An organic facial ritual with saffron kumkumadi nectar, sandalwood paste, and delicate marma point stimulation.',
    fullDescription: 'Mukha Lepam is an exquisite beauty ritual that treats the skin as a reflection of inner vitality. The experience begins with a gentle cleansing using raw milk and rose water, followed by an enzymatic botanical scrub. Pure Kumkumadi saffron oil is massaged into facial Marma points to sculpt and stimulate microcirculation, topped with a customized herbal mask of wild turmeric and chandan.',
    durationMinutes: 60,
    priceINR: 3800,
    imageUrl: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=85',
    accentFlower: '/images/f3.png',
    benefits: [
      'Restores luminous cellular glow without synthetic chemicals',
      'Gentle facial Marma acupressure releases jaw and brow tension',
      'Refines skin texture with pure Ayurvedic botanicals',
      'Hydrates and balances natural sebum production'
    ],
    herbalIngredients: ['Kumkumadi Saffron Elixir', 'White Sandalwood (Chandan)', 'Wild Kasthuri Manjal', 'Damask Rose Hydrosol'],
    bestFor: 'Dull complexion, environmental pollution defense, or gentle self-care rejuvenation.',
    idealTime: 'Morning or afternoon'
  },
  {
    id: 'foot-ritual',
    name: 'Padabhyanga Bronze Foot Ceremony',
    sanskritName: 'पादाभ्यङ्ग (Pādābhyaṅga)',
    category: 'Specialized Ritual',
    shortDescription: 'A soothing thermal foot bath infused with fresh jasmine petals, followed by bronze Kasa bowl reflexology.',
    fullDescription: 'According to Ayurveda, the feet house reflex zones connected directly to the nervous system and ocular meridians. The ritual commences with a warm water immersion sprinkled with fresh flowers and sacred salts. We then massage the feet, calves, and soles using warm ghee and an artisan Kasa (bronze) bowl that draws excess metabolic heat from the body.',
    durationMinutes: 45,
    priceINR: 2600,
    imageUrl: 'https://images.unsplash.com/photo-1519735777090-ec97162dc266?auto=format&fit=crop&w=1200&q=85',
    accentFlower: '/images/f1.png',
    benefits: [
      'Draws excess internal body heat (Pitta) through the soles',
      'Instantly relieves tired, heavy, and swollen legs',
      'Deeply grounds scattered mental energy and anxiety',
      'Prepares the body for deep, peaceful nightly rest'
    ],
    herbalIngredients: ['Pure Cow Ghee', 'Fresh Jasmine Flowers', 'Manjistha Root', 'Epsom & Rock Salt'],
    bestFor: 'Those on their feet all day, frequent travelers, or a quick midday restorative break.',
    idealTime: 'Late afternoon or evening'
  },
  {
    id: 'signature-relaxation',
    name: 'Lotus Samatva Signature Immersion',
    sanskritName: 'समत्व (Samatva - Equilibrium)',
    category: 'Deep Relaxation',
    shortDescription: 'Our hallmark sanctuary synthesis: full-body herbal oil anointing combined with a soothing Shirodhara finish.',
    fullDescription: 'The definitive Lotus Ayurvedic sanctuary experience. Samatva represents holistic equilibrium of body, mind, and spirit. Beginning with an extensive 60-minute warm herbal Abhyanga to unburden the muscular body, the journey seamlessly transitions into a 30-minute meditative Shirodhara oil stream. Concludes with a warm herbal steam wrap.',
    durationMinutes: 105,
    priceINR: 6500,
    imageUrl: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=1200&q=85',
    accentFlower: '/images/f2.png',
    benefits: [
      'Complete physical and psycho-spiritual rejuvenation',
      'Synergistic combination of neuromuscular and nervous system treatments',
      'Deep cellular rehydration through warm herbal steam integration',
      'Leaves the guest in a state of tranquil, luminous stillness'
    ],
    herbalIngredients: ['Custom Dosha-Specific Oil Blend', 'Brahmi & Shankhpushpi', 'Ashwagandha', 'Cardamom & Rose'],
    bestFor: 'Those seeking the ultimate all-encompassing wellness reset and complete immersion.',
    idealTime: 'Morning or early afternoon'
  }
];
