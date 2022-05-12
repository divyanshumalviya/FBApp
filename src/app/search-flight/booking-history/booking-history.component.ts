import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-booking-history',
  templateUrl: './booking-history.component.html',
  styleUrls: ['./booking-history.component.css']
})
export class BookingHistoryComponent implements OnInit {

  bookingDetails:any=[];
  email:any;
  searchDiv:boolean=false;

  constructor(private service: SharedService) { }

  ngOnInit(): void {
  }

  ViewBookingHistoryClick()
  {
    this.service.getBookingHistoryByEmail(this.email).subscribe(data=>{
      console.log(data);
      this.bookingDetails=data;
    });
    this.searchDiv=true;
  }  
}
