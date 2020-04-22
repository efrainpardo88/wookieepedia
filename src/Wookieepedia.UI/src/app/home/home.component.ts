import { Component, OnInit } from '@angular/core';
import { faChevronDown, faImages } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  faChevronDown = faChevronDown;

  ngOnInit(): void {
  }
}

