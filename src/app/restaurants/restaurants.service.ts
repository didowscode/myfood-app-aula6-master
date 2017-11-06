import { Restaurant } from './../restaurant/restaurant.model'
import { Http } from '@angular/http'

import { Observable } from 'rxjs'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

import { Injectable } from '@angular/core'

import { API_URL } from './../app.api'

import { ErrorHandler } from './../app.error-handler'

import { MenuItem } from './../restaurant-detail/menu-item/menu-item.model'

@Injectable()
export class RestaurantsService{

  constructor(private http : Http) {}

  list() : Observable<Restaurant[]> {
    return this.http.get(`${API_URL}/restaurants`)
                .map(response => response.json())
                .catch(ErrorHandler.handlerError)
  }

  restaurantById(id : string) : Observable<Restaurant>{
    return this.http.get(`${API_URL}/restaurants/${id}`)
                .map(response => response.json())
                .catch(ErrorHandler.handlerError)
  }

  reviewsById(id : string) : Observable<any>{
    return this.http.get(`${API_URL}/restaurants/${id}/reviews`)
                .map(response => response.json())
                .catch(ErrorHandler.handlerError)
  }

  menuItensById(id: string) : Observable<MenuItem[]>{
    return this.http.get(`${API_URL}/restaurants/${id}/menu`)
                .map(response => response.json())
                .catch(ErrorHandler.handlerError)
  }
}
