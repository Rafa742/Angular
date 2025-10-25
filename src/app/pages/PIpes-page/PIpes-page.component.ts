import { CurrencyPipe, DatePipe, DecimalPipe, JsonPipe, LowerCasePipe, PercentPipe, UpperCasePipe } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-pipes-page',
  standalone: true,
  imports: [UpperCasePipe, LowerCasePipe, JsonPipe, DatePipe,DecimalPipe,CurrencyPipe,PercentPipe],
  templateUrl: './PIpes-page.component.html',
})
export class PIpesPageComponent {

 firstName = signal("Benjamin");
 lastName = signal("CARMINE");
 
 user = signal({
  id: 1,
  firstName: this.firstName (),
  lastName: this.lastName(),
  age : 28,
  email: 'benja.carmine@gmail.com'
 });

 currentDate = signal (new Date());
 birthDate = signal (new Date(2010,5,15))

 price= signal(1234.567);
 percent= signal(0.256);
 }
