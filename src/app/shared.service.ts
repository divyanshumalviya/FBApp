import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl=" http://localhost:9000";
  url : string;

  constructor(private http:HttpClient) 
  {
    this.url='';
  }

  Login(val:any)
  {
    return this.http.post(this.APIUrl + '/LoginAdmin',val,{responseType: 'text'});
  }
  
  getAirlineList(): Observable<any[]> {
   
   // this.url = this.baseUrl + 'forecast?q=' + cityName + '&appid=' + this.appId + '&units=' + this.units  ;    
   //console.log(this.url);
    return this.http.get<any>(this.APIUrl + '/GetAllAirline');
     // '&units=' + this.units
  }

  AddAirline(val:any)
  {
    return this.http.post(this.APIUrl + '/AddAirline',val);
  }

  getScheduleList(): Observable<any[]> {   
     return this.http.get<any>(this.APIUrl + '/GetAllSchedule');     
   }

  getScheduleByFlightId(val:any): Observable<any[]> {   
    return this.http.get<any>(this.APIUrl + '/GetScheduleByFlightId?flightNo='+val);     
  }

  AddSchedule(val:any)
  {
    return this.http.post(this.APIUrl + '/AddSchedule',val);
  }

  UpdateSchedule(val:any,flightNo:any)
  {
    return this.http.post(this.APIUrl + '/UpdateSchedule/'+flightNo,val);
  }

  getSearchResult(start:string, end:string,fromPlace:string, to:string,totalPassanger:number): Observable<any[]> {   
    return this.http.get<any>(this.APIUrl + '/SearchFlight?start='+start+'&end='+end+
    '&fromPlace='+fromPlace+'&to='+to+'&totalPassanger='+totalPassanger);     
  }

  BookFlight(val:any,flightNo:any)
  {
    return this.http.post(this.APIUrl + '/AddBooking/'+flightNo,val);
  } 

  getBookingByPnr(pnr:any): Observable<any[]> {   
    return this.http.get<any>(this.APIUrl + '/ViewBooking?pnr='+pnr);     
  }

  getBookingHistoryByEmail(email:any): Observable<any[]> {   
    return this.http.get<any>(this.APIUrl + '/BookingHistory?email='+email);     
  }

  CancelBooking(pnr:any)
  {
    return this.http.post(this.APIUrl + '/CancelBooking/'+pnr,pnr);
  }
}
