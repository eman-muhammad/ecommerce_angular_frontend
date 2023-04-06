import { Component } from '@angular/core';
import { Product } from 'src/app/models/product';
import { HttpClient } from '@angular/common/http';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent  {

  amount:number=1;
  total:number=0;
  name:string="";
  address:string="";
  phone:string="";

  deleteOneProducr:any;

  cartProductsss:Product[]=[];
  constructor(private _http: HttpClient, private _router: Router) { }

  ngOnInit(): void {
  
    const role=localStorage.getItem("role")//undefined
    console.log(role)
    // if (role?.includes("USER"))
    // {
    //   this._router.navigateByUrl('/notfound')
    // }
    // else{
      this.getCardProducts();
      this.totalAmount();
    
   

  }
  getCardProducts(){
    if("orders" in localStorage){
      this.cartProductsss=JSON.parse(localStorage.getItem("orders")!);
    }
    console.log(this.cartProductsss.length);

    
   
    // let result = this.cartProducts.map(a => a.id);
    // alert(result)
  }

  plus(){
    this.amount++;
  }
  mins(){
    this.amount--;
  }
  onSelected(value:number):void{
    this.amount=value;
  }

  removeOrder(id:number):void{
    if("orders" in localStorage){
      this.cartProductsss=JSON.parse(localStorage.getItem("orders")!);
      this.cartProductsss.forEach((value,index)=>{
        if(value.id==id){
          this.total-=value.price;
          this.cartProductsss.splice(index,1);

        }
    });
      localStorage.setItem("orders",JSON.stringify( this.cartProductsss))
    }
    this.getCardProducts();
  }

  totalAmount():void{
    this.cartProductsss.forEach((value)=>{
      this.total+=value.price;
  });
  }
  featchAllData():void{
    alert(this.name+" "+this.address+ " "+ this.phone);
  }
  addName(name:string):void{
    this.name=name;
  }
  addAddress(address:string):void{
    this.address=address;
  }
  addPhone(phone:string):void{
    this.phone=phone;
  }
}
