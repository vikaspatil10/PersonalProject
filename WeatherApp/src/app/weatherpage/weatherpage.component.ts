
import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { async } from 'rxjs';



@Component({
  selector: 'app-weatherpage',
  templateUrl: './weatherpage.component.html',
  styleUrl: './weatherpage.component.scss'
})
export class WeatherpageComponent {
  weatherForm: FormGroup;
  weatherData: any;
  errorMessage: any;
  loader: boolean = false;
  constructor(private fb: FormBuilder, private weatherService: WeatherService) {
    this.weatherForm = this.fb.group({
      city: ['', Validators.required],
    });
  }

  async getWeather() {
    const city = this.weatherForm.value.city;
    this.loader = true
    this.weatherService.getWeather(city).subscribe(
      (data) => {
        this.weatherData = data;
        this.errorMessage = null;
        this.loaderfuc();
      },
      (error) => {
        this.errorMessage = 'Error fetching weather data';
        this.weatherData = null;
        this.loaderfuc();
      }
    );

  }
  loaderfuc() {
    this.loader = false
    console.log('daraaa')
  }
}

