import type { TCategory } from "../types/CategoryInterface";

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
      option: [],
    },
  },
  {
    id: 4,
    name: "News",
    options: {
      hasOptions: true,
      option: [],
    },
  },
  {
    id: 5,
    name: "Schools",
    options: {
      hasOptions: true,
      option: [],
    },
  },
  {
    id: 6,
    name: "Food & Drinks",
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
      option: [],
    },
  },
];
