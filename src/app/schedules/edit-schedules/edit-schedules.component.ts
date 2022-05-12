import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-schedules',
  templateUrl: './edit-schedules.component.html',
  styleUrls: ['./edit-schedules.component.css']
})
export class EditSchedulesComponent implements OnInit {

  FlightNos: string[][] = [];
  ScheduleByFlightId:any;

  flightNo=0;
  from:string="";
  to:string="";
  start:string="";
  end:string="";
  scheduledDays:string="";
  bCSeats:string="";
  nBCSeats:string="";
  bCPrice:string="";
  nBCPrice:string="";
  mealType:string="";
  status:string="";

  urlFlightNo: any="";

    constructor(private service:SharedService, private router:ActivatedRoute, private navRouter:Router) { }

  ngOnInit(): void {    
    this.urlFlightNo=this.router.snapshot.paramMap.get('flightNumber');
    //this.getFlightDropdownData();
    this.PopulateSchedule( this.urlFlightNo);
    
  }  

  updateSchedule()
  {
    var val={
      FlightNumber:this.flightNo,
      From:this.from,
      To:this.to,
      Start:this.start,
      End:this.end,
      ScheduledDays:this.scheduledDays,
      BCSeats:this.bCSeats,
      NBCSeats:this.nBCSeats,
      BCPrice:this.bCPrice,
      NBCPrice:this.nBCPrice,
      Meal:this.mealType,
      Status:this.status};
    
      this.service.UpdateSchedule(val,this.flightNo).subscribe(res=>
        {console.log(res);
          alert("Schedule Updated Successfully for Flight number: "+this.flightNo);
        });
        //this.navRouter.navigateByUrl('/GetAllSchedule');   
  }  

  PopulateSchedule(urlFlightNo:any)
    {  
      this.service.getScheduleByFlightId(urlFlightNo).subscribe(res=>{
        this.ScheduleByFlightId=res;
        //console.log(urlFlightNo);
        //console.log(res);
        this.FlightNos.push(urlFlightNo);
        this.flightNo = this.ScheduleByFlightId.flightNumber;
        this.from = this.ScheduleByFlightId.from;
        this.to = this.ScheduleByFlightId.to;
        this.start = this.ScheduleByFlightId.start;
        this.end = this.ScheduleByFlightId.end;
        this.scheduledDays = this.ScheduleByFlightId.scheduledDays;
        this.bCSeats = this.ScheduleByFlightId.bcseats;
        this.nBCSeats = this.ScheduleByFlightId.nbcseats;
        this.bCPrice = this.ScheduleByFlightId.bcprice;
        this.nBCPrice = this.ScheduleByFlightId.nbcprice;
        this.mealType = this.ScheduleByFlightId.meal;
        this.status = this.ScheduleByFlightId.status;
      });
    }
  
    // getFlightDropdownData()
    // {
    //   this.service.getAirlineList().subscribe(data=>{
    //    // console.log(data);
           
    //     data.forEach( (el) => {
    //       this.FlightNos.push(el.flightNumber);
    //       //console.log(this.FlightNos);
    //     })
    //   });
    // }

}
