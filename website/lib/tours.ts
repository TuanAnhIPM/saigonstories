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

export type ItineraryStop = {
  number: number
  title: string
  description: string
  foods: string[]
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
  itinerary?: ItineraryStop[]
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
    title: 'Food Tour by Scooter (Morning / Afternoon / Evening)',
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
      { group: 'Children (5–10 yrs)', price: 28, note: '75% of adult price' },
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
    itinerary: [
      {
        number: 1,
        title: 'Sweet Awakening',
        description: 'We depart from your hotel and head to District 3 to enjoy the delightful flavors of grilled banana wrapped in sticky rice, served with rich and creamy coconut milk. This sweet treat is the perfect way to awaken your taste buds and begin your culinary journey.',
        foods: ['Grilled banana with sticky rice', 'Coconut milk'],
      },
      {
        number: 2,
        title: 'Soul of Vietnamese Cuisine',
        description: 'Next, we move to our second destination to try a beloved local specialty. Here, you\'ll experience the true soul of the dish through the way it is carefully prepared, reflecting authentic Vietnamese cooking techniques and traditions.',
        foods: ['Noodle soup (fish, pork, or vegetarian)', 'Fried rice flour cake (Bột Chiên)'],
      },
      {
        number: 3,
        title: 'Colors & Street Bites at Hồ Thị Kỷ',
        description: 'We head to Hồ Thị Kỷ Flower Market — one of the largest flower markets in Hồ Chí Minh City. Take a relaxing stroll to aid digestion while filling your camera with vibrant, colorful snapshots of this lively local spot. Then we eat.',
        foods: ['Grilled beef with betel leaves or lemongrass', 'Sweet potato balloons', 'Rice paper cracker', 'Vietnamese pizza', 'Summer roll', 'Sugar cane juice or kumquat tea'],
      },
      {
        number: 4,
        title: 'Sizzling Saigon Flavors',
        description: 'There will be a lot of food on this tour, so we hope you still have room! Bánh Xèo is a savory Vietnamese crepe — bright yellow, crispy, filled with shrimp, pork, and vegetables, served with sweet chili and pickled sweet sauce for dipping. Grilled beef in caul fat wraps the beef in a thin layer that locks in juiciness and flavor — each bite is rich, slightly crispy on the outside, and irresistibly succulent inside.',
        foods: ['Bánh Xèo (Vietnamese crispy pancake)', 'Grilled beef in caul fat'],
      },
      {
        number: 5,
        title: 'Bánh Mì & Local Cheers',
        description: 'We enjoy Bánh mì — a beloved Vietnamese street food that is part of everyday life for locals thanks to its convenience and delicious flavor. This iconic sandwich perfectly captures the balance of taste and texture in Vietnamese cuisine. Then we raise a glass, learn how to cheer like a Vietnamese, and immerse ourselves in local life.',
        foods: ['Bánh mì (Vietnamese baguette)', 'Local beer'],
      },
      {
        number: 6,
        title: 'Sweet Farewell',
        description: 'To end the journey on a sweet note, we\'ll treat you to a classic Vietnamese dessert. It\'s the perfect way to unwind, savor the last flavors of Saigon, and reflect on your culinary adventure before we comfortably take you back to your hotel. We hope the flavors, stories, and moments shared will linger with you long after the journey ends — until we meet again in Saigon.',
        foods: ['Caramel flan', 'Chè (Vietnamese sweet soup)', 'Coconut jelly'],
      },
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
    title: 'Evening Walking Food Tour by Car',
    shortTitle: 'Walking Food Tour',
    category: 'food',
    badge: 'Top Rated',
    tagline: 'Arrive by Grab car, stroll on foot — 10 signature Saigon dishes across 5 stops in one unforgettable evening',
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
      { group: '1 guest', price: 38, note: '+$8 solo supplement (~200,000 VND)' },
      { group: '2–10 guests', price: 38 },
      { group: '11+ guests', price: 27, note: '30% group discount' },
      { group: 'Children (5–10 yrs)', price: 28, note: '75% of adult price' },
    ],
    groupDiscounts: ['30% discount for groups of 11+'],
    highlights: [
      'All food, drinks, and taxi fares included',
      'Free pickup and drop-off right at your hotel',
      'Guided by young and energetic Saigonese foodies',
      'Explore Hồ Thị Kỷ Flower Market and hidden street-food spots',
      'Minimum 2 guests — we can\'t host solo travelers due to the hotel pickup service',
    ],
    itinerary: [
      {
        number: 1,
        title: 'Soul of Vietnamese Cuisine',
        description: 'We depart from your hotel by Grab car and head to District 3 to enjoy Noodle Soup. Here, you\'ll experience the true soul of the dish through the way it is carefully prepared, reflecting authentic Vietnamese cooking techniques and traditions.',
        foods: ['Fish noodle soup', 'Pork noodle soup', 'Vegetarian noodle soup'],
      },
      {
        number: 2,
        title: 'Colors & Street Bites at Hồ Thị Kỷ',
        description: 'Next, we head to Hồ Thị Kỷ Flower Market — one of the largest flower markets in Hồ Chí Minh City. Take a relaxing walk to aid digestion while filling your camera with vibrant and colorful snapshots of this lively local spot. Then we eat.',
        foods: ['Grilled beef with betel leaves & lemongrass', 'Sweet potato balloons', 'Rice paper cracker', 'Vietnamese pizza', 'Summer roll', 'Sugar cane juice or kumquat tea'],
      },
      {
        number: 3,
        title: 'Sizzling Saigon Flavors',
        description: 'There will be a lot of food on this tour, so we hope you still have some room! Bánh Xèo is a savory Vietnamese crepe — bright yellow and crispy, filled with shrimp, pork, and vegetables, served with sweet chili sauce and pickled sweet sauce for dipping.',
        foods: ['Bánh Xèo (Vietnamese crispy pancake)'],
      },
      {
        number: 4,
        title: 'Bánh Mì & Local Cheers',
        description: 'We enjoy Bánh mì — a beloved Vietnamese street food that is part of everyday life for locals thanks to its convenience and delicious flavor. This iconic sandwich perfectly captures the balance of taste and texture in Vietnamese cuisine. Then we get the local beer to immerse ourselves in the way of local life, and learn how to cheer like a Vietnamese.',
        foods: ['Bánh mì (Vietnamese baguette)', 'Local beer'],
      },
      {
        number: 5,
        title: 'Sweet Farewell',
        description: 'To end the journey on a sweet note, we\'ll treat you to a classic Vietnamese dessert. It\'s the perfect way to unwind, savor the last flavors of Saigon, and reflect on your culinary adventure before we comfortably take you back to your hotel. As the evening comes to a close, we hope the flavors, stories, and moments shared will linger with you long after the journey ends — until we meet again in Saigon.',
        foods: ['Caramel flan', 'Chè (Vietnamese sweet soup)', 'Coconut jelly'],
      },
    ],
    stops: [
      {
        number: 1,
        title: 'Fish, Pork, or Vegetarian Noodle Soup',
        description: 'A soul-warming bowl straight from a family recipe — fish, pork, or vegetarian, your choice.',
        ingredients: 'Rice noodles · fish or pork · bean sprouts · herbs · spring onions',
      },
      {
        number: 2,
        title: 'Bánh Xèo — Vietnamese Crispy Pancake',
        description: 'Sizzling, golden, and impossible to eat quietly.',
        ingredients: 'Pork · shrimp · bean sprouts · mung bean · coconut milk · rice flour · turmeric powder · fish sauce · pickle · vegetables',
      },
      {
        number: 3,
        title: 'Nem Nướng — Grilled Pork Sausage with Rice Noodle',
        description: 'Smoky, juicy grilled pork sausage wrapped in fresh rice noodle — a Saigon classic.',
        ingredients: 'Grilled pork sausage · rice noodle · fresh herbs · dipping sauce',
      },
      {
        number: 4,
        title: 'Deep-Fried Spring Roll or Summer Roll',
        description: 'Two versions of one beloved dish — crispy fried or light and fresh.',
        ingredients: 'Rice paper · white onions · pork · pepper',
      },
      {
        number: 5,
        title: 'Vietnamese Pizza',
        description: "Saigon's legendary street snack — a flavour explosion on a single cracker.",
        ingredients: 'Rice paper · egg · spring onions · minced pork · sausage · dried shrimps · fried onions · mayonnaise · chilli sauce · tamarind sauce',
      },
      {
        number: 6,
        title: 'Grilled Beef with Betel Leaves & Lemongrass',
        description: 'Aromatic, smoky, and wrapped in something you\'ve never tasted before.',
        ingredients: 'Ground beef · lemongrass · betel leaves · pickle · BBQ sauce',
      },
      {
        number: 7,
        title: 'Sweet Potato Balloons',
        description: 'Crispy, puffed, and addictive — Saigon\'s favourite snack in one bite.',
        ingredients: 'Sweet potato · tapioca flour · cheese powder',
      },
      {
        number: 8,
        title: 'Rice Paper Cracker',
        description: 'Light and crunchy with a hint of coconut.',
        ingredients: 'Rice paper · coconut milk',
      },
      {
        number: 9,
        title: 'Bánh Mì',
        description: 'The icon. Vietnam\'s greatest contribution to the sandwich world.',
        ingredients: 'Wheat flour baguette · pork sausage · ham · pickle · cucumber · cilantro',
      },
      {
        number: 10,
        title: 'Dessert',
        description: 'A sweet finale the Saigon way.',
        ingredients: 'Caramel flan · Vietnamese sweet soup (Chè) · or coconut jelly',
      },
    ],
    inclusions: [
      'Raincoat & helmet',
      'English-speaking guide and driver',
      'All food stops and drinks (sugar cane juice, kumquat tea, local beer or iced tea)',
      'Grab car fare included',
      'Free hotel pickup & drop-off (Districts 1, 3 & 4)',
    ],
    exclusions: ['Personal expenses', 'Tips for guide & driver'],
    note: 'Minimum 2 guests per booking. Menu adapts to dietary restrictions and allergies. Some stops may change due to opening hours.',
    minGuests: 2,
    itineraryIntro: 'Our team will be informed of your hotel pickup location, dietary restrictions, and any special requests. If your pickup address is not in Districts 1, 3, or 4, we\'ll reach out via WhatsApp to arrange a convenient meeting point. We\'ll arrive at our food spots by Grab car and walk through the streets where you can enjoy our signature dishes.',
  },
  {
    slug: 'history-culture',
    title: 'History & Culture by Scooter (Morning / Afternoon / Evening)',
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
      { group: '1–10 guests', price: 33 },
      { group: '11+ guests', price: 28, note: '15% group discount' },
      { group: 'Children (5–10 yrs)', price: 25, note: '75% of adult price' },
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
          {
            number: 1,
            title: 'Hidden Stories of Old Saigon',
            description: 'We visit the oldest apartment in District 3 — built during the Vietnam War in 1968 by the Americans. We talk about the lifestyle of local people who have called it home for decades. Then we pass through the bustling Bàn Cờ Wet Market nearby, where you\'ll experience the hectic and vibrant energy you\'ve never seen before. Our guide will let you try tropical fruits such as pineapple, banana, mango, or fresh coconut — depending on the season.',
          },
          {
            number: 2,
            title: 'Saigon\'s Coffee Heritage',
            description: 'Despite being almost 80 years old, this café is hidden away in a little alley. Come experience the traditional Vietnamese coffee-making process with us and have a great morning like a local. The smell, the ritual, the unhurried pace — it\'s a window into the soul of Saigon.',
          },
          {
            number: 3,
            title: 'Secrets Beneath the City',
            description: 'Beneath this ordinary house, more than 50 years ago, the Saigon Commandos dug tunnels to hide weapons, preparing for the daring attack on the Independence Palace during the Tết Offensive of 1968. A piece of history hiding in plain sight.',
          },
          {
            number: 4,
            title: 'A Blooming Saigon',
            description: 'From a small market for local residents, Hồ Thị Kỷ Market grew and developed, eventually becoming officially established in 1970. Today it\'s famous as the largest wholesale flower market in Ho Chi Minh City — often referred to as "Little Đà Lạt" for its myriad of vibrant, colorful blooms.',
          },
          {
            number: 5,
            title: 'Spirit of Chinatown',
            description: 'We drive through Chinatown and visit the Thiên Hậu Temple — a sacred center for the Chinese community in Saigon, playing an important role in the spiritual life of locals and possessing great cultural value. Incense spirals, intricate carvings, and a living tradition centuries in the making.',
          },
        ],
      },
      {
        label: 'Afternoon',
        departureTimes: ['12:30 PM', '01:00 PM'],
        stops: [
          {
            number: 1,
            title: 'A Blooming Saigon',
            description: 'Hồ Thị Kỷ Flower Market is famous as the largest wholesale flower market in Ho Chi Minh City — often referred to as "Little Đà Lạt" for its myriad of vibrant flowers. We make our way to the street food stalls to taste banana crackers. This place is famous as a "food street that never sleeps," with over 100 stalls bustling from 3:00 PM to 11:00 PM.',
          },
          {
            number: 2,
            title: 'Saigon\'s Coffee Heritage',
            description: 'Despite being almost 80 years old, this café is hidden away in a little alley. Come experience the traditional Vietnamese coffee-making process with us and have a great afternoon like a local. Time slows down here — just you, the coffee, and Saigon humming outside.',
          },
          {
            number: 3,
            title: 'Secrets Beneath the City',
            description: 'Beneath this ordinary house, more than 50 years ago, the Saigon Commandos dug tunnels to hide weapons, preparing for the daring attack on the Independence Palace during the Tết Offensive of 1968. A piece of history hiding in plain sight.',
          },
          {
            number: 4,
            title: 'Saigon\'s French Colonial Landmark',
            description: 'Step into one of the city\'s most iconic colonial-era buildings, famous for its elegant French architecture and vibrant local atmosphere. This stop is also a perfect opportunity to capture beautiful photos right in the heart of the city before we continue to our final destination.',
          },
          {
            number: 5,
            title: 'A Peaceful Escape — Jade Emperor Pagoda',
            description: 'End the journey with a visit to one of Saigon\'s most spiritual and atmospheric temples, known for its intricate architecture, peaceful ambiance, and rich cultural heritage. A meaningful and meditative way to conclude the tour.',
          },
        ],
      },
      {
        label: 'Evening',
        departureTimes: ['05:00 PM', '05:30 PM'],
        stops: [
          {
            number: 1,
            title: 'Hidden Stories of Old Saigon',
            description: 'We visit the oldest apartment in District 3 — built during the Vietnam War in 1968 by the Americans. As the city winds down into the golden hour, we talk about the lifestyle of the local people who have lived here through decades of history.',
          },
          {
            number: 2,
            title: 'A Local Sweet Treat Experience',
            description: 'We sit on tiny little chairs like real locals, sharing culture and stories with our guide. Enjoy a snack or a fresh smoothie, slow down, and let Saigon\'s evening rhythm wash over you.',
          },
          {
            number: 3,
            title: 'The Thích Quảng Đức Monument',
            description: 'This monument was built to commemorate the courageous actions of Thích Quảng Đức, a Buddhist monk who self-immolated to protest the repressive regime of President Ngô Đình Diệm. A defining and deeply moving moment of modern Vietnamese history.',
          },
          {
            number: 4,
            title: 'Hồ Thị Kỷ Flower Market & Food Street',
            description: 'Hồ Thị Kỷ Flower Market glows at night — famous as the largest wholesale flower market in the city, referred to as "Little Đà Lạt." We make our way to the street food stalls to taste the banana cracker. Over 100 stalls, bustling with activity from 3:00 PM to 11:00 PM.',
          },
          {
            number: 5,
            title: 'Saigon from the Scooter',
            description: 'Before we take you back to your hotel, we take a final ride down the liveliest street in Saigon — where the city\'s pulse never fades. Hold on, take it all in, and let the city say goodnight.',
          },
        ],
      },
    ],
    inclusions: [
      'Raincoat & helmet',
      'English-speaking guide and driver',
      '1 meal and drink included (breakfast / lunch / dinner depending on your time slot)',
      'Free hotel pickup and drop-off (Districts 1, 3 & 4)',
    ],
    exclusions: ['Personal expenses', 'Tips for guide & driver'],
    note: 'Stops are flexible and may change depending on your booking time and local conditions.',
    itineraryIntro: 'Our team will be informed of your hotel pickup location. If your pickup address is not in Districts 1, 3, or 4, we\'ll reach out via WhatsApp to arrange a convenient meeting point. Put your helmet on — we\'re heading into Saigon\'s culture and history.',
  },
  {
    slug: 'taste-sightseeing',
    title: '7 Food Tour & Sightseeing by Scooter (Morning / Afternoon / Evening)',
    shortTitle: 'Bites & Sights by Scooter',
    category: 'combo',
    badge: "Editor's Pick",
    tagline: 'Seven iconic bites, one scooter ride — food, sights and stories all in one tour',
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
      { group: '1–10 guests', price: 34 },
      { group: '11+ guests', price: 29, note: '15% group discount' },
      { group: 'Children (5–10 yrs)', price: 25, note: '75% of adult price' },
    ],
    groupDiscounts: ['15% discount for groups of 11+'],
    highlights: [
      'Experience a motorbike tour of Saigon with your own driver',
      'Local drinks and street food',
      'Explore local life and hidden alleys away from the crowds',
      'Savor 7 samples of real street food plus a scooter city ride',
      'Make connections with friendly local guides who share fun, tastes, and stories',
    ],
    itinerary: [
      {
        number: 1,
        title: 'Sweet Awakening',
        description: 'We depart from your hotel and head to District 3 to enjoy the delightful flavors of grilled banana wrapped in sticky rice, served with rich and creamy coconut milk. This sweet treat is the perfect way to awaken your taste buds and begin your culinary journey.',
        foods: ['Grilled banana with sticky rice', 'Coconut milk'],
      },
      {
        number: 2,
        title: 'Soul of Vietnamese Cuisine & A Glimpse of Local Life',
        description: 'We move to our second destination to try a local specialty — noodle soup or fried rice flour cake. Here, you\'ll experience the true soul of the dish through the way it is carefully prepared, reflecting authentic Vietnamese cooking techniques and traditions. Then we visit the old apartment built during the Vietnam War in 1968 by the Americans — a living piece of history still full of local life.',
        foods: ['Noodle soup (fish, pork, or vegetarian)', 'Fried rice flour cake (Bột Chiên)'],
      },
      {
        number: 3,
        title: 'Colors & Street Bites at Hồ Thị Kỷ',
        description: 'We head to Hồ Thị Kỷ Flower Market — one of the largest flower markets in Hồ Chí Minh City. Take a relaxing walk to aid digestion while filling your camera with vibrant and colorful snapshots of this lively local spot. Then we eat.',
        foods: ['Grilled beef with betel leaves or lemongrass', 'Sweet potato balloons', 'Vietnamese pizza', 'Sugar cane juice or kumquat tea'],
      },
      {
        number: 4,
        title: 'Bánh Mì & Local Cheers',
        description: 'We enjoy Bánh mì — a beloved Vietnamese street food that is part of everyday life for locals thanks to its convenience and delicious flavor. This iconic sandwich perfectly captures the balance of taste and texture in Vietnamese cuisine. Then we get the local beer to immerse ourselves in the way of local life, and learn how to cheer like a Vietnamese: "Một, hai, ba, dzô!"',
        foods: ['Bánh mì (Vietnamese baguette)', 'Local beer'],
      },
      {
        number: 5,
        title: 'Sweet Farewell & Saigon by Scooter',
        description: 'To end the journey on a sweet note, we\'ll treat you to a classic Vietnamese dessert — either silky Caramel flan or a refreshing bowl of Chè. Then, before we take you back to your hotel, brace yourself for a ride down the liveliest street in Saigon, where the city\'s pulse never fades.',
        foods: ['Caramel flan', 'Chè (Vietnamese sweet soup)', 'Coconut jelly'],
      },
    ],
    stops: [
      { number: 1, title: 'Grilled Banana with Sticky Rice', description: 'A sweet and fragrant start — the classic street-side awakening.', ingredients: 'Ripe banana, coconut milk, sesame seeds' },
      { number: 2, title: 'Fish, Pork, or Vegetarian Noodle Soup', description: 'A soul-warming bowl from a local kitchen.', ingredients: 'Rice noodles, fish or pork, bean sprouts, herbs, spring onions' },
      { number: 3, title: 'Vietnamese Pizza', description: "Saigon's legendary street snack — a flavour explosion on a single cracker.", ingredients: 'Rice paper, egg, spring onions, minced pork, sausage, dried shrimps, fried onions, mayonnaise, chilli sauce, tamarind sauce' },
      { number: 4, title: 'Grilled Beef with Betel Leaves or Lemongrass', description: 'Aromatic and smoky — ground beef wrapped in something you\'ve never tasted before.', ingredients: 'Ground beef, lemongrass, betel leaves, pickle, BBQ sauce' },
      { number: 5, title: 'Sweet Potato Balloons', description: 'Crispy, puffed, and addictive.', ingredients: 'Sweet potato, tapioca flour, cheese powder' },
      { number: 6, title: 'Bánh Mì', description: "Vietnam's greatest contribution to the sandwich world.", ingredients: 'Wheat flour baguette, pork sausage, ham, pickle, cucumber, cilantro' },
      { number: 7, title: 'Dessert', description: 'A sweet finale the Saigon way.', ingredients: 'Caramel flan, Vietnamese sweet soup (Chè), or coconut jelly' },
      { number: 8, title: 'Saigon from the Scooter', description: 'Brace yourself for a ride down the liveliest street in Saigon, where the city\'s pulse never fades.' },
    ],
    inclusions: [
      'Raincoat & helmet',
      'English-speaking guide and driver',
      '7 food stops and drinks (sugar cane juice, kumquat tea, local beer or iced tea)',
      'Motorbike accident insurance up to $5,000 per case',
      'Free hotel pickup and drop-off (Districts 1, 3 & 4)',
    ],
    exclusions: ['Personal expenses', 'Tips for guide & driver'],
    note: 'Menu is flexible depending on food restrictions, allergies, or store opening hours. Stops #3, #4, #5 may change for morning tours.',
    itineraryIntro: 'Our team will be informed of your hotel pickup location. If your pickup address is not in Districts 1, 3, or 4, we\'ll reach out via WhatsApp to arrange a convenient meeting point. Put your helmet on — we\'re visiting 4–5 locations to sample local food vendors and catch beautiful views from the scooter.',
  },
  {
    slug: 'premium-seafood-rooftop',
    title: '5 Taste + 3 Seafood & Rooftop Bar by Scooter (Evening)',
    shortTitle: 'Seafood & Rooftop Bar',
    category: 'food',
    badge: 'Premium',
    tagline: 'Street food, fresh seafood, and a rooftop bar — Saigon\'s finest evening all on one scooter ride',
    duration: '3.5 – 4 hours',
    departureTimes: ['05:30 PM', '06:00 PM'],
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
      { group: '1–10 guests', price: 45 },
      { group: '11+ guests', price: 38, note: '15% group discount' },
      { group: 'Children (5–10 yrs)', price: 34, note: '75% of adult price' },
    ],
    groupDiscounts: ['15% discount for groups of 11+'],
    highlights: [
      'Experience a motorbike tour of Saigon with your own driver',
      'Fresh seafood at a lively District 4 seafood street',
      'Explore local life and hidden alleys away from the crowds',
      'Savor up to 10 samples of real street food and seafood',
      'End the evening with panoramic Saigon skyline views from a rooftop bar',
    ],
    itinerary: [
      {
        number: 1,
        title: 'A Warm Start with Bánh Canh Cua',
        description: 'We depart from your hotel and head to a local restaurant in District 10 to enjoy Bánh Canh Cua — a comforting Vietnamese noodle soup featuring thick tapioca or rice noodles, topped with shrimp, crab, and fish cake, all brought together in a rich and velvety broth. It\'s the perfect way to warm up your stomach and begin your culinary journey.',
        foods: ['Bánh Canh Cua (crab noodle soup)', 'Shrimp', 'Fish cake'],
      },
      {
        number: 2,
        title: 'Colors & Street Bites at Hồ Thị Kỷ',
        description: 'We head to Hồ Thị Kỷ Flower Market — one of the largest flower markets in Hồ Chí Minh City. Take a relaxing walk to aid digestion while filling your camera with vibrant and colorful snapshots of this lively local spot. Then we eat.',
        foods: ['Grilled beef with betel leaves or lemongrass', 'Sweet potato balloons', 'Vietnamese pizza', 'Local drink'],
      },
      {
        number: 3,
        title: 'A Taste of Chinatown',
        description: 'We continue into Saigon\'s vibrant Chinatown, where culture, history, and food come together in a unique atmosphere. Here, you\'ll experience Bánh Khọt or Bánh Xèo — crispy savory pancakes filled generously with fresh shrimp. Each bite offers a perfect balance of texture: from the golden crunchy shell to the soft, flavorful center. Served with fresh herbs and dipped in a light, sweet-and-sour fish sauce.',
        foods: ['Bánh Khọt (crispy shrimp pancakes)', 'Bánh Xèo (Vietnamese crispy pancake)', 'Fresh herbs & fish sauce'],
      },
      {
        number: 4,
        title: 'Saigon\'s Seafood Street Experience',
        description: 'We continue to the lively seafood street in District 4, where locals gather for fresh, flavorful bites and a vibrant evening atmosphere. Here, you\'ll sample a selection of popular dishes — each bursting with bold, savory flavors. Paired with local beer, this stop is all about enjoying food the Vietnamese way: relaxed, social, and full of energy.',
        foods: ['Stir-fried noodles with snails', 'Grilled scallops with cheese', 'Steamed clams with lemongrass', 'Local beer'],
      },
      {
        number: 5,
        title: 'Skyline Indulgence',
        description: 'To conclude the evening, we head to a stylish rooftop bar in District 1, where you can unwind and take in the breathtaking views of Saigon by night. As the city lights sparkle beneath you, enjoy a relaxing moment to reflect on the journey — its flavors, stories, and experiences. The perfect ending to a memorable evening before we comfortably take you back to your hotel.',
        foods: ['Rooftop cocktail or drink', 'Panoramic Saigon skyline view'],
      },
    ],
    stops: [
      { number: 1, title: 'Bánh Canh Cua', description: 'Rich crab noodle soup — the ultimate comfort bowl to start the evening.', ingredients: 'Thick tapioca noodles, shrimp, crab, fish cake, rich velvety broth' },
      { number: 2, title: 'Grilled Beef with Betel Leaves or Lemongrass', description: 'Aromatic, smoky and wrapped in something you\'ve never tasted before.', ingredients: 'Ground beef, lemongrass, betel leaves, pickle, BBQ sauce' },
      { number: 3, title: 'Sweet Potato Balloons', description: 'Crispy, puffed and addictive.', ingredients: 'Sweet potato, tapioca flour, cheese powder' },
      { number: 4, title: 'Vietnamese Pizza', description: "Saigon's legendary street snack — a flavour explosion on a single cracker.", ingredients: 'Rice paper, egg, spring onions, minced pork, sausage, dried shrimps, fried onions, mayonnaise, chilli sauce, tamarind sauce' },
      { number: 5, title: 'Bánh Khọt or Bánh Xèo', description: 'Crispy savory pancakes filled with fresh shrimp — the pride of Chinatown.', ingredients: 'Rice flour, shrimp, coconut milk, turmeric, fresh herbs, fish sauce' },
      { number: 6, title: 'Stir-Fried Noodles with Snails', description: 'A bold, umami-rich seafood street classic.', ingredients: 'Noodles, snails, lemongrass, chilli, garlic' },
      { number: 7, title: 'Grilled Scallops with Cheese', description: 'Juicy scallops straight off the grill, topped with melted cheese.', ingredients: 'Fresh scallops, cheese, spring onions, garlic butter' },
      { number: 8, title: 'Steamed Clams with Lemongrass', description: 'Fresh clams steamed in fragrant lemongrass broth.', ingredients: 'Clams, lemongrass, chilli, fresh herbs' },
    ],
    inclusions: [
      'Raincoat & helmet',
      'English-speaking guide and driver',
      'All food stops and drinks as described',
      'Free hotel pickup and drop-off (Districts 1, 3 & 4)',
    ],
    exclusions: ['Personal expenses', 'Tips for guide & driver'],
    note: 'Menu is flexible depending on food restrictions, allergies, or store opening hours.',
    itineraryIntro: 'Our team will be informed of your hotel pickup location. If your pickup address is not in Districts 1, 3, or 4, we\'ll reach out via WhatsApp to arrange a convenient meeting point. Put your helmet on — we\'re visiting 4–5 locations to sample street food, fresh seafood, and end the night with the best view in Saigon.',
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
