export interface IGift {
  id: number;
  name: string;
  description: string;
  category: string;
  categoryName: string;
  price: number;
  superpowers: {
    live: string;
    create: string;
    love: string;
    dream: string;
  };
  image: string;
}
