import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { CardsService } from 'src/app/services/cards.service';
import { Species } from 'src/app/models/species';
import { SpeciesService } from 'src/app/services/species.service';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.css']
})
export class SpeciesComponent implements OnInit {

  resource: Species;
  resourceImage: string;
  loading = false;

  constructor(
    private route: ActivatedRoute,
    private titleService: Title,
    private service: SpeciesService,
    private cards: CardsService

  ) { }

  ngOnInit(): void {
    this.loading = true;
    this.route.params.subscribe(params => {
      this.service.getSpeciesById(params.id).subscribe(data => {
        this.titleService.setTitle(data.title + ' | Wookieepedia');
        this.resource = this.cards.getResourceWithCards(data);
        this.loading = false;
      });
    });



  }

}
