import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { SingleproidService } from '../services/singleproid.service';
import { StaticproductsService } from '../services/staticproducts.service';
import { Iproduct } from '../models/iproduct';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements  OnInit {

  myproid!:number;
  addedpro!:Iproduct | null;
  listpro:Iproduct[] = [] as Iproduct[];
  totalprice:number = 0;
  clearbtn: boolean = false;

  constructor(private single:SingleproidService, private stat:StaticproductsService) {}
  ngOnInit(): void {
    this.single.cartid.subscribe({
      next:(res)=>{
            this.myproid = res;
            this.addedpro = this.stat.getproductbyid(this.myproid);
            if (this.addedpro && !this.listpro.includes(this.addedpro)) {
                  this.listpro.push(this.addedpro);
                  this.totalprice += this.addedpro.price;
                }
          }
    })

    
  
  }

  dellall(): void {
    this.clearbtn = true;
    this.listpro = [];
    this.totalprice = 0;
  }

}