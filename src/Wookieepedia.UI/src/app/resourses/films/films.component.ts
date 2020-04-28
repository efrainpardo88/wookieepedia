import { Component, OnInit } from '@angular/core';
import { faChevronDown, faImages } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {

  constructor() { }
  faChevronDown = faChevronDown;

  ngOnInit(): void {
  }

}
