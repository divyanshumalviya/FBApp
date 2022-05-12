import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-airlines',
  templateUrl: './airlines.component.html',
  styleUrls: ['./airlines.component.css']
})
export class AirlinesComponent implements OnInit {

  constructor(private service: SharedService) { }

  AirlineList:any=[];
  ModalTitle : string="";
  ActivateAddEditAirlineComp:boolean=false;
  airline:any;

  ngOnInit(): void {
    this.refreshAirlineList();
  }

  addClick()
  {
    this.airline={
      id:0,
      name:"",
      contactNo:"",
      address:""
    }
    this.ModalTitle="Add Airline";
    this.ActivateAddEditAirlineComp=true;
  }

  closeClick()
  {
    this.ActivateAddEditAirlineComp=false;
    this.refreshAirlineList();
  }

  refreshAirlineList()
  {
    this.service.getAirlineList().subscribe(data=>{
      console.log(data);
      this.AirlineList=data;
    });
  }
}
