import { fecthData } from './fetch'

export function searchCards(term) {
   return fecthData(`/api/search?term=${term}`);
}

export function getAllProducts() {
   return fecthData('/api/products');
}

export function productAdd(product) {
   return fecthData('/api/products-add', 'POST', product);
}

