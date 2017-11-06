import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from './shopping-cart.service'
import { CartItem } from './shopping-cart.model'

@Component({
  selector: 'mf-shopping-cart',
  templateUrl: './shopping-cart.component.html'
})
export class ShoppingCartComponent implements OnInit {

  constructor(private shoppingCartService : ShoppingCartService) { }

  items(){
    return this.shoppingCartService.cartItems
  }

  total(){
    return this.shoppingCartService.total()
  }

  clear(){
    this.shoppingCartService.clear()
  }

  removeItem(cartItem : CartItem){
    this.shoppingCartService.removeItem(cartItem)
  }

  ngOnInit() {
  }

}
