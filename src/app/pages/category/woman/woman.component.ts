import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../../models/product";
import {FormGroup} from "@angular/forms";
import {ProductService} from "../../../services/productService/product.service";

@Component({
  selector: 'app-woman',
  templateUrl: './woman.component.html',
  styleUrls: ['./woman.component.css']
})
export class WomanComponent implements OnInit{
  products:Product[]=[];
  search='';
  constructor(private productService: ProductService){}
  ngOnInit(): void {
    this.productService.getByCategoryWomen()
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
