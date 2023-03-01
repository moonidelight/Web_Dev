import {Product, products} from './products';

export interface Category {
  id: number
  name: string
  product: Product[]
}
export const categories = [
  {
    id: 1,
    name: 'Товары для животных',
    product: products.slice(0,5)
  },
  {
    id: 2,
    name: 'Мороженое',
    product: products.slice(5,10)
  },
  {
    id: 3,
    name: 'Сэндвичи, бутерброды, шаурма',
    product: products.slice(10,15)
  },
  {
    id: 4,
    name: 'Соки, нектары, морсы',
    product: products.slice(15,20)
  }
];
