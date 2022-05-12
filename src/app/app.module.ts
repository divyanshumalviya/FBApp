import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { SharedService } from './shared.service';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AirlinesComponent } from './airlines/airlines.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddEditAirlinesComponent } from './airlines/add-edit-airlines/add-edit-airlines.component';
import { SchedulesComponent } from './schedules/schedules.component';
import { UsersComponent } from './users/users.component';
import { SearchFlightComponent } from './search-flight/search-flight.component';
import { AddEditSchedulesComponent } from './schedules/add-edit-schedules/add-edit-schedules.component';
import { EditSchedulesComponent } from './schedules/edit-schedules/edit-schedules.component';
import { BookFlightComponent } from './search-flight/book-flight/book-flight.component';
import { ViewBookingComponent } from './search-flight/view-booking/view-booking.component';
import { BookingHistoryComponent } from './search-flight/booking-history/booking-history.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AirlinesComponent,
    AddEditAirlinesComponent,
    SchedulesComponent,
    UsersComponent,
    SearchFlightComponent,
    AddEditSchedulesComponent,
    EditSchedulesComponent,
    BookFlightComponent,
    ViewBookingComponent,
    BookingHistoryComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule, NgbModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
