import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { CONSTANTS } from '../Config/Constant';
import {
  PerfectScrollbarConfigInterface,
  PerfectScrollbarComponent, PerfectScrollbarDirective
} from 'ngx-perfect-scrollbar';


@Component({
  selector: 'app-loan-form',
  templateUrl: './loan-form.component.html',
  styleUrls: ['./loan-form.component.css']
})
export class LoanFormComponent implements OnInit {
  loanDataForm: FormGroup;
  loginForm: FormGroup;
  submitted = false
  modalFormsubmitted = false
  constants = CONSTANTS;
  isShow: boolean = false
  isLoan: boolean = true
  formVal: any = []
  selectedValue: any
  focusInvalid: boolean = false

  // @ViewChild(PerfectScrollbarDirective) directiveRef?: PerfectScrollbarDirective;

  constructor(private fb: FormBuilder, private el: ElementRef) {
    this.loanDataForm = this.fb.group({
      loanPurpose: ['', [Validators.required]],
      homeBuyer: [''],
      zipCode: ['', [Validators.required]],
      price: ['', [Validators.required]],
      payment: ['', [Validators.required]],
      refinance: ['', [Validators.required]],
      mortage: ['', [Validators.required]],
      cashOut: ['', [Validators.required]],
      lockPeriod: ['', [Validators.required]],
      creditScore: ['', [Validators.required]],
      militaryStatus: [''],
      VAloan: [''],
      fundingFee: [''],
      propertyType: ['', [Validators.required]],
      propertyUse: ['', [Validators.required]],
      loanType: ['', [Validators.required]],
      propertyTax: ['', [Validators.required]],
      insurance: ['', [Validators.required]],



    });
    this.loginForm = this.fb.group({
      name: ['', [Validators.required]],
      lname: ['', [Validators.required]],
      email: ['', [Validators.required]],
      pwd: ['', [Validators.required]],
      age: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      address: ['', [Validators.required]],

    })
  }

  ngOnInit(): void {}
  
  get f() {
    return this.loanDataForm.controls;
  }
  get fVal() {
    return this.loginForm.controls;
  }

  isChecked() {
    this.isShow = !this.isShow
    if (this.isShow) {
      this.loanDataForm.get('militaryStatus')?.setValidators(Validators.required);
      this.loanDataForm.get('VAloan')?.setValidators(Validators.required);
      this.loanDataForm.get('fundingFee')?.setValidators(Validators.required);

    } else {
      this.loanDataForm.get('militaryStatus')?.clearValidators();
      this.loanDataForm.get('VAloan')?.clearValidators();
      this.loanDataForm.get('fundingFee')?.clearValidators();

    }

  }
  loanValue(e: any) {
    this.selectedValue = e.target.value;
    this.selectedValue == "yes" ? this.isLoan = true : this.isLoan = false;
    this.isLoan == true ? this.loanDataForm.get('homeBuyer')?.setValidators(Validators.required) : this.loanDataForm.get('homeBuyer')?.clearValidators();

  }
  onSubmit() {
    this.submitted = true;
    if (this.loanDataForm.valid) {
      console.log(this.loanDataForm.value)

      this.isLoan == true ? this.loanDataForm.get('homeBuyer')?.setValidators(Validators.required) : this.loanDataForm.get('homeBuyer')?.clearValidators();

      if (this.isShow) {
        this.loanDataForm.get('militaryStatus')?.setValidators(Validators.required);
        this.loanDataForm.get('VAloan')?.setValidators(Validators.required);
        this.loanDataForm.get('fundingFee')?.setValidators(Validators.required);

      } else {
        this.loanDataForm.get('militaryStatus')?.clearValidators();
        this.loanDataForm.get('VAloan')?.clearValidators();
        this.loanDataForm.get('fundingFee')?.clearValidators();

      }
    }
    else {
      return;
    }

  }
  
  
  onModalSubmit() {
    this.modalFormsubmitted = true
    if (this.loginForm.valid) {
      console.log(this.loginForm.value)
    }
    else {
      var element = document.querySelector(".is-invalid");
      element && element.scrollIntoView();
    
    }

  }

 
  
  

}
