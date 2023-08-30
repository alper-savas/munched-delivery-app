import uuid from "react-uuid";

export const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export const categoryItems = [
  {
    id: uuid(),
    url: "/images/pizza01.jpg",
    category: "pizza",
    numberOfPlaces: 7,
  },
  {
    id: uuid(),
    url: "/images/noddle.jpg",
    category: "noodle",
    numberOfPlaces: 4,
  },
  {
    id: uuid(),
    url: "/images/hamburger01.jpg",
    category: "hamburger",
    numberOfPlaces: 7,
  },
  {
    id: uuid(),
    url: "/images/asian01.jpg",
    category: "asian",
    numberOfPlaces: 7,
  },
  {
    id: uuid(),
    url: "/images/taco01.jpg",
    category: "taco",
    numberOfPlaces: 3,
  },
  // {
  //   id: uuid(),
  //   url: "/images/indian.jpg",
  //   category: "indian",
  //   numberOfPlaces: 4,
  // },
  // {
  //   id: uuid(),
  //   url: "/images/mediterrenean.jpeg",
  //   category: "mediterrenean",
  //   numberOfPlaces: 3,
  // },
  // {
  //   id: uuid(),
  //   url: "/images/vegan.jpg",
  //   category: "vegan",
  //   numberOfPlaces: 6,
  // },
  // {
  //   id: uuid(),
  //   url: "/images/doner01.jpeg",
  //   category: "döner",
  //   numberOfPlaces: 6,
  // },
  // {
  //   id: uuid(),
  //   url: "/images/salad01.jpg",
  //   category: "salad",
  //   numberOfPlaces: 2,
  // },
  // {
  //   id: uuid(),
  //   url: "/images/pasta02.jpeg",
  //   category: "pasta",
  //   numberOfPlaces: 7,
  // },
  // {
  //   id: uuid(),
  //   url: "/images/chicken.jpg",
  //   category: "chicken",
  //   numberOfPlaces: 4,
  // },
  // {
  //   id: uuid(),
  //   url: "/images/sushi.jpg",
  //   category: "sushi",
  //   numberOfPlaces: 7,
  // },
  // {
  //   id: uuid(),
  //   url: "/images/dessert.jpg",
  //   category: "dessert",
  //   numberOfPlaces: 3,
  // },
  // {
  //   id: uuid(),
  //   url: "/images/fish.jpg",
  //   category: "fish",
  //   numberOfPlaces: 5,
  // },
  // {
  //   id: uuid(),
  //   url: "/images/arabic.jpeg",
  //   category: "arabic",
  //   numberOfPlaces: 5,
  // },
  // {
  //   id: uuid(),
  //   url: "/images/breakfast.jpg",
  //   category: "breakfast",
  //   numberOfPlaces: 3,
  // },
  // {
  //   id: uuid(),
  //   url: "/images/sandwich.jpg",
  //   category: "sandwich",
  //   numberOfPlaces: 2,
  // },
  // {
  //   id: uuid(),
  //   url: "/images/coffee.jpg",
  //   category: "cafe",
  //   numberOfPlaces: 4,
  // },
  // {
  //   id: uuid(),
  //   url: "/images/tapas.jpg",
  //   category: "tapas",
  //   numberOfPlaces: 3,
  // },
  // {
  //   id: uuid(),
  //   url: "/images/greek.jpg",
  //   category: "greek",
  //   numberOfPlaces: 5,
  // },
  // {
  //   id: uuid(),
  //   url: "/images/african.jpg",
  //   category: "african",
  //   numberOfPlaces: 4,
  // },
  // {
  //   id: uuid(),
  //   url: "/images/austrian.jpg",
  //   category: "austrian",
  //   numberOfPlaces: 3,
  // },
  // {
  //   id: uuid(),
  //   url: "/images/smoothie.jpg",
  //   category: "smoothie",
  //   numberOfPlaces: 3,
  // },
  // {
  //   id: uuid(),
  //   url: "/images/falafel.jpg",
  //   category: "falafel",
  //   numberOfPlaces: 3,
  // },
];

// ----------------------------
// ----------------------------

