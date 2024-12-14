import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class ProductService {

  private baseUrl: string = 'https://locahost:3000/products';
  private http: HttpClient = inject(HttpClient);

  getAll(): Observable<any> {
    return this.http.get(`${this.baseUrl}/products`);
  }

}
