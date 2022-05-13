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

  flightNo = 0;
  from: string = "";
  to: string = "";
  start: string = "";
  end: string = "";
  scheduledDays: string = "";
  bCSeats: string = "";
  nBCSeats: string = "";
  bCPrice: string = "";
  nBCPrice: string = "";
  mealType: string = "";
  status: string = "";

  urlFlightNo: any = "";

  constructor(private service: SharedService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.refreshScheduleList();
    this.urlFlightNo = this.router.snapshot.paramMap.get('flightNumber');

  }

  Validate(): boolean {
    if (this.flightNo == 0) {
      alert("Select user type!");
      return false;
    }
    else if (typeof this.scheduledDays == 'undefined' || !this.scheduledDays || this.scheduledDays == "") {
      alert("scheduled Days is mandatory!");
      return false;
    }
    else if (typeof this.from == 'undefined' || !this.from || this.from == "") {
      alert("from is mandatory!");
      return false;
    }
    else if (typeof this.to == 'undefined' || !this.to || this.to == "") {
      alert("to is mandatory!");
      return false;
    }
    else if (typeof this.start == 'undefined' || !this.start || this.start == "") {
      alert("start is mandatory!");
      return false;
    }
    else if (typeof this.end == 'undefined' || !this.end || this.end == "") {
      alert("end is mandatory!");
      return false;
    }
    else if (typeof this.bCSeats == 'undefined' || !this.bCSeats || this.bCSeats == "") {
      alert("Business seats is mandatory, put 0 if not applicable!");
      return false;
    }
    else if (typeof this.nBCSeats == 'undefined' || !this.nBCSeats || this.nBCSeats == "") {
      alert("Non Business seats is mandatory, put 0 if not applicable! !");
      return false;
    }
    else if (typeof this.bCPrice == 'undefined' || !this.bCPrice || this.bCPrice == "") {
      alert("Business class price  is mandatory, put 0 if not applicable!");
      return false;
    }
    else if (typeof this.nBCPrice == 'undefined' || !this.nBCPrice || this.nBCPrice == "") {
      alert(" Non Business class price  is mandatory, put 0 if not applicable!");
      return false;
    }
    else if (typeof this.start == 'undefined' || !this.start || this.start == "") {
      alert("start is mandatory!");
      return false;
    }
    else if (typeof this.mealType == 'undefined' || !this.mealType || this.mealType == "") {
      alert("Meal type is mandatory!");
      return false;
    }
    else if (typeof this.status == 'undefined' || !this.status || this.status == "" || !(this.status == "Active" || this.status == "Blocked")) {
      alert("status is mandatory! It can be Active or Blocked");
      return false;
    }
    else
      return true;
  }


  addSchedule() {
    if (!this.Validate())
      return;
    var val = {
      FlightNumber: this.flightNo,
      From: this.from,
      To: this.to,
      Start: this.start,
      End: this.end,
      ScheduledDays: this.scheduledDays,
      BCSeats: this.bCSeats,
      NBCSeats: this.nBCSeats,
      BCPrice: this.bCPrice,
      NBCPrice: this.nBCPrice,
      Meal: this.mealType,
      Status: this.status
    };

    this.service.AddSchedule(val).subscribe(res => {
      console.log(res);
      alert("Schedule Added Successfully for Flight number: " + this.flightNo);
    });

  }

  refreshScheduleList() {
    this.service.getAirlineList().subscribe(data => {
      console.log(data);

      data.forEach((el) => {
        this.FlightNos.push(el.flightNumber);
        console.log(this.FlightNos);
      })
    });
  }

}
