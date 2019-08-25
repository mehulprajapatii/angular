import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse} from '@angular/common/http';
import { IEmployee } from './employee';
// import { Observable } from 'rxjs';
import { Observable, throwError } from 'rxjs';
// import { catchError } from 'rxjs/operators';
// import  'rxjs/operators';
// import 'rxjs/';
// import 'rxjs/add/operator/catch';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
//C:\Users\Mehul\Downloads\projects\angular\structural-directives\src\assets\data\empployees.json
  private _url:string="/assets/data/empployees.json";
  constructor(private http: HttpClient) { }


  getEmployees():Observable<IEmployee[]>{
    /* return [
      {"id":1,"name":"Mehul","age":27},
      {"id":2,"name":"Mahesh","age":24},
      {"id":3,"name":"Ram","age":26},
      {"id":4,"name":"Mitesh","age":28},
    ]; */

    return this.http.get<IEmployee[]>(this._url).catch(this.errorHandler);
  }

  errorHandler(error:HttpErrorResponse){
     return Observable.throw(error.message || "Server Error");
  }
}
