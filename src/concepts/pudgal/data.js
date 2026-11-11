/**
 * Canonical Data & Classical References for Pudgala Chatushthaya Lab
 * (Vicāra Maṇḍapa / विचार मण्डप)
 */

export const LAB_MODULES = [
  {
    id: 'gunas',
    title: 'Chatuṣṭhaya Inspector',
    devanagari: 'चतुष्टय गुण',
    subtitle: 'The 4 Inseparable Qualities of Matter',
    icon: '✦'
  },
  {
    id: 'paramanu-skandha',
    title: 'Paramāṇu & Skandha',
    devanagari: 'परमाणु एवं स्कन्ध',
    subtitle: 'Atomic Two-Touch & Aggregation',
    icon: '⚛'
  },
  {
    id: 'rasa-dietary',
    title: 'Rasa & Bhojana',
    devanagari: 'रस एवं आहार विवेक',
    subtitle: 'Taste, Ahimsa & Sensory Restraint',
    icon: '🥣'
  }
];

export const GUNAS_DATA = {
  varna: {
    id: 'varna',
    name: 'Varṇa',
    devanagari: 'वर्ण',
    english: 'Color / Visual Form',
    sutra: 'Pannavaṇā Sūtra Pada 17; Sarvārthasiddhi 5.23',
    description: 'Varṇa is the visual, optical quality inherent to all Pudgala. Canonical scriptures establish exactly five fundamental colors. All other visible shades arise as compound transformations (Pariṇāma) in macroscopic aggregates.',
    subtypes: [
      {
        id: 'krishna',
        name: 'Kṛṣṇa',
        devanagari: 'कृष्ण',
        english: 'Black',
        hex: '#1c1917',
        borderHex: '#44403c',
        textContrast: '#fafaf9',
        archetype: 'Charcoal, obsidian, dark rain cloud',
        canonicalNote: 'Primary canonical color (Pannavaṇā Sūtra 17: "काले")'
      },
      {
        id: 'nila',
        name: 'Nīla',
        devanagari: 'नील',
        english: 'Blue / Indigo',
        hex: '#1e3a8a',
        borderHex: '#3b82f6',
        textContrast: '#eff6ff',
        archetype: 'Deep lapis lazuli, sapphire, peacock neck',
        canonicalNote: 'Primary canonical color (Pannavaṇā Sūtra 17: "नीले")'
      },
      {
        id: 'rakta',
        name: 'Rakta / Lohita',
        devanagari: 'रक्त / लोहित',
        english: 'Red',
        hex: '#b91c1c',
        borderHex: '#ef4444',
        textContrast: '#fef2f2',
        archetype: 'Ruby, hibiscus blossom, vermilion',
        canonicalNote: 'Primary canonical color (Pannavaṇā Sūtra 17: "लोहिए")'
      },
      {
        id: 'pita',
        name: 'Pīta / Hāridra',
        devanagari: 'पीत / हारिद्र',
        english: 'Yellow',
        hex: '#d97706',
        borderHex: '#f59e0b',
        textContrast: '#fffbeb',
        archetype: 'Natural turmeric, pure gold, champaka flower',
        canonicalNote: 'Primary canonical color (Pannavaṇā Sūtra 17: "हालिद्दे")'
      },
      {
        id: 'shukla',
        name: 'Śukla / Śveta',
        devanagari: 'शुक्ल / श्वेत',
        english: 'White',
        hex: '#f8fafc',
        borderHex: '#cbd5e1',
        textContrast: '#0f172a',
        archetype: 'Pure conch shell, autumn cloud, mountain snow',
        canonicalNote: 'Primary canonical color (Pannavaṇā Sūtra 17: "सुक्किले")'
      }
    ]
  },
  rasa: {
    id: 'rasa',
    name: 'Rasa',
    devanagari: 'रस',
    english: 'Taste / Flavor',
    sutra: 'Tattvārtha Sūtra 5.23; Sarvārthasiddhi 5.23',
    description: 'Rasa represents the gustatory property of matter. While Tattvārtha Sūtra 5.23 establishes Rasa as an inherent quality, its classical commentary Sarvārthasiddhi explicitly enumerates five primary tastes.',
    subtypes: [
      {
        id: 'tikta',
        name: 'Tikta',
        devanagari: 'तिक्त',
        english: 'Bitter',
        archetype: 'Neem leaf (निम्बा), Chirata (चिरायता)',
        commentaryRef: 'Sarvārthasiddhi on TS 5.23 ("तिक्तः")',
        description: 'Pungent, cleansing bitterness that dampens palate craving and quiets bodily heat.'
      },
      {
        id: 'katuka',
        name: 'Kaṭuka / Kaṭu',
        devanagari: 'कटुक / कटु',
        english: 'Pungent / Acrid',
        archetype: 'Black pepper (मरिच), Dry ginger (शुण्ठी)',
        commentaryRef: 'Sarvārthasiddhi on TS 5.23 ("कटुकः")',
        description: 'Sharp, fiery sharpness that stimulates the tongue and senses.'
      },
      {
        id: 'kashaya',
        name: 'Kaṣāya',
        devanagari: 'कषाय',
        english: 'Astringent',
        archetype: 'Myrobalan (हरीतकी / हरड़), Amla (आमलकी)',
        commentaryRef: 'Sarvārthasiddhi on TS 5.23 ("कषायो")',
        description: 'Drying, contracting taste that draws tissues together.'
      },
      {
        id: 'amla',
        name: 'Amla',
        devanagari: 'अम्ल',
        english: 'Sour',
        archetype: 'Raw mango (आम्र), Tamarind (तिन्तिडी)',
        commentaryRef: 'Sarvārthasiddhi on TS 5.23 ("अम्लो")',
        description: 'Tart, salivating acidity arising naturally in unripened fruit.'
      },
      {
        id: 'madhura',
        name: 'Madhura',
        devanagari: 'मधुर',
        english: 'Sweet',
        archetype: 'Fresh sugarcane (इक्षु), Pure jaggery (गुड)',
        commentaryRef: 'Sarvārthasiddhi on TS 5.23 ("मधुर इति")',
        description: 'Rich, soothing sweetness to which living beings most readily develop attachment.'
      }
    ],
    lavanaNote: 'Doctrinal Note: Unlike Āyurveda which lists six rasas by including salt (Lavaṇa), classical Jain texts restrict primary rasas to five. The status of salt as a compound modification (Pariṇāma) is discussed in commentarial exegesis rather than in root sūtras, and remains marked for exact textual confirmation.'
  },
  gandha: {
    id: 'gandha',
    name: 'Gandha',
    devanagari: 'गन्ध',
    english: 'Smell / Odor',
    sutra: 'Pannavaṇā Sūtra Pada 17; Sarvārthasiddhi 5.23',
    description: 'Gandha represents the olfactory property of matter, classified by its intrinsic nature of being agreeable or disagreeable to the olfactory faculty.',
    subtypes: [
      {
        id: 'surabhi',
        name: 'Surabhi-gandha',
        devanagari: 'सुरभिगन्ध',
        english: 'Fragrant / Agreeable Odor',
        archetype: 'Fresh sandalwood paste (चन्दन), Rain on dry earth, Jasmine blossoms',
        commentaryRef: 'Sarvārthasiddhi on TS 5.23 ("सुरभिरसुरभिश्चेति द्विविधः")',
        description: 'Pleasant, harmonious fragrance that calms the mind and accompanies auspicious environments.'
      },
      {
        id: 'durabhi',
        name: 'Durabhi-gandha / Asurabhi',
        devanagari: 'दुरभिगन्ध / असुरभि',
        english: 'Foul / Disagreeable Odor',
        archetype: 'Decaying organic matter, stale water, unwholesome fermentation',
        commentaryRef: 'Sarvārthasiddhi on TS 5.23',
        description: 'Unpleasant, foul odor signaling decay, stagnation, or harm.'
      }
    ]
  },
  sparsha: {
    id: 'sparsha',
    name: 'Sparśa',
    devanagari: 'स्पर्श',
    english: 'Touch / Tactile Quality',
    sutra: 'Tattvārtha Sūtra 5.23; Sarvārthasiddhi 5.23',
    description: 'Sparśa represents the tactile and structural property of Pudgala. Jain philosophy enumerates eight distinct tactile qualities arranged into four traditional functional pairs.',
    pairs: [
      {
        id: 'thermal',
        pairName: 'Thermal Pair',
        devanagari: 'शीत-उष्ण युगल',
        category: 'Inherent to both single Paramāṇu and Skandha',
        items: [
          {
            id: 'shita',
            name: 'Śīta',
            devanagari: 'शीत',
            english: 'Cold',
            nature: 'Cooling, absorbent thermal quality'
          },
          {
            id: 'ushna',
            name: 'Uṣṇa',
            devanagari: 'उष्ण',
            english: 'Hot',
            nature: 'Warming, radiating thermal quality'
          }
        ]
      },
      {
        id: 'cohesive',
        pairName: 'Cohesive / Binding Pair',
        devanagari: 'स्निग्ध-रूक्ष युगल',
        category: 'Inherent to both single Paramāṇu and Skandha (governs bonding)',
        items: [
          {
            id: 'snigdha',
            name: 'Snigdha',
            devanagari: 'स्निग्ध',
            english: 'Smooth / Unctuous / Cohesive',
            nature: 'Oily, adhesive quality that facilitates binding between particles'
          },
          {
            id: 'ruksha',
            name: 'Rūkṣa',
            devanagari: 'रूक्ष',
            english: 'Rough / Dry',
            nature: 'Dry, non-cohesive quality that resists cohesion'
          }
        ]
      },
      {
        id: 'density',
        pairName: 'Heaviness-Lightness Pair',
        devanagari: 'गुरु-लघु युगल',
        category: 'Manifests in composite aggregates (Skandha); Paramāṇu is Agurulaghu',
        items: [
          {
            id: 'guru',
            name: 'Guru',
            devanagari: 'गुरु',
            english: 'Heavy / Weighty',
            nature: 'Downward-falling tendency manifest in dense physical bodies'
          },
          {
            id: 'laghu',
            name: 'Laghu',
            devanagari: 'लघु',
            english: 'Light / Buoyant',
            nature: 'Upward-rising or floating tendency manifest in subtle bodies'
          }
        ]
      },
      {
        id: 'structural',
        pairName: 'Softness-Hardness Pair',
        devanagari: 'मृदु-कठिन युगल',
        category: 'Manifests in composite aggregates (Skandha); absent in single Paramāṇu',
        items: [
          {
            id: 'mridu',
            name: 'Mṛdu',
            devanagari: 'मृदु',
            english: 'Soft / Yielding',
            nature: 'Yielding, pliable surface trait in composite bodies'
          },
          {
            id: 'kathina',
            name: 'Kaṭhina',
            devanagari: 'कठिन',
            english: 'Hard / Firm',
            nature: 'Rigid, non-yielding surface resistance in composite bodies'
          }
        ]
      }
    ]
  }
};

