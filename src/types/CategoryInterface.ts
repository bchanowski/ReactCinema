export type TCategory = {
  id: number;
  name: string;
  options: {
    hasOptions: boolean;
    option: string[];
  };
};
