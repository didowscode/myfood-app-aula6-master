import { Component, OnInit } from '@angular/core';
import { Restaurant } from './../restaurant/restaurant.model'
import { RestaurantsService } from './restaurants.service'

@Component({
  selector: 'mf-restaurants',
  templateUrl: './restaurants.component.html'
})
export class RestaurantsComponent implements OnInit {

  restaurants : Restaurant[]

  constructor(private restaurantsService : RestaurantsService) { }

  ngOnInit() {
    this.restaurantsService.list()
      .subscribe(restaurants => this.restaurants = restaurants)
  }

}
