import { Component, OnInit } from '@angular/core';
import { Card, cards } from 'src/card';

@Component({
  selector: 'home-page-component',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  cards: Card[];

  ngOnInit() {
    this.cards = cards;
  }
}

