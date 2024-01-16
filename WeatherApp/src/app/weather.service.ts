import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
console.log('dervice')
@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = '72f10378e1f68fef188b9303a77b2c04';
  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

  constructor(private http: HttpClient) {}

  getWeather(city: string): Observable<any> {
    const params = {
      q: city,
      appid: this.apiKey,
      units: 'metric',  
    };

    return this.http.get(this.apiUrl, { params });
  }
}
