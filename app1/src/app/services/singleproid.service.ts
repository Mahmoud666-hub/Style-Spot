import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SingleproidService {

  private productsourceid = new ReplaySubject<number>();
  private productcart = new ReplaySubject<number>();
  private productdateils = new ReplaySubject<number>();

  currentid = this.productsourceid.asObservable();
  cartid = this.productcart.asObservable();
  productdate = this.productdateils.asObservable();

  constructor() { }

    // دالة لتغيير الـ id
    changeProductIdfav(id: number) {
      this.productsourceid.next(id);
    }

    changeProductIdcart(id: number) {
      this.productcart.next(id);
    }

    changeproductdate(id:number) {
      this.productdateils.next(id);
    }
}
