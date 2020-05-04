import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.css']
})
export class SpeciesComponent implements OnInit {

  resource: Film;
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
      this.service.getSpecieById(params.id).subscribe(data => {
        this.titleService.setTitle(data.title + ' | Wookieepedia');
        this.resource = this.cards.getResourceWithCards(data);
        this.loading = false;
      });
    });



  }

}
