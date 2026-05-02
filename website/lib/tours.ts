export type TourCategory = 'food' | 'history' | 'combo'

export type PricingTier = {
  group: string
  price: number
}

export type TourStop = {
  number: number
  title: string
  description: string
}

export type Tour = {
  slug: string
  title: string
  shortTitle: string
  category: TourCategory
  tagline: string
  duration: string
  departureTimes: string[]
  heroImage: string
  galleryImages: string[]
  pricing: PricingTier[]
  groupDiscounts: string[]
  highlights: string[]
  stops: TourStop[]
  inclusions: string[]
  exclusions: string[]
  note?: string
  minGuests?: number
}

export const tours: Tour[] = [
  {
    slug: 'food-tour-scooter',
    title: '10 Food by Scooter',
    shortTitle: 'Food by Scooter',
    category: 'food',
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
      { group: '1–2 guests', price: 38 },
      { group: '3–4 guests', price: 32 },
    ],
    groupDiscounts: ['15% discount for groups of 5+', 'FOC for 1 person from 11 guests'],
    highlights: [
      'Raincoat & helmet provided',
      'English-speaking guide & driver',
      '4–5 food stops with drinks',
      'Free hotel pickup (Districts 1, 3 & 4)',
    ],
    stops: [
      { number: 1, title: 'Grilled Banana with Sticky Rice', description: 'Ripe banana, coconut milk, sesame seeds — a classic street-side start.' },
      { number: 2, title: 'Fish or Pork Noodle Soup', description: 'Rice noodles, fresh herbs, bean sprouts, spring onion. Vegetarian option available.' },
      { number: 3, title: 'Bánh Xèo — Vietnamese Crispy Pancake', description: 'Pork, shrimp, mung bean and bean sprouts in a crispy turmeric rice-flour crepe.' },
      { number: 4, title: 'Deep-Fried or Fresh Spring Rolls', description: 'Rice paper rolls with pork, white onions and pepper — fried or fresh.' },
      { number: 5, title: 'Vietnamese Pizza', description: 'Rice paper, egg, minced pork, sausage, dried shrimp, mayo, chilli and tamarind sauce.' },
      { number: 6, title: 'Grilled Beef with Betel Leaves', description: 'Ground beef with lemongrass, betel leaves, pickle and BBQ sauce.' },
      { number: 7, title: 'Sweet Potato Balloons', description: 'Crispy puffs of sweet potato and tapioca flour — Saigon\'s favourite snack.' },
      { number: 8, title: 'Rice Paper Cracker', description: 'Thin, grilled rice paper with coconut milk — simple and addictive.' },
      { number: 9, title: 'Bánh Mì', description: 'The iconic Vietnamese baguette with pork sausage, ham, pickle and herbs.' },
      { number: 10, title: 'Dessert', description: 'Caramel flan, Vietnamese sweet soup or coconut jelly — finish on a sweet note.' },
    ],
    inclusions: [
      'Raincoat & helmet',
      'English-speaking guide and driver',
      '4–5 food stops and drinks (sugar cane juice, kumquat tea, local beer or iced tea)',
      'Free hotel pickup and drop-off (Districts 1, 3 & 4)',
    ],
    exclusions: ['Personal expenses', 'Tips for guide & driver'],
    note: 'Menu adapts to dietary restrictions and allergies. Some stops may change due to opening hours. Morning tour menus vary slightly.',
  },
  {
    slug: 'walking-food-tour',
    title: 'Evening Walking Food Tour',
    shortTitle: 'Walking Food Tour',
    category: 'food',
    tagline: 'Stroll through Saigon\'s most atmospheric food streets at golden hour',
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
      { group: '2 guests', price: 38 },
      { group: '3–6 guests', price: 32 },
      { group: '7–15 guests', price: 27 },
      { group: '16+ guests', price: 23 },
    ],
    groupDiscounts: ['15% discount for groups of 11+', 'FOC for 1 person from 11 guests'],
    highlights: [
      'Arrive by car, explore on foot',
      'English-speaking guide',
      'Signature evening dishes',
      'Free hotel pickup (Districts 1, 3 & 4)',
    ],
    stops: [
      { number: 1, title: 'Noodle Soup — Fish, Pork or Vegetarian', description: 'Rice noodles in a flavourful broth with fresh herbs and bean sprouts.' },
      { number: 2, title: 'Bánh Xèo — Crispy Rice Pancake', description: 'Sizzling golden crepe filled with shrimp, pork and sprouts.' },
      { number: 3, title: 'Nem Nướng — Grilled Pork Sausage', description: 'Grilled pork sausage served with rice noodles and fresh herbs.' },
      { number: 4, title: 'Spring Rolls', description: 'Deep-fried or fresh summer rolls with pork and rice paper.' },
      { number: 5, title: 'Vietnamese Pizza', description: 'The beloved street snack — rice paper loaded with egg, pork, sausage and sauces.' },
      { number: 6, title: 'Grilled Beef with Betel Leaves', description: 'Fragrant ground beef with lemongrass, betel leaves and BBQ sauce.' },
      { number: 7, title: 'Sweet Potato Balloons', description: 'Crispy puffed sweet potato snacks, a Saigon street favourite.' },
      { number: 8, title: 'Rice Paper Cracker', description: 'Grilled rice paper with coconut milk — thin, crispy and light.' },
      { number: 9, title: 'Bánh Mì', description: 'Vietnam\'s legendary baguette — pork sausage, ham, pickle, cucumber and herbs.' },
      { number: 10, title: 'Dessert', description: 'Caramel flan, sweet soup or coconut jelly to close the evening.' },
    ],
    inclusions: [
      'Grab car transfer to the food court',
      'English-speaking guide',
      'Food stops and drinks',
      'Free hotel pickup and drop-off (Districts 1, 3 & 4)',
    ],
    exclusions: ['Personal expenses', 'Tips for guide'],
    note: 'Minimum 2 guests required per booking. Menu adapts to dietary restrictions.',
    minGuests: 2,
  },
  {
    slug: 'history-culture-morning',
    title: 'Morning History & Culture',
    shortTitle: 'History & Culture',
    category: 'history',
    tagline: 'Start your day like a local — coffee, markets and layers of Saigon\'s past',
    duration: '3.5 – 4 hours',
    departureTimes: ['08:00 AM', '08:30 AM', '09:00 AM'],
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
      { group: '1–2 guests', price: 33 },
      { group: '3–4 guests', price: 28 },
    ],
    groupDiscounts: ['15% discount for groups of 5+', 'FOC for 1 person from 11 guests or from your 2nd booking'],
    highlights: [
      'Off-the-beaten-path hidden gems',
      'English-speaking guide & driver',
      '1 meal included',
      'Free hotel pickup (Districts 1, 3 & 4)',
    ],
    stops: [
      { number: 1, title: 'Oldest Apartment in District 3 & Bàn Cờ Wet Market', description: 'Built in 1968 during the Vietnam War by the Americans. Hear stories of everyday life inside, then plunge into the hectic energy of the wet market. Try tropical fruits depending on the season.' },
      { number: 2, title: 'Hidden 80-Year-Old Local Coffee Shop', description: 'Tucked away in a narrow alley, this café has been serving Vietnamese coffee the traditional way for nearly eight decades. Experience a true local morning ritual.' },
      { number: 3, title: 'Weapon Bunker', description: 'Beneath this house, the Saigon Commandos dug tunnels more than 50 years ago to hide weapons and plan the 1968 Tết Offensive attack on the Independence Palace.' },
      { number: 4, title: 'Hồ Thị Kỷ Flower Market', description: 'The largest wholesale flower market in Ho Chi Minh City — known as "Little Đà Lạt." Founded officially in 1970, it overflows with thousands of vibrant blooms.' },
      { number: 5, title: 'Thiên Hậu Temple, Chinatown', description: 'Drive through Cholon and visit this 18th-century temple, a spiritual centre for the Chinese community of Saigon. Incense spirals, intricate carvings and a living tradition.' },
    ],
    inclusions: [
      'Raincoat & helmet',
      'English-speaking guide and driver',
      '1 meal included on the tour',
      'Free hotel pickup and drop-off (Districts 1, 3 & 4)',
    ],
    exclusions: ['Personal expenses', 'Tips for guide & driver'],
    note: 'Stops may change depending on your booking time.',
  },
  {
    slug: 'history-culture-afternoon',
    title: 'Afternoon History & Culture',
    shortTitle: 'History & Culture',
    category: 'history',
    tagline: 'Markets, bunkers, flower streets — Saigon\'s hidden afternoon rhythm',
    duration: '3.5 – 4 hours',
    departureTimes: ['12:30 PM', '01:00 PM'],
    heroImage: '/images/history-tour/IMG_3431.JPG',
    galleryImages: [
      '/images/history-tour/IMG_3433.JPG',
      '/images/history-tour/IMG_3436.JPG',
      '/images/history-tour/IMG_3437.JPG',
      '/images/history-tour/IMG_3445.JPG',
      '/images/history-tour/IMG_3454.JPG',
      '/images/history-tour/IMG_3503.JPG',
    ],
    pricing: [
      { group: '1–2 guests', price: 33 },
      { group: '3–4 guests', price: 28 },
    ],
    groupDiscounts: ['15% discount for groups of 5+', 'FOC for 1 person from 11 guests or from your 2nd booking'],
    highlights: [
      'The city\'s best-kept secrets',
      'English-speaking guide & driver',
      '1 meal included',
      'Free hotel pickup (Districts 1, 3 & 4)',
    ],
    stops: [
      { number: 1, title: 'Oldest Apartment in District 3', description: 'Built during the Vietnam War in 1968 by the Americans — hear the stories of the people who have called it home for over half a century.' },
      { number: 2, title: 'Hidden Local Coffee Shop', description: 'Almost 80 years old and hidden in a quiet alley. Sit down, sip Vietnamese coffee and spend a quiet afternoon like a Saigon local.' },
      { number: 3, title: 'Weapon Bunker', description: 'Beneath this ordinary house, the Saigon Commandos dug tunnels to hide weapons in preparation for the bold 1968 Tết Offensive.' },
      { number: 4, title: 'Hồ Thị Kỷ Flower Market & Food Street', description: 'Browse the city\'s most spectacular flower market, then head to the famous food street — over 100 stalls serving from 3 PM until midnight.' },
      { number: 5, title: 'Chinatown from the Scooter', description: 'A slow ride through the old Chinese districts — Districts 5, 6 and 11 — taking in the faded grandeur and living culture of Saigon\'s Cholon.' },
    ],
    inclusions: [
      'Raincoat & helmet',
      'English-speaking guide and driver',
      '1 meal included on the tour',
      'Free hotel pickup and drop-off (Districts 1, 3 & 4)',
    ],
    exclusions: ['Personal expenses', 'Tips for guide & driver'],
    note: 'Stops may change depending on your booking time.',
  },
  {
    slug: 'history-culture-evening',
    title: 'Evening History & Culture',
    shortTitle: 'History & Culture',
    category: 'history',
    tagline: 'As dusk falls, Saigon\'s stories come alive — ride into the night',
    duration: '3.5 – 4 hours',
    departureTimes: ['05:00 PM', '05:30 PM'],
    heroImage: '/images/history-tour/e4fb2704-b390-4437-9a6a-a5de50823241.jpg',
    galleryImages: [
      '/images/history-tour/IMG_3444.JPG',
      '/images/history-tour/IMG_3445.JPG',
      '/images/history-tour/IMG_3454.JPG',
      '/images/history-tour/IMG_3503.JPG',
      '/images/history-tour/IMG_2708.JPG',
      '/images/history-tour/IMG_2729.JPG',
    ],
    pricing: [
      { group: '1–2 guests', price: 33 },
      { group: '3–4 guests', price: 28 },
    ],
    groupDiscounts: ['15% discount for groups of 5+', 'FOC for 1 person from 11 guests or from your 2nd booking'],
    highlights: [
      'Saigon lit up at dusk',
      'English-speaking guide & driver',
      '1 meal included',
      'Free hotel pickup (Districts 1, 3 & 4)',
    ],
    stops: [
      { number: 1, title: 'Oldest Apartment in District 3', description: 'The 1968 American-built apartment at dusk — hear stories of the people who have lived here through war and peace.' },
      { number: 2, title: 'Vietnamese Sweet Soup or Fruit Smoothie', description: 'Sit on a tiny plastic chair, sip a local sweet soup or smoothie, and feel the city\'s evening pace.' },
      { number: 3, title: 'The Venerable Thích Quảng Đức Monument', description: 'Visit the monument commemorating the Buddhist monk who self-immolated in 1963 to protest political repression — a defining moment of modern Vietnamese history.' },
      { number: 4, title: 'Hồ Thị Kỷ Flower Market & Food Street', description: 'The flower market glows at night. Then on to the food street — 100+ stalls, buzzing from 3 PM to 11 PM, famous for its banana crackers.' },
      { number: 5, title: 'Saigon by Night on Scooter', description: 'The city\'s most famous street comes alive after dark. Hold on and feel the pulse of Saigon as the lights blur past.' },
    ],
    inclusions: [
      'Raincoat & helmet',
      'English-speaking guide and driver',
      '1 meal included on the tour',
      'Free hotel pickup and drop-off (Districts 1, 3 & 4)',
    ],
    exclusions: ['Personal expenses', 'Tips for guide & driver'],
    note: 'Stops may change depending on your booking time.',
  },
  {
    slug: 'taste-sightseeing',
    title: '7 Taste & Sightseeing',
    shortTitle: '7 Taste & Sightseeing',
    category: 'combo',
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
      { group: '1–2 guests', price: 38 },
      { group: '3–4 guests', price: 32 },
    ],
    groupDiscounts: ['15% discount for groups of 5+', 'FOC for 1 person from 11 guests'],
    highlights: [
      'Food + city sightseeing in one',
      'English-speaking guide & driver',
      '4 food stops with drinks',
      'Free hotel pickup (Districts 1, 3 & 4)',
    ],
    stops: [
      { number: 1, title: 'Grilled Banana with Sticky Rice', description: 'Ripe banana, coconut milk and sesame seeds — a perfect opening bite.' },
      { number: 2, title: 'Noodle Soup', description: 'Fish, pork or vegetarian — a bowl of Saigon\'s soul food.' },
      { number: 3, title: 'Vietnamese Pizza', description: 'Rice paper with egg, pork, sausage, dried shrimp and a tangle of sauces.' },
      { number: 4, title: 'Grilled Beef with Betel Leaves', description: 'Fragrant ground beef wrapped in betel leaves or lemongrass.' },
      { number: 5, title: 'Sweet Potato Balloons', description: 'Light, crispy puffs of sweet potato and tapioca flour.' },
      { number: 6, title: 'Bánh Mì', description: 'Vietnam\'s gift to the world — a baguette packed with character.' },
      { number: 7, title: 'Dessert', description: 'Caramel flan, sweet soup or coconut jelly to finish.' },
      { number: 8, title: 'Saigon by Scooter', description: 'Ride the liveliest streets of the city as the final chapter of your tour.' },
    ],
    inclusions: [
      'Raincoat & helmet',
      'English-speaking guide and driver',
      '4 food stops and drinks (sugar cane juice, kumquat tea, local beer or iced tea)',
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
