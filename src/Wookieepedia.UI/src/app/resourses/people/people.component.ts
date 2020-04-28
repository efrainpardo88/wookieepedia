import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  public titulo: string;
  public recurso: string;
  public valores: any;
  public data: any;
  public dato: any;

  constructor(
    private activatedRoute: ActivatedRoute, 
    private titleService: Title,
    private servicio: ServicesService
    ) {}

  ngOnInit(): void {
    
    
    this.activatedRoute.queryParams.forEach(param => this.valores = param)      
    this.recurso = this.valores.recurso;
    console.log(this.recurso)
    this.titleService.setTitle( 'People | Wookieepedia');
    this.servicio.getinfo('people',this.recurso).subscribe(datos => {this.data = datos })

  }

}
