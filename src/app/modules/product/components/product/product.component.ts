import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { CartService } from 'src/app/modules/core/services/cart/cart.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {


  @Input() product: Product | any;
  @Output() productClicked: EventEmitter<any> = new EventEmitter(); 
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
  }

  addToCart(){
    console.log('se añadió un producto al carrito');
    //this.productClicked.emit(this.product.id);
    this.cartService.addCard(this.product);
  }

}
