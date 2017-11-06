import { MenuItem } from './../../restaurant-detail/menu-item/menu-item.model'
import {CartItem } from './shopping-cart.model'
import { SnackbarService } from './../../shared/snackbar/snackbar.service'
import { Injectable} from '@angular/core'

@Injectable()
export class ShoppingCartService{

  cartItems : CartItem[] = []

  constructor(private snackbarService : SnackbarService){}

  addItem(menuItem : MenuItem){
    let cartItem = this.cartItems
            .find((cItem) => cItem.menuItem.id === menuItem.id)

    if(cartItem){
      this.increaseQty(cartItem)
    }else{
      this.cartItems.push(new CartItem(menuItem))
    }
    this.snackbarService.notify(`Item adicionado no carrinho: ${menuItem.name}`)
  }

  decreaseQty(item : CartItem){
    item.quantity = item.quantity - 1
    if(item.quantity === 0){
      this.removeItem(item)
    }

  }

  increaseQty(item : CartItem){
    item.quantity = item.quantity + 1
  }

  removeItem(cartItem : CartItem){
    this.cartItems.splice(this.cartItems.indexOf(cartItem), 1)
    this.snackbarService.notify(`Item removido do carrinho: ${cartItem.menuItem.name}`)
  }


  total() : number {
    return this.cartItems.map(cItem => cItem.value())
                      .reduce((prev, val) => prev + val, 0)
  }

  clear() {
    this.cartItems = []
  }

}
