// Edit this file to change products, names, prices and images.
// Drop new images into public/images/ and reference them as "/images/your-file.jpg".

export const SIZES = ['36', '38', '40', '42', '44', '46', '48']

export const products = [
  {
    id: 'the-sovereign',
    name: 'The Sovereign',
    subtitle: 'Navy Double-Breasted',
    price: 1295,
    tag: 'Signature',
    description:
      'The flagship of the collaboration. A double-breasted navy suit cut for an athletic build — broad through the shoulder, tapered at the waist — in a high-twist wool that moves with you and recovers without creasing.',
    details: {
      'Fabric & Construction':
        'Super 130s high-twist wool. Half-canvassed construction, peak lapel, horn buttons, dual vents. Lined in breathable cupro.',
      'The Fit':
        'Athletic tailored fit. Accommodating through chest and thigh, sharply suppressed waist. Trousers sit at the natural waist with a tapered leg and cuffed hem.',
      'Delivery & Returns':
        'Complimentary express delivery. 30-day returns on unworn garments. Complimentary first alteration at our atelier partners.',
    },
    images: [
      '/images/suit-front.jpg',
      '/images/detail-closeup.jpg',
      '/images/suit-side.jpg',
      '/images/suit-back.jpg',
    ],
    comingSoon: false,
  },
  {
    id: 'the-executive',
    name: 'The Executive',
    subtitle: 'Charcoal Single-Breasted',
    price: 1145,
    tag: 'New',
    description:
      'The boardroom staple, rebuilt for an athletic frame. A single-breasted charcoal two-piece with a clean notch lapel and two-button front — sharp through the shoulder, suppressed at the waist, with a tapered trouser to match.',
    details: {
      'Fabric & Construction':
        'Super 120s charcoal wool. Half-canvassed construction, notch lapel, two-button front, horn buttons, dual vents. Lined in breathable cupro.',
      'The Fit':
        'Athletic tailored fit. Accommodating through chest and thigh, sharply suppressed waist. Trousers sit at the natural waist with a tapered leg.',
      'Delivery & Returns':
        'Complimentary express delivery. 30-day returns on unworn garments. Complimentary first alteration at our atelier partners.',
    },
    images: [
      '/images/executive-front.jpg',
      '/images/executive-side.jpg',
      '/images/executive-back.jpg',
    ],
    comingSoon: false,
  },
  {
    id: 'the-monarch',
    name: 'The Monarch',
    subtitle: 'Black Peak-Lapel Tuxedo',
    price: 1495,
    tag: 'Coming Soon',
    description: 'Evening tailoring with presence. Silk-faced peak lapels.',
    details: {},
    images: [],
    comingSoon: true,
  },
  {
    id: 'the-statesman',
    name: 'The Statesman',
    subtitle: 'Grey Prince of Wales Check',
    price: 1195,
    tag: 'Coming Soon',
    description: 'A heritage check recut for the modern silhouette.',
    details: {},
    images: [],
    comingSoon: true,
  },
  {
    id: 'the-regent',
    name: 'The Regent',
    subtitle: 'Midnight Three-Piece',
    price: 1395,
    tag: 'Coming Soon',
    description: 'Three-piece midnight tailoring for full command of the room.',
    details: {},
    images: [],
    comingSoon: true,
  },
  {
    id: 'the-apex',
    name: 'The Apex',
    subtitle: 'Stone Summer Suit',
    price: 1045,
    tag: 'Coming Soon',
    description: 'Featherweight stone wool-linen for warm-weather precision.',
    details: {},
    images: [],
    comingSoon: true,
  },
]

export const formatPrice = (value) =>
  new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
    minimumFractionDigits: 0,
  }).format(value)

export const getProduct = (id) => products.find((p) => p.id === id)
