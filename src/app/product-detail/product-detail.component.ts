import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConstantService } from '../constant.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import{ ModalComponent } from './../modal/modal.component';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
prodId:any;
productArray:any;
productDetails:any;
constructor(private route: ActivatedRoute,public serviceCall:ConstantService,private router:Router,private modalService: NgbModal) { }

  ngOnInit(): void {
    this.prodId = this.route.snapshot.queryParamMap.get('id');
    console.log(this.prodId)
    this.productArray = this.serviceCall.productInfo;
    this.productArray.forEach(product => {
      if(this.prodId===product.id){
        this.productDetails = product;
        console.log(this.productDetails)
      }

    });
  }

  addtoCart(){
    this.serviceCall.logIn.cart.push(this.productDetails);
    this.openModal("Item Added to Cart")
  }

  viewCart(){
    this.router.navigate(['/cart'])
  }

  back(){
    this.router.navigate(['/product']);
  }

  logOut(){
    this.router.navigate(['']);
  }

  openModal(message) {
    const modalRef = this.modalService.open(ModalComponent, {
      size:'sm',
      centered: true
    });
    modalRef.componentInstance.message = message;
  }
}
