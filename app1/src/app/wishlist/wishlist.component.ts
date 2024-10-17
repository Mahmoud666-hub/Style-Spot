import { Component, OnInit } from '@angular/core';
import { SingleproidService } from '../services/singleproid.service';
import { Iproduct } from '../models/iproduct';
import { StaticproductsService } from '../services/staticproducts.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.css'
})
export class WishlistComponent implements OnInit {
  recivedproid!:number | null;
  newpro:Iproduct | null = {} as Iproduct;
  myfavourites:Iproduct[] = [] as Iproduct[];
  

  constructor(private singlepro:SingleproidService, private statpro:StaticproductsService) {}
  ngOnInit(): void {
    this.singlepro.currentid.subscribe({
      next:(res)=>{
        this.recivedproid = res;
        // console.log(this.recivedproid);
         this.newpro = this.statpro.getproductbyid(this.recivedproid);
        if (this.newpro && !this.myfavourites.includes(this.newpro)) {
          this.myfavourites.push(this.newpro);
        }
        // console.log(this.myfavourites);
      }
    })
  };



}
