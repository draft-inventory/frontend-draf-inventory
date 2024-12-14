import {Category} from './category.model';
import {Quantity} from './quantity.model';
import {Price} from './price.model';
import {Query} from '@angular/core';

export class Product {
  id: any;
  name: string;
  description: string;
  productCode: string;
  expirationDate: Date;
  locationId: string;
  categoryId: Category;
  quantityId: Quantity;
  priceId: Price;

  constructor() {
    this.id = "";
    this.name = "";
    this.description = "";
    this.productCode = "";
    this.expirationDate = new Date();
    this.locationId = "";
    this.categoryId = new Category();
    this.quantityId = new Quantity();
    this.priceId = new Price();
  }
}
