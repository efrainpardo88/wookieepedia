import { Component, OnInit } from '@angular/core';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: '[app-home-header]',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.scss']
})
export class HomeHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  faChevronDown = faChevronDown;

}
