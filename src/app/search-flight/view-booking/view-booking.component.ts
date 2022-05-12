import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-booking',
  templateUrl: './view-booking.component.html',
  styleUrls: ['./view-booking.component.css']
})
export class ViewBookingComponent implements OnInit {

  bookingDetails:any=[];
  pnr:any;
  searchDiv:boolean=false;

  constructor(private service:SharedService, private router:Router) { }

  ngOnInit(): void {
    //this.refreshScheduleList();
  }

  ViewBookingClick()
  {
    this.service.getBookingByPnr(this.pnr).subscribe(data=>{
      console.log(data);
      this.bookingDetails=data;
    });
    this.searchDiv=true;
  }  

  CancelBookingClick()
  {
    this.service.CancelBooking(this.pnr).subscribe();
    alert("Booking is cancelled with pnr: "+this.pnr);
   // this.router.navigateByUrl('/ViewBookingByPnr');
    this.pnr="";
    this.searchDiv=false;
  }
}
