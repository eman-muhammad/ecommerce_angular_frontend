import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  checkoutFormGroub!: FormGroup;
  constructor(private formBuilder:FormBuilder){}
  ngOnInit(): void {
    this.checkoutFormGroub=this.formBuilder.group({
      user:this.formBuilder.group({
      name:[''],
      address:[''],
      phone:['']
    })
  });
  }

  

}
