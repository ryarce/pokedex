import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ProductsService } from 'src/app/modules/core/services/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  
  products: Product[] | any;
  
  constructor(private productsServices: ProductsService ) { 
    
  }

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts(){
    this.productsServices.getAllProducts().subscribe(products => {
      this.products = products;
    })

  }

  clickProduct(id: number){
    console.log('id producto', id);
  }

}
