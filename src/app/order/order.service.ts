import { Injectable } from '@angular/core'
import { ShoppingCartService } from './../restaurant-detail/shopping-cart/shopping-cart.service'
import { CartItem } from './../restaurant-detail/shopping-cart/shopping-cart.model'
import { Order } from './order.model'

import { Http, RequestOptions, Headers } from '@angular/http'
import { Observable } from 'rxjs'
import 'rxjs/add/operator/map'

import { API_URL } from './../app.api'

@Injectable()
export class OrderService{

  constructor(private shoppingCartService : ShoppingCartService,
              private http : Http) {}

  listItems() : CartItem[] {
      return this.shoppingCartService.cartItems
  }

  decreaseQty(item : CartItem){
    this.shoppingCartService.decreaseQty(item)
  }

  remove(item : CartItem){
    this.shoppingCartService.removeItem(item)
  }

  increaseQty(item : CartItem){
    this.shoppingCartService.increaseQty(item)
  }

  total() : number {
    return this.shoppingCartService.total()
  }

  checkoutOrder(order : Order) : Observable<string>{
    const headers = new Headers()
    headers.append('Content-type', 'application/json')

    return this.http.post(`${API_URL}/orders`,
                JSON.stringify(order),
                new RequestOptions({ headers: headers }))
              .map(response => response.json())
              .map(order => order.id)
  }
}
