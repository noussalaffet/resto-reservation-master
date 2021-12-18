import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { PlatComponent } from './plat/plat.component';
import { ReservationComponent } from './reservation/reservation.component';
import { RestaurantComponent } from './restaurant/restaurant.component';

const routes: Routes = [{path:"home",component:HomeComponent},
{path:"contact",component:ContactComponent},
{path:"menu",component:MenuComponent},
{path:"reservation",component:ReservationComponent},
{path:"restaurant",component:RestaurantComponent},
{path:"plat",component:PlatComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
