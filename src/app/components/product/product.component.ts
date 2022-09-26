import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

productForm = new FormGroup({
  name: new FormControl('', [Validators.required,Validators.minLength(10)]),
  quality: new FormControl(),
  stock: new FormControl(),
  price: new FormControl()
})
  disabled:any;
edit:any;
data: any;
  product:any;
  productData:any;
  constructor(private httpService: ProductService) { }

  save(data:any): void{
    console.log(data.value);
    console.log("product saved!")   ;
   }

   getProduct(){
     this.httpService.getProducts().subscribe((res) =>{
      this.product = res;
      console.log("Response: ",  res);
    }); 
   }

   addProducts1(data:any){
      console.log("data in JSON form : " + JSON.stringify(data.value));
      this.httpService.addProducts(data).subscribe((res) =>{
      console.log("Add data ", res);

      data.name = res.name,
      data.quality =res.quality,
      data.stock=res.stock,
      data.price=res.price
      // alert("Product save successfuly");
    })
   }

   deleteProduct(product:any){
      this.httpService.deleteProduct(product.id).subscribe((res) =>{

      console.log(res);
    })
   }

   editProduct(id: any, data:any){
    
    console.log("data getting on click:" + id, data);
    debugger;
     this.httpService.getProductById(id).subscribe((res) =>{
      console.log("details by id: " + JSON.parse(JSON.stringify(res)));
      this.product = JSON.parse(JSON.stringify(res));
      this.product.name = this.data.name,
      this.product.quality  = this.data.quality,
      this.product.stock = this.data.stock,
      this.product.price = this.data.price,
      this.product.id = this.data.id
    });
    debugger;
    console.log(this.product)
    this.disabled = true;
debugger;
  }

  
  ngOnInit(): void {

    
  }
}


