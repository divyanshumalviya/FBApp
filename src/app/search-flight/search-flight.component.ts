import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-search-flight',
  templateUrl: './search-flight.component.html',
  styleUrls: ['./search-flight.component.css']
})
export class SearchFlightComponent implements OnInit {
  
  from:string="";
  to:string="";
  start:string="";
  end:string="";
  totalPassangers:number=1;

  serachResult:any=[];
  arrivalTime:string="";
  departureTime:string="";
  destination:string="";
  flightName:string="";
  flightNumber:string="";
  source:string="";
  totalPrice:string="";
  
  searchDiv:boolean=false;

  constructor(private service: SharedService) { }

  ngOnInit(): void {
  }

  SeachClick()
  {
    this.service.getSearchResult(this.start,this.end,this.from,this.to,this.totalPassangers)
    .subscribe(res=>{
      this.serachResult=res;
        this.arrivalTime = this.serachResult.arrival;
        this.departureTime =  this.serachResult.departure;
        this.destination = this.serachResult.destination;
        this.flightName = this.serachResult.flightName;
        this.flightNumber = this.serachResult.flightNumber;
        this.source = this.serachResult.source;
        this.totalPrice = this.serachResult.totalPrice;
     // console.log(res);
      this.searchDiv=true;

    });
  }
}
