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
    tag: 'New',
    description:
      'Evening tailoring with presence. A black one-button tuxedo with satin-faced peak lapels and a satin side-stripe trouser — cut for an athletic build so black tie fits the way it was always meant to.',
    details: {
      'Fabric & Construction':
        'Super 130s black wool with silk satin facings. Half-canvassed construction, satin peak lapel, covered one-button front, jetted pockets, satin trouser stripe.',
      'The Fit':
        'Athletic tailored fit. Accommodating through chest and thigh, sharply suppressed waist. Trousers sit at the natural waist with a tapered leg.',
      'Delivery & Returns':
        'Complimentary express delivery. 30-day returns on unworn garments. Complimentary first alteration at our atelier partners.',
    },
    images: [
      '/images/monarch-front.jpg',
      '/images/monarch-side.jpg',
      '/images/monarch-back.jpg',
    ],
    comingSoon: false,
  },
  {
    id: 'the-statesman',
    name: 'The Statesman',
    subtitle: 'Grey Windowpane Check',
    price: 1195,
    tag: 'New',
    description:
      'A heritage check recut for the modern silhouette. Light grey with a blue windowpane overcheck — as sharp worn open-collared as it is with a tie, from the racecourse to the boardroom.',
    details: {
      'Fabric & Construction':
        'Super 120s grey wool with a blue windowpane overcheck, pattern-matched at every seam. Half-canvassed construction, notch lapel, two-button front, dual vents.',
      'The Fit':
        'Athletic tailored fit. Accommodating through chest and thigh, sharply suppressed waist. Trousers sit at the natural waist with a tapered leg.',
      'Delivery & Returns':
        'Complimentary express delivery. 30-day returns on unworn garments. Complimentary first alteration at our atelier partners.',
    },
    images: [
      '/images/statesman-front.jpg',
      '/images/statesman-side.jpg',
      '/images/statesman-back.jpg',
    ],
    comingSoon: false,
  },
  {
    id: 'the-regent',
    name: 'The Regent',
    subtitle: 'Sky Blue Three-Piece',
    price: 1395,
    tag: 'New',
    description:
      'Three-piece tailoring for full command of the room. A sky blue suit with a matching waistcoat and notch lapel — summer-wedding ready, cut athletic through the shoulder and clean through the waist.',
    details: {
      'Fabric & Construction':
        'Super 120s sky blue wool. Half-canvassed jacket, notch lapel, two-button front, five-button waistcoat, dual vents. Lined in breathable cupro.',
      'The Fit':
        'Athletic tailored fit across all three pieces. Accommodating through chest and thigh, sharply suppressed waist. Trousers sit at the natural waist with a tapered leg.',
      'Delivery & Returns':
        'Complimentary express delivery. 30-day returns on unworn garments. Complimentary first alteration at our atelier partners.',
    },
    images: [
      '/images/regent-front.jpg',
      '/images/regent-side.jpg',
      '/images/regent-back.jpg',
    ],
    comingSoon: false,
  },
  {
    id: 'the-apex',
    name: 'The Apex',
    subtitle: 'Stone Summer Suit',
    price: 1045,
    tag: 'New',
    description:
      'Featherweight stone tailoring for warm-weather precision. A cream two-button suit with tonal horn buttons — worn open-collared with tan leather, it owns every summer occasion from the terrace to the aisle.',
    details: {
      'Fabric & Construction':
        'Featherweight stone wool-linen blend. Half-canvassed construction, notch lapel, two-button front, tonal horn buttons, dual vents. Half-lined for breathability.',
      'The Fit':
        'Athletic tailored fit. Accommodating through chest and thigh, sharply suppressed waist. Trousers sit at the natural waist with a tapered leg.',
      'Delivery & Returns':
        'Complimentary express delivery. 30-day returns on unworn garments. Complimentary first alteration at our atelier partners.',
    },
    images: [
      '/images/apex-front.jpg',
      '/images/apex-side.jpg',
      '/images/apex-back.jpg',
    ],
    comingSoon: false,
  },
]

export const formatPrice = (value) =>
  new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
    minimumFractionDigits: 0,
  }).format(value)

export const getProduct = (id) => products.find((p) => p.id === id)
