export interface MenuItem {
  id: string;
  name: string;
  urduName?: string;
  category: "burgers" | "shawarma" | "sandwiches" | "rolls" | "starters" | "drinks";
  price: number;
  description: string;
  tags?: ("Bestseller" | "Spicy" | "Cheesy" | "Value" | "Chef Special")[];
  isPopular?: boolean;
  image: string;
  variants?: {
    label: string;
    options: {
      name: string;
      price: number;
    }[];
  };
}

export interface SauceOption {
  id: "white" | "red" | "yellow";
  name: string;
  flavor: string;
  price: number;
  color: string;
}

export const SAUCE_OPTIONS: SauceOption[] = [
  {
    id: "white",
    name: "White Garlic Mayo Sauce",
    flavor: "Creamy Kasuri garlic dip with herb touch",
    price: 40,
    color: "#FFFDE7",
  },
  {
    id: "red",
    name: "Red Chilli Szechuan Sauce",
    flavor: "Fiery red chili burst with tangy notes",
    price: 40,
    color: "#FF5252",
  },
  {
    id: "yellow",
    name: "Yellow Honey Mustard Sauce",
    flavor: "Tangy sweet golden mustard drizzle",
    price: 40,
    color: "#FFD54F",
  },
];

export interface ComboDeal {
  id: string;
  name: string;
  tagline: string;
  items: string[];
  originalPrice: number;
  discountedPrice: number;
  savings: number;
  image: string;
  badge: string;
}

