import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product, products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent {
  product: Product | undefined;

  constructor(private route: ActivatedRoute) {}
  //iniettare ActivateRoute nel costruttore

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
