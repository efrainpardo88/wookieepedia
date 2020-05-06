import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { FilmsService } from 'src/app/services/films.service';
import { CardsService } from 'src/app/services/cards.service';
import { Film } from '../../models/film';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {

  resource: Film;
  resourceImage: string;
  loading = false;

  constructor(
    private route: ActivatedRoute,
    private titleService: Title,
    private service: FilmsService,
    private cards: CardsService
  ) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);

    this.loading = true;
    this.route.params.subscribe(params => {
      this.service.getFilmById(params.id).subscribe(data => {
        this.titleService.setTitle(data.title + ' | Wookieepedia');
        this.resource = this.cards.getResourceWithCards(data);
        this.loading = false;
      });
    });
  }

}
