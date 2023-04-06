import {Component, OnInit} from '@angular/core';
import { Product } from 'src/app/models/product';
import {FormGroup} from "@angular/forms";
import {ProductService} from "../../services/productService/product.service";

@Component({
  selector: 'app-home',
  templateUrl:'./home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  implements OnInit{


  cartProductsss:Product[]=[];


  amount:number=1;
  products:Product[]=[];
  cartProducts:any[]=[];
  base64:any='';
  form!:FormGroup;

  enteredSearchValue: string = '';
  constructor(private productService: ProductService,private oneProduct:Product){}
  search='';
  ngOnInit(): void {
    this.getCardProducts();

    this.productService.get()
      .subscribe(
        response=>{
          this.products=response;
          // this._router.navigateByUrl('/product');
        },
        error=>{
          alert('error occurred');
        }
      );
    //alert("3");
  }

  getProductById(index:number){
    let product=this.products[index]
    this.productService.getByID(index)
      .subscribe(
        response =>{
          this.products=response;
        },
        error=>{
          alert('error occurred');
        }
      );
  }
  getImagePath(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL (file);
    reader.onload = () => {
      this.base64 = reader.result;
      this.form.get('image_url')?.setValue(this.base64)
      console.log(this.base64)
    };
  }
  addToCart(item:Product){
    item.amount=this.amount;
    if("orders" in localStorage){
      this.cartProducts=JSON.parse(localStorage.getItem("orders")!);
      let exist=this.cartProducts.find(itemArr =>itemArr.id==item.id &&itemArr.category_id==item.category_id);
      if(exist){
        alert("this is exist")
        // item.count=item.count+1;
      }else{
        this.cartProducts.push(item);
        localStorage.setItem("orders",JSON.stringify( this.cartProducts))
      }
    }else{
      this.cartProducts.push(item);
      localStorage.setItem("orders",JSON.stringify( this.cartProducts))
    }
    this.amount=1;
    // alert(JSON.stringify(item));
  }

  addInformationToCart(item:Product){
    this.oneProduct.id=item.id;
    this.oneProduct.name=item.name;
    this.oneProduct.price=item.price;
    this.oneProduct.image_url=item.image_url;
    this.oneProduct.category_id=item.category_id;
    this.oneProduct.description=item.description;
    this.oneProduct.amount=1;
  }
  getInformationOfCart():Product{
    return this.oneProduct;
  }

  plus(){
    this.amount++;
  }
  mins(){
    this.amount--;
  }



  getCardProducts(){
    if("orders" in localStorage){
      this.cartProductsss=JSON.parse(localStorage.getItem("orders")!);
    }
    console.log(this.cartProducts.length);
    // let result = this.cartProducts.map(a => a.id);
    // alert(result)
  }
}
