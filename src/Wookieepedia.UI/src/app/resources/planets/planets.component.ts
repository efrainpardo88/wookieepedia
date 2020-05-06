import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { CardsService } from 'src/app/services/cards.service';
import { PlanetsService } from 'src/app/services/planets.service';
import { Planet } from 'src/app/models/planet';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {

  resource: Planet;
  resourceImage: string;
  loading = false;

  constructor(
    
    private route: ActivatedRoute,
    private titleService: Title,
    private service: PlanetsService,
    private cards: CardsService
    
    ) { }

  ngOnInit(): void {

    this.loading = true;
    this.route.params.subscribe(params => {
      this.service.getPlanetById(params.id).subscribe(data => {
        this.titleService.setTitle(data.title + ' | Wookieepedia');
        this.resource = this.cards.getResourceWithCards(data);
        this.loading = false;
      });
    });


  }

}
