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
    category: "Pizza",
    numberOfPlaces: 9,
  },
  {
    id: uuid(),
    url: "/images/noddle.jpg",
    category: "Noddle",
    numberOfPlaces: 4,
  },
  {
    id: uuid(),
    url: "/images/hamburger01.jpg",
    category: "Hamburger",
    numberOfPlaces: 12,
  },
  {
    id: uuid(),
    url: "/images/asian01.jpg",
    category: "Asian",
    numberOfPlaces: 15,
  },
  {
    id: uuid(),
    url: "/images/doner01.jpeg",
    category: "Döner",
    numberOfPlaces: 6,
  },
  {
    id: uuid(),
    url: "/images/taco01.jpg",
    category: "Taco",
    numberOfPlaces: 2,
  },
  {
    id: uuid(),
    url: "/images/salad01.jpg",
    category: "Salad",
    numberOfPlaces: 2,
  },
  {
    id: uuid(),
    url: "/images/pasta02.jpeg",
    category: "Pasta",
    numberOfPlaces: 7,
  },
  {
    id: uuid(),
    url: "/images/chicken.jpg",
    category: "Chicken",
    numberOfPlaces: 4,
  },
  {
    id: uuid(),
    url: "/images/sushi.jpg",
    category: "Sushi",
    numberOfPlaces: 7,
  },
  {
    id: uuid(),
    url: "/images/indian.jpg",
    category: "Indian",
    numberOfPlaces: 9,
  },
  {
    id: uuid(),
    url: "/images/mediterrenean.jpeg",
    category: "Mediterrenean",
    numberOfPlaces: 6,
  },
  {
    id: uuid(),
    url: "/images/dessert.jpg",
    category: "Dessert",
    numberOfPlaces: 3,
  },
  {
    id: uuid(),
    url: "/images/fish.jpg",
    category: "Fish",
    numberOfPlaces: 5,
  },
  {
    id: uuid(),
    url: "/images/vegan.jpg",
    category: "Vegan",
    numberOfPlaces: 6,
  },
  {
    id: uuid(),
    url: "/images/arabic.jpeg",
    category: "Arabic",
    numberOfPlaces: 5,
  },
  {
    id: uuid(),
    url: "/images/breakfast.jpg",
    category: "Breakfast",
    numberOfPlaces: 3,
  },
  {
    id: uuid(),
    url: "/images/sandwich.jpg",
    category: "Sandwich",
    numberOfPlaces: 2,
  },
  {
    id: uuid(),
    url: "/images/coffee.jpg",
    category: "Cafe",
    numberOfPlaces: 4,
  },
  {
    id: uuid(),
    url: "/images/tapas.jpg",
    category: "Tapas",
    numberOfPlaces: 3,
  },
  {
    id: uuid(),
    url: "/images/greek.jpg",
    category: "Greek",
    numberOfPlaces: 5,
  },
  {
    id: uuid(),
    url: "/images/african.jpg",
    category: "African",
    numberOfPlaces: 4,
  },
  {
    id: uuid(),
    url: "/images/austrian.jpg",
    category: "Austrian",
    numberOfPlaces: 3,
  },
  {
    id: uuid(),
    url: "/images/smoothie.jpg",
    category: "Smoothie",
    numberOfPlaces: 3,
  },
  {
    id: uuid(),
    url: "/images/falafel.jpg",
    category: "Falafel",
    numberOfPlaces: 3,
  },
];

