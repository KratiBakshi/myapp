import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  customer: any

  constructor(private httpService: CustomerService) { }

  ngOnInit(): void {
    this.httpService.getCustomers().subscribe((res) =>{
      this.customer = res;
      console.log("getting customers: ",  res);
  })
}



}
