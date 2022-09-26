import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  api_URL = "http://localhost:3000/Cutomers";

  constructor(private httpClient: HttpClient) { }

  getCustomers(){
return this.httpClient.get(this.api_URL);
  }
}
