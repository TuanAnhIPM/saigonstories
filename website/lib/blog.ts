export interface BlogPost {
  slug: string
  title: string
  date: string
  excerpt: string
  coverImage: string
  readingTime: string
  category: string
  content: ContentBlock[]
}

export type ContentBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; text: string }
  | { type: 'image'; src: string; alt: string; caption?: string }
  | { type: 'quote'; text: string }

export const blogPosts: BlogPost[] = [
  {
    slug: 'banh-mi-the-perfect-vietnamese-sandwich',
    title: 'Bánh Mì: The Sandwich That Tells Vietnam\'s Story',
    date: '2025-04-15',
    excerpt: 'Crispy on the outside, pillowy inside, and packed with layers of pork, pickle and herbs — bánh mì is more than a sandwich. It\'s a daily ritual, a piece of history, and the tastiest 30 seconds in Saigon.',
    coverImage: '/images/food-tour/IMG_3449.JPG',
    readingTime: '4 min read',
    category: 'Street Food',
    content: [
      {
        type: 'paragraph',
        text: 'Every morning across Hồ Chí Minh City, thousands of carts appear on street corners with one purpose: to stuff a golden baguette with as many delicious things as physically possible. The result is bánh mì — Vietnam\'s most beloved street food, a sandwich that has conquered the world one bite at a time.',
      },
      {
        type: 'heading',
        text: 'A Colonial Accident That Became a Masterpiece',
      },
      {
        type: 'paragraph',
        text: 'Bánh mì exists because of French colonialism. When France occupied Vietnam in the mid-19th century, they brought the baguette with them. The Vietnamese took it, made the bread lighter and crispier to suit the tropical climate, then filled it with their own ingredients — pâté, pickled daikon and carrot, fresh coriander, sliced chillies, and various pork preparations. The French would barely recognise it. The Vietnamese made it their own.',
      },
      {
        type: 'image',
        src: '/images/food-tour/IMG_3449.JPG',
        alt: 'Fresh bánh mì being prepared at a Saigon street stall',
        caption: 'A bánh mì stall in District 3 — on this corner for over 20 years',
      },
      {
        type: 'heading',
        text: 'What Goes Inside',
      },
      {
        type: 'paragraph',
        text: 'The classic Saigon bánh mì starts with a smear of pâté and mayonnaise on the inside of the bread. Then come the layers: slices of chả lụa (Vietnamese pork sausage), a few strips of thịt nguội (cold cuts), a tangle of pickled carrot and daikon for crunch and acidity, thin slices of cucumber for freshness, a handful of cilantro, and finally — if you\'re lucky — a drizzle of soy sauce or Maggi seasoning.',
      },
      {
        type: 'paragraph',
        text: 'The whole construction takes about 90 seconds. The vendor\'s hands move with the efficiency of someone who has made the same sandwich ten thousand times. You pay around 20,000–35,000 VND (less than $2). You find a quiet spot to stand and eat it before it gets cold, because cold bánh mì is a tragedy.',
      },
      {
        type: 'quote',
        text: '"In Saigon, bánh mì is not breakfast, lunch, or dinner. It is all three — whenever you need it."',
      },
      {
        type: 'heading',
        text: 'The Best Time to Eat It',
      },
      {
        type: 'paragraph',
        text: 'Any time is bánh mì time in Saigon, but the evening version — when vendors are restocking and bread is fresh from the second batch — is special. On our Evening Walking Food Tour, we stop at a local stall that has been operating in the same spot for years. The bread comes straight from the supplier at 6 PM, still warm. We eat it standing on the pavement, cold local beer in hand, watching the street come alive around us.',
      },
      {
        type: 'image',
        src: '/images/food-tour/IMG_3435.JPG',
        alt: 'Street food spread at a local eatery in Saigon',
        caption: 'The full spread — bánh mì alongside other evening street bites',
      },
      {
        type: 'paragraph',
        text: 'Bánh mì is one of those rare foods that is simultaneously humble and perfect. It costs almost nothing, it takes two minutes to make, and it manages to be crispy, soft, rich, fresh, sour, salty and spicy all at the same time. No wonder the world fell in love with it.',
      },
    ],
  },
  {
    slug: 'vietnamese-noodle-soup-soul-of-saigon',
    title: 'The Soul in the Bowl: Vietnamese Noodle Soup',
    date: '2025-04-28',
    excerpt: 'Before the city fully wakes up — or as it winds down at night — there is always a bowl of noodle soup waiting. Every region of Vietnam has its own version. In Saigon, the broth runs deep.',
    coverImage: '/images/food-tour/IMG_3452.JPG',
    readingTime: '5 min read',
    category: 'Vietnamese Cuisine',
    content: [
      {
        type: 'paragraph',
        text: 'Walk into any wet market in Hồ Chí Minh City at 6 AM and you will find the same scene: plastic stools arranged around a low table, a pot of broth simmering on a gas flame, and people hunched quietly over steaming bowls. Noodle soup in Vietnam is not just food — it is the ritual that starts and ends the day.',
      },
      {
        type: 'heading',
        text: 'Not One Dish, But Many',
      },
      {
        type: 'paragraph',
        text: 'There is no single "Vietnamese noodle soup." The country is long and narrow, and every region developed its own version. In the north, phở bò rules — a clear beef broth that takes 12 hours to make, served with thin rice noodles and basil. In Hue, they cook bún bò Huế, a spicier, more complex broth with lemongrass and shrimp paste. And here in Saigon, the south\'s version adds more garnishes, more sweetness, more flexibility.',
      },
      {
        type: 'image',
        src: '/images/food-tour/IMG_3452.JPG',
        alt: 'Guests enjoying Vietnamese noodle soup together',
        caption: 'The first stop on our walking tour — a bowl of noodle soup to ease you into the evening',
      },
      {
        type: 'heading',
        text: 'The Broth Is Everything',
      },
      {
        type: 'paragraph',
        text: 'A good Vietnamese broth is a patient thing. Fish-based broths start with simmering bones and dried fish for hours to draw out a clear, deeply savory liquid with no bitterness. Pork broths are seasoned with shallots and ginger charred over an open flame — a technique that adds a subtle smokiness and removes the rawness from the aromatics. The result is a broth that tastes clean but layered, light but satisfying.',
      },
      {
        type: 'paragraph',
        text: 'At the table, the customisation begins. Bean sprouts for crunch. A squeeze of lime. Sliced fresh chillies if you want heat. A handful of rau thơm — the herb plate that comes standard with every bowl in the south, carrying Thai basil, sawleaf herb, and bean sprouts. Each diner assembles their own bowl according to their mood.',
      },
      {
        type: 'quote',
        text: '"A bowl of noodle soup is never exactly the same twice — it is always yours."',
      },
      {
        type: 'heading',
        text: 'Fish, Pork, or Vegetarian',
      },
      {
        type: 'paragraph',
        text: 'On our Evening Walking Food Tour, the first stop is always a bowl of noodle soup — and we offer the choice of fish, pork, or vegetarian broth. The fish version is lighter and more delicate, with flakes of white fish on top. The pork version is richer and slightly sweeter. The vegetarian uses mushrooms and tofu to build a surprisingly deep, umami-rich broth without any meat.',
      },
      {
        type: 'image',
        src: '/images/food-tour/IMG_3451.JPG',
        alt: 'Close-up of ingredients and garnishes at a Saigon noodle stall',
        caption: 'The garnish plate — bean sprouts, fresh herbs, lime — comes automatically in the south',
      },
      {
        type: 'paragraph',
        text: 'Whatever version you choose, the experience is the same: you sit down, the bowl arrives, and for a few minutes everything slows down. The broth is too hot to rush. You add your herbs, adjust the seasoning, take the first sip — and understand immediately why this dish has been the soul of Vietnamese cooking for hundreds of years.',
      },
    ],
  },
  {
    slug: 'banh-xeo-sizzling-saigon-crepe',
    title: 'Bánh Xèo: If You Can Hear the Sizzle, You\'re Close Enough',
    date: '2025-05-05',
    excerpt: 'The name literally means "sizzling cake" — named for the explosive hiss it makes when batter hits a hot pan. Crispy, golden, stuffed with shrimp and pork, and eaten wrapped in fresh greens. Bánh xèo is the loudest dish in Saigon.',
    coverImage: '/images/food-tour/IMG_3440.JPG',
    readingTime: '4 min read',
    category: 'Street Food',
    content: [
      {
        type: 'paragraph',
        text: 'You hear bánh xèo before you see it. The violent hiss of batter hitting a cast-iron pan — "XÈOOOO" — is the sound that gives this dish its name. In Vietnamese, xèo is an onomatopoeia: the word sounds exactly like the noise it describes. Walk through any street food district in Saigon after 5 PM and follow the sound. It will lead you somewhere worth eating.',
      },
      {
        type: 'heading',
        text: 'What Is Bánh Xèo?',
      },
      {
        type: 'paragraph',
        text: 'Bánh xèo is a Vietnamese savory crepe — thin, crispy, bright yellow from turmeric, and folded in half over a filling of shrimp, pork belly, bean sprouts, and mung beans. The batter is made from rice flour mixed with coconut milk and water, which gives the finished crepe a subtle richness and makes it unusually light despite being pan-fried.',
      },
      {
        type: 'image',
        src: '/images/food-tour/IMG_3440.JPG',
        alt: 'Golden bánh xèo being cooked on a cast-iron pan',
        caption: 'The pan has to be ripping hot — that\'s the secret to the crispy edge',
      },
      {
        type: 'heading',
        text: 'The Technique',
      },
      {
        type: 'paragraph',
        text: 'Making a good bánh xèo is about heat and timing. The pan needs to be extremely hot before the batter goes in — so hot that the batter instantly forms a crispy lace edge around the outside. Then the filling goes in: raw shrimp first (they cook fast), pork that has already been briefly stir-fried, and finally a handful of bean sprouts. The pan is covered for about 90 seconds to let steam cook the interior while the outside continues to crisp.',
      },
      {
        type: 'paragraph',
        text: 'The cook watches closely. When the edge turns deep gold and begins to pull away from the pan, it\'s time. The crepe folds over on itself — one deft flick of the wrist — and lands on the plate. From batter to table: under three minutes.',
      },
      {
        type: 'quote',
        text: '"The crispy edge is not a mistake. It is the point. Eat it first while it is still loud."',
      },
      {
        type: 'heading',
        text: 'How to Eat It',
      },
      {
        type: 'paragraph',
        text: 'Bánh xèo is not eaten with a fork. You tear off a piece of the crepe with your hands, place it in a leaf of lettuce or mustard green, add a few herbs (mint, perilla, fish wort if you\'re brave), roll it up, and dip the whole bundle into nước chấm — the sweet, sour, salty dipping sauce made from fish sauce, lime juice, sugar, garlic, and chillies.',
      },
      {
        type: 'image',
        src: '/images/food-tour/IMG_3441.JPG',
        alt: 'Bánh xèo served with fresh herb plate and dipping sauce',
        caption: 'Always wrapped in fresh greens before dipping — the herbs are not a garnish, they are the dish',
      },
      {
        type: 'paragraph',
        text: 'The contrast is what makes bánh xèo so addictive: the crispy, hot crepe against the cool, fresh herbs. The richness of the coconut milk batter cut by the acidity of the dipping sauce. You\'ll probably eat two before you realise what happened.',
      },
      {
        type: 'heading',
        text: 'On Our Tour',
      },
      {
        type: 'paragraph',
        text: 'Bánh xèo appears as the third stop on our Evening Walking Food Tour, intentionally placed after the noodle soup to give your stomach a moment to settle — and to build anticipation. By the time we arrive, the smell from the kitchen has usually already made the decision for you. The herb plate comes automatically. The dipping sauce is homemade. We sit, we eat, we make a mess. That is precisely the point.',
      },
    ],
  },
]

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug)
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
