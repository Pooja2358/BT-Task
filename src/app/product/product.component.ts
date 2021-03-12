import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConstantService } from '../constant.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productsCollection:any;
  productsArray:any;
  productId:any;
  constructor(private router:Router, public serviceCall:ConstantService) { }

  ngOnInit(): void {
    this.productsCollection = this.serviceCall.productInfo;
  }

  viewDetails(event){
    if(event)
      this.productId = event;
      this.router.navigate(['/details'],{queryParams:{"id":this.productId}});
  }

  logOut(){
    this.router.navigate([''])
  }

  viewCart(){
    this.router.navigate(['/cart'])
  }

}
