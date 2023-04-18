import { Component } from '@angular/core';

@Component({
  selector: 'navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss'],
})
export class NavigationBarComponent {
  constructor() {}

  private celsiusToFahrenheit(fahrenheit: number): number {
    return Math.round(fahrenheit * (9 / 5) + 32);
  }

  private fahrenheitToCelsius(celsius: number): number {
    return Math.round((celsius - 32) * (5 / 9));
  }
}
