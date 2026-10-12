// Central place for all editable site copy and business details.
// Update names, copy, address, phone, and hours here — nothing else
// in the codebase needs to change.

export const site = {
  name: "BoB MARLEY Coffee Bar",
  shortName: "BoB MARLEY",
  tagline: "Coffee worth slowing down for.",
  description:
    "A specialty coffee bar serving carefully sourced beans, brewed with care, in a room built for staying a while.",

  nav: [
    { label: "Home", href: "#top" },
    { label: "Menu", href: "#menu" },
    { label: "Visit", href: "#visit" },
  ],

  hero: {
    eyebrow: "Specialty Coffee",
    heading: "Coffee worth\nslowing down for.",
    body: "We roast in small batches, pull every shot to order, and keep the room quiet enough to hear the grinder. No shortcuts, no syrup pumps you didn't ask for.",
    ctaLabel: "See the menu",
    secondaryLabel: "Visit us",
    secondaryHref: "#visit",
    ctaHref: "#menu",
    // Currently an illustrated artwork. Swap for a photo, e.g. "/images/hero/counter.webp".
    image: "/images/hero/hero.svg" as string | null,
  },

  location: {
    heading: "Visit",
    name: " BoB Marley Coffee Bar",
    addressLines: ["Privado", "Madinaty, Cairo, Egypt"],
    phone: "+20 2 0000 0000",
    directionsLabel: "Get directions",
    directionsHref: "https://maps.google.com/",
    hours: [
      { days: "Every Day", time: "8:00 AM – 2:00 AM" },
      
    ],
  },

  footer: {
    note: "Specialty coffee, Coffe and More ",
    social: [
      { label: "Instagram", href: "#" },
      { label: "Facebook", href: "#" },
    ],
  },
};

export type Site = typeof site;
