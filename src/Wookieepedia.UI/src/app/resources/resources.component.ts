import { Component, OnInit } from '@angular/core';
import 'rxjs';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {
  public titulo: string;

  constructor() { }

  ngOnInit(): void { }
}
