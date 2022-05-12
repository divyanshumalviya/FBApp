import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AddEditAirlinesComponent } from './airlines/add-edit-airlines/add-edit-airlines.component';
import { AirlinesComponent } from './airlines/airlines.component';
import { SchedulesComponent } from './schedules/schedules.component';
import { UsersComponent } from './users/users.component';
import { AddEditSchedulesComponent } from './schedules/add-edit-schedules/add-edit-schedules.component';
import { EditSchedulesComponent } from './schedules/edit-schedules/edit-schedules.component';
import { SearchFlightComponent } from './search-flight/search-flight.component';
import { BookFlightComponent } from './search-flight/book-flight/book-flight.component';
import { ViewBookingComponent } from './search-flight/view-booking/view-booking.component';
import { BookingHistoryComponent } from './search-flight/booking-history/booking-history.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'login', component:LoginComponent},
  {path:'GetAllAirline', component:AirlinesComponent},
  {path:'admin', component:AdminComponent},
  {path:'GetAllSchedule', component:SchedulesComponent},
  {path:'AddEditAirline', component:AddEditAirlinesComponent},
  {path:'AddEditSchedule',component:AddEditSchedulesComponent},
  {path:'UpdateSchedule/:flightNumber',component:EditSchedulesComponent},
  
  {path:'user', component:UsersComponent},
  {path:'SearchFlight', component:SearchFlightComponent},
  {path:'BookFlight/:flightNumber',component:BookFlightComponent},
  {path:'ViewBookingByPnr', component:ViewBookingComponent},
  {path:'BookingHistoryByEmail', component:BookingHistoryComponent},
 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
