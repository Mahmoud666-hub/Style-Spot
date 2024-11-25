import { Component, OnInit } from '@angular/core';
import { StaticproductsService } from '../services/staticproducts.service';
import { SingleproidService } from '../services/singleproid.service';
import { Iproduct } from '../models/iproduct';

@Component({
  selector: 'app-singepage',
  templateUrl: './singepage.component.html',
  styleUrl: './singepage.component.css'
})
export class SingepageComponent implements OnInit {
  myproduct: Iproduct| null = {} as Iproduct;
  myid!:number;

  constructor (private stat: StaticproductsService, private singl:SingleproidService) {}

  ngOnInit(): void {
    this.singl.productdate.subscribe({
      next:(res)=>{
        this.myid = res;
        this.myproduct = this.stat.getproductbyid(this.myid);
      }
    })
  }

  addcart() {
    this.singl.changeProductIdcart(this.myid);
  }

}
