import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-edit-schedules',
  templateUrl: './add-edit-schedules.component.html',
  styleUrls: ['./add-edit-schedules.component.css']
})
export class AddEditSchedulesComponent implements OnInit {
  FlightNos: string[][] = [];

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

  constructor(private service:SharedService, private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.refreshScheduleList();
    this.urlFlightNo=this.router.snapshot.paramMap.get('flightNumber');
    
  }

  

  addSchedule()
  {
    var val={FlightNumber:this.flightNo,
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
    
      this.service.AddSchedule(val).subscribe(res=>
        {console.log(res);
          alert("Schedule Added Successfully for Flight number: "+this.flightNo);
        });
        
  }

  refreshScheduleList()
    {
      this.service.getAirlineList().subscribe(data=>{
        console.log(data);
           
        data.forEach( (el) => {
          this.FlightNos.push(el.flightNumber);
          console.log(this.FlightNos);
        })
      });
    }
  
}
