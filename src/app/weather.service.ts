import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const api_key = '8977def402734e76a64101713212901';

const url = `http://api.weatherapi.com/v1/current.json?key=${api_key}&q= `;
@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(public http: HttpClient) {}

  get_weather(city: string): Observable<any> {
    return this.http.get(`${url}+${city}`);
  }
}
