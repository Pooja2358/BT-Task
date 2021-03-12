
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormArray, FormGroup } from '@angular/forms';
import { ConstantService } from '../constant.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import{ ModalComponent } from './../modal/modal.component';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logInForm: FormGroup;
  submitted: boolean;
  logData: any;

  constructor(private router: Router, private fb: FormBuilder,private service:ConstantService,private modalService: NgbModal) { }

  ngOnInit() {
    console.log(this.service.logIn)
    let id = null;

    this.logInForm = this.fb.group({
      email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      psw: [null, [Validators.required]]
    })

  }

  onLogIn(){
    if(this.logInForm.get('email').value==this.service.logIn.emailId && this.logInForm.get('psw').value==this.service.logIn.password){
      this.router.navigate(['/product'])
      this.service.islogedIn = true;
    }else{
      this.openModal("User not found!");
    }

  }

  openModal(message) {
    const modalRef = this.modalService.open(ModalComponent, {
      size:'sm',
      centered: true
    });
    modalRef.componentInstance.message = message;
  }

}
