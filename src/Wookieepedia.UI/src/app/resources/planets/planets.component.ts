import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {

  resource: planet;
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
