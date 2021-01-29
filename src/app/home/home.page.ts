import { WeatherService } from './../weather.service';
import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/Storage';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  location_name: string;
  condition: string;
  humidity: string;
  celcius: string;
  ferhanite: string;
  wind: string;
  location: string;
  constructor(
    private weatherService: WeatherService,
    public storage: Storage
  ) {}

  ngOnInit() {
    this.storage.get('location').then((val) => {
      if (val !== null) {
        this.location = JSON.parse(val);
      } else {
        this.location = 'london';
      }
      this.weatherService.get_weather(this.location).subscribe((data) => {
        console.log(data);
        this.location_name = data.location.name;
        this.condition = data.current.condition.text;
        this.humidity = data.current.humidity;
        this.celcius = data.current.temp_c;
        this.ferhanite = data.current.temp_f;
        this.wind = data.current.wind;
        console.log(this.location_name);
      });
    });
  }
}
