import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Product } from 'src/app/interfaces/product';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getAllProducts(){
    return this.http.get<Product[]>(environment.URL_PRODUCT_API);
  }

  getProduct(id: string){
    return this.http.get<Product>(`${environment.URL_PRODUCT_API}${id}`);
  }

  createProduct(product: Product){
    return this.http.post(`${environment.URL_PRODUCT_API}`, product);
  }

  updateProduct(id:string, changes: Partial<Product>){
    return this.http.put(`${environment.URL_PRODUCT_API}${id}`, changes);
  }

  deleteProduct(id: string){
    return this.http.delete(`${environment.URL_PRODUCT_API}${id}`);
  }
}