export const PARAMANU_COMBINATIONS = [
  {
    id: 'shita-snigdha',
    thermal: 'shita',
    cohesive: 'snigdha',
    title: 'Śīta-Snigdha',
    devanagari: 'शीत-स्निग्ध',
    english: 'Cold & Smooth/Unctuous',
    note: 'Cooling thermal state coupled with cohesive bonding capacity.'
  },
  {
    id: 'shita-ruksha',
    thermal: 'shita',
    cohesive: 'ruksha',
    title: 'Śīta-Rūkṣa',
    devanagari: 'शीत-रूक्ष',
    english: 'Cold & Rough/Dry',
    note: 'Cooling thermal state coupled with dry, non-adhesive texture.'
  },
  {
    id: 'ushna-snigdha',
    thermal: 'ushna',
    cohesive: 'snigdha',
    title: 'Uṣṇa-Snigdha',
    devanagari: 'उष्ण-स्निग्ध',
    english: 'Hot & Smooth/Unctuous',
    note: 'Warm thermal state coupled with cohesive bonding capacity.'
  },
  {
    id: 'ushna-ruksha',
    thermal: 'ushna',
    cohesive: 'ruksha',
    title: 'Uṣṇa-Rūkṣa',
    devanagari: 'उष्ण-रूक्ष',
    english: 'Hot & Rough/Dry',
    note: 'Warm thermal state coupled with dry, non-adhesive texture.'
  }
];

