import { Route } from '@angular/router'
import { HomeComponent } from './home/home.component'
import { AboutComponent } from './about/about.component'
import { RestaurantsComponent } from './restaurants/restaurants.component'
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component'
import { MenuComponent } from './restaurant-detail/menu/menu.component'
import { ReviewsComponent } from './restaurant-detail/reviews/reviews.component'
import { OrderComponent } from './order/order.component'
import { OrderSummaryComponent } from './order-summary/order-summary.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'

export const ROUTES : Route[] = [
  { path : '', component: HomeComponent},
  { path : 'about', component: AboutComponent},
  { path : 'restaurants', component: RestaurantsComponent},
  { path : 'restaurant/:id', component: RestaurantDetailComponent,
    children: [
      { path : '' , redirectTo: 'menu', pathMatch: 'full' },
      { path : 'menu', component: MenuComponent },
      { path : 'reviews', component: ReviewsComponent }
    ]
  },
  { path : 'order', component: OrderComponent },
  { path : 'order-summary', component: OrderSummaryComponent},
  { path : '**', component: PageNotFoundComponent}
]
