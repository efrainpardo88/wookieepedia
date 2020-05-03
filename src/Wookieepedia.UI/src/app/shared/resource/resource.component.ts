import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Resource } from '../../models/resource';
import { CardsService } from 'src/app/services/cards.service';
import { ResourcesService } from '../../services/resources.service';

@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.scss']
})
export class ResourceComponent implements OnInit {

  @Input() resource: Resource;
  loading = false;
  Math = Math;

  constructor(
    private service: ResourcesService,
    private cards: CardsService
  ) { }

  ngOnInit(): void { }

  getResource(url: string) {
    this.loading = true;
    this.service.getResourceByUrl(url).subscribe(data => {
      data.results = this.cards.getResourceAsCard(data.results);
      data.resourceType = this.resource.resourceType;
      data.page = data.next ?
        (parseInt(data.next.split("&")[0].slice(-1)) - 1).toString() :
        (data.previous ? (parseInt(data.previous.split("&")[0].slice(-1)) - 1).toString() : "");
      this.resource = data;
      this.loading = false;
    })
  }
}
