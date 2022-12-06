import { Component, OnInit } from '@angular/core';
import { cards } from 'src/card';

@Component({
  selector: 'home-page-component',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  cards: unknown;

  ngOnInit() {
    this.cards = cards;
  }
}

