import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { VehiclesService } from 'src/app/services/vehicles.service';
import { CardsService } from 'src/app/services/cards.service';
import { Vehicle } from '../../models/vehicle';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {

  resource: Vehicle;
  resourceImage: string;
  loading = false;

  constructor(
    private route: ActivatedRoute, 
    private titleService: Title,
    private service: VehiclesService,
    private cards: CardsService
  ) { }

  ngOnInit(): void {
    this.loading = true;
    this.route.params.subscribe(params => {
      this.service.getVehicleById(params.id).subscribe(data => {
        this.titleService.setTitle(data.name + ' | Wookieepedia');
        this.resource = this.cards.getResourceWithCards(data);
        this.loading = false;
      });
    });
  }

}