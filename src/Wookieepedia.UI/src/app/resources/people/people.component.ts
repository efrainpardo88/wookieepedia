import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { PeopleService } from 'src/app/services/people.service';
import { CardsService } from 'src/app/services/cards.service';
import { People } from '../../models/people';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  resource: People;
  loading = false;

  constructor(
    private route: ActivatedRoute, 
    private titleService: Title,
    private service: PeopleService,
    private cards: CardsService
  ) { }

  ngOnInit(): void {
    this.loading = true;
    this.route.params.subscribe(params => {
      this.service.getPeopleById(params.id).subscribe(data => {
        this.titleService.setTitle(data.name + ' | Wookieepedia');
        this.resource = this.cards.getResourceWithCards(data);
        this.loading = false;
      });
    });
  }
}
