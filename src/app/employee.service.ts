import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {



  constructor(private http:HttpClient) { }

  getEmployees(){
    return this.http.get('http://200.0.1.165:2001/emp');

  }
}
