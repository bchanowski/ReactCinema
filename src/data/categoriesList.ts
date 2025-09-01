import type { TCategory } from "../types/CategoryType";

export const categoriesList: TCategory[] = [
  {
    id: 1,
    name: "What's On",
    options: {
      hasOptions: false,
      option: [],
    },
  },
  {
    id: 2,
    name: "Price List",
    options: {
      hasOptions: false,
      option: [],
    },
  },
  {
    id: 3,
    name: "Events",
    options: {
      hasOptions: true,
      option: [
        "Football",
        "Concerts",
        "Marathons",
        "Premiers",
        "Festivals",
        "Throwbacks",
      ],
    },
  },
  {
    id: 4,
    name: "News",
    options: {
      hasOptions: true,
      option: ["Promotions", "Previews", "Reviews", "Annoucments"],
    },
  },
  {
    id: 5,
    name: "Schools",
    options: {
      hasOptions: true,
      option: ["Faculties", "Workshops", "Movies", "Education"],
    },
  },
  {
    id: 6,
    name: "Food Menu",
    options: {
      hasOptions: false,
      option: [],
    },
  },
  {
    id: 7,
    name: "More",
    options: {
      hasOptions: true,
      option: ["Ads", "Renting", "Returns", "Careers", "Locals", "Contact"],
    },
  },
];
