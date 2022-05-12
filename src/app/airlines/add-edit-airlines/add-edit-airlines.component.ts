import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-airlines',
  templateUrl: './add-edit-airlines.component.html',
  styleUrls: ['./add-edit-airlines.component.css']
})
export class AddEditAirlinesComponent implements OnInit {

  flightName:string="";
  flightNumber:string="";
  contactNo:string="";
  address:string="";

  constructor(private service:SharedService) { }

  ngOnInit(): void {
  }

  addAirline()
  {
    var val={Name:this.flightName,
      FlightNumber:this.flightNumber,
      ContactNo:this.contactNo,
      Address:this.address};
    
      this.service.AddAirline(val).subscribe(res=>
        {console.log(res);
          alert("Airline Added Successfully)");
        });
  }
}
