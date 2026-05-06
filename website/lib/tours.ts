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
}

export const tours: Tour[] = [
  {
    slug: 'food-tour-scooter',
    title: '10 Food by Scooter',
    shortTitle: 'Food by Scooter',
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
      { group: '1–4 guests', price: 38 },
      { group: '11+ guests', price: 32, note: '15% group discount' },
    ],
    groupDiscounts: ['15% discount for groups of 11+'],
    highlights: [
      'Raincoat & helmet provided',
      'English-speaking guide & driver',
      '10 food stops with drinks',
      'Free hotel pickup (Districts 1, 3 & 4)',
    ],
    stops: [
      { number: 1, title: 'Grilled Banana with Sticky Rice', description: 'A classic street-side start — sweet, fragrant and unmistakably Saigon.', ingredients: 'Ripe banana, sticky rice, coconut milk, sesame seeds' },
      { number: 2, title: 'Fish or Pork Noodle Soup', description: 'A soul-warming bowl straight from a family recipe passed down for generations.', ingredients: 'Rice noodles, fresh herbs, bean sprouts, spring onion. Vegetarian option available.' },
      { number: 3, title: 'Bánh Xèo — Vietnamese Crispy Pancake', description: 'Sizzling hot, golden and impossible to eat quietly.', ingredients: 'Pork, shrimp, mung bean, bean sprouts, turmeric rice-flour crepe' },
      { number: 4, title: 'Deep-Fried or Fresh Spring Rolls', description: 'Two versions, one unforgettable combo — crispy or cool and fresh.', ingredients: 'Rice paper, pork, white onions, pepper — fried or fresh' },
      { number: 5, title: 'Vietnamese Pizza', description: 'Saigon\'s legendary street snack — a flavour explosion on a single cracker.', ingredients: 'Rice paper, egg, minced pork, sausage, dried shrimp, mayo, chilli, tamarind sauce' },
      { number: 6, title: 'Grilled Beef with Betel Leaves', description: 'Aromatic, smoky and wrapped in something you\'ve never tasted before.', ingredients: 'Ground beef, lemongrass, betel leaves, pickle, BBQ sauce' },
      { number: 7, title: 'Sweet Potato Balloons', description: 'Crispy, puffed and addictive — Saigon\'s favourite snack in one bite.', ingredients: 'Sweet potato, tapioca flour' },
      { number: 8, title: 'Rice Paper Cracker', description: 'Paper-thin, grilled and quietly perfect.', ingredients: 'Thin rice paper, coconut milk' },
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
  },
  {
    slug: 'walking-food-tour',
    title: 'Evening Walking Food Tour',
    shortTitle: 'Walking Food Tour',
    category: 'food',
    badge: 'Top Rated',
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
      { group: '1 guest', price: 38, note: '+200,000 VND solo supplement' },
      { group: '2–10 guests', price: 38 },
      { group: '11+ guests', price: 32, note: '15% group discount' },
    ],
    groupDiscounts: ['15% discount for groups of 11+'],
    highlights: [
      'Arrive by car, explore on foot',
      'English-speaking guide',
      'Signature evening dishes',
      'Free hotel pickup (Districts 1, 3 & 4)',
    ],
    stops: [
      { number: 1, title: 'Noodle Soup — Fish, Pork or Vegetarian', description: 'A flavourful bowl to ease you into the evening.', ingredients: 'Rice noodles, broth, fresh herbs, bean sprouts' },
      { number: 2, title: 'Bánh Xèo — Crispy Rice Pancake', description: 'Sizzling golden crepe, best eaten straight off the pan.', ingredients: 'Shrimp, pork, bean sprouts, turmeric rice-flour batter' },
      { number: 3, title: 'Nem Nướng — Grilled Pork Sausage', description: 'Smoky, fragrant and wrapped in fresh herbs.', ingredients: 'Grilled pork sausage, rice noodles, fresh herbs' },
      { number: 4, title: 'Spring Rolls', description: 'Crispy or fresh — both versions are essential Saigon.', ingredients: 'Pork, rice paper — deep-fried or fresh summer roll' },
      { number: 5, title: 'Vietnamese Pizza', description: 'The beloved street snack — loaded and irresistible.', ingredients: 'Rice paper, egg, pork, sausage, dried shrimp, mayo, chilli, tamarind sauce' },
      { number: 6, title: 'Grilled Beef with Betel Leaves', description: 'Fragrant ground beef with a char that lingers.', ingredients: 'Ground beef, lemongrass, betel leaves, BBQ sauce' },
      { number: 7, title: 'Sweet Potato Balloons', description: 'Crispy puffed snacks you\'ll want to take home.', ingredients: 'Sweet potato, tapioca flour' },
      { number: 8, title: 'Rice Paper Cracker', description: 'Light, thin and grilled to perfection.', ingredients: 'Rice paper, coconut milk' },
      { number: 9, title: 'Bánh Mì', description: 'Vietnam\'s legendary baguette — the perfect night cap.', ingredients: 'French baguette, pork sausage, ham, pickle, cucumber, herbs' },
      { number: 10, title: 'Dessert', description: 'A sweet close to a memorable evening.', ingredients: 'Caramel flan, sweet soup, or coconut jelly' },
    ],
    inclusions: [
      'Grab car transfer to the food court',
      'English-speaking guide',
      'Food stops and drinks',
      'Free hotel pickup and drop-off (Districts 1, 3 & 4)',
    ],
    exclusions: ['Personal expenses', 'Tips for guide'],
    note: 'Solo bookings include a 200,000 VND supplement. Menu adapts to dietary restrictions.',
    minGuests: 1,
  },
  {
    slug: 'history-culture',
    title: 'History & Culture Tour',
    shortTitle: 'History & Culture',
    category: 'history',
    badge: 'Local Favourite',
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
      'Off-the-beaten-path hidden gems',
      'English-speaking guide & driver',
      '1 meal included',
      'Free hotel pickup (Districts 1, 3 & 4)',
    ],
    stops: [
      { number: 1, title: 'Oldest Apartment in District 3 & Bàn Cờ Wet Market', description: 'Built in 1968 during the Vietnam War by the Americans. Hear stories of everyday life inside, then plunge into the hectic energy of the wet market.' },
      { number: 2, title: 'Hidden 80-Year-Old Local Coffee Shop', description: 'Tucked away in a narrow alley, this café has been serving Vietnamese coffee the traditional way for nearly eight decades.' },
      { number: 3, title: 'Weapon Bunker', description: 'Beneath this house, the Saigon Commandos dug tunnels more than 50 years ago to hide weapons and plan the 1968 Tết Offensive.' },
      { number: 4, title: 'Hồ Thị Kỷ Flower Market', description: 'The largest wholesale flower market in Ho Chi Minh City — known as "Little Đà Lạt." Founded officially in 1970, it overflows with thousands of vibrant blooms.' },
      { number: 5, title: 'Thiên Hậu Temple, Chinatown', description: 'Drive through Cholon and visit this 18th-century temple, a spiritual centre for the Chinese community of Saigon.' },
    ],
    timeSlots: [
      {
        label: 'Morning',
        departureTimes: ['08:00 AM', '08:30 AM', '09:00 AM'],
        stops: [
          { number: 1, title: 'Oldest Apartment in District 3 & Bàn Cờ Wet Market', description: 'Built in 1968 during the Vietnam War by the Americans. Hear stories of everyday life inside, then plunge into the hectic energy of the wet market. Try tropical fruits depending on the season.' },
          { number: 2, title: 'Hidden 80-Year-Old Local Coffee Shop', description: 'Tucked away in a narrow alley, this café has been serving Vietnamese coffee the traditional way for nearly eight decades. Experience a true local morning ritual.' },
          { number: 3, title: 'Weapon Bunker', description: 'Beneath this house, the Saigon Commandos dug tunnels more than 50 years ago to hide weapons and plan the 1968 Tết Offensive attack on the Independence Palace.' },
          { number: 4, title: 'Hồ Thị Kỷ Flower Market', description: 'The largest wholesale flower market in Ho Chi Minh City — known as "Little Đà Lạt." Founded officially in 1970, it overflows with thousands of vibrant blooms.' },
          { number: 5, title: 'Thiên Hậu Temple, Chinatown', description: 'Drive through Cholon and visit this 18th-century temple, a spiritual centre for the Chinese community of Saigon. Incense spirals, intricate carvings and a living tradition.' },
        ],
      },
      {
        label: 'Afternoon',
        departureTimes: ['12:30 PM', '01:00 PM'],
        stops: [
          { number: 1, title: 'Oldest Apartment in District 3', description: 'Built during the Vietnam War in 1968 by the Americans — hear the stories of the people who have called it home for over half a century.' },
          { number: 2, title: 'Hidden Local Coffee Shop', description: 'Almost 80 years old and hidden in a quiet alley. Sit down, sip Vietnamese coffee and spend a quiet afternoon like a Saigon local.' },
          { number: 3, title: 'Weapon Bunker', description: 'Beneath this ordinary house, the Saigon Commandos dug tunnels to hide weapons in preparation for the bold 1968 Tết Offensive.' },
          { number: 4, title: 'Hồ Thị Kỷ Flower Market & Food Street', description: 'Browse the city\'s most spectacular flower market, then head to the famous food street — over 100 stalls serving from 3 PM until midnight.' },
          { number: 5, title: 'Chinatown from the Scooter', description: 'A slow ride through the old Chinese districts — Districts 5, 6 and 11 — taking in the faded grandeur and living culture of Saigon\'s Cholon.' },
        ],
      },
      {
        label: 'Evening',
        departureTimes: ['05:00 PM', '05:30 PM'],
        stops: [
          { number: 1, title: 'Oldest Apartment in District 3', description: 'The 1968 American-built apartment at dusk — hear stories of the people who have lived here through war and peace.' },
          { number: 2, title: 'Vietnamese Sweet Soup or Fruit Smoothie', description: 'Sit on a tiny plastic chair, sip a local sweet soup or smoothie, and feel the city\'s evening pace.' },
          { number: 3, title: 'The Venerable Thích Quảng Đức Monument', description: 'Visit the monument commemorating the Buddhist monk who self-immolated in 1963 to protest political repression — a defining moment of modern Vietnamese history.' },
          { number: 4, title: 'Hồ Thị Kỷ Flower Market & Food Street', description: 'The flower market glows at night. Then on to the food street — 100+ stalls, buzzing from 3 PM to 11 PM, famous for its banana crackers.' },
          { number: 5, title: 'Saigon by Night on Scooter', description: 'The city\'s most famous street comes alive after dark. Hold on and feel the pulse of Saigon as the lights blur past.' },
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
    title: '7 Taste & Sightseeing',
    shortTitle: '7 Taste & Sightseeing',
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
      'Food + city sightseeing in one',
      'English-speaking guide & driver',
      '7 food stops with drinks',
      'Free hotel pickup (Districts 1, 3 & 4)',
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
