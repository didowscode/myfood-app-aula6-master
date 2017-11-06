import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from './../../restaurants/restaurants.service'
import { MenuItem } from './../../restaurant-detail/menu-item/menu-item.model'
import { Observable } from 'rxjs'
import { ActivatedRoute } from '@angular/router'
import { ShoppingCartService } from './../shopping-cart/shopping-cart.service'

@Component({
  selector: 'mf-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  menuItems : Observable<MenuItem[]>

  constructor(private restaurantsService : RestaurantsService,
              private route : ActivatedRoute,
              private shoppingCartService : ShoppingCartService) { }

  ngOnInit() {
    let id = this.route.parent.snapshot.params['id']
    this.menuItems = this.restaurantsService.menuItensById(id)
  }

  addItemOnCart(menuItem : MenuItem){
    this.shoppingCartService.addItem(menuItem)
  }

}