export const restaurantItems = [
  {
    id: uuid(),
    url: "/images/zola.jpeg",
    name: "Zola",
    category: "Pizza",
    rating: "82",
    price: "€€€",
    info: "Neapolitan wood",
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
        ],
      },
      {
        desserts: [
          { name: "Souffle", price: "4.50", url: "/images/souffle.jpeg" },
        ],
      },
      {
        drinks: [
          { name: "Coca Cola", price: "3.00", url: "/images/coke.jpg" },
          { name: "Fanta", price: "3.00", url: "/images/fanta.jpg" },
        ],
      },
    ],
  },
  {
    id: uuid(),
    url: "/images/ilcasolare.webp",
    restaurantUrl: "",
    name: "Il Casolare",
    category: "Pizza",
    rating: "",
    price: "",
    info: "",
    menu: [
      {
        appetizers: [{}, "y"],
        main: ["z", "l"],
        desserts: ["k", "l"],
        drinks: ["o", "p"],
      },
    ],
  },
  {
    id: uuid(),
    url: "/images/wencheng.webp",
    name: "Wen Cheng",
    category: "Noddle",
    rating: "",
    price: "",
    info: "",
    menu: [
      {
        appetizers: [{}, "y"],
        main: ["z", "l"],
        desserts: ["k", "l"],
        drinks: ["o", "p"],
      },
    ],
  },
  {
    id: uuid(),
    url: "/images/burgermeister.jpeg",
    name: "Burgermeister",
    category: "Hamburger",
    rating: "85",
    price: "€€",
    info: "Best burger in the heart of Kreuzberg",
    open: "12.00 AM",
    fee: "1.99",
    menu: [
      {
        hamburger: [
          {
            name: "Hamburger",
            price: "5.50",
            url: "/images/classicHamburger.jpeg",
            ingredients: ["beef", "cheddar", "lettuce", "tomato", "onion"],
          },
          {
            name: "Meisterburger",
            price: "6.50",
            url: "/images/meisterburger.jpeg",
            ingredients: [
              "beef",
              "cheddar",
              "lettuce",
              "tomato",
              "onion",
              "mushroom",
              "bacon",
            ],
          },
        ],
      },
      {
        desserts: [
          { name: "Cookie", price: "3.50", url: "/images/cookie.jpg" },
        ],
      },
      {
        drinks: [
          { name: "Coca Cola", price: "3.00", url: "/images/coke.jpg" },
          { name: "Fanta", price: "3.00", url: "/images/fanta.jpg" },
        ],
      },
    ],
  },
  {
    id: uuid(),
    url: "/images/umami01.png",
    name: "Umami",
    category: "Asian",
    rating: "",
    price: "",
    info: "",
    menu: [
      {
        appetizers: [{}, "y"],
        main: ["z", "l"],
        desserts: ["k", "l"],
        drinks: ["o", "p"],
      },
    ],
  },
  {
    id: uuid(),
    url: "/images/hasir.webp",
    name: "Hasir",
    category: "Döner",
    rating: "",
    price: "",
    info: "",
    menu: [
      {
        appetizers: [{}, "y"],
        main: ["z", "l"],
        desserts: ["k", "l"],
        drinks: ["o", "p"],
      },
    ],
  },
  {
    id: uuid(),
    url: "/images/taqueria.jpeg",
    name: "Taqueria el Oso",
    category: "Taco",
    rating: "",
    price: "",
    info: "",
    menu: [
      {
        appetizers: [{}, "y"],
        main: ["z", "l"],
        desserts: ["k", "l"],
        drinks: ["o", "p"],
      },
    ],
  },
  {
    id: uuid(),
    url: "/images/kfc.jpeg",
    name: "KFC",
    category: "Chicken",
    rating: "",
    price: "",
    info: "",
    menu: [
      {
        appetizers: [{}, "y"],
        main: ["z", "l"],
        desserts: ["k", "l"],
        drinks: ["o", "p"],
      },
    ],
  },
  {
    id: uuid(),
    url: "/images/burgerking.webp",
    name: "Burger King",
    category: "Hamburger",
    rating: "",
    price: "",
    info: "",
    menu: [
      {
        appetizers: [{}, "y"],
        main: ["z", "l"],
        desserts: ["k", "l"],
        drinks: ["o", "p"],
      },
    ],
  },
  {
    id: uuid(),
    url: "/images/subway.jpeg",
    name: "Subway",
    category: "Sandwich",
    rating: "",
    price: "",
    info: "",
    menu: [
      {
        appetizers: [{}, "y"],
        main: ["z", "l"],
        desserts: ["k", "l"],
        drinks: ["o", "p"],
      },
    ],
  },
  {
    id: uuid(),
    url: "/images/starbucks.webp",
    name: "Starbucks",
    category: "Coffee",
    rating: "",
    price: "",
    info: "",
    menu: [
      {
        appetizers: [{}, "y"],
        main: ["z", "l"],
        desserts: ["k", "l"],
        drinks: ["o", "p"],
      },
    ],
  },
];

export const mainJSON = [
  {
    id: uuid(),
    url: "/images/zola.jpeg",
    name: "Zola",
    category: "Pizza",
    rating: "82",
    price: "€€€",
    info: "Neapolitan wood",
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
        ],
      },
      {
        desserts: [
          { name: "Souffle", price: "4.50", url: "/images/souffle.jpeg" },
        ],
      },
      {
        drinks: [
          { name: "Coca Cola", price: "3.00", url: "/images/coke.jpg" },
          { name: "Fanta", price: "3.00", url: "/images/fanta.jpg" },
        ],
      },
    ],
  },
];