export const mainJSON = [
  {
    id: uuid(),
    url: "/images/zola.jpeg",
    name: "piccola",
    category: "pizza",
    rating: "82",
    price: "€€€",
    info: "neapolitan wood",
    open: "10.00 PM",
    fee: "2.99",
    menu: [
      {
        pizza: [
          {
            name: "Margherita",
            price: "10.50",
            url: "/images/margherita.jpg",
            ingredients: ["tomato sauce", "mozarella", "basil"],
          },
          {
            name: "Marinara",
            price: "9.50",
            url: "/images/marinara.jpeg",
            ingredients: ["tomato sauce", "basil", "garlic"],
          },
          {
            name: "Pepperoni",
            price: "12.50",
            url: "/images/pepperoni.jpeg",
            ingredients: [
              "tomato sauce",
              "mozarella",
              "pepperoni",
              "bell peppers",
            ],
          },
          {
            name: "Vegetarian",
            price: "12.50",
            url: "/images/vegetarianpizza.jpeg",
            ingredients: [
              "tomato sauce",
              "mozarella",
              "bell peppers",
              "onions",
              "olives",
              "artichoke",
            ],
          },
          {
            name: "Meat Pizza",
            price: "15.50",
            url: "/images/meatpizza.jpeg",
            ingredients: [
              "tomato sauce",
              "mozarella",
              "sausage",
              "bacon",
              "ground beef",
            ],
          },
          {
            name: "Quattro Formaggi ",
            price: "13.50",
            url: "/images/quattroformaggi.jpeg",
            ingredients: [
              "tomato sauce",
              "mozarella",
              "gorgonzola",
              "pecorino",
              "ricotta",
            ],
          },
          {
            name: "Supreme",
            price: "16.50",
            url: "/images/supreme.jpeg",
            ingredients: [
              "tomato sauce",
              "mozarella",
              "aubergine",
              "bell peppers",
              "olive",
              "feta",
            ],
          },
          {
            name: "Buffalo Chicken",
            price: "14.50",
            url: "/images/buffalochicken.jpeg",
            ingredients: [
              "tomato sauce",
              "mozarella",
              "buffalo sauce",
              "shredded chicken",
              "cheese crumbles",
            ],
          },
        ],
      },
      {
        desserts: [
          { name: "Souffle", price: "4.50", url: "/images/souffle.jpeg" },
          { name: "Ice Cream", price: "5.50", url: "/images/icecream.jpeg" },
          { name: "Brownie", price: "5.50", url: "/images/brownie.jpeg" },
        ],
      },
      {
        drinks: [
          { name: "Coca Cola", price: "3.00", url: "/images/coke.jpg" },
          { name: "Fanta", price: "3.00", url: "/images/fanta.jpg" },
          { name: "Beer", price: "3.50", url: "/images/beer.jpeg" },
          { name: "Water", price: "2.00", url: "/images/water.jpeg" },
          { name: "Juice", price: "4.00", url: "/images/juice.webp" },
        ],
      },
    ],
  },
  {
    id: uuid(),
    url: "/images/casadetacos.jpeg",
    name: "casa de tacos",
    category: "taco",
    rating: "93",
    price: "€€",
    info: "Welcome to Casa de Tacos, where the warmth of our hospitality matches the heat of our salsa. Discover taco heaven with every bite.",
    open: "02.00 AM",
    fee: "1.99",
    menu: [
      {
        tacos: [
          {
            name: "Birria Taco",
            price: "7.99",
            url: "/images/birria.jpeg",
            ingredients: [
              "beef",
              "lettuce",
              "cheese",
              "salsa",
              "corn tortilla",
            ],
          },
          {
            name: "Al Pastor",
            price: "8.99",
            url: "/images/alpastor.jpeg",
            ingredients: [
              "thin sliced pork",
              "vegetable",
              "cheese",
              "salsa",
              "pineapple",
              "corn tortilla",
            ],
          },
          {
            name: "Veggie",
            price: "7.99",
            url: "/images/nopales.jpeg",
            ingredients: [
              "nopal",
              "tomato",
              "beans",
              "cilantro",
              "corn tortilla",
            ],
          },
        ],
      },
      {
        sides: [
          {
            name: "Chips and Salsa",
            price: "5.99",
            url: "/images/chipsandsalsa.jpeg",
          },
          {
            name: "Guacamole",
            price: "4.99",
            url: "/images/guac.jpeg",
          },
        ],
      },
      {
        desserts: [
          {
            name: "Churros",
            price: "5.99",
            url: "/images/churros.jpeg",
          },
          {
            name: "Fried Ice Cream",
            price: "5.99",
            url: "/images/friedicecream.jpeg",
          },
        ],
      },
      {
        drinks: [
          {
            name: "Mexican Beer",
            price: "4.99",
            url: "/images/mexicanbeer.jpeg",
          },
          {
            name: "Margarita",
            price: "6.99",
            url: "/images/margarita.jpeg",
          },
        ],
      },
    ],
  },
  {
    id: uuid(),
    url: "/images/urbanslices.jpeg",
    name: "urban slices",
    category: "pizza",
    rating: "84",
    price: "€€",
    info: "Join us for pizza nights filled with laughter and great food.",
    open: "12.00 PM",
    fee: "2.99",
    menu: [
      {
        pizza: [
          {
            name: "Margherita",
            price: "10.50",
            url: "/images/margherita.jpg",
            ingredients: ["tomato sauce", "mozarella", "basil"],
          },
          {
            name: "Marinara",
            price: "9.50",
            url: "/images/marinara.jpeg",
            ingredients: ["tomato sauce", "basil", "garlic"],
          },
          {
            name: "Pepperoni",
            price: "12.50",
            url: "/images/pepperoni.jpeg",
            ingredients: [
              "tomato sauce",
              "mozarella",
              "pepperoni",
              "bell peppers",
            ],
          },
          {
            name: "Vegetarian",
            price: "12.50",
            url: "/images/vegetarianpizza.jpeg",
            ingredients: [
              "tomato sauce",
              "mozarella",
              "bell peppers",
              "onions",
              "mushrooms",
              "spinach",
            ],
          },
          {
            name: "Meat Pizza",
            price: "15.50",
            url: "/images/meatpizza.jpeg",
            ingredients: [
              "tomato sauce",
              "mozarella",
              "sausage",
              "bacon",
              "ground beef",
            ],
          },
          {
            name: "Quattro Formaggi",
            price: "13.50",
            url: "/images/quattroformaggi.jpeg",
            ingredients: [
              "tomato sauce",
              "mozarella",
              "gorgonzola",
              "pecorino",
              "ricotta",
            ],
          },
          {
            name: "Supreme",
            price: "16.50",
            url: "/images/supreme.jpeg",
            ingredients: [
              "tomato sauce",
              "mozarella",
              "aubergine",
              "bell peppers",
              "olive",
              "feta",
            ],
          },
          {
            name: "Buffalo Chicken",
            price: "14.50",
            url: "/images/buffalochicken.jpeg",
            ingredients: [
              "tomato sauce",
              "mozarella",
              "buffalo sauce",
              "shredded chicken",
              "cheese crumbles",
            ],
          },
        ],
      },
      {
        desserts: [
          { name: "Souffle", price: "4.50", url: "/images/souffle.jpeg" },
          { name: "Ice Cream", price: "5.50", url: "/images/icecream.jpeg" },
          { name: "Brownie", price: "5.50", url: "/images/brownie.jpeg" },
        ],
      },
      {
        drinks: [
          { name: "Coca Cola", price: "3.00", url: "/images/coke.jpg" },
          { name: "Fanta", price: "3.00", url: "/images/fanta.jpg" },
          { name: "Beer", price: "3.50", url: "/images/beer.jpeg" },
          { name: "Water", price: "2.00", url: "/images/water.jpeg" },
          { name: "Juice", price: "4.00", url: "/images/juice.webp" },
        ],
      },
    ],
  },
  {
    id: uuid(),
    url: "/images/thai.jpeg",
    name: "thai orchid",
    category: "asian",
    rating: "77",
    price: "€€",
    info: "Savor the fragrant and fiery dishes of Thailand at Thai Orchid Palace. ",
    open: "11.00 AM",
    fee: "2.99",
    menu: [
      {
        appetizers: [
          {
            name: "Spring Rolls",
            price: "5.99",
            url: "/images/springrolls.webp",
            ingredients: ["vegetable", "shrimp", "cucumber", "carrot"],
          },
          {
            name: "Gyoza",
            price: "6.99",
            url: "/images/gyoza.jpeg",
            ingredients: ["pork", "vegetable", "scallions", "soy sauce"],
          },
        ],
      },
      {
        sushi: [
          {
            name: "California Roll",
            price: "10.99",
            url: "/images/californiaroll.jpeg",
            ingredients: ["avocado", "cucumber", "crab meat", "sushi rice"],
          },
          {
            name: "Tuna Roll",
            price: "11.99",
            url: "/images/tunaroll.jpeg",
            ingredients: ["fresh tuna", "mayo", "cucumber", "rice"],
          },
          {
            name: "Dragon Roll",
            price: "13.99",
            url: "/images/dragonroll.jpeg",
            ingredients: ["eel", "avocado", "cucumber", "avocado", "eel sauce"],
          },
        ],
      },
      {
        main: [
          {
            name: "Genetal Tso's Chicken",
            price: "12.99",
            url: "/images/tso.webp",
            ingredients: ["crispy chicken", "steamed broccoli", "spicy sauce"],
          },
          {
            name: "Beef Pad Thai",
            price: "14.99",
            url: "/images/padthai.jpeg",
            ingredients: [
              "tender beef",
              "rice noodles",
              "bean sprouts",
              "peanuts",
            ],
          },
        ],
      },
      {
        desserts: [
          {
            name: "Green Tea Ice Cream",
            price: "4.99",
            url: "/images/greentea.jpeg",
          },
          {
            name: "Mochi Ice Cream",
            price: "5.99",
            url: "/images/mochi.jpeg",
          },
        ],
      },
      {
        drinks: [
          {
            name: "Sake",
            price: "6.99",
            url: "/images/sake.jpeg",
          },
          {
            name: "Tiger Beer",
            price: "4.99",
            url: "/images/tiger.jpeg",
          },
        ],
      },
    ],
  },
  {
    id: uuid(),
    url: "/images/noodlefusion.webp",
    name: "noodle fusion",
    category: "noodle",
    rating: "68",
    price: "€",
    info: "A Symphony of Flavors.",
    open: "01.00 AM",
    fee: "0.00",
    menu: [
      {
        appetizers: [
          {
            name: "Spring Rolls",
            price: "5.99",
            url: "/images/springrolls.webp",
            ingredients: ["avocado", "shrimps", "cucumber", "carrot", "leaves"],
          },
          {
            name: "Gyoza (Potstickers)",
            price: "6.99",
            url: "/images/gyoza.jpeg",
            ingredients: ["pork", "onions", "shiitake mushrooms"],
          },
          {
            name: "Edamame",
            price: "4.99",
            url: "/images/edemame.webp",
          },
        ],
      },
      {
        noodles: [
          {
            name: "Pad Thai",
            price: "10.99",
            url: "/images/padthai.jpeg",
            ingredients: [
              "tofu",
              "rice noodles",
              "crushed peanuts",
              "bean sprouts",
              "lime wedges",
            ],
          },
          {
            name: "Chow Mein",
            price: "9.99",
            url: "/images/chowmein.jpeg",
            ingredients: ["chicken", "vegetables", "savory soy sauce"],
          },
          {
            name: "Yakisoba",
            price: "11.99",
            url: "/images/yakisoba.webp",
            ingredients: [
              "noodles",
              "carrots",
              "cabbage",
              " worcestershire sauce",
            ],
          },
        ],
      },
      {
        udon: [
          {
            name: "Kitsune Udon",
            price: "10.99",
            url: "/images/kitsane.jpeg",
            ingredients: [
              "udon noodles",
              "tofu",
              "green onions",
              " tempura flakes",
            ],
          },
          {
            name: "Curry Udon",
            price: "12.99",
            url: "/images/curryudon.webp",
            ingredients: ["udon noodles", "beef", "curry", "scallion"],
          },
        ],
      },
      {
        desserts: [
          {
            name: "Green Tea Ice Cream",
            price: "4.99",
            url: "/images/greentea.jpeg",
          },
          {
            name: "Mochi Ice Cream",
            price: "5.99",
            url: "/images/mochi.jpeg",
          },
        ],
      },
    ],
  },
  {
    id: uuid(),
    url: "/images/casamia.jpeg",
    name: "casa mia",
    category: "pizza",
    rating: "92",
    price: "€€€€€",
    info: "Experience the art of pizza making in our open kitchen as our skilled chefs craft delicious pies using the finest ingredients.",
    open: "11.00 PM",
    fee: "3.99",
    menu: [
      {
        pizza: [
          {
            name: "Margherita",
            price: "10.50",
            url: "/images/margherita.jpg",
            ingredients: ["tomato sauce", "mozarella", "basil"],
          },
          {
            name: "Marinara",
            price: "9.50",
            url: "/images/marinara.jpeg",
            ingredients: ["tomato sauce", "basil", "garlic"],
          },
          {
            name: "Pepperoni",
            price: "12.50",
            url: "/images/pepperoni.jpeg",
            ingredients: [
              "tomato sauce",
              "mozarella",
              "pepperoni",
              "bell peppers",
            ],
          },
          {
            name: "Vegetarian",
            price: "12.50",
            url: "/images/vegetarianpizza.jpeg",
            ingredients: [
              "tomato sauce",
              "mozarella",
              "bell peppers",
              "onions",
              "mushrooms",
              "spinach",
            ],
          },
          {
            name: "Meat Pizza",
            price: "15.50",
            url: "/images/meatpizza.jpeg",
            ingredients: [
              "tomato sauce",
              "mozarella",
              "sausage",
              "bacon",
              "ground beef",
            ],
          },
          {
            name: "Quattro Formaggi",
            price: "13.50",
            url: "/images/quattroformaggi.jpeg",
            ingredients: [
              "tomato sauce",
              "mozarella",
              "gorgonzola",
              "pecorino",
              "ricotta",
            ],
          },
          {
            name: "Supreme",
            price: "16.50",
            url: "/images/supreme.jpeg",
            ingredients: [
              "tomato sauce",
              "mozarella",
              "aubergine",
              "bell peppers",
              "olive",
              "feta",
            ],
          },
          {
            name: "Buffalo Chicken",
            price: "14.50",
            url: "/images/buffalochicken.jpeg",
            ingredients: [
              "tomato sauce",
              "mozarella",
              "buffalo sauce",
              "shredded chicken",
              "cheese crumbles",
            ],
          },
        ],
      },
      {
        desserts: [
          { name: "Souffle", price: "4.50", url: "/images/souffle.jpeg" },
          { name: "Ice Cream", price: "5.50", url: "/images/icecream.jpeg" },
          { name: "Brownie", price: "5.50", url: "/images/brownie.jpeg" },
        ],
      },
      {
        drinks: [
          { name: "Coca Cola", price: "3.00", url: "/images/coke.jpg" },
          { name: "Fanta", price: "3.00", url: "/images/fanta.jpg" },
          { name: "Beer", price: "3.50", url: "/images/beer.jpeg" },
          { name: "Water", price: "2.00", url: "/images/water.jpeg" },
          { name: "Juice", price: "4.00", url: "/images/juice.webp" },
        ],
      },
    ],
  },

  {
    id: uuid(),
    url: "/images/noodlexpress.jpeg",
    name: "noodle xpress",
    category: "noodle",
    rating: "82",
    price: "€€",
    info: "A culinary journey through Asia.",
    open: "10.00 PM",
    fee: "0.99",
    menu: [
      {
        appetizers: [
          {
            name: "Spring Rolls",
            price: "5.99",
            url: "/images/springrolls.webp",
            ingredients: ["avocado", "shrimps", "cucumber", "carrot", "leaves"],
          },
          {
            name: "Gyoza (Potstickers)",
            price: "6.99",
            url: "/images/gyoza.jpeg",
            ingredients: ["pork", "onions", "shiitake mushrooms"],
          },
          {
            name: "Edamame",
            price: "4.99",
            url: "/images/edemame.webp",
          },
        ],
      },
      {
        noodles: [
          {
            name: "Pad Thai",
            price: "10.99",
            url: "/images/padthai.jpeg",
            ingredients: [
              "tofu",
              "rice noodles",
              "crushed peanuts",
              "bean sprouts",
              "lime wedges",
            ],
          },
          {
            name: "Chow Mein",
            price: "9.99",
            url: "/images/chowmein.jpeg",
            ingredients: ["chicken", "vegetables", "savory soy sauce"],
          },
          {
            name: "Yakisoba",
            price: "11.99",
            url: "/images/yakisoba.webp",
            ingredients: [
              "noodles",
              "carrots",
              "cabbage",
              " worcestershire sauce",
            ],
          },
        ],
      },
      {
        udon: [
          {
            name: "Kitsune Udon",
            price: "10.99",
            url: "/images/kitsane.jpeg",
            ingredients: [
              "udon noodles",
              "tofu",
              "green onions",
              " tempura flakes",
            ],
          },
          {
            name: "Curry Udon",
            price: "12.99",
            url: "/images/curryudon.webp",
            ingredients: ["udon noodles", "beef", "curry", "scallion"],
          },
        ],
      },
      {
        desserts: [
          {
            name: "Green Tea Ice Cream",
            price: "4.99",
            url: "/images/greentea.jpeg",
          },
          {
            name: "Mochi Ice Cream",
            price: "5.99",
            url: "/images/mochi.jpeg",
          },
        ],
      },
    ],
  },
  {
    id: uuid(),
    url: "/images/udondelights.webp",
    name: "udon delights",
    category: "noodle",
    rating: "88",
    price: "€€€€",
    info: "From Kyoto with love.",
    open: "12.00 PM",
    fee: "2.99",
    menu: [
      {
        appetizers: [
          {
            name: "Spring Rolls",
            price: "5.99",
            url: "/images/springrolls.webp",
            ingredients: ["avocado", "shrimps", "cucumber", "carrot", "leaves"],
          },
          {
            name: "Gyoza (Potstickers)",
            price: "6.99",
            url: "/images/gyoza.jpeg",
            ingredients: ["pork", "onions", "shiitake mushrooms"],
          },
          {
            name: "Edamame",
            price: "4.99",
            url: "/images/edemame.webp",
          },
        ],
      },
      {
        noodles: [
          {
            name: "Pad Thai",
            price: "10.99",
            url: "/images/padthai.jpeg",
            ingredients: [
              "tofu",
              "rice noodles",
              "crushed peanuts",
              "bean sprouts",
              "lime wedges",
            ],
          },
          {
            name: "Chow Mein",
            price: "9.99",
            url: "/images/chowmein.jpeg",
            ingredients: ["chicken", "vegetables", "savory soy sauce"],
          },
          {
            name: "Yakisoba",
            price: "11.99",
            url: "/images/yakisoba.webp",
            ingredients: [
              "noodles",
              "carrots",
              "cabbage",
              " worcestershire sauce",
            ],
          },
        ],
      },
      {
        udon: [
          {
            name: "Kitsune Udon",
            price: "10.99",
            url: "/images/kitsane.jpeg",
            ingredients: [
              "udon noodles",
              "tofu",
              "green onions",
              " tempura flakes",
            ],
          },
          {
            name: "Curry Udon",
            price: "12.99",
            url: "/images/curryudon.webp",
            ingredients: ["udon noodles", "beef", "curry", "scallion"],
          },
        ],
      },
      {
        desserts: [
          {
            name: "Green Tea Ice Cream",
            price: "4.99",
            url: "/images/greentea.jpeg",
          },
          {
            name: "Mochi Ice Cream",
            price: "5.99",
            url: "/images/mochi.jpeg",
          },
        ],
      },
    ],
  },
  {
    id: uuid(),
    url: "/images/doughlyheaven.jpeg",
    name: "doughy heaven",
    category: "pizza",
    rating: "74",
    price: "€€",
    info: "Welcome to the ultimate pizza lover's paradise! ",
    open: "12.00 PM",
    fee: "1.99",
    menu: [
      {
        pizza: [
          {
            name: "Margherita",
            price: "10.50",
            url: "/images/margherita.jpg",
            ingredients: ["tomato sauce", "mozarella", "basil"],
          },
          {
            name: "Marinara",
            price: "9.50",
            url: "/images/marinara.jpeg",
            ingredients: ["tomato sauce", "basil", "garlic"],
          },
          {
            name: "Pepperoni",
            price: "12.50",
            url: "/images/pepperoni.jpeg",
            ingredients: [
              "tomato sauce",
              "mozarella",
              "pepperoni",
              "bell peppers",
            ],
          },
          {
            name: "Vegetarian",
            price: "12.50",
            url: "/images/vegetarianpizza.jpeg",
            ingredients: [
              "tomato sauce",
              "mozarella",
              "bell peppers",
              "onions",
              "mushrooms",
              "spinach",
            ],
          },
          {
            name: "Meat Pizza",
            price: "15.50",
            url: "/images/meatpizza.jpeg",
            ingredients: [
              "tomato sauce",
              "mozarella",
              "sausage",
              "bacon",
              "ground beef",
            ],
          },
          {
            name: "Quattro Formaggi",
            price: "13.50",
            url: "/images/quattroformaggi.jpeg",
            ingredients: [
              "tomato sauce",
              "mozarella",
              "gorgonzola",
              "pecorino",
              "ricotta",
            ],
          },
          {
            name: "Supreme",
            price: "16.50",
            url: "/images/supreme.jpeg",
            ingredients: [
              "tomato sauce",
              "mozarella",
              "aubergine",
              "bell peppers",
              "olive",
              "feta",
            ],
          },
          {
            name: "Buffalo Chicken",
            price: "14.50",
            url: "/images/buffalochicken.jpeg",
            ingredients: [
              "tomato sauce",
              "mozarella",
              "buffalo sauce",
              "shredded chicken",
              "cheese crumbles",
            ],
          },
        ],
      },
      {
        desserts: [
          { name: "Souffle", price: "4.50", url: "/images/souffle.jpeg" },
          { name: "Ice Cream", price: "5.50", url: "/images/icecream.jpeg" },
          { name: "Brownie", price: "5.50", url: "/images/brownie.jpeg" },
        ],
      },
      {
        drinks: [
          { name: "Coca Cola", price: "3.00", url: "/images/coke.jpg" },
          { name: "Fanta", price: "3.00", url: "/images/fanta.jpg" },
          { name: "Beer", price: "3.50", url: "/images/beer.jpeg" },
          { name: "Water", price: "2.00", url: "/images/water.jpeg" },
          { name: "Juice", price: "4.00", url: "/images/juice.webp" },
        ],
      },
    ],
  },
  {
    id: uuid(),
    url: "/images/noodlelab.jpeg",
    name: "noodle lab",
    category: "noodle",
    rating: "92",
    price: "€€€€",
    info: "A Taste of the Orient. Step into a realm of culinary enchantment, where traditional recipes meet contemporary twists.",
    open: "10.00 PM",
    fee: "1.99",
    menu: [
      {
        appetizers: [
          {
            name: "Spring Rolls",
            price: "5.99",
            url: "/images/springrolls.webp",
            ingredients: ["avocado", "shrimps", "cucumber", "carrot", "leaves"],
          },
          {
            name: "Gyoza (Potstickers)",
            price: "6.99",
            url: "/images/gyoza.jpeg",
            ingredients: ["pork", "onions", "shiitake mushrooms"],
          },
          {
            name: "Edamame",
            price: "4.99",
            url: "/images/edemame.webp",
          },
        ],
      },
      {
        noodles: [
          {
            name: "Pad Thai",
            price: "10.99",
            url: "/images/padthai.jpeg",
            ingredients: [
              "tofu",
              "rice noodles",
              "crushed peanuts",
              "bean sprouts",
              "lime wedges",
            ],
          },
          {
            name: "Chow Mein",
            price: "9.99",
            url: "/images/chowmein.jpeg",
            ingredients: ["chicken", "vegetables", "savory soy sauce"],
          },
          {
            name: "Yakisoba",
            price: "11.99",
            url: "/images/yakisoba.webp",
            ingredients: [
              "noodles",
              "carrots",
              "cabbage",
              " worcestershire sauce",
            ],
          },
        ],
      },
      {
        udon: [
          {
            name: "Kitsune Udon",
            price: "10.99",
            url: "/images/kitsane.jpeg",
            ingredients: [
              "udon noodles",
              "tofu",
              "green onions",
              " tempura flakes",
            ],
          },
          {
            name: "Curry Udon",
            price: "12.99",
            url: "/images/curryudon.webp",
            ingredients: ["udon noodles", "beef", "curry", "scallion"],
          },
        ],
      },
      {
        desserts: [
          {
            name: "Green Tea Ice Cream",
            price: "4.99",
            url: "/images/greentea.jpeg",
          },
          {
            name: "Mochi Ice Cream",
            price: "5.99",
            url: "/images/mochi.jpeg",
          },
        ],
      },
    ],
  },

  {
    id: uuid(),
    url: "/images/toastybuns.jpeg",
    name: "toasty buns",
    category: "hamburger",
    rating: "82",
    price: "€€",
    info: "Gourmet Burgers",
    open: "12.00 AM",
    fee: "1.99",
    menu: [
      {
        burger: [
          {
            name: "Cheeseburger",
            price: "8.99",
            url: "/images/cheeseburger.jpeg",
            ingredients: [
              "beef patty",
              "cheddar",
              "lettuce",
              "tomato",
              "onion",
            ],
          },
          {
            name: "Bacon Burger",
            price: "10.99",
            url: "/images/baconburger.jpeg",
            ingredients: [
              "beef patty",
              "bacon",
              "lettuce",
              "tomato",
              "red onion",
              "BBQ sauce",
            ],
          },
          {
            name: "Swiss Burger",
            price: "9.99",
            url: "/images/swissburger.jpeg",
            ingredients: [
              "beef patty",
              "mushroom",
              "Swiss cheese",
              "tomato",
              "garlic mayo",
            ],
          },
          {
            name: "Veggie Burger",
            price: "8.99",
            url: "/images/veggieburger.jpeg",
            ingredients: [
              "beef patty",
              "portobello mushroom",
              "roasted pepper",
              "spinach",
              "pesto mayo",
            ],
          },
          {
            name: "Jalapeño Burger",
            price: "9.99",
            url: "/images/jalepenoburger.jpeg",
            ingredients: [
              "beef patty",
              "jalapeños",
              "pepper jack cheese",
              "lettuce",
              "chipotle",
            ],
          },
        ],
      },
      {
        sides: [
          {
            name: "French Fries",
            price: "2.99",
            url: "/images/fries.jpeg",
          },
          {
            name: "Onion Rings",
            price: "3.99",
            url: "/images/onionrings.jpeg",
          },
          {
            name: "Coleslaw",
            price: "4.99",
            url: "/images/coleslaw.jpeg",
          },
        ],
      },
      {
        drinks: [
          {
            name: "Coca Cola",
            price: "2.00",
            url: "/images/coke.jpg",
          },
          {
            name: "Milkshakes",
            price: "4.00",
            url: "/images/milkshake.jpeg",
          },
          {
            name: "Iced Tea",
            price: "2.00",
            url: "/images/icedtea.jpeg",
          },
          {
            name: "Water",
            price: "1.50",
            url: "/images/water.jpeg",
          },
          {
            name: "Beer",
            price: "3.00",
            url: "/images/beer.jpeg",
          },
        ],
      },
    ],
  },

  {
    id: uuid(),
    url: "/images/mystic.jpg",
    name: "mystic szechuan",
    category: "asian",
    rating: "74",
    price: "€€",
    info: "Explore the mystical flavors of Szechuan cuisine at our garden-inspired eatery, where spicy, aromatic dishes are a true adventure for your taste buds.",
    open: "12.00 AM",
    fee: "2.99",
    menu: [
      {
        appetizers: [
          {
            name: "Spring Rolls",
            price: "5.99",
            url: "/images/springrolls.webp",
            ingredients: ["vegetable", "shrimp", "cucumber", "carrot"],
          },
          {
            name: "Gyoza",
            price: "6.99",
            url: "/images/gyoza.jpeg",
            ingredients: ["pork", "vegetable", "scallions", "soy sauce"],
          },
        ],
      },
      {
        sushi: [
          {
            name: "California Roll",
            price: "10.99",
            url: "/images/californiaroll.jpeg",
            ingredients: ["avocado", "cucumber", "crab meat", "sushi rice"],
          },
          {
            name: "Tuna Roll",
            price: "11.99",
            url: "/images/tunaroll.jpeg",
            ingredients: ["fresh tuna", "mayo", "cucumber", "rice"],
          },
          {
            name: "Dragon Roll",
            price: "13.99",
            url: "/images/dragonroll.jpeg",
            ingredients: ["eel", "avocado", "cucumber", "avocado", "eel sauce"],
          },
        ],
      },
      {
        main: [
          {
            name: "Genetal Tso's Chicken",
            price: "12.99",
            url: "/images/tso.webp",
            ingredients: ["crispy chicken", "steamed broccoli", "spicy sauce"],
          },
          {
            name: "Beef Pad Thai",
            price: "14.99",
            url: "/images/padthai.jpeg",
            ingredients: [
              "tender beef",
              "rice noodles",
              "bean sprouts",
              "peanuts",
            ],
          },
        ],
      },
      {
        desserts: [
          {
            name: "Green Tea Ice Cream",
            price: "4.99",
            url: "/images/greentea.jpeg",
          },
          {
            name: "Mochi Ice Cream",
            price: "5.99",
            url: "/images/mochi.jpeg",
          },
        ],
      },
      {
        drinks: [
          {
            name: "Sake",
            price: "6.99",
            url: "/images/sake.jpeg",
          },
          {
            name: "Tiger Beer",
            price: "4.99",
            url: "/images/tiger.jpeg",
          },
        ],
      },
    ],
  },
  {
    id: uuid(),
    url: "/images/burgerfusion.jpeg",
    name: "burger fusion",
    category: "hamburger",
    rating: "78",
    price: "€€€€",
    info: "Prepare for an explosion of taste with our smashed-style burgers, where every bite packs a punch of flavor.",
    open: "01.00 AM",
    fee: "3.99",
    menu: [
      {
        burger: [
          {
            name: "Cheeseburger",
            price: "8.99",
            url: "/images/cheeseburger.jpeg",
            ingredients: [
              "beef patty",
              "cheddar",
              "lettuce",
              "tomato",
              "onion",
            ],
          },
          {
            name: "Bacon Burger",
            price: "10.99",
            url: "/images/baconburger.jpeg",
            ingredients: [
              "beef patty",
              "bacon",
              "lettuce",
              "tomato",
              "red onion",
              "BBQ sauce",
            ],
          },
          {
            name: "Swiss Burger",
            price: "9.99",
            url: "/images/swissburger.jpeg",
            ingredients: [
              "beef patty",
              "mushroom",
              "Swiss cheese",
              "tomato",
              "garlic mayo",
            ],
          },
          {
            name: "Veggie Burger",
            price: "8.99",
            url: "/images/veggieburger.jpeg",
            ingredients: [
              "beef patty",
              "portobello mushroom",
              "roasted pepper",
              "spinach",
              "pesto mayo",
            ],
          },
          {
            name: "Jalapeño Burger",
            price: "9.99",
            url: "/images/jalepenoburger.jpeg",
            ingredients: [
              "beef patty",
              "jalapeños",
              "pepper jack cheese",
              "lettuce",
              "chipotle",
            ],
          },
        ],
      },
      {
        sides: [
          {
            name: "French Fries",
            price: "2.99",
            url: "/images/fries.jpeg",
          },
          {
            name: "Onion Rings",
            price: "3.99",
            url: "/images/onionrings.jpeg",
          },
          {
            name: "Coleslaw",
            price: "4.99",
            url: "/images/coleslaw.jpeg",
          },
        ],
      },
      {
        drinks: [
          {
            name: "Coca Cola",
            price: "2.00",
            url: "/images/coke.jpg",
          },
          {
            name: "Milkshakes",
            price: "4.00",
            url: "/images/milkshake.jpeg",
          },
          {
            name: "Iced Tea",
            price: "2.00",
            url: "/images/icedtea.jpeg",
          },
          {
            name: "Water",
            price: "1.50",
            url: "/images/water.jpeg",
          },
          {
            name: "Beer",
            price: "3.00",
            url: "/images/beer.jpeg",
          },
        ],
      },
    ],
  },
  {
    id: uuid(),
    url: "/images/taqueria.webp",
    name: "taqueria",
    category: "taco",
    rating: "87",
    price: "€€€",
    info: "Step up to our taco truck and savor the best street-style tacos in town. From birria to al pastor, every bite is an authentic adventure.",
    open: "01.00 AM",
    fee: "1.99",
    menu: [
      {
        tacos: [
          {
            name: "Birria Taco",
            price: "7.99",
            url: "/images/birria.jpeg",
            ingredients: [
              "beef",
              "lettuce",
              "cheese",
              "salsa",
              "corn tortilla",
            ],
          },
          {
            name: "Al Pastor",
            price: "8.99",
            url: "/images/alpastor.jpeg",
            ingredients: [
              "thin sliced pork",
              "vegetable",
              "cheese",
              "salsa",
              "pineapple",
              "corn tortilla",
            ],
          },
          {
            name: "Veggie",
            price: "7.99",
            url: "/images/nopales.jpeg",
            ingredients: [
              "nopal",
              "tomato",
              "beans",
              "cilantro",
              "corn tortilla",
            ],
          },
        ],
      },
      {
        sides: [
          {
            name: "Chips and Salsa",
            price: "5.99",
            url: "/images/chipsandsalsa.jpeg",
          },
          {
            name: "Guacamole",
            price: "4.99",
            url: "/images/guac.jpeg",
          },
        ],
      },
      {
        desserts: [
          {
            name: "Churros",
            price: "5.99",
            url: "/images/churros.jpeg",
          },
          {
            name: "Fried Ice Cream",
            price: "5.99",
            url: "/images/friedicecream.jpeg",
          },
        ],
      },
      {
        drinks: [
          {
            name: "Mexican Beer",
            price: "4.99",
            url: "/images/mexicanbeer.jpeg",
          },
          {
            name: "Margarita",
            price: "6.99",
            url: "/images/margarita.jpeg",
          },
        ],
      },
    ],
  },
  {
    id: uuid(),
    url: "/images/burgerandbrews.jpeg",
    name: "burger and brews",
    category: "hamburger",
    rating: "94",
    price: "€€",
    info: "Unwind and savor the perfect pairing of burgers and craft beers at our burger and brews.",
    open: "12.00 AM",
    fee: "1.99",
    menu: [
      {
        burger: [
          {
            name: "Cheeseburger",
            price: "8.99",
            url: "/images/cheeseburger.jpeg",
            ingredients: [
              "beef patty",
              "cheddar",
              "lettuce",
              "tomato",
              "onion",
            ],
          },
          {
            name: "Bacon Burger",
            price: "10.99",
            url: "/images/baconburger.jpeg",
            ingredients: [
              "beef patty",
              "bacon",
              "lettuce",
              "tomato",
              "red onion",
              "BBQ sauce",
            ],
          },
          {
            name: "Swiss Burger",
            price: "9.99",
            url: "/images/swissburger.jpeg",
            ingredients: [
              "beef patty",
              "mushroom",
              "Swiss cheese",
              "tomato",
              "garlic mayo",
            ],
          },
          {
            name: "Veggie Burger",
            price: "8.99",
            url: "/images/veggieburger.jpeg",
            ingredients: [
              "beef patty",
              "portobello mushroom",
              "roasted pepper",
              "spinach",
              "pesto mayo",
            ],
          },
          {
            name: "Jalapeño Burger",
            price: "9.99",
            url: "/images/jalepenoburger.jpeg",
            ingredients: [
              "beef patty",
              "jalapeños",
              "pepper jack cheese",
              "lettuce",
              "chipotle",
            ],
          },
        ],
      },
      {
        sides: [
          {
            name: "French Fries",
            price: "2.99",
            url: "/images/fries.jpeg",
          },
          {
            name: "Onion Rings",
            price: "3.99",
            url: "/images/onionrings.jpeg",
          },
          {
            name: "Coleslaw",
            price: "4.99",
            url: "/images/coleslaw.jpeg",
          },
        ],
      },
      {
        drinks: [
          {
            name: "Coca Cola",
            price: "2.00",
            url: "/images/coke.jpg",
          },
          {
            name: "Milkshakes",
            price: "4.00",
            url: "/images/milkshake.jpeg",
          },
          {
            name: "Iced Tea",
            price: "2.00",
            url: "/images/icedtea.jpeg",
          },
          {
            name: "Water",
            price: "1.50",
            url: "/images/water.jpeg",
          },
          {
            name: "Beer",
            price: "3.00",
            url: "/images/beer.jpeg",
          },
        ],
      },
    ],
  },
  {
    id: uuid(),
    url: "/images/barbequeburger.jpeg",
    name: "barbecue burger",
    category: "hamburger",
    rating: "77",
    price: "€€€€",
    info: "Join us for a barbecue-inspired burger feast. Our grillmasters craft burgers with smoky, mouthwatering perfection.",
    open: "12.00 AM",
    fee: "0.99",
    menu: [
      {
        burger: [
          {
            name: "Cheeseburger",
            price: "8.99",
            url: "/images/cheeseburger.jpeg",
            ingredients: [
              "beef patty",
              "cheddar",
              "lettuce",
              "tomato",
              "onion",
            ],
          },
          {
            name: "Bacon Burger",
            price: "10.99",
            url: "/images/baconburger.jpeg",
            ingredients: [
              "beef patty",
              "bacon",
              "lettuce",
              "tomato",
              "red onion",
              "BBQ sauce",
            ],
          },
          {
            name: "Swiss Burger",
            price: "9.99",
            url: "/images/swissburger.jpeg",
            ingredients: [
              "beef patty",
              "mushroom",
              "Swiss cheese",
              "tomato",
              "garlic mayo",
            ],
          },
          {
            name: "Veggie Burger",
            price: "8.99",
            url: "/images/veggieburger.jpeg",
            ingredients: [
              "beef patty",
              "portobello mushroom",
              "roasted pepper",
              "spinach",
              "pesto mayo",
            ],
          },
          {
            name: "Jalapeño Burger",
            price: "9.99",
            url: "/images/jalepenoburger.jpeg",
            ingredients: [
              "beef patty",
              "jalapeños",
              "pepper jack cheese",
              "lettuce",
              "chipotle",
            ],
          },
        ],
      },
      {
        sides: [
          {
            name: "French Fries",
            price: "2.99",
            url: "/images/fries.jpeg",
          },
          {
            name: "Onion Rings",
            price: "3.99",
            url: "/images/onionrings.jpeg",
          },
          {
            name: "Coleslaw",
            price: "4.99",
            url: "/images/coleslaw.jpeg",
          },
        ],
      },
      {
        drinks: [
          {
            name: "Coca Cola",
            price: "2.00",
            url: "/images/coke.jpg",
          },
          {
            name: "Milkshakes",
            price: "4.00",
            url: "/images/milkshake.jpeg",
          },
          {
            name: "Iced Tea",
            price: "2.00",
            url: "/images/icedtea.jpeg",
          },
          {
            name: "Water",
            price: "1.50",
            url: "/images/water.jpeg",
          },
          {
            name: "Beer",
            price: "3.00",
            url: "/images/beer.jpeg",
          },
        ],
      },
    ],
  },
  {
    id: uuid(),
    url: "/images/amore.webp",
    name: "ristorante amore",
    category: "pizza",
    rating: "78",
    price: "€€€€",
    info: "Escape to Italy without leaving town. Our authentic Neapolitan-style pizzas, with their thin, chewy crusts and fresh toppings, transport you to the heart of Napoli with every bite.",
    open: "11.00 PM",
    fee: "3.99",
    menu: [
      {
        pizza: [
          {
            name: "Margherita",
            price: "10.50",
            url: "/images/margherita.jpg",
            ingredients: ["tomato sauce", "mozarella", "basil"],
          },
          {
            name: "Marinara",
            price: "9.50",
            url: "/images/marinara.jpeg",
            ingredients: ["tomato sauce", "basil", "garlic"],
          },
          {
            name: "Pepperoni",
            price: "12.50",
            url: "/images/pepperoni.jpeg",
            ingredients: [
              "tomato sauce",
              "mozarella",
              "pepperoni",
              "bell peppers",
            ],
          },
          {
            name: "Vegetarian",
            price: "12.50",
            url: "/images/vegetarianpizza.jpeg",
            ingredients: [
              "tomato sauce",
              "mozarella",
              "bell peppers",
              "onions",
              "mushrooms",
              "spinach",
            ],
          },
          {
            name: "Meat Pizza",
            price: "15.50",
            url: "/images/meatpizza.jpeg",
            ingredients: [
              "tomato sauce",
              "mozarella",
              "sausage",
              "bacon",
              "ground beef",
            ],
          },
          {
            name: "Quattro Formaggi",
            price: "13.50",
            url: "/images/quattroformaggi.jpeg",
            ingredients: [
              "tomato sauce",
              "mozarella",
              "gorgonzola",
              "pecorino",
              "ricotta",
            ],
          },
          {
            name: "Supreme",
            price: "16.50",
            url: "/images/supreme.jpeg",
            ingredients: [
              "tomato sauce",
              "mozarella",
              "aubergine",
              "bell peppers",
              "olive",
              "feta",
            ],
          },
          {
            name: "Buffalo Chicken",
            price: "14.50",
            url: "/images/buffalochicken.jpeg",
            ingredients: [
              "tomato sauce",
              "mozarella",
              "buffalo sauce",
              "shredded chicken",
              "cheese crumbles",
            ],
          },
        ],
      },
      {
        desserts: [
          { name: "Souffle", price: "4.50", url: "/images/souffle.jpeg" },
          { name: "Ice Cream", price: "5.50", url: "/images/icecream.jpeg" },
          { name: "Brownie", price: "5.50", url: "/images/brownie.jpeg" },
        ],
      },
      {
        drinks: [
          { name: "Coca Cola", price: "3.00", url: "/images/coke.jpg" },
          { name: "Fanta", price: "3.00", url: "/images/fanta.jpg" },
          { name: "Beer", price: "3.50", url: "/images/beer.jpeg" },
          { name: "Water", price: "2.00", url: "/images/water.jpeg" },
          { name: "Juice", price: "4.00", url: "/images/juice.webp" },
        ],
      },
    ],
  },
  {
    id: uuid(),
    url: "/images/burgershack.jpeg",
    name: "burger shack",
    category: "hamburger",
    rating: "73",
    price: "€",
    info: " Enjoy more than just great food at our burger shack. Take in breathtaking views while savoring the most mouthwatering burgers in town.",
    open: "10.00 AM",
    fee: "1.99",
    menu: [
      {
        burger: [
          {
            name: "Cheeseburger",
            price: "8.99",
            url: "/images/cheeseburger.jpeg",
            ingredients: [
              "beef patty",
              "cheddar",
              "lettuce",
              "tomato",
              "onion",
            ],
          },
          {
            name: "Bacon Burger",
            price: "10.99",
            url: "/images/baconburger.jpeg",
            ingredients: [
              "beef patty",
              "bacon",
              "lettuce",
              "tomato",
              "red onion",
              "BBQ sauce",
            ],
          },
          {
            name: "Swiss Burger",
            price: "9.99",
            url: "/images/swissburger.jpeg",
            ingredients: [
              "beef patty",
              "mushroom",
              "Swiss cheese",
              "tomato",
              "garlic mayo",
            ],
          },
          {
            name: "Veggie Burger",
            price: "8.99",
            url: "/images/veggieburger.jpeg",
            ingredients: [
              "beef patty",
              "portobello mushroom",
              "roasted pepper",
              "spinach",
              "pesto mayo",
            ],
          },
          {
            name: "Jalapeño Burger",
            price: "9.99",
            url: "/images/jalepenoburger.jpeg",
            ingredients: [
              "beef patty",
              "jalapeños",
              "pepper jack cheese",
              "lettuce",
              "chipotle",
            ],
          },
        ],
      },
      {
        sides: [
          {
            name: "French Fries",
            price: "2.99",
            url: "/images/fries.jpeg",
          },
          {
            name: "Onion Rings",
            price: "3.99",
            url: "/images/onionrings.jpeg",
          },
          {
            name: "Coleslaw",
            price: "4.99",
            url: "/images/coleslaw.jpeg",
          },
        ],
      },
      {
        drinks: [
          {
            name: "Coca Cola",
            price: "2.00",
            url: "/images/coke.jpg",
          },
          {
            name: "Milkshakes",
            price: "4.00",
            url: "/images/milkshake.jpeg",
          },
          {
            name: "Iced Tea",
            price: "2.00",
            url: "/images/icedtea.jpeg",
          },
          {
            name: "Water",
            price: "1.50",
            url: "/images/water.jpeg",
          },
          {
            name: "Beer",
            price: "3.00",
            url: "/images/beer.jpeg",
          },
        ],
      },
    ],
  },
  {
    id: uuid(),
    url: "/images/zen.jpeg",
    name: "zen garden",
    category: "asian",
    rating: "82",
    price: "€€€",
    info: "Experience tranquility in every bite at Zen Garden, where our Asian-inspired dishes transport you to a world of serenity and flavor.",
    open: "12.00 AM",
    fee: "0.99",
    menu: [
      {
        appetizers: [
          {
            name: "Spring Rolls",
            price: "5.99",
            url: "/images/springrolls.webp",
            ingredients: ["vegetable", "shrimp", "cucumber", "carrot"],
          },
          {
            name: "Gyoza",
            price: "6.99",
            url: "/images/gyoza.jpeg",
            ingredients: ["pork", "vegetable", "scallions", "soy sauce"],
          },
        ],
      },
      {
        sushi: [
          {
            name: "California Roll",
            price: "10.99",
            url: "/images/californiaroll.jpeg",
            ingredients: ["avocado", "cucumber", "crab meat", "sushi rice"],
          },
          {
            name: "Tuna Roll",
            price: "11.99",
            url: "/images/tunaroll.jpeg",
            ingredients: ["fresh tuna", "mayo", "cucumber", "rice"],
          },
          {
            name: "Dragon Roll",
            price: "13.99",
            url: "/images/dragonroll.jpeg",
            ingredients: ["eel", "avocado", "cucumber", "avocado", "eel sauce"],
          },
        ],
      },
      {
        main: [
          {
            name: "Genetal Tso's Chicken",
            price: "12.99",
            url: "/images/tso.webp",
            ingredients: ["crispy chicken", "steamed broccoli", "spicy sauce"],
          },
          {
            name: "Beef Pad Thai",
            price: "14.99",
            url: "/images/padthai.jpeg",
            ingredients: [
              "tender beef",
              "rice noodles",
              "bean sprouts",
              "peanuts",
            ],
          },
        ],
      },
      {
        desserts: [
          {
            name: "Green Tea Ice Cream",
            price: "4.99",
            url: "/images/greentea.jpeg",
          },
          {
            name: "Mochi Ice Cream",
            price: "5.99",
            url: "/images/mochi.jpeg",
          },
        ],
      },
      {
        drinks: [
          {
            name: "Sake",
            price: "6.99",
            url: "/images/sake.jpeg",
          },
          {
            name: "Tiger Beer",
            price: "4.99",
            url: "/images/tiger.jpeg",
          },
        ],
      },
    ],
  },
  {
    id: uuid(),
    url: "/images/dimsum.webp",
    name: "The dim sum",
    category: "asian",
    rating: "93",
    price: "€€€€€",
    info: "Discover the joy of dim sum at our house, where steaming baskets of dumplings and savory treats await you in a warm and welcoming atmosphere.",
    open: "12.00 AM",
    fee: "3.99",
    menu: [
      {
        appetizers: [
          {
            name: "Spring Rolls",
            price: "5.99",
            url: "/images/springrolls.webp",
            ingredients: ["vegetable", "shrimp", "cucumber", "carrot"],
          },
          {
            name: "Gyoza",
            price: "6.99",
            url: "/images/gyoza.jpeg",
            ingredients: ["pork", "vegetable", "scallions", "soy sauce"],
          },
        ],
      },
      {
        sushi: [
          {
            name: "California Roll",
            price: "10.99",
            url: "/images/californiaroll.jpeg",
            ingredients: ["avocado", "cucumber", "crab meat", "sushi rice"],
          },
          {
            name: "Tuna Roll",
            price: "11.99",
            url: "/images/tunaroll.jpeg",
            ingredients: ["fresh tuna", "mayo", "cucumber", "rice"],
          },
          {
            name: "Dragon Roll",
            price: "13.99",
            url: "/images/dragonroll.jpeg",
            ingredients: ["eel", "avocado", "cucumber", "avocado", "eel sauce"],
          },
        ],
      },
      {
        main: [
          {
            name: "Genetal Tso's Chicken",
            price: "12.99",
            url: "/images/tso.webp",
            ingredients: ["crispy chicken", "steamed broccoli", "spicy sauce"],
          },
          {
            name: "Beef Pad Thai",
            price: "14.99",
            url: "/images/padthai.jpeg",
            ingredients: [
              "tender beef",
              "rice noodles",
              "bean sprouts",
              "peanuts",
            ],
          },
        ],
      },
      {
        desserts: [
          {
            name: "Green Tea Ice Cream",
            price: "4.99",
            url: "/images/greentea.jpeg",
          },
          {
            name: "Mochi Ice Cream",
            price: "5.99",
            url: "/images/mochi.jpeg",
          },
        ],
      },
      {
        drinks: [
          {
            name: "Sake",
            price: "6.99",
            url: "/images/sake.jpeg",
          },
          {
            name: "Tiger Beer",
            price: "4.99",
            url: "/images/tiger.jpeg",
          },
        ],
      },
    ],
  },

  {
    id: uuid(),
    url: "/images/crispycrust.jpeg",
    name: "crispy crust",
    category: "pizza",
    rating: "92",
    price: "€€€€",
    info: "Step into a rustic Italian trattoria ",
    open: "9.00 PM",
    fee: "3.99",
    menu: [
      {
        pizza: [
          {
            name: "Margherita",
            price: "10.50",
            url: "/images/margherita.jpg",
            ingredients: ["tomato sauce", "mozarella", "basil"],
          },
          {
            name: "Marinara",
            price: "9.50",
            url: "/images/marinara.jpeg",
            ingredients: ["tomato sauce", "basil", "garlic"],
          },
          {
            name: "Pepperoni",
            price: "12.50",
            url: "/images/pepperoni.jpeg",
            ingredients: [
              "tomato sauce",
              "mozarella",
              "pepperoni",
              "bell peppers",
            ],
          },
          {
            name: "Vegetarian",
            price: "12.50",
            url: "/images/vegetarianpizza.jpeg",
            ingredients: [
              "tomato sauce",
              "mozarella",
              "bell peppers",
              "onions",
              "mushrooms",
              "spinach",
            ],
          },
          {
            name: "Meat Pizza",
            price: "15.50",
            url: "/images/meatpizza.jpeg",
            ingredients: [
              "tomato sauce",
              "mozarella",
              "sausage",
              "bacon",
              "ground beef",
            ],
          },
          {
            name: "Quattro Formaggi",
            price: "13.50",
            url: "/images/quattroformaggi.jpeg",
            ingredients: [
              "tomato sauce",
              "mozarella",
              "gorgonzola",
              "pecorino",
              "ricotta",
            ],
          },
          {
            name: "Supreme",
            price: "16.50",
            url: "/images/supreme.jpeg",
            ingredients: [
              "tomato sauce",
              "mozarella",
              "aubergine",
              "bell peppers",
              "olive",
              "feta",
            ],
          },
          {
            name: "Buffalo Chicken",
            price: "14.50",
            url: "/images/buffalochicken.jpeg",
            ingredients: [
              "tomato sauce",
              "mozarella",
              "buffalo sauce",
              "shredded chicken",
              "cheese crumbles",
            ],
          },
        ],
      },
      {
        desserts: [
          { name: "Souffle", price: "4.50", url: "/images/souffle.jpeg" },
          { name: "Ice Cream", price: "5.50", url: "/images/icecream.jpeg" },
          { name: "Brownie", price: "5.50", url: "/images/brownie.jpeg" },
        ],
      },
      {
        drinks: [
          { name: "Coca Cola", price: "3.00", url: "/images/coke.jpg" },
          { name: "Fanta", price: "3.00", url: "/images/fanta.jpg" },
          { name: "Beer", price: "3.50", url: "/images/beer.jpeg" },
          { name: "Water", price: "2.00", url: "/images/water.jpeg" },
          { name: "Juice", price: "4.00", url: "/images/juice.webp" },
        ],
      },
    ],
  },
  {
    id: uuid(),
    url: "/images/smash.jpeg",
    name: "smash bite",
    category: "hamburger",
    rating: "92",
    price: "€€€",
    info: "Prepare for an explosion of taste with our smashed-style burgers, where every bite packs a punch of flavor.",
    open: "12.00 AM",
    fee: "2.99",
    menu: [
      {
        burger: [
          {
            name: "Cheeseburger",
            price: "8.99",
            url: "/images/cheeseburger.jpeg",
            ingredients: [
              "beef patty",
              "cheddar",
              "lettuce",
              "tomato",
              "onion",
            ],
          },
          {
            name: "Bacon Burger",
            price: "10.99",
            url: "/images/baconburger.jpeg",
            ingredients: [
              "beef patty",
              "bacon",
              "lettuce",
              "tomato",
              "red onion",
              "BBQ sauce",
            ],
          },
          {
            name: "Swiss Burger",
            price: "9.99",
            url: "/images/swissburger.jpeg",
            ingredients: [
              "beef patty",
              "mushroom",
              "Swiss cheese",
              "tomato",
              "garlic mayo",
            ],
          },
          {
            name: "Veggie Burger",
            price: "8.99",
            url: "/images/veggieburger.jpeg",
            ingredients: [
              "beef patty",
              "portobello mushroom",
              "roasted pepper",
              "spinach",
              "pesto mayo",
            ],
          },
          {
            name: "Jalapeño Burger",
            price: "9.99",
            url: "/images/jalepenoburger.jpeg",
            ingredients: [
              "beef patty",
              "jalapeños",
              "pepper jack cheese",
              "lettuce",
              "chipotle",
            ],
          },
        ],
      },
      {
        sides: [
          {
            name: "French Fries",
            price: "2.99",
            url: "/images/fries.jpeg",
          },
          {
            name: "Onion Rings",
            price: "3.99",
            url: "/images/onionrings.jpeg",
          },
          {
            name: "Coleslaw",
            price: "4.99",
            url: "/images/coleslaw.jpeg",
          },
        ],
      },
      {
        drinks: [
          {
            name: "Coca Cola",
            price: "2.00",
            url: "/images/coke.jpg",
          },
          {
            name: "Milkshakes",
            price: "4.00",
            url: "/images/milkshake.jpeg",
          },
          {
            name: "Iced Tea",
            price: "2.00",
            url: "/images/icedtea.jpeg",
          },
          {
            name: "Water",
            price: "1.50",
            url: "/images/water.jpeg",
          },
          {
            name: "Beer",
            price: "3.00",
            url: "/images/beer.jpeg",
          },
        ],
      },
    ],
  },
  {
    id: uuid(),
    url: "/images/peking.webp",
    name: "peking dynasty",
    category: "asian",
    rating: "69",
    price: "€€€",
    info: "Experience the imperial flavors of China at Peking Dynasty, where traditional dishes are prepared with time-honored techniques and the finest ingredients.",
    open: "01.00 AM",
    fee: "2.99",
    menu: [
      {
        appetizers: [
          {
            name: "Spring Rolls",
            price: "5.99",
            url: "/images/springrolls.webp",
            ingredients: ["vegetable", "shrimp", "cucumber", "carrot"],
          },
          {
            name: "Gyoza",
            price: "6.99",
            url: "/images/gyoza.jpeg",
            ingredients: ["pork", "vegetable", "scallions", "soy sauce"],
          },
        ],
      },
      {
        sushi: [
          {
            name: "California Roll",
            price: "10.99",
            url: "/images/californiaroll.jpeg",
            ingredients: ["avocado", "cucumber", "crab meat", "sushi rice"],
          },
          {
            name: "Tuna Roll",
            price: "11.99",
            url: "/images/tunaroll.jpeg",
            ingredients: ["fresh tuna", "mayo", "cucumber", "rice"],
          },
          {
            name: "Dragon Roll",
            price: "13.99",
            url: "/images/dragonroll.jpeg",
            ingredients: ["eel", "avocado", "cucumber", "avocado", "eel sauce"],
          },
        ],
      },
      {
        main: [
          {
            name: "Genetal Tso's Chicken",
            price: "12.99",
            url: "/images/tso.webp",
            ingredients: ["crispy chicken", "steamed broccoli", "spicy sauce"],
          },
          {
            name: "Beef Pad Thai",
            price: "14.99",
            url: "/images/padthai.jpeg",
            ingredients: [
              "tender beef",
              "rice noodles",
              "bean sprouts",
              "peanuts",
            ],
          },
        ],
      },
      {
        desserts: [
          {
            name: "Green Tea Ice Cream",
            price: "4.99",
            url: "/images/greentea.jpeg",
          },
          {
            name: "Mochi Ice Cream",
            price: "5.99",
            url: "/images/mochi.jpeg",
          },
        ],
      },
      {
        drinks: [
          {
            name: "Sake",
            price: "6.99",
            url: "/images/sake.jpeg",
          },
          {
            name: "Tiger Beer",
            price: "4.99",
            url: "/images/tiger.jpeg",
          },
        ],
      },
    ],
  },
  {
    id: uuid(),
    url: "/images/lotus.jpeg",
    name: "lotus",
    category: "asian",
    rating: "88",
    price: "€€€€",
    info: "Dive into a bowl of noodle perfection at Lotus, where slurping is not only allowed but encouraged. ",
    open: "11.00 AM",
    fee: "3.99",
    menu: [
      {
        appetizers: [
          {
            name: "Spring Rolls",
            price: "5.99",
            url: "/images/springrolls.webp",
            ingredients: ["vegetable", "shrimp", "cucumber", "carrot"],
          },
          {
            name: "Gyoza",
            price: "6.99",
            url: "/images/gyoza.jpeg",
            ingredients: ["pork", "vegetable", "scallions", "soy sauce"],
          },
        ],
      },
      {
        sushi: [
          {
            name: "California Roll",
            price: "10.99",
            url: "/images/californiaroll.jpeg",
            ingredients: ["avocado", "cucumber", "crab meat", "sushi rice"],
          },
          {
            name: "Tuna Roll",
            price: "11.99",
            url: "/images/tunaroll.jpeg",
            ingredients: ["fresh tuna", "mayo", "cucumber", "rice"],
          },
          {
            name: "Dragon Roll",
            price: "13.99",
            url: "/images/dragonroll.jpeg",
            ingredients: ["eel", "avocado", "cucumber", "avocado", "eel sauce"],
          },
        ],
      },
      {
        main: [
          {
            name: "Genetal Tso's Chicken",
            price: "12.99",
            url: "/images/tso.webp",
            ingredients: ["crispy chicken", "steamed broccoli", "spicy sauce"],
          },
          {
            name: "Beef Pad Thai",
            price: "14.99",
            url: "/images/padthai.jpeg",
            ingredients: [
              "tender beef",
              "rice noodles",
              "bean sprouts",
              "peanuts",
            ],
          },
        ],
      },
      {
        desserts: [
          {
            name: "Green Tea Ice Cream",
            price: "4.99",
            url: "/images/greentea.jpeg",
          },
          {
            name: "Mochi Ice Cream",
            price: "5.99",
            url: "/images/mochi.jpeg",
          },
        ],
      },
      {
        drinks: [
          {
            name: "Sake",
            price: "6.99",
            url: "/images/sake.jpeg",
          },
          {
            name: "Tiger Beer",
            price: "4.99",
            url: "/images/tiger.jpeg",
          },
        ],
      },
    ],
  },
  {
    id: uuid(),
    url: "/images/burgerhub.jpeg",
    name: "burgerhub express",
    category: "hamburger",
    rating: "67",
    price: "€",
    info: "Quick, delicious, and oh-so-satisfying!",
    open: "03.00 AM",
    fee: "0.99",
    menu: [
      {
        burger: [
          {
            name: "Cheeseburger",
            price: "8.99",
            url: "/images/cheeseburger.jpeg",
            ingredients: [
              "beef patty",
              "cheddar",
              "lettuce",
              "tomato",
              "onion",
            ],
          },
          {
            name: "Bacon Burger",
            price: "10.99",
            url: "/images/baconburger.jpeg",
            ingredients: [
              "beef patty",
              "bacon",
              "lettuce",
              "tomato",
              "red onion",
              "BBQ sauce",
            ],
          },
          {
            name: "Swiss Burger",
            price: "9.99",
            url: "/images/swissburger.jpeg",
            ingredients: [
              "beef patty",
              "mushroom",
              "Swiss cheese",
              "tomato",
              "garlic mayo",
            ],
          },
          {
            name: "Veggie Burger",
            price: "8.99",
            url: "/images/veggieburger.jpeg",
            ingredients: [
              "beef patty",
              "portobello mushroom",
              "roasted pepper",
              "spinach",
              "pesto mayo",
            ],
          },
          {
            name: "Jalapeño Burger",
            price: "9.99",
            url: "/images/jalepenoburger.jpeg",
            ingredients: [
              "beef patty",
              "jalapeños",
              "pepper jack cheese",
              "lettuce",
              "chipotle",
            ],
          },
        ],
      },
      {
        sides: [
          {
            name: "French Fries",
            price: "2.99",
            url: "/images/fries.jpeg",
          },
          {
            name: "Onion Rings",
            price: "3.99",
            url: "/images/onionrings.jpeg",
          },
          {
            name: "Coleslaw",
            price: "4.99",
            url: "/images/coleslaw.jpeg",
          },
        ],
      },
      {
        drinks: [
          {
            name: "Coca Cola",
            price: "2.00",
            url: "/images/coke.jpg",
          },
          {
            name: "Milkshakes",
            price: "4.00",
            url: "/images/milkshake.jpeg",
          },
          {
            name: "Iced Tea",
            price: "2.00",
            url: "/images/icedtea.jpeg",
          },
          {
            name: "Water",
            price: "1.50",
            url: "/images/water.jpeg",
          },
          {
            name: "Beer",
            price: "3.00",
            url: "/images/beer.jpeg",
          },
        ],
      },
    ],
  },
  {
    id: uuid(),
    url: "/images/dragonflame.webp",
    name: "dragon flame",
    category: "asian",
    rating: "88",
    price: "€€€€",
    info: "Brace yourself for a fiery adventure at Dragon Flame Grill, where our grillmasters infuse Asian barbecue traditions with modern flair.",
    open: "10.00 AM",
    fee: "2.99",
    menu: [
      {
        appetizers: [
          {
            name: "Spring Rolls",
            price: "5.99",
            url: "/images/springrolls.webp",
            ingredients: ["vegetable", "shrimp", "cucumber", "carrot"],
          },
          {
            name: "Gyoza",
            price: "6.99",
            url: "/images/gyoza.jpeg",
            ingredients: ["pork", "vegetable", "scallions", "soy sauce"],
          },
        ],
      },
      {
        sushi: [
          {
            name: "California Roll",
            price: "10.99",
            url: "/images/californiaroll.jpeg",
            ingredients: ["avocado", "cucumber", "crab meat", "sushi rice"],
          },
          {
            name: "Tuna Roll",
            price: "11.99",
            url: "/images/tunaroll.jpeg",
            ingredients: ["fresh tuna", "mayo", "cucumber", "rice"],
          },
          {
            name: "Dragon Roll",
            price: "13.99",
            url: "/images/dragonroll.jpeg",
            ingredients: ["eel", "avocado", "cucumber", "avocado", "eel sauce"],
          },
        ],
      },
      {
        main: [
          {
            name: "Genetal Tso's Chicken",
            price: "12.99",
            url: "/images/tso.webp",
            ingredients: ["crispy chicken", "steamed broccoli", "spicy sauce"],
          },
          {
            name: "Beef Pad Thai",
            price: "14.99",
            url: "/images/padthai.jpeg",
            ingredients: [
              "tender beef",
              "rice noodles",
              "bean sprouts",
              "peanuts",
            ],
          },
        ],
      },
      {
        desserts: [
          {
            name: "Green Tea Ice Cream",
            price: "4.99",
            url: "/images/greentea.jpeg",
          },
          {
            name: "Mochi Ice Cream",
            price: "5.99",
            url: "/images/mochi.jpeg",
          },
        ],
      },
      {
        drinks: [
          {
            name: "Sake",
            price: "6.99",
            url: "/images/sake.jpeg",
          },
          {
            name: "Tiger Beer",
            price: "4.99",
            url: "/images/tiger.jpeg",
          },
        ],
      },
    ],
  },

  {
    id: uuid(),
    url: "/images/cantin.jpeg",
    name: "cantina",
    category: "taco",
    rating: "76",
    price: "€€",
    info: "Escape to the Cantina, where tacos are served with a side of relaxation.",
    open: "10.00 AM",
    fee: "2.99",
    menu: [
      {
        tacos: [
          {
            name: "Birria Taco",
            price: "7.99",
            url: "/images/birria.jpeg",
            ingredients: [
              "beef",
              "lettuce",
              "cheese",
              "salsa",
              "corn tortilla",
            ],
          },
          {
            name: "Al Pastor",
            price: "8.99",
            url: "/images/alpastor.jpeg",
            ingredients: [
              "thin sliced pork",
              "vegetable",
              "cheese",
              "salsa",
              "pineapple",
              "corn tortilla",
            ],
          },
          {
            name: "Veggie",
            price: "7.99",
            url: "/images/nopales.jpeg",
            ingredients: [
              "nopal",
              "tomato",
              "beans",
              "cilantro",
              "corn tortilla",
            ],
          },
        ],
      },
      {
        sides: [
          {
            name: "Chips and Salsa",
            price: "5.99",
            url: "/images/chipsandsalsa.jpeg",
          },
          {
            name: "Guacamole",
            price: "4.99",
            url: "/images/guac.jpeg",
          },
        ],
      },
      {
        desserts: [
          {
            name: "Churros",
            price: "5.99",
            url: "/images/churros.jpeg",
          },
          {
            name: "Fried Ice Cream",
            price: "5.99",
            url: "/images/friedicecream.jpeg",
          },
        ],
      },
      {
        drinks: [
          {
            name: "Mexican Beer",
            price: "4.99",
            url: "/images/mexicanbeer.jpeg",
          },
          {
            name: "Margarita",
            price: "6.99",
            url: "/images/margarita.jpeg",
          },
        ],
      },
    ],
  },
  {
    id: uuid(),
    url: "/images/delsole.jpeg",
    name: "trattoria del sole",
    category: "pizza",
    rating: "68",
    price: "€",
    info: "Discover a world of pizza possibilities",
    open: "2.00 AM",
    fee: "0.99",
    menu: [
      {
        pizza: [
          {
            name: "Margherita",
            price: "10.50",
            url: "/images/margherita.jpg",
            ingredients: ["tomato sauce", "mozarella", "basil"],
          },
          {
            name: "Marinara",
            price: "9.50",
            url: "/images/marinara.jpeg",
            ingredients: ["tomato sauce", "basil", "garlic"],
          },
          {
            name: "Pepperoni",
            price: "12.50",
            url: "/images/pepperoni.jpeg",
            ingredients: [
              "tomato sauce",
              "mozarella",
              "pepperoni",
              "bell peppers",
            ],
          },
          {
            name: "Vegetarian",
            price: "12.50",
            url: "/images/vegetarianpizza.jpeg",
            ingredients: [
              "tomato sauce",
              "mozarella",
              "bell peppers",
              "onions",
              "mushrooms",
              "spinach",
            ],
          },
          {
            name: "Meat Pizza",
            price: "15.50",
            url: "/images/meatpizza.jpeg",
            ingredients: [
              "tomato sauce",
              "mozarella",
              "sausage",
              "bacon",
              "ground beef",
            ],
          },
          {
            name: "Quattro Formaggi",
            price: "13.50",
            url: "/images/quattroformaggi.jpeg",
            ingredients: [
              "tomato sauce",
              "mozarella",
              "gorgonzola",
              "pecorino",
              "ricotta",
            ],
          },
          {
            name: "Supreme",
            price: "16.50",
            url: "/images/supreme.jpeg",
            ingredients: [
              "tomato sauce",
              "mozarella",
              "aubergine",
              "bell peppers",
              "olive",
              "feta",
            ],
          },
          {
            name: "Buffalo Chicken",
            price: "14.50",
            url: "/images/buffalochicken.jpeg",
            ingredients: [
              "tomato sauce",
              "mozarella",
              "buffalo sauce",
              "shredded chicken",
              "cheese crumbles",
            ],
          },
        ],
      },
      {
        desserts: [
          { name: "Souffle", price: "4.50", url: "/images/souffle.jpeg" },
          { name: "Ice Cream", price: "5.50", url: "/images/icecream.jpeg" },
          { name: "Brownie", price: "5.50", url: "/images/brownie.jpeg" },
        ],
      },
      {
        drinks: [
          { name: "Coca Cola", price: "3.00", url: "/images/coke.jpg" },
          { name: "Fanta", price: "3.00", url: "/images/fanta.jpg" },
          { name: "Beer", price: "3.50", url: "/images/beer.jpeg" },
          { name: "Water", price: "2.00", url: "/images/water.jpeg" },
          { name: "Juice", price: "4.00", url: "/images/juice.webp" },
        ],
      },
    ],
  },
];
