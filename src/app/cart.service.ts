import { Product } from './products';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Product[] = [];
  //proprietà per memorizzare l'array dei prodotti correnti nel carrello
  addToCart(product: Product) {
    this.items.push(product);
  }
  //aggiunge un prodotto a array items
  getItems() {
    return this.items;
  }
  //raccoglie cosa gli utenti mettono nel carrello e restituisce ogni articolo con la quantità associata
  clearCart() {
    this.items = [];
    return this.items;
  }
  //restituisce un array vuoto per svuotare il carrello
  constructor() {}
}
