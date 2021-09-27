import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/interfaces/product';
import { CartService } from 'src/app/modules/core/services/cart/cart.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  products$!: Observable<Product[]>;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.products$ = this.cartService.cart$;
  }

}
