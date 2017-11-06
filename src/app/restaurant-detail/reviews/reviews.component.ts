import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from './../../restaurants/restaurants.service'
import { Observable } from 'rxjs'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'mf-reviews',
  templateUrl: './reviews.component.html'
})
export class ReviewsComponent implements OnInit {

  reviews : Observable<any>

  constructor(private restaurantsService : RestaurantsService,
              private route : ActivatedRoute) { }

  ngOnInit() {
    let id = this.route.parent.snapshot.params['id']
    this.reviews = this.restaurantsService.reviewsById(id)
  }

}
