import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-schedules',
  templateUrl: './schedules.component.html',
  styleUrls: ['./schedules.component.css']
})

  export class SchedulesComponent implements OnInit {

    constructor(private service: SharedService) { }
  
    ScheduleList:any=[];
    //ModalTitle : string="";
    //ActivateAddEditAirlineComp:boolean=false;
    //airline:any;
  
    ngOnInit(): void {
      this.refreshScheduleList();
    }
  
    // addClick()
    // {
    //   this.airline={
    //     id:0,
    //     name:"",
    //     contactNo:"",
    //     address:""
    //   }
    //   this.ModalTitle="Add Airline";
    //   this.ActivateAddEditAirlineComp=true;
    // }
  
    // closeClick()
    // {
    //   this.ActivateAddEditAirlineComp=false;
    //   this.refreshAirlineList();
    // }
  
    refreshScheduleList()
    {
      this.service.getScheduleList().subscribe(data=>{
        console.log(data);
        this.ScheduleList=data;
      });
    }
  

}
