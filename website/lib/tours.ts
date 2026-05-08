export type TourCategory = 'food' | 'history' | 'combo'

export type PricingTier = {
  group: string
  price: number
  note?: string
}

export type TourStop = {
  number: number
  title: string
  description: string
  ingredients?: string
}

export type TimeSlot = {
  label: string
  departureTimes: string[]
  stops: TourStop[]
}

export type Tour = {
  slug: string
  title: string
  shortTitle: string
  category: TourCategory
  tagline: string
  badge: string
  duration: string
  departureTimes: string[]
  heroImage: string
  galleryImages: string[]
  pricing: PricingTier[]
  groupDiscounts: string[]
  highlights: string[]
  stops: TourStop[]
  timeSlots?: TimeSlot[]
  inclusions: string[]
  exclusions: string[]
  note?: string
  minGuests?: number
  itineraryIntro?: string
}

export const tours: Tour[] = [
  {
    slug: 'food-tour-scooter',
    title: 'Food Tour Itinerary by Scooter (Morning / Afternoon / Evening)',
    shortTitle: 'Food Tour by Scooter',
    category: 'food',
    badge: 'Best Seller',
    tagline: 'Taste Saigon\'s best street food from the back of a scooter',
    duration: '3.5 – 4 hours',
    departureTimes: ['08:00 AM', '01:00 PM', '05:30 PM', '06:00 PM'],
    heroImage: '/images/food-tour/IMG_3435.JPG',
    galleryImages: [
      '/images/food-tour/IMG_3417.JPG',
      '/images/food-tour/IMG_3418.JPG',
      '/images/food-tour/IMG_3419.JPG',
      '/images/food-tour/IMG_3420.JPG',
      '/images/food-tour/IMG_3421.JPG',
      '/images/food-tour/IMG_3422.JPG',
    ],
    pricing: [
      { group: '1–10 guests', price: 38 },
      { group: '11+ guests', price: 32, note: '15% group discount' },
    ],
    groupDiscounts: ['15% discount for groups of 11+'],
    highlights: [
      'Experience a motorbike tour of Saigon with your own driver',
      'Local drinks and street food',
      'Explore local life and hidden alleys away from the crowds',
      'Savor up to 10 samples of real street food',
      'Make connections with friendly local guides who share fun, tastes, and stories',
    ],
    stops: [
      { number: 1, title: 'Grilled Banana with Sticky Rice', description: 'A classic street-side start — sweet, fragrant and unmistakably Saigon.', ingredients: 'Ripe banana, sticky rice, coconut milk, sesame seeds' },
      { number: 2, title: 'Fish or Pork Noodle Soup', description: 'A soul-warming bowl straight from a family recipe passed down for generations.', ingredients: 'Rice noodles, fresh herbs, bean sprouts, spring onion. Vegetarian option available.' },
      { number: 3, title: 'Bánh Xèo — Vietnamese Crispy Pancake', description: 'Sizzling hot, golden and impossible to eat quietly.', ingredients: 'Pork, shrimp, mung bean, bean sprouts, turmeric rice-flour crepe' },
      { number: 4, title: 'Deep-Fried or Fresh Spring Rolls', description: 'Two versions, one unforgettable combo — crispy or cool and fresh.', ingredients: 'Rice paper, pork, white onions, pepper — fried or fresh' },
      { number: 5, title: 'Vietnamese Pizza', description: 'Saigon\'s legendary street snack — a flavour explosion on a single cracker.', ingredients: 'Rice paper, egg, minced pork, sausage, dried shrimp, mayo, chilli, tamarind sauce' },
      { number: 6, title: 'Grilled Beef with Betel Leaves', description: 'Aromatic, smoky and wrapped in something you\'ve never tasted before.', ingredients: 'Ground beef, lemongrass, betel leaves, pickle, BBQ sauce' },
      { number: 7, title: 'Sweet Potato Balloons', description: 'Crispy, puffed and addictive — Saigon\'s favourite snack in one bite.', ingredients: 'Sweet potato, tapioca flour' },
      { number: 8, title: '🤫 Secret Food', description: 'You\'ll have to join the tour to find out. All we can say is — it\'s one of the most unexpected and delightful bites of the evening. Your guide will tell you everything when you\'re there.', ingredients: 'Something you will know on the tour 🤫' },
      { number: 9, title: 'Bánh Mì', description: 'The icon. Vietnam\'s greatest contribution to the sandwich world.', ingredients: 'French baguette, pork sausage, ham, pickle, cucumber, fresh herbs' },
      { number: 10, title: 'Dessert', description: 'A sweet finale the Saigon way.', ingredients: 'Caramel flan, Vietnamese sweet soup, or coconut jelly' },
    ],
    inclusions: [
      'Raincoat & helmet',
      'English-speaking guide and driver',
      '10 food stops and drinks (sugar cane juice, kumquat tea, local beer or iced tea)',
      'Free hotel pickup and drop-off (Districts 1, 3 & 4)',
    ],
    exclusions: ['Personal expenses', 'Tips for guide & driver'],
    note: 'Menu adapts to dietary restrictions and allergies. Some stops may change due to opening hours. Morning tour menus vary slightly.',
    itineraryIntro: 'Travel through the heart of Ho Chi Minh City as we guide you across District 1, District 3, District 5, and District 10 — each neighbourhood revealing a different layer of Saigon\'s culture and identity. So, are you ready for the ride? Hop on, hold tight, and let Saigon tell you its stories.',
  },
  {
    slug: 'walking-food-tour',
    title: 'Evening Walking Food Tour',
    shortTitle: 'Walking Food Tour',
    category: 'food',
    badge: 'Top Rated',
    tagline: 'Arrive by car, stroll on foot — 10 signature Saigon dishes across 5 stops in one unforgettable evening',
    duration: '3.5 – 4 hours',
    departureTimes: ['05:30 PM', '06:00 PM', '06:30 PM'],
    heroImage: '/images/food-tour/f4da75c6-584c-4d7c-b63b-67c6da5d92f1.jpg',
    galleryImages: [
      '/images/food-tour/IMG_3425.JPG',
      '/images/food-tour/IMG_3426.JPG',
      '/images/food-tour/IMG_3432.JPG',
      '/images/food-tour/IMG_3434.JPG',
      '/images/food-tour/IMG_3438.JPG',
      '/images/food-tour/IMG_3439.JPG',
    ],
    pricing: [
      { group: '2–10 guests', price: 38 },
      { group: '11+ guests', price: 32, note: '15% group discount' },
    ],
    groupDiscounts: ['15% discount for groups of 11+'],
    highlights: [
      'Local drinks and street food',
      'Explore local life and hidden alleys away from the crowds',
      'Savor up to 10 samples of real street food',
      'Make connections with friendly local guides who share fun, tastes, and stories',
      'Free pickup & drop-off at your hotel',
    ],
    stops: [
      {
        number: 1,
        title: 'Soul of Vietnamese Cuisine',
        description: 'We depart from your hotel by Grab car and head to District 3 for Noodle Soup — fish, pork, or vegetarian. Here you\'ll experience the true soul of the dish through the way it is carefully prepared, reflecting authentic Vietnamese cooking techniques and traditions.',
        ingredients: 'Rice noodles · fish or pork or vegetarian broth · bean sprouts · herbs · spring onions',
      },
      {
        number: 2,
        title: 'Colors & Street Bites at Hồ Thị Kỷ',
        description: 'We head to Hồ Thị Kỷ Flower Market — one of the largest flower markets in Hồ Chí Minh City. Take a relaxing walk to aid digestion while filling your camera with vibrant snapshots of this lively local spot. Along the way we try a spread of street bites and a refreshing local drink.',
        ingredients: 'Grilled beef with betel leaves & lemongrass · sweet potato balloons · rice paper cracker · Vietnamese pizza · summer roll · sugar cane juice or kumquat tea',
      },
      {
        number: 3,
        title: 'Sizzling Saigon Flavors',
        description: 'Hopefully you still have room for Bánh Xèo — a savory Vietnamese crepe, bright yellow and crispy, filled with shrimp, pork, and vegetables, served with sweet chili sauce and pickled sweet sauce for dipping.',
        ingredients: 'Pork · shrimp · bean sprouts · mung bean · coconut milk · rice flour · turmeric · fish sauce · pickle · vegetables',
      },
      {
        number: 4,
        title: 'Bánh Mì & Local Cheers',
        description: 'We enjoy Bánh Mì — Vietnam\'s iconic street sandwich — then raise a glass of local beer. Your guide will teach you how to toast like a true Saigonese: "Một, hai, ba — Dô!"',
        ingredients: 'Wheat flour baguette · pork sausage · ham · pickle · cucumber · cilantro · local beer',
      },
      {
        number: 5,
        title: 'Sweet Farewell',
        description: 'To close the evening on a sweet note, we treat you to a classic Vietnamese dessert — silky Caramel flan or a refreshing bowl of Chè. The perfect way to unwind, savor the last flavors of Saigon, and reflect on your culinary adventure before we take you comfortably back to your hotel.',
        ingredients: 'Caramel flan · Vietnamese sweet soup (Chè) · or coconut jelly',
      },
    ],
    inclusions: [
      'Raincoat & helmet provided',
      'English-speaking guide and driver',
      'All food stops and drinks',
      'Free hotel pickup & drop-off (Districts 1, 3 & 4)',
    ],
    exclusions: ['Personal expenses', 'Tips for guide and driver'],
    note: 'Minimum 2 guests per booking. Menu adapts to dietary restrictions, allergies, or store opening hours. Date changes accepted via WhatsApp up to 12 hours before the tour. Full refund for cancellations made 24+ hours before departure.',
    minGuests: 2,
  },
  {
    slug: 'history-culture',
    title: 'History & Culture Itinerary by Scooter (Morning / Afternoon / Evening)',
    shortTitle: 'History & Culture',
    category: 'history',
    badge: 'Best Seller',
    tagline: 'Hidden apartments, weapon bunkers, flower markets — Saigon\'s layers of history come alive',
    duration: '3.5 – 4 hours',
    departureTimes: ['08:00 AM', '08:30 AM', '09:00 AM', '12:30 PM', '01:00 PM', '05:00 PM', '05:30 PM'],
    heroImage: '/images/history-tour/IMG_3444.JPG',
    galleryImages: [
      '/images/history-tour/IMG_2708.JPG',
      '/images/history-tour/IMG_2729.JPG',
      '/images/history-tour/IMG_3423.JPG',
      '/images/history-tour/IMG_3424.JPG',
      '/images/history-tour/IMG_3429.JPG',
      '/images/history-tour/IMG_3430.JPG',
    ],
    pricing: [
      { group: '1–4 guests', price: 33 },
      { group: '11+ guests', price: 28, note: '15% group discount' },
    ],
    groupDiscounts: ['15% discount for groups of 11+'],
    highlights: [
      'Discover hidden places with your local guide',
      'Explore all the sights of Saigon',
      'Understand deeply the real life of local people',
    ],
    stops: [
      { number: 1, title: 'Hidden Stories of Old Saigon', description: 'Built in 1968 during the Vietnam War by the Americans. Hear stories of everyday life inside, then plunge into the hectic energy of the wet market.' },
      { number: 2, title: 'Saigon\'s Coffee Heritage', description: 'Tucked away in a narrow alley, this café has been serving Vietnamese coffee the traditional way for nearly eight decades.' },
      { number: 3, title: 'Secrets Beneath the City', description: 'Beneath this house, the Saigon Commandos dug tunnels more than 50 years ago to hide weapons and plan the 1968 Tết Offensive.' },
      { number: 4, title: 'A Blooming Saigon', description: 'The largest wholesale flower market in Ho Chi Minh City — known as "Little Đà Lạt." Founded officially in 1970, it overflows with thousands of vibrant blooms.' },
      { number: 5, title: 'Spirit of Chinatown', description: 'Drive through Cholon and visit this 18th-century temple, a spiritual centre for the Chinese community of Saigon.' },
    ],
    timeSlots: [
      {
        label: 'Morning',
        departureTimes: ['08:00 AM', '08:30 AM', '09:00 AM'],
        stops: [
          { number: 1, title: 'Hidden Stories of Old Saigon', description: 'Built in 1968 during the Vietnam War by the Americans. Hear stories of everyday life inside, then plunge into the hectic energy of the wet market. Try tropical fruits depending on the season.' },
          { number: 2, title: 'Saigon\'s Coffee Heritage', description: 'Tucked away in a narrow alley, this café has been serving Vietnamese coffee the traditional way for nearly eight decades. Experience a true local morning ritual.' },
          { number: 3, title: 'Secrets Beneath the City', description: 'Beneath this house, the Saigon Commandos dug tunnels more than 50 years ago to hide weapons and plan the 1968 Tết Offensive attack on the Independence Palace.' },
          { number: 4, title: 'A Blooming Saigon', description: 'The largest wholesale flower market in Ho Chi Minh City — known as "Little Đà Lạt." Founded officially in 1970, it overflows with thousands of vibrant blooms.' },
          { number: 5, title: 'Spirit of Chinatown', description: 'Drive through Cholon and visit this 18th-century temple, a spiritual centre for the Chinese community of Saigon. Incense spirals, intricate carvings and a living tradition.' },
        ],
      },
      {
        label: 'Afternoon',
        departureTimes: ['12:30 PM', '01:00 PM'],
        stops: [
          { number: 1, title: 'Hidden Stories of Old Saigon', description: 'Built during the Vietnam War in 1968 by the Americans — hear the stories of the people who have called it home for over half a century.' },
          { number: 2, title: 'Saigon\'s Coffee Heritage', description: 'Almost 80 years old and hidden in a quiet alley. Sit down, sip Vietnamese coffee and spend a quiet afternoon like a Saigon local.' },
          { number: 3, title: 'Secrets Beneath the City', description: 'Beneath this ordinary house, the Saigon Commandos dug tunnels to hide weapons in preparation for the bold 1968 Tết Offensive.' },
          { number: 4, title: 'A Blooming Saigon', description: 'Browse the city\'s most spectacular flower market, then head to the famous food street — over 100 stalls serving from 3 PM until midnight.' },
          { number: 5, title: 'Spirit of Chinatown', description: 'A slow ride through the old Chinese districts — Districts 5, 6 and 11 — taking in the faded grandeur and living culture of Saigon\'s Cholon.' },
        ],
      },
      {
        label: 'Evening',
        departureTimes: ['05:00 PM', '05:30 PM'],
        stops: [
          { number: 1, title: 'Hidden Stories of Old Saigon', description: 'The 1968 American-built apartment at dusk — hear stories of the people who have lived here through war and peace.' },
          { number: 2, title: 'Saigon\'s Coffee Heritage', description: 'Sit on a tiny plastic chair, sip a local sweet soup or smoothie, and feel the city\'s evening pace.' },
          { number: 3, title: 'Secrets Beneath the City', description: 'Visit the monument commemorating the Buddhist monk who self-immolated in 1963 to protest political repression — a defining moment of modern Vietnamese history.' },
          { number: 4, title: 'A Blooming Saigon', description: 'The flower market glows at night. Then on to the food street — 100+ stalls, buzzing from 3 PM to 11 PM, famous for its banana crackers.' },
          { number: 5, title: 'Spirit of Chinatown', description: 'The city\'s most famous street comes alive after dark. Hold on and feel the pulse of Saigon as the lights blur past.' },
        ],
      },
    ],
    inclusions: [
      'Raincoat & helmet',
      'English-speaking guide and driver',
      '1 meal included on the tour',
      'Free hotel pickup and drop-off (Districts 1, 3 & 4)',
    ],
    exclusions: ['Personal expenses', 'Tips for guide & driver'],
    note: 'Stops vary slightly by time slot. Let us know your preferred time when booking.',
  },
  {
    slug: 'taste-sightseeing',
    title: 'Saigon After Dark: Bites & Sights — 7 Food Tour & Sightseeing Itinerary by Scooter (Morning / Afternoon / Evening)',
    shortTitle: 'Bites & Sights by Scooter',
    category: 'combo',
    badge: "Editor's Pick",
    tagline: 'Seven iconic bites and a city ride — the perfect Saigon taster',
    duration: '3.5 – 4 hours',
    departureTimes: ['08:00 AM', '01:00 PM', '05:30 PM', '06:00 PM'],
    heroImage: '/images/food-tour/IMG_3449.JPG',
    galleryImages: [
      '/images/food-tour/IMG_3450.JPG',
      '/images/food-tour/IMG_3451.JPG',
      '/images/food-tour/IMG_3452.JPG',
      '/images/food-tour/IMG_3453.JPG',
      '/images/food-tour/IMG_3489.PNG',
      '/images/food-tour/IMG_3491.PNG',
    ],
    pricing: [
      { group: '1–4 guests', price: 38 },
      { group: '11+ guests', price: 32, note: '15% group discount' },
    ],
    groupDiscounts: ['15% discount for groups of 11+'],
    highlights: [
      'Ride through Saigon\'s nightlife, bustling streets, and colorful city scenes',
      'Taste 7 authentic Vietnamese dishes passed down through generations',
      'Local drinks and street food',
      'Explore local life and hidden alleys away from the crowds',
      'Make connections with friendly local guides who share fun, tastes, and stories',
    ],
    stops: [
      { number: 1, title: 'Grilled Banana with Sticky Rice', description: 'A perfect opening bite.', ingredients: 'Ripe banana, sticky rice, coconut milk, sesame seeds' },
      { number: 2, title: 'Noodle Soup', description: 'A bowl of Saigon\'s soul food.', ingredients: 'Fish, pork or vegetarian broth, rice noodles, fresh herbs' },
      { number: 3, title: 'Vietnamese Pizza', description: 'A flavour explosion on a single cracker.', ingredients: 'Rice paper, egg, pork, sausage, dried shrimp, mayo, chilli, tamarind sauce' },
      { number: 4, title: 'Grilled Beef with Betel Leaves', description: 'Fragrant ground beef wrapped in betel leaves or lemongrass.', ingredients: 'Ground beef, betel leaves, lemongrass, BBQ sauce' },
      { number: 5, title: 'Sweet Potato Balloons', description: 'Light, crispy puffs of sweet potato.', ingredients: 'Sweet potato, tapioca flour' },
      { number: 6, title: 'Bánh Mì', description: 'Vietnam\'s gift to the world.', ingredients: 'French baguette, pork sausage, ham, pickle, cucumber, herbs' },
      { number: 7, title: 'Dessert', description: 'Caramel flan, sweet soup or coconut jelly to finish.', ingredients: 'Caramel flan, Vietnamese sweet soup, or coconut jelly' },
      { number: 8, title: 'Saigon by Scooter', description: 'Ride the liveliest streets of the city as the final chapter of your tour.' },
    ],
    inclusions: [
      'Raincoat & helmet',
      'English-speaking guide and driver',
      '7 food stops and drinks (sugar cane juice, kumquat tea, local beer or iced tea)',
      'Free hotel pickup and drop-off (Districts 1, 3 & 4)',
    ],
    exclusions: ['Personal expenses', 'Tips for guide & driver'],
    note: 'Menu adapts to dietary restrictions and allergies. Morning tour menus vary slightly.',
  },
]

export function getTourBySlug(slug: string): Tour | undefined {
  return tours.find((t) => t.slug === slug)
}

export function getToursByCategory(category: TourCategory): Tour[] {
  return tours.filter((t) => t.category === category)
}

export const categoryLabels: Record<TourCategory, string> = {
  food: 'Food Tours',
  history: 'History & Culture',
  combo: 'Food + Sightseeing',
}
