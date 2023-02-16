import { Component, Input } from '@angular/core';
import { Product } from '../products';
//importa l'array di prodotti

@Component({
  //decoratore che contiene i metadati
  //
  selector: 'app-product-alerts',
  //identifica il componente, che per convenzione iniziano con app- seguito dal nome del componente
  //
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css'],
  //nomi dei file HTML e CSS del componente
  //
})
export class ProductAlertsComponent {
  @Input() product!: Product;
  //definizione proprietà dove il decoratore (Input) attribuisce il valore a product dal  componente genitore Product
}
//questa classe gestisce la funzionalità per il componente
