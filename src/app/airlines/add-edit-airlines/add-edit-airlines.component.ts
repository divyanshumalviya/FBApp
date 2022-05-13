import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-airlines',
  templateUrl: './add-edit-airlines.component.html',
  styleUrls: ['./add-edit-airlines.component.css']
})
export class AddEditAirlinesComponent implements OnInit {

  flightName: string = "";
  flightNumber: string = "";
  contactNo: string = "";
  address: string = "";

  constructor(private service: SharedService) { }

  ngOnInit(): void {
  }

  Validate(): boolean {
    if (typeof this.flightName == 'undefined' || !this.flightName || this.flightName == "") {
      alert("Flight Name is mandatory!");
      return false;
    }
    else if (typeof this.flightNumber == 'undefined' || !this.flightNumber || this.flightNumber == "") {
      alert("Flight No is mandatory!");
      return false;
    }
    else if (typeof this.contactNo == 'undefined' || !this.contactNo || this.contactNo == "") {
      alert("Contact no is mandatory!");
      return false;
    }
    else if (typeof this.address == 'undefined' || !this.address || this.address == "") {
      alert("Address is mandatory!");
      return false;
    }
    else
      return true;
  }


  addAirline() {
    if (!this.Validate())
      return;

    var val = {
      Name: this.flightName,
      FlightNumber: this.flightNumber,
      ContactNo: this.contactNo,
      Address: this.address
    };

    this.service.AddAirline(val).subscribe(res => {
      console.log(res);
      alert("Airline Added Successfully)");
    });
  }
}