export const BOTANICAL_EXAMPLES = [
  {
    id: 'radish',
    name: 'Radish',
    devanagari: 'मूलक / मूली',
    sanskritName: 'Mūlaka',
    category: 'sadharana',
    categoryLabel: 'Sādhāraṇa Vanaspatikāya (Anantakāya)',
    statusLabel: 'Explicitly established in classical texts (Daśavaikālika 8.16, Jīvavicāra 19)',
    soulRatio: '1 Shared Body = Infinite Souls (Ananta Jīva)',
    criteriaMatch: 'Underground tuber, concealed veins (Gūḍhasira), smooth fracture (Samabhaṅga), continuous sprouting from nodes.',
    reason: 'Uprooting the root matrix destroys the collective organism and causes injury to infinite residing souls.'
  },
  {
    id: 'garlic',
    name: 'Garlic',
    devanagari: 'लशुन / लहसुन',
    sanskritName: 'Laśuna',
    category: 'sadharana',
    categoryLabel: 'Sādhāraṇa Vanaspatikāya (Anantakāya)',
    statusLabel: 'Explicitly established in classical texts (Daśavaikālika 8.16, Ācārāṅga 2.1.8)',
    soulRatio: '1 Shared Body = Infinite Souls (Ananta Jīva)',
    criteriaMatch: 'Subterranean bulb with shared cloves, unexposed veins, collective regeneration.',
    reason: 'Strictly avoided by both monks and householders due to infinite soul embodiment.'
  },
  {
    id: 'ginger',
    name: 'Fresh Green Ginger',
    devanagari: 'आर्द्रक / अदरक',
    sanskritName: 'Ārdraka / Alla',
    category: 'sadharana',
    categoryLabel: 'Sādhāraṇa Vanaspatikāya (Anantakāya)',
    statusLabel: 'Explicitly established in classical texts (Jīvavicāra 19, Pravacanasāroddhāra 851)',
    soulRatio: '1 Shared Body = Infinite Souls (Ananta Jīva)',
    criteriaMatch: 'Underground rhizome sprouting endlessly from eyes without central stem division.',
    reason: 'Fresh ginger is anantakāya; completely dried ginger (Śuṇṭhī) is treated separately when thoroughly dried.'
  },
  {
    id: 'yam',
    name: 'Elephant Foot Yam',
    devanagari: 'सूरण / जिमीकंद',
    sanskritName: 'Sūraṇa',
    category: 'sadharana',
    categoryLabel: 'Sādhāraṇa Vanaspatikāya (Anantakāya)',
    statusLabel: 'Explicitly established in classical texts (Pravacanasāroddhāra 851, Jīvavicāra 19)',
    soulRatio: '1 Shared Body = Infinite Souls (Ananta Jīva)',
    criteriaMatch: 'Massive underground corm that regenerates indefinitely from cut fragments.',
    reason: 'Traditional archetype of Anantakāya with infinite souls sharing a single flesh.'
  },
  {
    id: 'potato',
    name: 'Modern Potato (Solanum tuberosum)',
    devanagari: 'आलू (आधुनिक आलू)',
    sanskritName: 'Āluka (contemporary application)',
    category: 'sadharana',
    categoryLabel: 'Sādhāraṇa Vanaspatikāya (Anantakāya)',
    statusLabel: 'Contemporary illustrative application of traditional Jīvavicāra criteria (Gāthā 18); not an ancient scriptural mention',
    soulRatio: '1 Shared Body = Infinite Souls (Ananta Jīva)',
    criteriaMatch: 'Underground stem tuber, uniform flesh without fibrous ribs, smooth breakage, eye-bud regeneration.',
    reason: 'Introduced to India in the 16th–17th century; classified under Kand-mool by applying canonical botanical tests.'
  },
  {
    id: 'wheat',
    name: 'Wheat Grain',
    devanagari: 'गोधूम / गेहूँ',
    sanskritName: 'Godhūma',
    category: 'pratyeka',
    categoryLabel: 'Pratyeka Vanaspatikāya',
    statusLabel: 'Classical illustrative example of mature grain (Pratyeka, one soul per mature seed)',
    soulRatio: '1 Body = 1 Soul (Jīva)',
    criteriaMatch: 'Mature, dry grain harvested after natural ripening of the crop.',
    reason: 'Harvesting ripe grains involves minimal, localized harm (Alpa-ārambha) required for bodily survival.'
  },
  {
    id: 'chickpea',
    name: 'Chickpea Pulse',
    devanagari: 'चणक / चना',
    sanskritName: 'Caṇaka',
    category: 'pratyeka',
    categoryLabel: 'Pratyeka Vanaspatikāya',
    statusLabel: 'Classical illustrative example of mature legume/pulse (Pratyeka)',
    soulRatio: '1 Body = 1 Soul (Jīva)',
    criteriaMatch: 'Dry pod legume with distinct individual seeds, each housing one jīva.',
    reason: 'Primary source of sustenance in traditional Jain diet when mature and dry.'
  },
  {
    id: 'mango',
    name: 'Ripe Mango',
    devanagari: 'आम्र / आम',
    sanskritName: 'Āmra',
    category: 'pratyeka',
    categoryLabel: 'Pratyeka Vanaspatikāya',
    statusLabel: 'Classical illustrative example of mature tree fruit harvested without uprooting the tree',
    soulRatio: '1 Body = 1 Soul (Jīva)',
    criteriaMatch: 'Hanging tree fruit with distinct skin, flesh, and seed stone.',
    reason: 'Plucked carefully when mature without chopping or damaging the parent tree matrix.'
  }
];