export const MENU_ITEMS: MenuItem[] = [
  // --- BURGERS ---
  {
    id: "anda-shami-burger",
    name: "Anda Shami Burger",
    urduName: "انڈا شامی برگر",
    category: "burgers",
    price: 150,
    description: "Classic street-style spiced lentil-beef shami patty seared with fried egg, crisp onions & house chutney.",
    tags: ["Value"],
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "double-anda-burger",
    name: "Double Anda Burger",
    urduName: "ڈبل انڈا برگر",
    category: "burgers",
    price: 200,
    description: "Double fluffy fried eggs layered with roasted shami tikki, crunchy shredded cabbage, and signature sauces.",
    tags: ["Value"],
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "chicken-burger",
    name: "Chicken Burger",
    urduName: "چکن برگر",
    category: "burgers",
    price: 220,
    description: "Tender shredded chicken patty with fresh lettuce, sliced tomatoes, and creamy garlic dressing.",
    tags: ["Value"],
    image: "https://images.unsplash.com/photo-1521305916504-4a1121188589?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "chicken-double-anda-burger",
    name: "Chicken Double Anda Burger",
    urduName: "چکن ڈبل انڈا برگر",
    category: "burgers",
    price: 250,
    description: "Spiced chicken patty paired with two golden fried eggs, fresh salad & Kasuri street mayo blend.",
    tags: ["Value"],
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "chicken-petty-burger",
    name: "Chicken Petty Burger",
    urduName: "چکن پیٹی برگر",
    category: "burgers",
    price: 250,
    description: "Crispy breaded golden chicken patty crowned with crunchy iceberg lettuce, pickles & signature mayo.",
    tags: ["Value"],
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "chicken-chapli-burger",
    name: "Chicken Chapli Burger",
    urduName: "چکن چپلی برگر",
    category: "burgers",
    price: 250,
    description: "Peshawari-style spiced chicken chapli kabab with pomegranate seeds, green chilies, and mint drizzle.",
    tags: ["Spicy"],
    image: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "zinger-burger",
    name: "Zinger Burger",
    urduName: "زنگر برگر",
    category: "burgers",
    price: 300,
    description: "Ultra-crunchy battered chicken breast marinated in fiery spices, garlic mayo, and garden-fresh lettuce.",
    tags: ["Bestseller", "Spicy"],
    isPopular: true,
    image: "https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "mighty-burger",
    name: "Mighty Burger",
    urduName: "مائٹی برگر",
    category: "burgers",
    price: 350,
    description: "Heavy double-patty monster loaded with melted cheddar cheese slice, caramelized onions & smoky BBQ drizzle.",
    tags: ["Cheesy"],
    image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "tower-burger",
    name: "Tower Burger",
    urduName: "ٹاور برگر",
    category: "burgers",
    price: 450,
    description: "Stacked high with crispy zinger fillet, golden hash brown patty, cheese slice, and triple sauce layering.",
    tags: ["Chef Special"],
    image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "super-maga-burger",
    name: "Super Maga Burger",
    urduName: "سپر میگا برگر",
    category: "burgers",
    price: 500,
    description: "The ultimate colossus: dual jumbo zinger fillets, double melted cheese, fried egg, loaded fries & secret sauce.",
    tags: ["Bestseller", "Cheesy"],
    isPopular: true,
    image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=800&q=80",
  },

  // --- SHAWARMA ---
  {
    id: "chicken-shawarma",
    name: "Chicken Shawarma",
    urduName: "چکن شوارما",
    category: "shawarma",
    price: 200,
    description: "Freshly shaved spit-roasted spiced chicken wrapped in warm pita bread with crunchy pickled cucumbers & tahini garlic cream.",
    tags: ["Value"],
    image: "https://images.unsplash.com/photo-1561651823-34feb02250e4?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "chicken-cheese-shawarma",
    name: "Chicken Cheese Shawarma",
    urduName: "چکن چیز شوارما",
    category: "shawarma",
    price: 250,
    description: "Succulent roasted chicken layered with gooey melted mozzarella & cheddar in a toasted pita pocket.",
    tags: ["Bestseller", "Cheesy"],
    isPopular: true,
    image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "zinger-shawarma",
    name: "Zinger Shawarma",
    urduName: "زنگر شوارما",
    category: "shawarma",
    price: 300,
    description: "Crispy seasoned zinger tenders sliced and rolled in fluffy pita with spicy chili garlic sauce and iceberg salad.",
    tags: ["Spicy"],
    image: "https://images.unsplash.com/photo-1561651823-34feb02250e4?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "zinger-cheese-shawarma",
    name: "Zinger Cheese Shawarma",
    urduName: "زنگر چیز شوارما",
    category: "shawarma",
    price: 350,
    description: "Crunchy zinger chicken infused with molten cheese sauce, jalapeños, and special red hot relish.",
    tags: ["Bestseller", "Cheesy", "Spicy"],
    image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=800&q=80",
  },

  // --- SANDWICHES ---
  {
    id: "chicken-club-sandwich",
    name: "Chicken Club Sandwich",
    urduName: "چکن کلب سینڈوچ",
    category: "sandwiches",
    price: 300,
    description: "Triple-decker toasted bread filled with shredded chicken, fried egg, crisp lettuce, cucumber slices, and savory mayo.",
    tags: ["Value"],
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "zinger-club-sandwich",
    name: "Zinger Club Sandwich",
    urduName: "زنگر کلب سینڈوچ",
    category: "sandwiches",
    price: 350,
    description: "Three layers of toasted buttery bread holding crispy zinger strips, fresh veggies, sliced egg & spicy red sauce.",
    tags: ["Spicy"],
    image: "https://images.unsplash.com/photo-1567234669003-dce7a7a88821?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "chicken-cheese-sandwich",
    name: "Chicken Cheese Sandwich",
    urduName: "چکن چیز سینڈوچ",
    category: "sandwiches",
    price: 350,
    description: "Gooey grilled sandwich stuffed with seasoned shredded chicken, melted cheese slices, and herb butter.",
    tags: ["Cheesy"],
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "zinger-cheese-sandwich",
    name: "Zinger Cheese Sandwich",
    urduName: "زنگر چیز سینڈوچ",
    category: "sandwiches",
    price: 400,
    description: "The supreme sandwich: golden crispy zinger fillets enveloped in double melted cheese, garlic mayo & pickled jalapeños.",
    tags: ["Bestseller", "Cheesy"],
    image: "https://images.unsplash.com/photo-1567234669003-dce7a7a88821?auto=format&fit=crop&w=800&q=80",
  },

  // --- PARATHA ROLLS ---
  {
    id: "chicken-paratha-roll",
    name: "Chicken Paratha Roll",
    urduName: "چکن پراٹھا رول",
    category: "rolls",
    price: 250,
    description: "Charcoal-smoked chicken boti wrapped in a flaky, crispy golden lachha paratha with tangy onion rings & mint mayo.",
    tags: ["Value"],
    image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "zinger-paratha-roll",
    name: "Zinger Paratha Roll",
    urduName: "زنگر پراٹھا رول",
    category: "rolls",
    price: 300,
    description: "Crunchy fried zinger chicken rolled in a crisp pan-fried butter paratha with chili-garlic drizzle and sliced onions.",
    tags: ["Spicy"],
    image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "chicken-cheese-paratha-roll",
    name: "Chicken Cheese Paratha Roll",
    urduName: "چکن چیز پراٹھا رول",
    category: "rolls",
    price: 300,
    description: "Smoky tender chicken chunks baked with melted cheese ribbons inside a crisp flaky paratha.",
    tags: ["Cheesy"],
    image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "zinger-cheese-paratha-roll",
    name: "Zinger Cheese Paratha Roll",
    urduName: "زنگر چیز پراٹھا رول",
    category: "rolls",
    price: 350,
    description: "Crispy zinger chicken drenched in molten cheese and wrapped in our signature hot flaky paratha.",
    tags: ["Bestseller", "Cheesy"],
    image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "chicken-wrap",
    name: "Chicken Wrap",
    urduName: "چکن ریپ",
    category: "rolls",
    price: 400,
    description: "Jumbo tortilla wrap packed with grilled chicken strips, crisp romaine, diced tomatoes, sweet corn, and ranch dressing.",
    tags: ["Chef Special"],
    image: "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "zinger-wrap",
    name: "Zinger Wrap",
    urduName: "زنگر ریپ",
    category: "rolls",
    price: 450,
    description: "Massive flour tortilla filled with double spicy zinger tenders, cheddar cheese sauce, pickles, and chipotle mayo.",
    tags: ["Bestseller", "Spicy"],
    image: "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80",
  },

  // --- STARTERS & SIDES ---
  {
    id: "nuggets",
    name: "Chicken Nuggets",
    urduName: "چکن نگٹس",
    category: "starters",
    price: 250,
    description: "Tender, juicy bite-sized chicken breast nuggets coated in a seasoned golden crust. Served with garlic dip.",
    image: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=800&q=80",
    variants: {
      label: "Choose Portion",
      options: [
        { name: "5 Pieces", price: 250 },
        { name: "10 Pieces", price: 500 },
      ],
    },
  },
  {
    id: "hot-wings",
    name: "Hot Wings",
    urduName: "ہاٹ ونگز",
    category: "starters",
    price: 300,
    description: "Crispy fried chicken wings tossed in our signature hot glaze with red pepper flakes and sesame sprinkle.",
    tags: ["Spicy"],
    image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=800&q=80",
    variants: {
      label: "Choose Portion",
      options: [
        { name: "5 Pieces", price: 300 },
        { name: "10 Pieces", price: 600 },
      ],
    },
  },
  {
    id: "chicken-loaded-fries",
    name: "Chicken Loaded Fries",
    urduName: "چکن لوڈڈ فرائز",
    category: "starters",
    price: 300,
    description: "Golden fries piled high with spiced shredded chicken, warm melted cheddar cheese sauce, jalapeños, and drizzle.",
    tags: ["Bestseller", "Cheesy"],
    isPopular: true,
    image: "https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "peri-peri-masala-fries",
    name: "Peri Peri Masala Fries",
    urduName: "پیری پیری فرائز",
    category: "starters",
    price: 250,
    description: "Crisp straight-cut potato fries vigorously dusted with hot Kasuri peri peri seasoning.",
    tags: ["Bestseller", "Spicy"],
    isPopular: true,
    image: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "plain-fries",
    name: "Plain Salted Fries",
    urduName: "پلین فرائز",
    category: "starters",
    price: 200,
    description: "Classic golden French fries tossed with sea salt. Crispy outside, fluffy potato inside.",
    tags: ["Value"],
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=800&q=80",
  },

  // --- COLD DRINKS ---
  {
    id: "cold-drink",
    name: "Chilled Cold Drink",
    urduName: "کولڈ ڈرنک",
    category: "drinks",
    price: 70,
    description: "Ice-cold refreshing carbonated beverage (Pepsi, 7Up, Mirinda, or Dew).",
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80",
    variants: {
      label: "Choose Size",
      options: [
        { name: "Regular Can / Bottle (250ml)", price: 70 },
        { name: "Half Liter (500ml)", price: 120 },
        { name: "1 Liter Bottle", price: 130 },
        { name: "1.5 Liter Family Bottle", price: 200 },
        { name: "2.25 Liter Jumbo Bottle", price: 250 },
      ],
    },
  },
];

