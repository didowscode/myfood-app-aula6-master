import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartItem } from './../../restaurant-detail/shopping-cart/shopping-cart.model'
import { MenuItem } from './../../restaurant-detail/menu-item/menu-item.model'

@Component({
  selector: 'mf-order-item',
  templateUrl: './order-item.component.html'
})
export class OrderItemComponent implements OnInit {

  @Input() items : CartItem[]

  @Output() decreaseQty = new EventEmitter<CartItem>()
  @Output() increaseQty = new EventEmitter<CartItem>()
  @Output() remove = new EventEmitter<CartItem>()

  emitDecrease(item : CartItem){
    this.decreaseQty.emit(item)
  }

  emitIncrease(item : CartItem){
    this.increaseQty.emit(item)
  }

  emitRemove(item : CartItem){
    this.remove.emit(item)
  }

  constructor() { }

  ngOnInit() {
  }

}
