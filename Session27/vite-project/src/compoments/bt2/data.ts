export interface IProduct {
  id: number;
  name: string;
  price: number;
}

export const products: IProduct[] = [
  { id: 1, name: "Laptop Dell XPS 13", price: 35000000 },
  { id: 2, name: "iPhone 14 Pro", price: 30000000 },
  { id: 3, name: "Samsung Galaxy S22", price: 25000000 },
  { id: 4, name: "Tai nghe Sony WH-1000XM4", price: 7000000 },
  { id: 5, name: "Apple Watch Series 8", price: 12000000 },
];

