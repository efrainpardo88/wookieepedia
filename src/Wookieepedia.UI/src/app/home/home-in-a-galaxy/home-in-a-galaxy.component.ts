import { Component, OnInit } from '@angular/core';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: '[app-home-in-a-galaxy]',
  templateUrl: './home-in-a-galaxy.component.html',
  styleUrls: ['./home-in-a-galaxy.component.scss']
})
export class HomeInAGalaxyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  faChevronDown = faChevronDown;
}
