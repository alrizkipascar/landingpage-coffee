// import avocado from "../../../assets/image/menu/avocadotoast.jpg";
import cappucino from "../../../assets/image/menu/cappucino.jpg";
import latte from "../../../assets/image/menu/latte.jpg";
import lemon from "../../../assets/image/menu/lemontea.jpg";
import lunch from "../../../assets/image/menu/lunch.jpg";
import matcha from "../../../assets/image/menu/matchalatte.jpg";
// import oreo from "../../../assets/image/menu/oreomilkshake.jpg";
import sandwich from "../../../assets/image/menu/sandwich.jpg";
import tea from "../../../assets/image/menu/tea.jpg";
// import thai from "../../../assets/image/menu/thai tea.jpg";
import fries from "../../../assets/image/menu/fries.jpg";

const menuImage = [
  // {
  //   id: 1,
  //   image: avocado,
  //   name: "Avocado Toast",
  //   price: 35000,
  //   description:
  //     "Classic avocado toast with egg and avocado, with onion, garlic, salt, and pepper.",
  //   category: "Food",

  //   served: ["Baguette", "Croissant", "White bread"],
  // },
  {
    id: 2,
    image: cappucino,
    name: "Cappucino",
    price: 25000,
    description:
      "Cappucino with our quality beans, can be served hot or iced, is up to you!.",
    category: "Drink",
    served: ["Hot", "Iced"],
  },
  {
    id: 3,
    image: latte,
    name: "Latte",
    price: 35000,
    description:
      "Latte with our quality beans, can be served hot or iced, is up to you!.",
    category: "Drink",

    served: ["Hot", "Iced"],
  },
  //   {
  //     id: 4,
  //     image: cappucino,
  //     name: "Cappucino",
  //     price: 35000,
  //     description:
  //       "Cappucino with our quality beans, can be served hot or iced, is up to you!.",
  //     category: "drink",
  //     served: ["Hot", "Iced"],
  //   },
  {
    id: 6,
    image: tea,
    name: "Tea",
    price: 15000,
    description: "Tea for calming your nerves.",
    category: "Drink",
    served: ["Hot", "Iced"],
  },

  {
    id: 7,
    image: lunch,
    name: "Lunch Combo",
    price: 80000,
    description:
      "If you hungry, we got lunch combo containing 6 slices of sandwich and fries.",
    category: "Food",
    served: [null],
  },
  {
    id: 8,
    image: matcha,
    name: "Matcha Latte",
    price: 35000,
    description: "Matcha latte, really good for calming your mind.",
    category: "Drink",
    served: ["Hot", "Iced"],
  },
  // {
  //   id: 9,
  //   image: oreo,
  //   name: "Oreo Milkshake",
  //   price: 35000,
  //   description:
  //     "Oreo milkshake, you cannot make mistake with this drink for real for real.",
  //   category: "Drink",
  //   served: ["Hot", "Iced"],
  // },
  {
    id: 10,
    image: sandwich,
    name: "Sandwich",
    price: 50000,
    description:
      "Sandwich with 50 grams of smoked meat, lettuce, onion, and egg, total 4 sandwiches.",
    category: "Food",

    served: ["Baguette", "Croissant", "White bread"],
  },
  {
    id: 11,
    image: lemon,
    name: "Lemon tea",
    price: 15000,
    description: "Lemon with tea, do we need explain more? :).",
    category: "Drink",
    served: ["Hot", "Iced"],
  },
  // {
  //   id: 12,
  //   image: thai,
  //   name: "Thai tea",
  //   price: 35000,
  //   description:
  //     "Your usual thai tea, we tried or best to mimic the original thai tea with skimmed milk.",
  //   category: "Drink",
  //   served: ["Hot", "Iced"],
  // },
  {
    id: 13,
    image: fries,
    name: "Fried fries",
    price: 25000,
    description: "Fried fries with salt and pepper, best snack in the world.",
    category: "Food",
    served: [null],
  },
];
export default menuImage;
