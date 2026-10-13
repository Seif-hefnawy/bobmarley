// All menu content lives here, separate from the components that render it.
//
// HOW TO ADD PRODUCTS: find the tab below and put items inside its `items: []`.
//
//   items: [
//     { name: "Flat White", price: "120 EGP" },
//     { name: "Latte", description: "Espresso with steamed milk.", price: "125 EGP" },
//     { name: "Cappuccino", price: "115 EGP", image: "/images/menu/cappuccino.webp" },
//   ],
//
// Only `name` and `price` are required. `description` and `image` are optional.
//
// A tab with no items shows a "coming soon" message automatically.
// Merged tabs use one group per original category so they can be split
// back into separate tabs just by moving the group into its own category.

export type MenuItem = {
  name: string;
  description?: string; // optional
  price: string; // e.g. "120 EGP"
  image?: string | null; // optional, e.g. "/images/menu/flat-white.webp"
};

export type MenuGroup = {
  title: string;
  items: MenuItem[];
};

export type MenuCategory = {
  id: string;
  label: string;
  groups: MenuGroup[];
};

export const menuCategories: MenuCategory[] = [
  {
    id: "hot-coffee",
    label: "Hot Coffee",
    groups: [{ title: "Hot Coffee", items: [
      { name: "Espresso", price: "90 EGP", image: "/images/last/esp.jpg" },
      { name: "Espresso Maccato", price: "100 EGP", image: "/images/last/esp.jpg" },
      { name: "Americano", price: "105 EGP", image: "/images/last/turk.jpg" },
      { name: "Cortado", price: "105 EGP", image: "/images/last/turk.jpg" },
      { name: "Flat White", price: "130 EGP", image: "/images/last/flatwhite.jpg" },
      { name: "Cappuccino", price: "125 EGP", image: "/images/last/flatwhite.jpg" },
      { name: "Latte", price: "135 EGP", image: "/images/last/flatwhite.jpg" },
      { name: "Caramel Maccato", price: "135 EGP", image: "/images/last/flatwhite.jpg" },
      { name: "Spanish Latte", price: "150 EGP", image: "/images/last/flatwhite.jpg" },
    ] }],
  },
  {
    id: "ice-coffee",
    label: "Ice Coffee",
    groups: [{ title: "Ice Coffee", items: [
      { name: "Ice Latte", price: "150 EGP", image: "/images/last/icecoffe.jpg" },
      { name: "Ice Americano", price: "140 EGP", image: "/images/last/iceamricano.jpg" },
      { name: "Ice Spanish Latte", price: "160 EGP", image: "/images/last/icecoffe.jpg" },
      { name: "Ice White&Dark Mocca", price: "165 EGP", image: "/images/last/icecoffe.jpg" },
      { name: "Ice Caramel Maccato", price: "170 EGP", image: "/images/last/carlatte.jpg" },
      { name: "Ice Pistachio Latte ", price: "170 EGP", image: "/images/last/pslatte.jpg" },
      { name: "Ice Creme Brulee ", price: "160 EGP", image: "/images/last/carlatte.jpg" },
       { name: "Ice Hibiscus Coffee ", price: "160 EGP", image: "/images/last/hibi.jpg" },

    ] }],
  },
  {
    id: "none-coffee",
    label: "Signature",
    groups: [{ title: "Nan Coffee", items: [
      { name: "Tea", price: "65 EGP", image: "/images/last/tea.jpg" },
      { name: "Green Tea", price: "65 EGP", image: "/images/last/greentea.jpg" },
      { name: "Hot Chocolate Classic", price: "110 EGP", image: "/images/last/hott.jpg" },
      { name: "Hot Chocolate Fudge", price: "170 EGP", image: "/images/last/hott.jpg" },
      { name: "Milk Tea", price: "110 EGP", image: "/images/last/teamilk.jpg" },
      { name: "Herbs", price: "85 EGP", image: "/images/last/greentea.jpg" },

    ] }],
  },
  {
    id: "specialty-coffee",
    label: "Specialty Coffee",
    groups: [{ title: "Specialty Coffee", items: [
      { name: "V60", price: "170 EGP", image: "/images/last/v60.jpg" },
      { name: "Chemex", price: "170 EGP", image: "/images/last/v60.jpg" },
      { name: "Cold Brew", price: "165 EGP", image: "/images/last/v60.jpg" },
      { name: "siphon", price: "170 EGP", image: "/images/last/v60.jpg" },
      { name: "French press", price: "150 EGP", image: "/images/last/v60.jpg" },
      { name: "Aeropress", price: "160 EGP", image: "/images/last/v60.jpg" },

    ] }],
  },
  {
    id: "frappe-milkshakes",
    label: "Frappe & Milkshakes",
    groups: [
      { title: "Frappe", items: [
        { name: "Caramel Frappe", price: "165 EGP", image: "/images/last/cramelfrappe.jpg" },
        { name: "White Mocca Frappe", price: "170 EGP", image: "/images/last/mocafrappe.jpg" },
        { name: "De Leche Frappe", price: "160 EGP", image: "/images/last/icecoffe.jpg" },
        { name: "Spanish Latte Frappe", price: "165 EGP", image: "/images/last/clasfrappe.jpg" },
        { name: "Salted Caramel Frappe", price: "160 EGP", image: "/images/last/cramelfrappe.jpg" },


      ] },
      { title: "Milkshakes", items: [
        { name: "Classic Milkshake", price: "130 EGP", image: "/images/last/classic.jpg" },
        { name: "Vanilla Choclatte Cramel", price: "150 EGP", image: "/images/last/crashik.jpg" },
        { name: "Fruit Milkshake", price: "160 EGP", image: "/images/last/frotshake.jpg" },
        { name: "Sweet Milkshake", price: "200 EGP", image: "/images/last/sweet.jpg" },
      ] },
    ],
  },
  {
    id: "juice-smoothie",
    label: "Juice & Smoothie",
    groups: [
      { title: "Fresh Juice", items: [
        { name: "Mango", price: "110 EGP", image: "/images/last/man.jpg" },
        { name: "Strawberry", price: "110 EGP", image: "/images/last/str.jpg" },
        { name: "Orange", price: "100 EGP", image: "/images/last/ora.jpg" },
        { name: "Watermelon", price: "150 EGP", image: "/images/last/melonn.jpg" },
        { name: "Watermelon Mint", price: "160 EGP", image: "/images/last/melonmint.jpg" },
        { name: "Kiwi", price: "160 EGP", image: "/images/last/kiwi.jpg" },
        { name: "Cantaloupe", price: "160 EGP", image: "/images/last/cnt.jpg" },
      ] },
      { title: "Smoothie", items: [
        { name: "Mango passion", price: "165 EGP", image: "/images/last/manp.jpg" },
        { name: "Mango kiwi", price: "170 EGP", image: "/images/last/kiman.jpg" },
        { name: "Kiwi Passion ", price: "170 EGP", image: "/images/last/kiwi.jpg" },
        { name: "Watermelon mint  ", price: "160 EGP", image: "/images/last/melonmint.jpg" },
        { name: "Pina colada ", price: "150 EGP", image: "/images/last/pincolada.jpg" },
        { name: "Kiwi Orange ", price: "170 EGP", image: "/images/last/kiwi.jpg" },
        { name: "Pink Lemon", price: "130 EGP", image: "/images/last/pinklemon.jpg" },
        { name: "Blueberry", price: "150 EGP", image: "/images/last/blueberry.jpg" },

      ] },
    ],
  },
  {
    id: "matcha-mojito",
    label: "Matcha & Mojito",
    groups: [
      { title: "Matcha", items: [
        { name: "Ice Strawberry Matcha", price: "185 EGP", image: "/images/last/strma.jpg" },
        { name: "Ice Matcha", price: "180 EGP", image: "/images/last/icema.jpg" },
        { name: "Hot Matcha", price: "160 EGP", image: "/images/last/hotma.jpg" },
        { name: "Ice Mango Matcha", price: "185 EGP", image: "/images/last/manma.jpg" },
        { name: "Ice Spanish Matcha", price: "185 EGP", image: "/images/last/spanishm.jpg" },
        { name: "Ice Blueberry Matcha", price: "160 EGP", image: "/images/last/berym.jpg" },
        { name: "Ice White Matcha", price: "160 EGP", image: "/images/last/whitema.jpg" },
        
      ] },
      { title: "Mojito", items: [

        { name: "Classic Mojito", price: "140 EGP", image: "/images/last/cmoj.jpg" },
        { name: "Blade Mary", price: "150 EGP", image: "/images/last/spicy.jpg" },
        { name: "Mai Tai", price: "160 EGP", image: "/images/last/cmoj.jpg" },
        { name: "Midnight Kiss", price: "170 EGP", image: "/images/last/mednight.jpg" },
        { name: "Espresso Martini", price: "160 EGP", image: "/images/last/cmoj.jpg" },

        

      ] },
    ],
  },
  {
    id: "dessert-soft-drink",
    label: "Dessert & Soft Drink",
    groups: [{ title: "Dessert & Soft Drink", items: [] }],
  },
];
