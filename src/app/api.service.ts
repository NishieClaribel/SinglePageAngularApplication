import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class ApiService {

 
   constructor(private httpClient: HttpClient) { }
   
}
