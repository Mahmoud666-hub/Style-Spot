import { Injectable } from '@angular/core';
import { Iproduct } from '../models/iproduct';
import { Icategory } from '../models/icategory';

@Injectable({
  providedIn: 'root'
})
export class StaticproductsService {

  myproducts:Iproduct[];
  mycategories:Icategory[];

  constructor() { 
    this.myproducts=[
      {id:100, name:"Valantino", quantity:20, imgurl:"/assets/images/product-11.jpg", catid:4, price:5000},
      {id:200, name:"Nike", quantity:20, imgurl:"/assets/images/product-03.jpg", catid:4, price:5000},
      {id:300, name:"bolo", quantity:20, imgurl:"/assets/images/tro_1.jpg", catid:1, price:5000},
      {id:400, name:"gap", quantity:20, imgurl:"/assets/images/tro_2.jpg", catid:1, price:5000},
      {id:500, name:"bolo", quantity:20, imgurl:"/assets/images/tro_3.jpeg", catid:1, price:5000},
      {id:600, name:"bolo", quantity:20, imgurl:"/assets/images/tro_4.jpeg", catid:1, price:5000},
      {id:700, name:"gap", quantity:20, imgurl:"/assets/images/hod_1.jpg", catid:2, price:5000},
      {id:800, name:"Adidas", quantity:20, imgurl:"/assets/images/hod_2.jpg", catid:2, price:5000},
      {id:900, name:"bolo", quantity:20, imgurl:"/assets/images/hod_3.jpg", catid:2, price:5000},
      {id:110, name:"bolo", quantity:20, imgurl:"/assets/images/tsh_1.jpg", catid:3, price:5000},
      {id:220, name:"Adidas", quantity:20, imgurl:"/assets/images/tsh_2.jpg", catid:3, price:5000},
      {id:330, name:"Nike", quantity:20, imgurl:"/assets/images/tsh_3.jpg", catid:3, price:5000}
    ];

    this.mycategories=[
      {id:3, name:"tshirt"},
      {id:1, name:"trouser"},
      {id:2, name:"hoodies"},
      {id:4, name:"shirts"}
    ];
  }

  getallproducts():Iproduct[] {
    return this.myproducts;
  };

  getproductsbycatid(catid:number):Iproduct[] {
    return this.myproducts.filter((pro)=> pro.catid==catid);
  }

}
