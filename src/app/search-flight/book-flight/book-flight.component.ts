import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { ActivatedRoute } from '@angular/router';
//import { Route } from '@angular/router';

@Component({
  selector: 'app-book-flight',
  templateUrl: './book-flight.component.html',
  styleUrls: ['./book-flight.component.css']
})
export class BookFlightComponent implements OnInit {

  urlFlightNo: any;
  emailSession: any = "";

  journeyDate: any;
  totalSeats: any=1;
  pName: any[] = [];
  pAge: any[] = [];
  pGender: any[] = [];
  pSeatNo: any[] = [];

  passangerList:any[]=[];
  bDetails:any[]=[];
  
  constructor(private service: SharedService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.urlFlightNo = this.router.snapshot.paramMap.get('flightNumber');
    this.emailSession = localStorage.getItem('UserEmail');
  }

  BookFlight() {
    for (let i = 0; i < this.totalSeats; i++) {
      var passanger={
        Name:this.pName[i],
        Gender:this.pGender[i],
        Age:this.pAge[i],
        SeatNo:this.pSeatNo[i]
      }
      this.passangerList.push(passanger);
    }

    var bookingDetails={
      TotalSeats:this.totalSeats,
      JourneyDate:this.journeyDate
    };    

   // const segmentRanges = { segmentRanges: this.passangerList };

    var val={
      bDetails:bookingDetails,
      listPassangers:this.passangerList,
      email:this.emailSession
      //JSON.stringify(segmentRanges)
    };
    console.log(val);
     this.service.BookFlight(val,this.urlFlightNo).subscribe(res=>
     {console.log(res);
       alert("Congrats, Your Flight is Booked!!");
      });
   // console.log(this.pName);
  }  

  toJson() {
    for (let i = 0; i < this.totalSeats; i++) {
      var passanger={
        Name:this.pName[i],
        Gender:this.pGender[i],
        Age:this.pAge[i],
        SeatNo:this.pSeatNo[i]
      }
      this.passangerList.push(passanger);
    }

    var bookingDetails={
      TotalSeats:this.totalSeats,
      JourneyDate:this.journeyDate
    };    

    const segmentRanges = { segmentRanges: this.passangerList };

    var val={
      bDetails:bookingDetails,
      listPassangers:JSON.stringify(segmentRanges)
    }
  }
  somethingChanged() {
    console.log(this.totalSeats)
  }

  counter(i: number) {
    return new Array(i);
  }
}
