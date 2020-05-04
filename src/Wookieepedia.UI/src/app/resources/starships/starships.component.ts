import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { StarshipsService } from 'src/app/services/starships.service';
import { CardsService } from 'src/app/services/cards.service';
import { Starship } from '../../models/starship';
@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.css']
})
export class StarshipsComponent implements OnInit {
  resource: Starship;
  resourceImage: string;
  loading = false;

  constructor(
    private route: ActivatedRoute, 
    private titleService: Title,
    private service: StarshipsService,
    private cards: CardsService
    ) { }
    
  ngOnInit(): void {
    this.loading = true;
    this.route.params.subscribe(params => {
      this.service.getStarshipById(params.id).subscribe(data => {
        this.titleService.setTitle(data.name + ' | Wookieepedia');
        this.resource = this.cards.getResourceWithCards(data);
        this.loading = false;
      });
    });
  }

}
