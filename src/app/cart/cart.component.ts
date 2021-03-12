import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConstantService } from '../constant.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import{ ModalComponent } from './../modal/modal.component';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cardData:any;
  constructor(public serviceCall:ConstantService, private route:Router,private modalService: NgbModal) { }

  ngOnInit(): void {

    this.cardData = this.serviceCall.logIn.cart;
  }

  remveProduct(i){
     this.cardData.splice(i,1)
     this.serviceCall.logIn.cart = this.cardData;
     this.openModal("Item Removed From Cart")
  }

  logOut(){
    this.route.navigate([''])
  }

  back(){
    window.history.back()
  }

  openModal(message) {
    const modalRef = this.modalService.open(ModalComponent, {
      size:'sm',
      centered: true
    });
    modalRef.componentInstance.message = message;
  }

}
