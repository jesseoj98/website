import { Component, OnInit } from '@angular/core';
import { Card, cards } from 'src/models/card';
import { MatDialog } from '@angular/material/dialog';
import { AboutMeComponent } from './about-me/about-me.component';
import { CodingProjectsComponent } from './coding-projects/coding-projects.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';

@Component({
  selector: 'home-page-component',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  cards: Card[];
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.cards = cards;
  }

  openModal(modalId: number): void {
    switch (modalId) {
      case 0:
        this.dialog.open(AboutMeComponent);
        break;
      case 1:
        this.dialog.open(CodingProjectsComponent);
        break;
      case 2:
        this.dialog.open(ContactInfoComponent);
        break;
      case 3:
        window.alert(
          "Resume is currently unavailable and being worked on since I'm not open to new opportunities at the moment!"
        );
        break;
      default:
        break;
    }
  }

  private celsiusToFahrenheit(fahrenheit: number): number {
    return Math.round(fahrenheit * (9 / 5) + 32);
  }

  private fahrenheitToCelsius(celsius: number): number {
    return Math.round((celsius - 32) * (5 / 9));
  }

  retrieveButtonText(cardId: number): string {
    return cardId === 3 ? 'TBA' : 'VIEW';
  }
}
