import { Component, OnInit } from '@angular/core';
import { PeopleService } from 'src/app/services/people.service';
import { CardsService } from 'src/app/services/cards.service';
import { Title } from '@angular/platform-browser';
import { People } from '../models/people';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(
    private titleService: Title,
    private service: PeopleService,
    private cards: CardsService
  ) { }

  public resource: People;

  ngOnInit(): void {
    this.titleService.setTitle('Search | Wookieepedia');

    this.service.getCharacterById("1").subscribe(data => { this.resource = this.cards.getResourceWithCards(data); console.log(this.resource) });
  }

}
