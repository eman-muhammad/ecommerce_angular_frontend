import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product';
import {environment} from "../../../environments/environment.development";


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products:Product[]=[];
  constructor(private httpClient:HttpClient) {

  }

  get () {
    return this.httpClient.get<Product[]>(`${environment.apiURL}`)

  }

  getByID(id : number){
    return this.httpClient.get<Product[]>(`${environment.apiURL}/`+id)
  }


  post(model:any){
    return this.httpClient.post(`${environment.apiURL}`,model)
  }

  put(product : Product){
    return this.httpClient.put(`${environment.apiURL}`,product)
  }

   deleteById( id:number){
     return this.httpClient.delete(`${environment.apiURL}/`+id)
  }

getByCategoryWomen(){
    return this.httpClient.get<Product[]>(`${environment.apiURL}/categoryWomen`)
}

  getByCategoryMen(){
    return this.httpClient.get<Product[]>(`${environment.apiURL}/categoryMen`)
  }
}
