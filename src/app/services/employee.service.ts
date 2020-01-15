import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee';
import { EmployeeFilter } from '../models/employeefilter';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
    serverURL:string = 'https://localhost:44349/Api/';
    httpOptions = {  
          headers: new HttpHeaders({  
            'Content-Type': 'application/json; charset=utf-8'  
          })  
    }; 

    constructor(private http: HttpClient) {
    }

    getEmployeesList(filter: EmployeeFilter): Observable<any> {
        return this.http.post(this.serverURL + 'employees', filter , this.httpOptions);
    }
    
    getEmployee(id: any): Observable<any> {
        return this.http.get(this.serverURL + `employees/${id}` , this.httpOptions);
    }

    addOrUpdateEmployee(emp: Employee): Observable<any> {
        return this.http.post(this.serverURL + `employees/${emp.Id}`, emp, this.httpOptions);
    }

    deleteEmployee(id: any): Observable<any> {
        return this.http.delete(this.serverURL + `employees/${id}` , this.httpOptions);
    }
}