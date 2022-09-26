import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customer: any;

  constructor(private httpService: CustomerService) { }


  
  ngOnInit(): void {
  }

  getCustomer(){
    this.httpService.getCustomers().subscribe((res) =>{
     this.customer = res;
     console.log("getting customers: ",  res);
   }); 
  }

}
