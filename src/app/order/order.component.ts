import { Component, OnInit } from '@angular/core';
import { RadioOption } from './../shared/radio-option/radio-option.model'
import { OrderService } from './order.service'
import { CartItem } from './../restaurant-detail/shopping-cart/shopping-cart.model'
import { Order, OrderItem } from './order.model'
import { Router } from '@angular/router'
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms'

@Component({
  selector: 'mf-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  paymentOptions : RadioOption[] = [
      { label: 'Dinheiro', value: 'DIN'},
      { label: 'Débito', value: 'DEB'},
      { label: 'Vale refeição', value: 'VLR'}
  ]

  orderForm : FormGroup

  constructor(private orderService : OrderService,
              private router : Router,
              private formBuilder : FormBuilder) { }

  emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

  numberPattern = /^[0-9]*$/

  ngOnInit() {
    this.orderForm = this.formBuilder.group({
      name: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
      email: this.formBuilder.control('', [Validators.required, Validators.pattern(this.emailPattern)]),
      emailConfirmation: this.formBuilder.control('', [Validators.required, Validators.pattern(this.emailPattern)]),
      address: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
      number: this.formBuilder.control('', [Validators.required, Validators.pattern(this.numberPattern)]),
      optional: this.formBuilder.control(''),
      paymentOption: this.formBuilder.control('', [Validators.required])
    }, {
      validator: OrderComponent.equalsTo
    })
  }

  static equalsTo(group : AbstractControl) : {[key:string] : boolean}{
    const email = group.get('email')
    const emailConfirmation = group.get('emailConfirmation')

    if(!email || !emailConfirmation){
      return undefined
    }

    if(email.value !== emailConfirmation.value){
      return { matchEmailError : true }
    }
    return undefined
  }

  delivery : number = 8

  listItems(){
    return this.orderService.listItems()
  }

  decreaseQty(item : CartItem){
    this.orderService.decreaseQty(item)
  }

  increaseQty(item : CartItem){
    this.orderService.increaseQty(item)
  }

  remove(item : CartItem){
    this.orderService.remove(item)
  }

  total() : number {
    return this.orderService.total()
  }

  checkoutOrder(order : Order){
    order.items = this.listItems()
        .map((cItem : CartItem) => new OrderItem(cItem.quantity, cItem.menuItem.id))

    this.orderService.checkoutOrder(order).subscribe(orderId => {
      console.log(orderId)
      this.router.navigate(['/order-summary'])
    })
  }
}
