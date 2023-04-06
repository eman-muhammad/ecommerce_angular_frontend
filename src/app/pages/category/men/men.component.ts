import {Component, OnInit} from '@angular/core';
import {Product} from "../../../models/product";
import {FormGroup} from "@angular/forms";
import {ProductService} from "../../../services/productService/product.service";

@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.css']
})
export class MenComponent implements OnInit{
  products:Product[]=[];
  search='';
  constructor(private productService: ProductService){}
  ngOnInit(): void {
    this.productService.getByCategoryMen()
      .subscribe(
        response=>{
          this.products=response;
        },
        error=>{
          alert('error occurred');
        }
      );
  }

}
