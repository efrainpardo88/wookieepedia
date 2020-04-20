import { Component, OnInit } from '@angular/core';
import { faChevronDown, faImages } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  galaxi = [
    {
      id: '1',
      image: 'assets/images/InGalaxi.png',
      title: 'In Galaxy',
      button: 'Show more'
    },
  ];
  Wook = [
    {
      id: '2',
      image: 'assets/images/Wook.png',
      title: 'Wook',
      button: 'Show more'
    },
  ];

  faChevronDown = faChevronDown;

  ngOnInit(): void {
  }
}

