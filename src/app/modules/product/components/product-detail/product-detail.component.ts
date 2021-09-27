import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'
import { Product } from 'src/app/interfaces/product';
import { ProductsService } from 'src/app/modules/core/services/products/products.service';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class 
ProductDetailComponent implements OnInit {

  product: Product | any;

  constructor(
    private route: ActivatedRoute,
    private productsServices: ProductsService 
  ) {
   }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.fetchProduct(id);
    });
  }

  fetchProduct(id: string){
    this.productsServices.getProduct(id).subscribe(product => {
      this.product = product;
    });
  }

  createProduct(newProduct: Product){
    newProduct.title = `${newProduct.title}${new Date()}`;
    newProduct.id = `${newProduct.id}${Math.random() * 16 | 0}`,
    this.productsServices.createProduct(newProduct).subscribe(p => console.log(p));
  }

}