export const COMBO_DEALS: ComboDeal[] = [
  {
    id: "kasur-late-night-binge",
    name: "Kasur Late-Night Binge",
    tagline: "Late night craving conqueror for solo legends",
    items: [
      "1x Zinger Burger (Spicy & Crispy)",
      "1x Peri Peri Masala Fries",
      "1x Chilled Cold Drink (Regular)",
      "1x White Garlic Mayo Sauce",
    ],
    originalPrice: 660,
    discountedPrice: 580,
    savings: 80,
    badge: "FREE DELIVERY UNLOCKED",
    image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "twin-shawarma-feast",
    name: "Twin Shawarma Feast",
    tagline: "Double the cheese, double the happiness",
    items: [
      "2x Chicken Cheese Shawarmas",
      "1x 1 Liter Cold Drink Bottle",
      "2x Red Hot Chilli Sauces",
    ],
    originalPrice: 710,
    discountedPrice: 620,
    savings: 90,
    badge: "DUO VALUE PACK",
    image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "the-maga-sg-squad-box",
    name: "The Maga S.G Squad Box",
    tagline: "The ultimate heavyweight feast for 3 to 4 friends",
    items: [
      "1x Super Maga Burger (Jumbo Zinger)",
      "1x Mighty Double Burger",
      "1x Chicken Loaded Fries",
      "1x 1.5 Liter Cold Drink",
      "3x Trio Sauces (White, Red, Yellow)",
    ],
    originalPrice: 1470,
    discountedPrice: 1290,
    savings: 180,
    badge: "BEST FOR SQUAD",
    image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "midnight-roll-wings-crave",
    name: "Midnight Roll & Wings Crave",
    tagline: "Flaky buttery paratha paired with fiery hot wings",
    items: [
      "1x Zinger Cheese Paratha Roll",
      "1x 5 Pcs Hot Wings with Glaze",
      "1x Chilled Cold Drink (Regular)",
      "1x Garlic Mayo Sauce",
    ],
    originalPrice: 760,
    discountedPrice: 670,
    savings: 90,
    badge: "MIDNIGHT FAVORITE",
    image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
  },
];
