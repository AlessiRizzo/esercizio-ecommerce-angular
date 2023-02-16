import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product, products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}
  //iniettare ActivateRoute nel costruttore e iniettare il servizio carrello

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
  //prende product come argomento, usa il metodo per aggiungere il prodotto al carrello e visualizza il messaggio

  ngOnInit() {
    //prendi l'id del prodotto dalla route
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    //trova il prodotto che corrisponde all'id trovato in route
    this.product = products.find(
      (product) => product.id === productIdFromRoute
    );
  }
}
