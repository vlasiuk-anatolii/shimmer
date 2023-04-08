import product from '../../src/api/products.json';
import { Product } from '../react-app-env';

export function getProducts():Product[] {
  return product;
}

export function getDetails(id: number): Product | undefined {
  const products = getProducts();
  const details = products.find(item => item.id === id);

  return details;
}
