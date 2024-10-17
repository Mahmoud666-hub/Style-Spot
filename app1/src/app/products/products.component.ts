import { Component } from '@angular/core';
import { StaticproductsService } from '../services/staticproducts.service';
import { Iproduct } from '../models/iproduct';
import { SingleproidService } from '../services/singleproid.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  products:Iproduct[];
  filteredproducts:Iproduct[];


  constructor(private stat:StaticproductsService, private singleid:SingleproidService) {
    this.products=stat.getallproducts();
    this.filteredproducts = stat.getallproducts();
  }

  filterProductsByCategory(categoryId: number = 0): void {
      if (categoryId==0) {
        this.filteredproducts = this.products;
      } else {
        this.filteredproducts = this.stat.getproductsbycatid(categoryId);
      }
  }

  sendproidfromfav(id:number) {
    this.singleid.changeProductIdfav(id);
  }

  sendproidfromcart(id:number) {
    this.singleid.changeProductIdcart(id);
  }

}