export const SHVETAMBARA_VIGAI_LIST = [
  {
    id: 'dugdha',
    name: 'Dugdha',
    devanagari: 'दुग्ध / दूध',
    english: 'Milk',
    archetype: 'Fresh cow or buffalo milk',
    vigaiImpact: 'Stimulates heavy sluggishness and bodily unctuousness.'
  },
  {
    id: 'dadhi',
    name: 'Dadhi',
    devanagari: 'दधि / दही',
    english: 'Curd / Yogurt',
    archetype: 'Fermented whole milk curd',
    vigaiImpact: 'Intensifies sensory attachment and increases dullness (tamas).'
  },
  {
    id: 'ghrita',
    name: 'Ghṛta',
    devanagari: 'घृत / घी',
    english: 'Ghee (Clarified Butter)',
    archetype: 'Pure clarified butterfat',
    vigaiImpact: 'Deeply stimulates palate delight, bodily heat, and craving.'
  },
  {
    id: 'taila',
    name: 'Taila',
    devanagari: 'तैल / तेल',
    english: 'Edible Oil',
    archetype: 'Pressed sesame or mustard oil',
    vigaiImpact: 'Coats food in rich unctuousness, fueling sensory indulgence.'
  },
  {
    id: 'guda',
    name: 'Guḍa / Śarkarā',
    devanagari: 'गुड़ / शर्करा',
    english: 'Jaggery / Sugar',
    archetype: 'Cane sugar, raw jaggery',
    vigaiImpact: 'Excites sweet cravings and binds intense palate delight (Rāga).'
  },
  {
    id: 'pakvanna',
    name: 'Pakvānna / Pakkānna',
    devanagari: 'पक्वान्न / पकवान',
    english: 'Fried Foods & Delicacies',
    archetype: 'Pastries, savories, and fried sweets cooked in oil or ghee',
    vigaiImpact: 'Maximizes palate intoxication (Mada) and spiritual carelessness (Pramāda).'
  }
];
