import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  api_URL = "http://localhost:3000/Products";
  name:any;
  quality:any;  
  product:any;  

  constructor(private http: HttpClient) { }

  getProducts(){
   return this.http.get(this.api_URL);
  }

  addProducts(data:any){
    return this.http.post<any>(this.api_URL, JSON.parse(JSON.stringify(data.value)));
  }

  deleteProduct(id:any){
    return this.http.delete(this.api_URL + '/'+  id);
  }

  getProductById(id:any){
    return this.http.get(this.api_URL + '/' + id);
  }

}
